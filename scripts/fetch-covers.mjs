#!/usr/bin/env node
// Resolves cover art for catalog entries that have no image at all.
//
// Source order:
//   1. Wikipedia pageimages for the exact game title (batched).
//   2. Wikipedia search, then pageimages for the best title match.
//   3. Steam store search (PC games), using the wide header image.
//
// Every candidate must pass two gates before it is written:
//   - a strict title/description match (the page must be about a video game and
//     its title must equal, or be a parenthetical variant of, the game name);
//   - a live image check (200/206 and an image/* content type).
//
// Dry run by default. Pass --apply to write the `cover` blocks.
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const DIR = process.env.PORTS_DIR ?? "src/content/ports";
const OUT = process.env.COVER_REPORT ?? "catalog-covers-report.json";
const APPLY = process.argv.includes("--apply");
const SKIP = new Set(["index.ts", "meta.ts"]);
const UA = "OpenPortsGames/1.0 (https://openportsgames.com; catalog image resolver)";
const BATCH = 40;
const CONCURRENCY = 2;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function norm(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function tokens(value) {
  return new Set(norm(value).split(" ").filter(Boolean));
}

function similarity(a, b) {
  const A = tokens(a);
  const B = tokens(b);
  if (A.size === 0 || B.size === 0) return 0;
  let shared = 0;
  for (const token of A) if (B.has(token)) shared += 1;
  return shared / Math.max(A.size, B.size);
}

function isVideoGamePage(description) {
  if (!description) return false;
  if (/(series|franchise|disambiguation|topics referred)/i.test(description)) return false;
  return /(video game|computer game|arcade game|vehicular combat game)/i.test(description);
}

function titleMatches(game, pageTitle, description) {
  if (/disambiguation/i.test(pageTitle)) return false;
  if (!isVideoGamePage(description)) return false;
  const g = norm(game);
  const p = norm(pageTitle);
  if (g === "" || p === "") return false;
  if (p === g) return true;
  const base = p.replace(/\s*\([^)]*\)\s*$/, "").trim();
  if (base === g) return true;
  const gameBase = g.split(":")[0].trim();
  if (gameBase.length >= 4 && base === gameBase) return true;
  return similarity(game, base) >= 0.85 && (base.startsWith(g) || g.startsWith(base));
}

function normalizeUrl(value) {
  try {
    const url = new URL(value);
    if (url.host !== "upload.wikimedia.org" && url.host !== "thumb.wikimedia.org") return null;
    if (/(logo|wordmark|icon|symbol)/i.test(url.pathname) || /\.svg$/i.test(url.pathname)) return null;
    url.search = "";
    return url.toString();
  } catch {
    return null;
  }
}

async function fetchJson(url, tries = 3) {
  for (let attempt = 0; attempt < tries; attempt += 1) {
    try {
      const res = await fetch(url, { headers: { "User-Agent": UA, Accept: "application/json" } });
      if (res.status === 429) {
        await sleep(1500 * (attempt + 1));
        continue;
      }
      if (!res.ok) return null;
      return await res.json();
    } catch {
      await sleep(800 * (attempt + 1));
    }
  }
  return null;
}

async function imageOk(url) {
  for (let attempt = 0; attempt < 4; attempt += 1) {
    try {
      const res = await fetch(url, {
        method: "GET",
        headers: { "User-Agent": UA, Range: "bytes=0-0", Accept: "image/*" },
        redirect: "follow",
        signal: AbortSignal.timeout(20000),
      });
      const type = res.headers.get("content-type") ?? "";
      if (res.status === 429 || res.status === 503) {
        await sleep(2000 * (attempt + 1));
        continue;
      }
      return (
        (res.status === 200 || res.status === 206) && /^image\/(jpeg|png|webp|gif)/i.test(type)
      );
    } catch {
      await sleep(1000 * (attempt + 1));
    }
  }
  return false;
}

async function mapLimit(items, limit, worker) {
  const out = new Array(items.length);
  let cursor = 0;
  async function run() {
    while (cursor < items.length) {
      const index = cursor;
      cursor += 1;
      out[index] = await worker(items[index], index);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, run));
  return out;
}

/** Wikipedia pageimages for a batch of titles. */
async function pageImages(titles) {
  const params = new URLSearchParams({
    action: "query",
    format: "json",
    formatversion: "2",
    prop: "pageimages|description",
    piprop: "thumbnail",
    pithumbsize: "640",
    pilicense: "any",
    redirects: "1",
    titles: titles.join("|"),
  });
  const data = await fetchJson(`https://en.wikipedia.org/w/api.php?${params}`);
  if (!data?.query) return { byTitle: new Map(), finalTitle: () => null };

  const rename = new Map();
  for (const item of data.query.normalized ?? []) rename.set(item.from, item.to);
  for (const item of data.query.redirects ?? []) rename.set(item.from, item.to);
  const finalTitle = (input) => {
    let current = input;
    for (let i = 0; i < 4; i += 1) {
      const next = rename.get(current);
      if (!next || next === current) break;
      current = next;
    }
    return current;
  };

  const byTitle = new Map();
  for (const page of data.query.pages ?? []) {
    if (page.missing) continue;
    byTitle.set(page.title, {
      title: page.title,
      description: page.description ?? "",
      image: page.thumbnail?.source ?? null,
    });
  }
  return { byTitle, finalTitle };
}

async function wikipediaSearch(game) {
  const params = new URLSearchParams({
    action: "query",
    format: "json",
    formatversion: "2",
    list: "search",
    srsearch: `"${game}" video game`,
    srlimit: "5",
  });
  const data = await fetchJson(`https://en.wikipedia.org/w/api.php?${params}`);
  return (data?.query?.search ?? []).map((item) => item.title);
}

async function steamSearch(game) {
  const params = new URLSearchParams({ term: game, l: "english", cc: "us" });
  const data = await fetchJson(`https://store.steampowered.com/api/storesearch/?${params}`);
  for (const item of data?.items ?? []) {
    if (norm(game).length < 6) continue;
    if (norm(game) !== norm(item.name)) continue;
    return {
      title: item.name,
      image: `https://cdn.cloudflare.steamstatic.com/steam/apps/${item.id}/header.jpg`,
      credit: "Steam",
    };
  }
  return null;
}

const files = readdirSync(DIR).filter((file) => file.endsWith(".ts") && !SKIP.has(file));
const entries = [];
for (const file of files) {
  const src = readFileSync(join(DIR, file), "utf8");
  if (/cover:\s*\{/.test(src)) continue;
  if (/screenshots:\s*\[/.test(src)) continue;
  const game = src.match(/\bgame:\s*"((?:[^"\\]|\\.)*)"/)?.[1] ?? "";
  const id = src.match(/\bid:\s*"([^"]+)"/)?.[1] ?? file.replace(/\.ts$/, "");
  const kind = src.match(/\bkind:\s*"([^"]+)"/)?.[1] ?? "game";
  if (kind !== "game") continue;
  if (!game || /^(unknown|other)$/i.test(game)) continue;
  if (/^(PlayStation|Nintendo|Xbox|Sega)\b/i.test(game)) continue;
  entries.push({ file, id, game });
}

console.log(`Candidates: ${entries.length}`);

const resolved = new Map();
const unresolved = [];

// Phase 1: direct pageimages in batches.
for (let start = 0; start < entries.length; start += BATCH) {
  const batch = entries.slice(start, start + BATCH);
  const { byTitle, finalTitle } = await pageImages(batch.map((entry) => entry.game));
  for (const entry of batch) {
    const page = byTitle.get(finalTitle(entry.game));
    if (!page || !page.image) continue;
    if (!titleMatches(entry.game, page.title, page.description)) continue;
    const image = normalizeUrl(page.image);
    if (image) resolved.set(entry.id, { ...entry, image, credit: "Wikipedia", matched: page.title });
  }
  console.log(`Wikipedia batch ${start + batch.length}/${entries.length} â†’ ${resolved.size} candidates`);
  await sleep(400);
}

// Phase 2: Wikipedia search for the rest.
for (const entry of entries) {
  if (resolved.has(entry.id)) continue;
  const titles = await wikipediaSearch(entry.game);
  if (titles.length === 0) continue;
  const { byTitle } = await pageImages(titles.slice(0, 5));
  for (const title of titles.slice(0, 5)) {
    const page = byTitle.get(title);
    if (!page || !page.image) continue;
    if (!titleMatches(entry.game, page.title, page.description)) continue;
    const image = normalizeUrl(page.image);
    if (image) {
      resolved.set(entry.id, { ...entry, image, credit: "Wikipedia", matched: page.title });
      break;
    }
  }
  await sleep(350);
}
console.log(`After Wikipedia search: ${resolved.size}/${entries.length}`);

// Phase 3: Steam fallback.
for (const entry of entries) {
  if (resolved.has(entry.id)) continue;
  const steam = await steamSearch(entry.game);
  if (steam) resolved.set(entry.id, { ...entry, ...steam, matched: steam.title });
  await sleep(500);
}

for (const entry of entries) if (!resolved.has(entry.id)) unresolved.push(entry);
console.log(`Resolved: ${resolved.size} Â· Unresolved: ${unresolved.length}`);

// Validate every URL before writing anything.
const list = [...resolved.values()];
const checks = await mapLimit(list, CONCURRENCY, async (item) => ({
  ...item,
  ok: await imageOk(item.image),
}));
const valid = checks.filter((item) => item.ok);
const invalid = checks.filter((item) => !item.ok);
console.log(`Valid images: ${valid.length} Â· Invalid: ${invalid.length}`);

writeFileSync(
  OUT,
  JSON.stringify(
    {
      generatedAt: new Date().toISOString(),
      candidates: entries.length,
      resolved: valid.map(({ file, id, game, image, credit, matched }) => ({
        file,
        id,
        game,
        image,
        credit,
        matched,
      })),
      unresolved: unresolved.map(({ file, id, game }) => ({ file, id, game })),
      invalid: invalid.map(({ file, id, game, image }) => ({ file, id, game, image })),
    },
    null,
    2,
  ),
);
console.log(`Report: ${OUT}`);

if (APPLY) {
  let written = 0;
  for (const item of valid) {
    const file = join(DIR, item.file);
    let src = readFileSync(file, "utf8");
    if (/cover:\s*\{/.test(src)) continue;
    const alt = `${item.game} (box art)`.replace(/"/g, '\\"');
    const block = `  cover: {\n    src: "${item.image}",\n    alt: "${alt}",\n    credit: "${item.credit}",\n  },\n`;
    const anchor = src.match(/\n  notes(Es)?:/);
    if (anchor) {
      src = src.slice(0, anchor.index + 1) + block + src.slice(anchor.index + 1);
    } else {
      const end = src.lastIndexOf("\n};");
      src = src.slice(0, end) + "\n" + block.replace(/\n$/, "") + src.slice(end);
    }
    writeFileSync(file, src, "utf8");
    written += 1;
  }
  console.log(`Applied covers: ${written}`);
}


