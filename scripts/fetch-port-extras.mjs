#!/usr/bin/env node
// Builds the per-port release history in src/content/port-extras/releases.json
// from GitHub releases. Runs in batches so an unauthenticated run stays inside
// the API rate limit:
//
//   node scripts/fetch-port-extras.mjs --limit 35
//   node scripts/fetch-port-extras.mjs --limit 35 --offset 35
//
// Set GITHUB_TOKEN (or GH_TOKEN) for a higher limit. Existing entries for ids
// that are not part of the batch are kept, so batches can be appended.
import { readFileSync, writeFileSync } from "node:fs";
import { join, relative } from "node:path";

const args = process.argv.slice(2);
const flag = (name, fallback) => {
  const index = args.indexOf(`--${name}`);
  return index >= 0 && args[index + 1] ? args[index + 1] : fallback;
};

const CATALOG = flag("catalog", process.env.CATALOG_JSON ?? join("out", "api", "ports.json"));
const OUTPUT = flag("output", join("src", "content", "port-extras", "releases.json"));
const LIMIT = Number(flag("limit", "35"));
const OFFSET = Number(flag("offset", "0"));
const CONCURRENCY = Number(flag("concurrency", "3"));
const ONLY = flag("only", "")
  .split(",")
  .map((id) => id.trim())
  .filter(Boolean);
const MAX_RELEASES = Number(flag("max-releases", "12"));
const TOKEN = flag("token", process.env.GITHUB_TOKEN ?? process.env.GH_TOKEN ?? "");

const VERSION_RE = /^\d+\.\d+(\.\d+)?([.-][0-9A-Za-z]+)*$/;

function normalizeVersion(tag) {
  const stripped = String(tag ?? "")
    .trim()
    .replace(/^[^0-9]*/, "");
  return VERSION_RE.test(stripped) ? stripped : null;
}

function repoFromSource(url) {
  const match = /^https:\/\/github\.com\/([^/]+\/[^/#?]+)/.exec(url);
  return match ? match[1].replace(/\.git$/, "") : null;
}

const SKIP_LINE =
  /^(full changelog|what'?s changed|contributors|new contributors|changes|assets|checksums?)\b/i;

function cleanLine(line) {
  return line
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/<[^>]+>/g, "")
    .replace(/\*\*|__|`/g, "")
    .replace(/^\s*[-*]\s+/, "")
    .replace(/\s+/g, " ")
    .trim();
}

function summarize(body) {
  if (!body) return undefined;
  for (const raw of body.split(/\r?\n/)) {
    const line = cleanLine(raw);
    if (line.length < 8 || line.length > 160) continue;
    if (SKIP_LINE.test(line) || /^https?:\/\//.test(line)) continue;
    return line.slice(0, 160);
  }
  return undefined;
}

function toRelease(release) {
  const version = normalizeVersion(release.tag_name ?? release.name);
  const date = String(release.published_at ?? "").slice(0, 10);
  if (!version || !/^\d{4}-\d{2}-\d{2}$/.test(date) || release.draft) return null;

  return {
    version,
    date,
    ...(summarize(release.body) ? { notes: summarize(release.body) } : {}),
    ...(release.html_url ? { url: release.html_url } : {}),
  };
}

const catalog = JSON.parse(readFileSync(CATALOG, "utf-8"));
const repos = new Map();

for (const port of catalog.ports) {
  const repo = (port.sources ?? []).map(repoFromSource).find(Boolean);
  if (!repo) continue;
  const entry = repos.get(repo) ?? { repo, ids: [], date: port.release?.date ?? "" };
  entry.ids.push(port.id);
  if ((port.release?.date ?? "") > entry.date) entry.date = port.release.date;
  repos.set(repo, entry);
}

const selected = [...repos.values()]
  .filter((entry) => ONLY.length === 0 || entry.ids.some((id) => ONLY.includes(id)))
  .sort((a, b) => b.date.localeCompare(a.date) || a.repo.localeCompare(b.repo))
  .slice(OFFSET, OFFSET + (ONLY.length > 0 ? ONLY.length : LIMIT));

let existing = {};
try {
  existing = JSON.parse(readFileSync(OUTPUT, "utf-8"));
} catch {
  existing = {};
}

let rateRemaining = null;
let stopped = false;

async function ghGet(path) {
  const res = await fetch(`https://api.github.com${path}`, {
    headers: {
      ...(TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {}),
      Accept: "application/vnd.github+json",
      "User-Agent": "openportsgames-extras",
    },
  });
  rateRemaining = res.headers.get("x-ratelimit-remaining") ?? rateRemaining;
  if (res.status === 403 || res.status === 429) {
    stopped = true;
    return null;
  }
  if (!res.ok) return [];
  return res.json();
}

async function fetchRepo(entry) {
  const releases = await ghGet(`/repos/${entry.repo}/releases?per_page=${MAX_RELEASES}`);
  if (!Array.isArray(releases)) return;

  const history = releases.map(toRelease).filter(Boolean);
  if (history.length < 1) return;

  for (const id of entry.ids) {
    existing[id] = { ...(existing[id] ?? {}), releases: history };
  }
  console.log(`${entry.repo}: ${history.length} releases -> ${entry.ids.length} port(s)`);
}

const queue = [...selected];
await Promise.all(
  Array.from({ length: CONCURRENCY }, async () => {
    while (queue.length > 0 && !stopped) {
      const entry = queue.shift();
      try {
        await fetchRepo(entry);
      } catch (error) {
        console.warn(`${entry.repo}: ${error.message}`);
      }
    }
  }),
);

const sorted = Object.fromEntries(Object.entries(existing).sort(([a], [b]) => a.localeCompare(b)));
writeFileSync(OUTPUT, `${JSON.stringify(sorted, null, 2)}\n`, "utf-8");

console.log(
  `\n${relative(".", OUTPUT)}: ${Object.keys(sorted).length} ports with extras. ` +
    `Rate limit remaining: ${rateRemaining ?? "unknown"}${stopped ? " (stopped early)" : ""}.`,
);
console.log(`Next batch: --offset ${OFFSET + LIMIT}`);
