// Corrects placeholder (2000) and obvious re-release years using the cached
// Wikidata/Steam year. Other mismatches are left for the review report.
const fs = require("fs");
const path = require("path");

const DIR = path.join(process.cwd(), "src/content/ports");
const CACHE = path.join(process.cwd(), "public/data/game-metadata.json");
const norm = (value) =>
  String(value)
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "");

const cache = JSON.parse(fs.readFileSync(CACHE, "utf8"));
const OVERRIDES = { gliderpro: 1994, "2048": 2014 };
let placeholder = 0;
let rerelease = 0;
const changed = [];

for (const file of fs.readdirSync(DIR)) {
  if (!file.endsWith(".ts") || file === "index.ts" || file === "meta.ts") continue;
  const full = path.join(DIR, file);
  let text = fs.readFileSync(full, "utf8");
  const game = text.match(/game:\s*"([^"]+)"/)?.[1];
  const current = Number(text.match(/originalYear:\s*(\d+)/)?.[1] ?? 0);
  const key = norm(game ?? "");
  const meta = cache[key];
  if (!game || !current || !meta?.year) continue;
  const override = OVERRIDES[key];
  if (override && current !== override) {
    text = text.replace(/originalYear:\s*\d+/, `originalYear: ${override}`);
    fs.writeFileSync(full, text);
    changed.push({ game, from: current, to: override, source: "override" });
    continue;
  }
  const isPlaceholder = current === 2000;
  const isRerelease = current > meta.year + 3;
  if (!isPlaceholder && !isRerelease) continue;
  text = text.replace(/originalYear:\s*\d+/, `originalYear: ${meta.year}`);
  fs.writeFileSync(full, text);
  if (isPlaceholder) placeholder++;
  else rerelease++;
  changed.push({ game, from: current, to: meta.year, source: meta.source });
}

console.log(JSON.stringify({ placeholder, rerelease, total: changed.length }, null, 2));
console.log(changed.slice(0, 25));
