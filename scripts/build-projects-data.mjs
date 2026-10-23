// Builds public/data/projects.json: a compact, factual index of decompilation,
// recompilation, source-port, engine-remake and browser-port projects.
//
// Source: the auto-refreshed dataset from aigamedevs/awesome-decomp-games,
// filtered to reachable, non-archived projects and deduplicated against the
// official sources already present in src/content/ports.
//
// Usage:
//   node scripts/build-projects-data.mjs [path-to-games.json]
// Without a path it downloads the dataset to the OS temp directory.
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const ROOT = process.cwd();
const PORTS_DIR = join(ROOT, "src/content/ports");
const OUT = join(ROOT, "public/data/projects.json");
const SOURCE_URL =
  "https://raw.githubusercontent.com/aigamedevs/awesome-decomp-games/HEAD/data/games.json";

const ALLOWED_TYPES = new Set([
  "decompilation",
  "static-recomp",
  "source-port",
  "engine-remake",
  "browser-port",
]);

const TYPE_LABEL = {
  decompilation: "Decompilación",
  "static-recomp": "Recompilación",
  "source-port": "Source port",
  "engine-remake": "Recreación de motor",
  "browser-port": "Port de navegador",
};

function normalizeUrl(value) {
  try {
    const url = new URL(value);
    const pathname = url.pathname.replace(/\/+$/, "");
    return `${url.host.toLowerCase()}${pathname}`;
  } catch {
    return "";
  }
}

function slug(value) {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
}

function stripParens(title) {
  const cut = title.replace(/\s*\([^)]*\)\s*$/, "").trim();
  return (cut.length >= 2 ? cut : title).slice(0, 80);
}

function dateOnly(value) {
  return typeof value === "string" && /^\d{4}-\d{2}-\d{2}/.test(value)
    ? value.slice(0, 10)
    : null;
}

async function loadDataset() {
  const explicit = process.argv[2];
  if (explicit) return JSON.parse(readFileSync(explicit, "utf8"));
  const cached = join(tmpdir(), "opg-awesome-games.json");
  if (existsSync(cached)) return JSON.parse(readFileSync(cached, "utf8"));
  const response = await fetch(SOURCE_URL);
  if (!response.ok) throw new Error(`dataset download failed: ${response.status}`);
  const text = await response.text();
  writeFileSync(cached, text);
  return JSON.parse(text);
}

function catalogSources() {
  const sources = new Set();
  for (const file of readdirSync(PORTS_DIR)) {
    if (!file.endsWith(".ts")) continue;
    const text = readFileSync(join(PORTS_DIR, file), "utf8");
    for (const match of text.matchAll(/sources:\s*\[([\s\S]*?)\]/g)) {
      for (const url of match[1].matchAll(/"(https:\/\/[^"]+)"/g)) {
        const key = normalizeUrl(url[1]);
        if (key) sources.add(key);
      }
    }
  }
  return sources;
}

const dataset = await loadDataset();
const rows = Array.isArray(dataset.games) ? dataset.games : dataset;
const known = catalogSources();
const seen = new Set();
const out = [];

for (const row of rows) {
  if (!row || typeof row !== "object") continue;
  if (!ALLOWED_TYPES.has(row.type)) continue;
  if (row.archived || row.inactive || row.old) continue;
  if (row.link_ok === false) continue;
  if (typeof row.title !== "string" || typeof row.url !== "string") continue;
  if (!/^https:\/\//.test(row.url)) continue;

  const urlKey = normalizeUrl(row.url);
  if (!urlKey || known.has(urlKey) || seen.has(urlKey)) continue;
  seen.add(urlKey);

  const repo = typeof row.repo === "string" ? row.repo : "";
  const text = `${row.description ?? ""} ${row.note ?? ""}`;
  const targets = [];
  if (row.browser_playable || row.type === "browser-port") targets.push("web");
  if (/\bandroid\b/i.test(text) || /\bandroid\b/i.test(row.platform ?? "")) targets.push("android");
  if (row.type !== "browser-port" || !targets.includes("web")) targets.push("pc");
  if (targets.length === 0) targets.push("pc");

  const title = row.title.trim().slice(0, 80);
  const description = (row.description || row.note || "").trim().slice(0, 220);

  out.push({
    id: slug(row.id || title) || urlKey,
    title,
    game: stripParens(title),
    type: row.type,
    typeLabel: TYPE_LABEL[row.type] ?? row.type,
    targets: [...new Set(targets)],
    original: (row.platform ?? "").slice(0, 60),
    url: row.url,
    repo,
    owner: repo.includes("/") ? repo.split("/")[0] : "",
    description,
    release: typeof row.release === "string" ? row.release.slice(0, 40) : null,
    releaseDate: dateOnly(row.release_date),
    updated: dateOnly(row.last_commit),
    license: typeof row.license === "string" ? row.license.slice(0, 40) : null,
    stars: Number.isFinite(row.stars) ? row.stars : 0,
    browser: Boolean(row.browser_playable),
  });
}

out.sort((a, b) => {
  if (a.browser !== b.browser) return a.browser ? -1 : 1;
  if (b.stars !== a.stars) return b.stars - a.stars;
  return String(b.updated).localeCompare(String(a.updated));
});

mkdirSync(join(ROOT, "public/data"), { recursive: true });
writeFileSync(OUT, `${JSON.stringify(out)}\n`);
console.log(`wrote ${out.length} projects to public/data/projects.json`);
