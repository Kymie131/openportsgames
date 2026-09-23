#!/usr/bin/env node
// Checks the latest GitHub release of each catalog port against the version
// stored in content. Writes a report and exits 0. Called by CI weekly; the
// workflow opens an issue when ports are stale.
import { appendFileSync, readFileSync, writeFileSync } from "node:fs";
import { join, relative } from "node:path";

const TOKEN = process.env.GITHUB_TOKEN ?? process.env.GH_TOKEN;
const OUT_FILE = process.env.CHECK_OUTPUT ?? "catalog-check-report.md";
const STARS_FILE = process.env.STARS_OUTPUT ?? "src/content/github-stars.ts";

const catalogPath = process.env.CATALOG_JSON ?? join("out", "api", "ports.json");
const catalog = JSON.parse(readFileSync(catalogPath, "utf-8"));

function repoFromSource(url) {
  const match = /^https:\/\/github\.com\/([^/]+\/[^/]+)/.exec(url);
  return match ? match[1] : null;
}

function normalizeTag(tag) {
  return String(tag).replace(/^[^0-9]*/, "");
}

async function ghGet(path) {
  const res = await fetch(`https://api.github.com${path}`, {
    headers: {
      Authorization: TOKEN ? `Bearer ${TOKEN}` : "",
      "User-Agent": "openportsgames-catalog-check",
    },
  });
  if (!res.ok) return { ok: false, status: res.status };
  return { ok: true, body: await res.json() };
}

async function latestForRepo(repo) {
  const rel = await ghGet(`/repos/${repo}/releases/latest`);
  if (rel.ok && rel.body) {
    return { tag: rel.body.tag_name, date: rel.body.published_at?.slice(0, 10) ?? null };
  }
  const tags = await ghGet(`/repos/${repo}/tags?per_page=1`);
  if (tags.ok && tags.body?.length) {
    return { tag: tags.body[0].name, date: null };
  }
  return null;
}

async function starsForRepo(repo) {
  const repoInfo = await ghGet(`/repos/${repo}`);
  if (repoInfo.ok && repoInfo.body) {
    return repoInfo.body.stargazers_count ?? 0;
  }
  return null;
}

const rows = [];
const starsByPort = new Map();
for (const port of catalog.ports) {
  if (!port.verified || port.release?.version == null) continue;
  const repo = port.sources.map(repoFromSource).find(Boolean);
  const entry = { id: port.id, title: port.title, stored: port.release.version };
  const stars = repo ? await starsForRepo(repo) : null;
  if (stars !== null) starsByPort.set(port.id, stars);
  if (!repo) {
    rows.push({ ...entry, status: "skip", detail: "no GitHub source to compare" });
    continue;
  }
  const latest = await latestForRepo(repo);
  if (!latest) {
    rows.push({ ...entry, status: "skip", detail: `${repo}: no releases` });
    continue;
  }
  const remote = normalizeTag(latest.tag);
  if (!remote) {
    rows.push({ ...entry, status: "skip", detail: `${repo}: tag '${latest.tag}' not comparable` });
    continue;
  }
  if (remote !== String(port.release.version)) {
    rows.push({ ...entry, status: "stale", remote, remoteDate: latest.date, repo });
  } else {
    rows.push({ ...entry, status: "ok", detail: remote });
  }
}

const stale = rows.filter((row) => row.status === "stale");
const lines = [];
lines.push("# Catalog update check", "");
lines.push(`Checked ${rows.length} verified ports. ${stale.length} may be out of date.`, "");
if (stale.length) {
  lines.push(
    "## Ports possibly out of date",
    "",
    "| Port | Stored | Latest tag | Released |",
    "| --- | --- | --- | --- |",
  );
  for (const row of stale) {
    lines.push(
      `| ${row.title} (\`${row.id}\`) | ${row.stored} | ${row.remote} | ${row.remoteDate ?? "n/a"} |`,
    );
  }
  lines.push("", "Update `src/content/ports/*.ts`, bump `verifiedAt` and open a PR.");
} else {
  lines.push("All verified ports match their latest GitHub release.");
}
writeFileSync(OUT_FILE, lines.join("\n"), "utf-8");

if (starsByPort.size > 0) {
  const entries = [...starsByPort.entries()].sort(([a], [b]) => a.localeCompare(b));
  const body = [
    "export const githubStars: Record<string, number> = {",
    ...entries.map(([id, count]) => `  "${id}": ${count},`),
    "};",
    "",
  ].join("\n");
  let starsChanged = "0";
  let existing = null;
  try {
    existing = readFileSync(STARS_FILE, "utf-8");
  } catch {
    existing = null;
  }
  if (existing !== body) {
    starsChanged = "1";
    writeFileSync(STARS_FILE, body, "utf-8");
    console.log(relative(".", STARS_FILE), "updated with", entries.length, "port entries.");
  } else {
    console.log(relative(".", STARS_FILE), "unchanged.");
  }
  if (process.env.GITHUB_OUTPUT) {
    appendFileSync(process.env.GITHUB_OUTPUT, `stars_changed=${starsChanged}\n`);
  }
}

if (process.env.GITHUB_OUTPUT) {
  appendFileSync(process.env.GITHUB_OUTPUT, `stale=${stale.length > 0 ? 1 : 0}\n`);
}
console.log(lines.join("\n"));
