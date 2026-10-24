// Adds cover art to every entry that lacks one:
//   1. Wikipedia page image (usually the box art);
//   2. Steam header image;
//   3. a generated SVG card with the game title, system and year.
const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const CATALOG = path.join(ROOT, "out/api/ports.json");
const DIR = path.join(ROOT, "src/content/ports");
const CACHE = path.join(ROOT, "public/data/cover-cache.json");
const GEN_DIR = path.join(ROOT, "public/covers/generated");
const UA = "openportsgames-catalog/1.0 (https://openportsgames.com; cover metadata)";
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

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

function similarity(a, b) {
  const x = norm(a);
  const y = norm(b);
  if (!x || !y) return 0;
  if (x === y) return 100;
  if (x.includes(y) || y.includes(x)) return 50 - Math.abs(x.length - y.length);
  return 0;
}

async function json(url, attempt = 0) {
  try {
    const response = await fetch(url, { headers: { "user-agent": UA } });
    if (response.status === 429 && attempt < 3) {
      await sleep(1500 * (attempt + 1));
      return json(url, attempt + 1);
    }
    if (!response.ok) return null;
    return await response.json();
  } catch {
    if (attempt < 3) {
      await sleep(1000 * (attempt + 1));
      return json(url, attempt + 1);
    }
    return null;
  }
}

async function wikipediaCover(game) {
  const url =
    "https://en.wikipedia.org/w/api.php?" +
    new URLSearchParams({
      action: "query",
      generator: "search",
      gsrsearch: `${game} video game`,
      gsrlimit: "4",
      prop: "pageimages",
      piprop: "thumbnail",
      pithumbsize: "600",
      redirects: "1",
      format: "json",
    });
  const data = await json(url);
  const pages = Object.values(data?.query?.pages ?? {});
  let best = null;
  for (const page of pages) {
    const source = page.thumbnail?.source;
    const score = similarity(game, page.title ?? "");
    if (source && score > (best?.score ?? 0)) best = { source, title: page.title, score };
  }
  return best && best.score >= 40
    ? { src: best.source, alt: `${game} (box art)`, credit: "Wikipedia" }
    : null;
}

async function steamCover(game) {
  const search = await json(
    `https://store.steampowered.com/api/storesearch/?term=${encodeURIComponent(game)}&l=english&cc=us`,
  );
  const target = norm(game);
  const item = (search?.items ?? []).find((entry) => norm(entry.name ?? "") === target);
  if (!item) return null;
  const details = await json(
    `https://store.steampowered.com/api/appdetails?appids=${item.id}&l=english&cc=us`,
  );
  const data = details?.[item.id]?.data;
  const src = data?.header_image;
  return src ? { src, alt: `${game} (Steam header)`, credit: "Steam" } : null;
}

const COLORS = {
  "Xbox 360": ["#0b3d24", "#7ac943"],
  Xbox: ["#0b3d24", "#7ac943"],
  "PlayStation 5": ["#0b1f4d", "#4f8cff"],
  "PlayStation 4": ["#0b1f4d", "#4f8cff"],
  "PlayStation 3": ["#0b1f4d", "#4f8cff"],
  "PlayStation 2": ["#0b1f4d", "#4f8cff"],
  PlayStation: ["#0b1f4d", "#4f8cff"],
  "Nintendo 64": ["#3b0a0a", "#ff6b6b"],
  "Nintendo GameCube": ["#24104a", "#a78bfa"],
  GameCube: ["#24104a", "#a78bfa"],
  Wii: ["#0f2a3d", "#67e8f9"],
  "Wii U": ["#0f2a3d", "#67e8f9"],
  "Nintendo Switch": ["#3a0a0a", "#ff7a7a"],
  "Super Nintendo": ["#2a1a0a", "#fbbf24"],
  "Nintendo Entertainment System": ["#2a1a0a", "#fbbf24"],
  "Game Boy Advance": ["#1a0a2a", "#c084fc"],
  "Nintendo DS": ["#1a0a2a", "#c084fc"],
  "Nintendo 3DS": ["#1a0a2a", "#c084fc"],
  "Sega Mega Drive / Genesis": ["#0a1a2a", "#38bdf8"],
  Dreamcast: ["#0a1a2a", "#38bdf8"],
  Windows: ["#0a1a2a", "#60a5fa"],
  "MS-DOS": ["#1a1a1a", "#facc15"],
};

function esc(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function wrap(text, width = 20) {
  const words = text.split(/\s+/);
  const lines = [];
  let line = "";
  for (const word of words) {
    if (`${line} ${word}`.trim().length > width && line) {
      lines.push(line);
      line = word;
    } else {
      line = `${line} ${word}`.trim();
    }
  }
  if (line) lines.push(line);
  return lines.slice(0, 5);
}

function generatedCover(game, system, year, platform) {
  fs.mkdirSync(GEN_DIR, { recursive: true });
  const key = slug(game) || "game";
  const file = path.join(GEN_DIR, `${key}.svg`);
  if (!fs.existsSync(file)) {
    const [from, to] = COLORS[system] ?? ["#1e1b4b", "#8b5cf6"];
    const lines = wrap(game);
    const startY = 410 - (lines.length - 1) * 34;
    const title = lines
      .map(
        (line, index) =>
          `<text x="300" y="${startY + index * 68}" text-anchor="middle" font-family="system-ui, sans-serif" font-size="48" font-weight="700" fill="#ffffff">${esc(line)}</text>`,
      )
      .join("\n  ");
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="800" viewBox="0 0 600 800">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${from}"/>
      <stop offset="1" stop-color="${to}"/>
    </linearGradient>
  </defs>
  <rect width="600" height="800" fill="url(#bg)"/>
  <circle cx="520" cy="90" r="180" fill="#ffffff" opacity="0.08"/>
  <circle cx="60" cy="700" r="220" fill="#000000" opacity="0.18"/>
  <text x="40" y="70" font-family="monospace" font-size="20" letter-spacing="4" fill="#ffffff" opacity="0.8">OPENPORTSGAMES</text>
  ${title}
  <text x="300" y="600" text-anchor="middle" font-family="system-ui, sans-serif" font-size="26" fill="#ffffff" opacity="0.9">${esc(system === "Unknown" ? platform : system)}${year ? ` · ${year}` : ""}</text>
  <text x="300" y="760" text-anchor="middle" font-family="monospace" font-size="18" letter-spacing="2" fill="#ffffff" opacity="0.55">NATIVE PORT CATALOG</text>
</svg>
`;
    fs.writeFileSync(file, svg, "utf8");
  }
  return {
    src: `https://openportsgames.com/covers/generated/${key}.svg`,
    alt: `${game} (generated cover)`,
    credit: "OpenPortsGames",
  };
}

async function main() {
  const data = JSON.parse(fs.readFileSync(CATALOG, "utf8"));
  const ports = data.ports ?? [];
  const cache = fs.existsSync(CACHE) ? JSON.parse(fs.readFileSync(CACHE, "utf8")) : {};
  const missing = ports.filter((port) => !port.cover);
  const games = new Map();
  for (const port of missing) {
    const key = norm(port.game ?? "");
    if (!key || games.has(key)) continue;
    games.set(key, {
      game: port.game,
      system: port.originalSystems?.[0] ?? "Unknown",
      year: port.originalYear,
      platform: port.platforms?.[0] ?? "PC",
    });
  }
  let index = 0;
  let real = 0;
  let generated = 0;
  for (const [key, info] of games) {
    index++;
    if (cache[key]) continue;
    if (index % 25 === 0) console.log(`cover ${index}/${games.size}`);
    let cover = null;
    try {
      cover = await wikipediaCover(info.game);
      if (!cover) cover = await steamCover(info.game);
    } catch {
      cover = null;
    }
    await sleep(120);
    if (cover) real++;
    else {
      cover = generatedCover(info.game, info.system, info.year, info.platform);
      generated++;
    }
    cache[key] = cover;
    if (index % 25 === 0) fs.writeFileSync(CACHE, `${JSON.stringify(cache, null, 2)}\n`);
  }
  fs.writeFileSync(CACHE, `${JSON.stringify(cache, null, 2)}\n`);

  let applied = 0;
  for (const file of fs.readdirSync(DIR)) {
    if (!file.endsWith(".ts") || file === "index.ts" || file === "meta.ts") continue;
    const full = path.join(DIR, file);
    let text = fs.readFileSync(full, "utf8");
    if (/\n  cover: \{/.test(text)) continue;
    const game = text.match(/game:\s*"([^"]+)"/)?.[1];
    if (!game) continue;
    const cover = cache[norm(game)];
    if (!cover) continue;
    const block = `\n  cover: {\n    src: ${JSON.stringify(cover.src)},\n    alt: ${JSON.stringify(cover.alt)},\n    credit: ${JSON.stringify(cover.credit)},\n  },`;
    const anchor = text.search(/\n  notes:/);
    if (anchor >= 0) text = `${text.slice(0, anchor)}${block}${text.slice(anchor)}`;
    else {
      const end = text.lastIndexOf("\n};");
      if (end >= 0) text = `${text.slice(0, end)}${block}${text.slice(end)}`;
    }
    fs.writeFileSync(full, text);
    applied++;
  }
  console.log(JSON.stringify({ missing: missing.length, games: games.size, real, generated, applied }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
