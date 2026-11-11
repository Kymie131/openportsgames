#!/usr/bin/env node
// Finds YouTube videos for the ports listed in scripts/port-video-queries.json
// and writes validated entries to src/content/port-extras/videos.json.
//
// A candidate is only stored when YouTube's oEmbed endpoint confirms it exists
// and its title matches one of the `must` tokens, so the entry never points at
// a missing or clearly unrelated video. Titles with emulator tutorials or
// unrelated shorts are rejected.
//
//   node scripts/fetch-port-videos.mjs
//   node scripts/fetch-port-videos.mjs --per-port 2
import { readFileSync, writeFileSync } from "node:fs";
import { join, relative } from "node:path";

const args = process.argv.slice(2);
const flag = (name, fallback) => {
  const index = args.indexOf(`--${name}`);
  return index >= 0 && args[index + 1] ? args[index + 1] : fallback;
};

const QUERIES = flag("queries", join("scripts", "port-video-queries.json"));
const OUTPUT = flag("output", join("src", "content", "port-extras", "videos.json"));
const PER_PORT = Number(flag("per-port", "2"));
const FORCE = args.includes("--force");
const HEADERS = {
  "user-agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122 Safari/537.36",
  "accept-language": "en-US,en;q=0.9",
};

const REJECT = ["emulator", "emulador", "dolphin", "leak", "#shorts", "gameplay walkthrough part"];
const BONUS = ["recomp", "recompiled", "native", "install", "setup", "pc port", "port nativo"];

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function get(url, options = {}, attempts = 3) {
  for (let attempt = 0; attempt < attempts; attempt += 1) {
    try {
      return await fetch(url, options);
    } catch (error) {
      if (attempt === attempts - 1) throw error;
      await sleep(1000 * (attempt + 1));
    }
  }
  return null;
}

const candidates = JSON.parse(readFileSync(QUERIES, "utf-8"));

let existing = {};
try {
  existing = JSON.parse(readFileSync(OUTPUT, "utf-8"));
} catch {
  existing = {};
}

async function videoIds(query) {
  const res = await get(
    `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}&hl=en`,
    { headers: HEADERS },
  );
  if (!res?.ok) return [];
  const html = await res.text();
  const ids = [...html.matchAll(/"videoId":"([\w-]{11})"/g)].map((match) => match[1]);
  return [...new Set(ids)].slice(0, 10);
}

async function oembed(id) {
  const res = await get(
    `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`,
  );
  if (!res?.ok) return null;
  return res.json();
}

const used = new Set(
  Object.values(existing).flatMap((extra) => (extra.videos ?? []).map((video) => video.url)),
);

function score(title, candidate) {
  const lower = title.toLowerCase();
  if (candidate.must.some((token) => !lower.includes(token.toLowerCase()))) return -1;
  if (REJECT.some((token) => lower.includes(token))) return -1;
  if ((candidate.exclude ?? []).some((token) => lower.includes(token.toLowerCase()))) return -1;

  const base = candidate.must.filter((token) => lower.includes(token.toLowerCase())).length * 2;
  const bonus = BONUS.filter((token) => lower.includes(token)).length;
  return base + bonus;
}

for (const candidate of candidates) {
  if (!FORCE && existing[candidate.portId]?.videos?.length) continue;

  let ids = [];
  try {
    ids = await videoIds(candidate.query);
  } catch (error) {
    console.warn(`${candidate.portId}: search failed (${error.message})`);
    continue;
  }

  const found = [];
  for (const id of ids) {
    const url = `https://www.youtube.com/watch?v=${id}`;
    if (used.has(url)) continue;

    const data = await oembed(id);
    if (!data?.title) continue;

    const value = score(data.title, candidate);
    if (value < 0) continue;

    found.push({
      value,
      video: {
        url,
        title: data.title,
        author: data.author_name,
        thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
      },
    });
  }

  const picked = found
    .sort((a, b) => b.value - a.value)
    .slice(0, PER_PORT)
    .map((entry) => entry.video);

  if (picked.length === 0) {
    console.warn(`${candidate.portId}: no matching video found`);
    continue;
  }

  for (const video of picked) used.add(video.url);
  existing[candidate.portId] = { ...(existing[candidate.portId] ?? {}), videos: picked };
  console.log(`${candidate.portId}: ${picked.map((video) => video.title).join(" | ")}`);
}

const sorted = Object.fromEntries(Object.entries(existing).sort(([a], [b]) => a.localeCompare(b)));
writeFileSync(OUTPUT, `${JSON.stringify(sorted, null, 2)}\n`, "utf-8");
console.log(`\n${relative(".", OUTPUT)}: ${Object.keys(sorted).length} ports with videos.`);
