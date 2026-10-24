// Replaces generated SVG covers with real libretro box art when a matching
// Named_Boxarts file exists for the game's original console.
const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const CATALOG = path.join(ROOT, "out/api/ports.json");
const DIR = path.join(ROOT, "src/content/ports");
const CACHE = path.join(ROOT, "public/data/cover-cache.json");

const SYSTEMS = {
  "Nintendo 64": "Nintendo - Nintendo 64",
  "Super Nintendo": "Nintendo - Super Nintendo Entertainment System",
  "Nintendo Entertainment System": "Nintendo - Nintendo Entertainment System",
  "Nintendo GameCube": "Nintendo - GameCube",
  GameCube: "Nintendo - GameCube",
  Wii: "Nintendo - Wii",
  "Wii U": "Nintendo - Wii U",
  "Game Boy Advance": "Nintendo - Game Boy Advance",
  "Game Boy / Game Boy Color": "Nintendo - Game Boy Color",
  "Nintendo DS": "Nintendo - Nintendo DS",
  "Nintendo 3DS": "Nintendo - Nintendo 3DS",
  PlayStation: "Sony - PlayStation",
  "PlayStation 2": "Sony - PlayStation 2",
  "PlayStation 3": "Sony - PlayStation 3",
  "PlayStation Portable": "Sony - PlayStation Portable",
  Xbox: "Microsoft - Xbox",
  "Xbox 360": "Microsoft - Xbox 360",
  "Sega Mega Drive / Genesis": "Sega - Mega Drive - Genesis",
  "Sega Saturn": "Sega - Saturn",
  Dreamcast: "Sega - Dreamcast",
};

const VARIANTS = (game) => {
  const clean = game
    .replace(/\s*:\s*/g, " - ")
    .replace(/\s*&\s*/g, " and ")
    .replace(/\s+/g, " ")
    .trim();
  return [...new Set([game, clean])];
};
const REGIONS = ["USA", "Europe", "Japan", "World", "USA, Europe", "Japan, USA"];

const norm = (value) =>
  String(value)
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "");

const slug = (value) =>
  String(value)
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 70);

const cache = JSON.parse(fs.readFileSync(CACHE, "utf8"));
const data = JSON.parse(fs.readFileSync(CATALOG, "utf8"));
const systemByGame = new Map();
for (const port of data.ports ?? []) {
  const key = norm(port.game ?? "");
  if (key && !systemByGame.has(key)) {
    systemByGame.set(key, {
      game: port.game,
      system: port.originalSystems?.[0] ?? "Unknown",
    });
  }
}

async function exists(url) {
  try {
    const response = await fetch(url, { method: "HEAD" });
    return response.ok;
  } catch {
    return false;
  }
}

async function findCover(game, system) {
  const repo = SYSTEMS[system];
  if (!repo) return null;
  for (const name of VARIANTS(game)) {
    for (const region of REGIONS) {
      const file = `${name} (${region}).png`;
      const url = `https://thumbnails.libretro.com/${encodeURIComponent(repo)}/Named_Boxarts/${encodeURIComponent(file)}`;
      if (await exists(url)) {
        return { src: url, alt: `${game} (box art)`, credit: "libretro" };
      }
    }
  }
  return null;
}

async function main() {
const targets = [];
for (const [key, cover] of Object.entries(cache)) {
  if (cover.credit !== "OpenPortsGames") continue;
  const info = systemByGame.get(key);
  if (!info || !SYSTEMS[info.system]) continue;
  targets.push({ key, ...info, cover });
}

let found = 0;
let index = 0;
for (const target of targets) {
  index++;
  if (index % 20 === 0) console.log(`libretro ${index}/${targets.length}, found ${found}`);
  const cover = await findCover(target.game, target.system);
  if (cover) {
    cache[target.key] = cover;
    found++;
  }
}
fs.writeFileSync(CACHE, `${JSON.stringify(cache, null, 2)}\n`);

let replaced = 0;
for (const file of fs.readdirSync(DIR)) {
  if (!file.endsWith(".ts") || file === "index.ts" || file === "meta.ts") continue;
  const full = path.join(DIR, file);
  let text = fs.readFileSync(full, "utf8");
  const game = text.match(/game:\s*"([^"]+)"/)?.[1];
  if (!game) continue;
  const cover = cache[norm(game)];
  if (!cover || cover.credit !== "libretro") continue;
  if (!/\/covers\/generated\//.test(text)) continue;
  const block = `\n  cover: {\n    src: ${JSON.stringify(cover.src)},\n    alt: ${JSON.stringify(cover.alt)},\n    credit: ${JSON.stringify(cover.credit)},\n  },`;
  text = text.replace(/\n  cover: \{\n    src: [^\n]+,\n    alt: [^\n]+,\n    credit: [^\n]+,\n  \},/, block);
  fs.writeFileSync(full, text);
  replaced++;
}

console.log(JSON.stringify({ candidates: targets.length, found, replaced }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
