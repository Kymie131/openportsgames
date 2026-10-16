#!/usr/bin/env node
// Probes every image URL (cover + screenshots) in the catalog and reports
// broken links, redirects, rate-limited hosts and hosts that block hotlinking.
// Report only: it never edits catalog data.
//
// - HEAD first; on 403/405/501 it retries with a ranged GET (Range: bytes=0-0).
// - On 429 (rate limit) it waits and retries once; if still throttled the URL is
//   reported as "rate-limited", never as broken.
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const dir = process.env.PORTS_DIR ?? "src/content/ports";
const OUT_FILE = process.env.IMAGE_REPORT ?? "catalog-images-report.md";
const CONCURRENCY = Number(process.env.IMAGE_CONCURRENCY ?? 4);
const TIMEOUT_MS = Number(process.env.IMAGE_TIMEOUT_MS ?? 20000);
const RATE_LIMIT_WAIT_MS = Number(process.env.IMAGE_RATE_WAIT_MS ?? 2000);

const WIKIMEDIA_HOSTS = new Set(["upload.wikimedia.org", "thumb.wikimedia.org"]);

const skip = new Set(["index.ts", "meta.ts", "console-logos.ts"]);
const files = readdirSync(dir).filter((f) => f.endsWith(".ts") && !skip.has(f));

const byUrl = new Map();
const hostByUrl = new Map();
const hostsByFile = new Map();

function hostOf(url) {
  try {
    return new URL(url).host;
  } catch {
    return "?";
  }
}
function add(url, file) {
  if (!byUrl.has(url)) byUrl.set(url, new Set());
  byUrl.get(url).add(file);
  hostByUrl.set(url, hostOf(url));
  if (!hostsByFile.has(file)) hostsByFile.set(file, new Set());
  hostsByFile.get(file).add(hostOf(url));
}

for (const file of files) {
  const text = readFileSync(join(dir, file), "utf8");
  const cover = /cover:\s*\{[\s\S]{0,200}?src:\s*"(https?:\/\/[^"]+)"/.exec(text);
  if (cover) add(cover[1], file);
  const shotIdx = text.indexOf("screenshots:");
  if (shotIdx >= 0) {
    for (const m of text.slice(shotIdx).matchAll(/src:\s*"(https?:\/\/[^"]+)"/g)) add(m[1], file);
  }
}

const entries = [...byUrl.entries()];
console.log(`Probing ${entries.length} unique image URLs...`);

const HEADERS = { "User-Agent": "Mozilla/5.0 openportsgames-image-check", Accept: "image/*" };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function request(url, method, extraHeaders = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      method,
      redirect: "manual",
      headers: { ...HEADERS, ...extraHeaders },
      signal: controller.signal,
    });
    return {
      status: res.status,
      location: res.headers.get("location") ?? null,
      type: res.headers.get("content-type") ?? "",
    };
  } catch (error) {
    return { status: -1, error: error.name === "AbortError" ? "timeout" : error.message };
  } finally {
    clearTimeout(timer);
  }
}

async function probe(url) {
  let res = await request(url, "HEAD");
  if ([403, 405, 501].includes(res.status)) {
    res = await request(url, "GET", { Range: "bytes=0-0" });
  }
  if (res.status === 429) {
    await sleep(RATE_LIMIT_WAIT_MS);
    const retry = await request(url, "GET", { Range: "bytes=0-0" });
    if (retry.status !== 429) return retry;
    return { ...retry, rateLimited: true };
  }
  return res;
}

const rows = [];
let index = 0;
async function worker() {
  while (index < entries.length) {
    const [url] = entries[index++];
    const result = await probe(url);
    rows.push({ url, host: hostByUrl.get(url) ?? "?", files: [...byUrl.get(url)], ...result });
  }
}
await Promise.all(Array.from({ length: CONCURRENCY }, worker));

const isBroken = (r) =>
  !r.rateLimited && (r.status === -1 || (r.status >= 400 && r.status !== 403 && r.status !== 416));
const isBlocked = (r) => r.status === 403;
const isRedirect = (r) => [301, 302, 303, 307, 308].includes(r.status);
const isRateLimited = (r) => Boolean(r.rateLimited) || r.status === 429;
const isOk = (r) => [200, 206, 304, 416].includes(r.status);

const broken = rows.filter(isBroken);
const blocked = rows.filter(isBlocked);
const redirects = rows.filter(isRedirect);
const rateLimited = rows.filter(isRateLimited);
const ok = rows.filter(isOk);

const brokenUrls = new Set(broken.map((r) => r.url));
const wikimediaOnlyFiles = files.filter((file) => {
  const hosts = hostsByFile.get(file) ?? new Set();
  return hosts.size > 0 && [...hosts].every((h) => WIKIMEDIA_HOSTS.has(h));
});
const brokenWikimediaOnly = wikimediaOnlyFiles.filter((file) =>
  [...byUrl.keys()].some((url) => brokenUrls.has(url) && byUrl.get(url).has(file)),
);

const lines = [];
lines.push("# Image link check", "");
lines.push(`Probed ${rows.length} unique image URLs across ${files.length} entries.`, "");
lines.push(`- OK: ${ok.length}`);
lines.push(`- Broken (real 4xx/5xx/timeout): ${broken.length}`);
lines.push(`- Blocked hotlink (403): ${blocked.length}`);
lines.push(`- Rate-limited (429, inconclusive): ${rateLimited.length}`);
lines.push(`- Redirects: ${redirects.length}`);
lines.push(`- Wikimedia-only entries: ${wikimediaOnlyFiles.length}`);
lines.push(`- Wikimedia-only entries with a broken image: ${brokenWikimediaOnly.length}`);

const section = (title, list) => {
  if (list.length === 0) return;
  lines.push(
    "",
    `## ${title}`,
    "",
    "| Status | Host | URL | Fichas |",
    "| --- | --- | --- | --- |",
  );
  for (const row of list) {
    lines.push(
      `| ${row.status}${row.error ? ` (${row.error})` : ""} | ${row.host} | ${row.url} | ${row.files.length} |`,
    );
  }
};
section("Broken", broken);
section("Blocked hotlink (403)", blocked);
section("Rate-limited (429)", rateLimited);
section("Redirects", redirects);

if (brokenWikimediaOnly.length > 0) {
  lines.push("", "## Wikimedia-only entries with a broken image", "");
  for (const file of brokenWikimediaOnly) {
    const url = [...byUrl.keys()].find((u) => brokenUrls.has(u) && byUrl.get(u).has(file));
    lines.push(`- ${file.replace(/\.ts$/, "")} — ${url}`);
  }
}

writeFileSync(OUT_FILE, lines.join("\n"), "utf-8");
console.log(lines.join("\n"));
console.log(`\nReport written to ${OUT_FILE}`);
