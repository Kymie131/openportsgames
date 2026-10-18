import fs from "node:fs";
import path from "node:path";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);
const repoRoot = process.cwd();
const portsDir = path.join(repoRoot, "src/content/ports");

const ports = new Map();
for (const file of fs.readdirSync(portsDir)) {
  if (!file.endsWith(".ts") || file === "index.ts" || file === "meta.ts") continue;
  const text = fs.readFileSync(path.join(portsDir, file), "utf8");
  const id = /id: "([^"]+)"/.exec(text)?.[1];
  if (!id) continue;
  const repos = [
    ...text.matchAll(/https:\/\/github\.com\/([A-Za-z0-9_.-]+)\/([A-Za-z0-9_.-]+)/g),
  ]
    .map((m) => `${m[1]}/${m[2]}`.replace(/\.git$/, ""))
    .filter((repo) => !repo.startsWith("user-attachments/") && !repo.endsWith("."));
  ports.set(id, { repos: [...new Set(repos)] });
}

const uniqueRepos = [...new Set([...ports.values()].flatMap((p) => p.repos))].sort();
console.log(`ports=${ports.size} unique repos=${uniqueRepos.length}`);

async function gh(args) {
  const { stdout } = await execFileAsync("gh", args, { maxBuffer: 8 * 1024 * 1024 });
  return stdout;
}

async function lookup(repo) {
  try {
    const info = JSON.parse(await gh(["api", `repos/${repo}`]));
    return {
      repo,
      ok: true,
      full_name: info.full_name,
      archived: info.archived,
      disabled: info.disabled,
      license: info.license?.spdx_id ?? null,
      pushed_at: info.pushed_at,
      stars: info.stargazers_count,
    };
  } catch (error) {
    return { repo, ok: false, error: String(error.stderr || error.message).replace(/\s+/g, " ").slice(0, 120) };
  }
}

async function pool(items, size, worker) {
  const out = new Array(items.length);
  let index = 0;
  await Promise.all(
    Array.from({ length: size }, async () => {
      while (index < items.length) {
        const current = index++;
        out[current] = await worker(items[current]);
      }
    }),
  );
  return out;
}

const results = await pool(uniqueRepos, 8, lookup);
const byRepo = new Map(results.map((entry) => [entry.repo.toLowerCase(), entry]));

const findings = { not_found: [], renamed: [], archived: [], disabled: [] };
const YEAR = 365 * 24 * 60 * 60 * 1000;
const now = Date.now();
const stale = [];

for (const [id, port] of ports) {
  for (const repo of port.repos) {
    const info = byRepo.get(repo.toLowerCase());
    if (!info) continue;
    if (!info.ok) {
      findings.not_found.push({ id, repo, error: info.error });
      continue;
    }
    if (info.full_name.toLowerCase() !== repo.toLowerCase()) {
      findings.renamed.push({ id, repo, actual: info.full_name });
    }
    if (info.archived) findings.archived.push({ id, repo, pushed_at: info.pushed_at });
    if (info.disabled) findings.disabled.push({ id, repo });
    if (info.pushed_at && now - Date.parse(info.pushed_at) > YEAR) {
      stale.push({ id, repo, pushed_at: info.pushed_at, stars: info.stars });
    }
  }
}

for (const [key, list] of Object.entries(findings)) {
  console.log(`\n## ${key} (${list.length})`);
  for (const row of list) console.log(`- ${row.id}: ${row.repo} ${row.actual ?? row.error ?? row.pushed_at ?? ""}`);
}
console.log(`\n## stale (${stale.length})`);
for (const row of stale.sort((a, b) => a.pushed_at.localeCompare(b.pushed_at))) {
  console.log(`- ${row.id}: ${row.repo} (${row.pushed_at.slice(0, 10)}, ${row.stars}*)`);
}
