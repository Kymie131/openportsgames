import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const ROOT = process.cwd();
const dir = path.join(ROOT, "src", "content", "ports");
const TOKEN = execSync("gh auth token").toString().trim();
const files = fs.readdirSync(dir).filter((f) => f.endsWith(".ts") && !["index.ts", "meta.ts", "console-logos.ts"].includes(f));

const ports = [];
for (const f of files) {
  const s = fs.readFileSync(path.join(dir, f), "utf8");
  if (/status:\s*"takedown"/.test(s)) continue;
  const id = (s.match(/id:\s*"([^"]+)"/) || [])[1];
  const title = (s.match(/title:\s*"((?:[^"\\]|\\.)*)"/) || [])[1];
  const sources = [...(s.match(/sources:\s*\[([^\]]*)\]/)?.[1] ?? "").matchAll(/"(https:[^"]+)"/g)].map((m) => m[1]);
  const repo = sources.map((u) => /^https:\/\/github\.com\/([^/]+\/[^/"#]+)/.exec(u)?.[1]).find(Boolean) ?? null;
  const version = (s.match(/release:\s*\{\s*version:\s*(?:"([^"]+)"|null)/) || [])[1] ?? null;
  const verified = /verified:\s*true/.test(s);
  ports.push({ id, title, repo: repo ? repo.replace(/\.git$/, "") : null, version, verified });
}

const norm = (t) => String(t).replace(/^[^0-9]*/, "").replace(/[_-]/g, ".");
async function api(p) {
  const res = await fetch(`https://api.github.com${p}`, { headers: { Authorization: `Bearer ${TOKEN}`, "User-Agent": "openportsgames-check" } });
  if (res.status === 404) return { notFound: true };
  if (!res.ok) return { error: res.status };
  return { body: await res.json() };
}
async function latest(repo) {
  const rel = await api(`/repos/${repo}/releases/latest`);
  if (rel.body) return { tag: rel.body.tag_name, date: rel.body.published_at?.slice(0, 10) ?? null };
  const tags = await api(`/repos/${repo}/tags?per_page=1`);
  if (Array.isArray(tags.body) && tags.body.length) return { tag: tags.body[0].name, date: null };
  return null;
}

const results = [];
let i = 0;
async function worker() {
  while (i < ports.length) {
    const p = ports[i++];
    if (!p.repo) { results.push({ ...p, status: "no-github" }); continue; }
    try {
      const l = await latest(p.repo);
      if (!l) { results.push({ ...p, status: "no-release" }); continue; }
      const remote = norm(l.tag);
      if (p.version == null) {
        results.push({ ...p, status: "no-version", remote, remoteDate: l.date });
      } else if (remote && remote !== norm(p.version)) {
        results.push({ ...p, status: "stale", remote, remoteDate: l.date });
      } else {
        results.push({ ...p, status: "ok" });
      }
    } catch (e) {
      results.push({ ...p, status: "error", detail: String(e).slice(0, 60) });
    }
    if (i % 100 === 0) process.stderr.write(`.${i}`);
  }
}
await Promise.all(Array.from({ length: 12 }, worker));

const by = (s) => results.filter((r) => r.status === s);
fs.writeFileSync(path.join(process.env.USERPROFILE, "Downloads", "ports-update-check.json"), JSON.stringify(results, null, 2));
console.log(`\ntotal=${ports.length}`);
for (const s of ["ok", "stale", "no-version", "no-release", "no-github", "error"]) console.log(`${s}=${by(s).length}`);
console.log("--- stale (con versión desactualizada) ---");
for (const r of by("stale")) console.log(`${r.id} | ${r.version} -> ${r.remote} (${r.remoteDate ?? "n/a"})`);
console.log("guardado en Downloads/ports-update-check.json");
