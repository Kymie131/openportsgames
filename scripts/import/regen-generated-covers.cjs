// Regenerates the OpenPortsGames SVG covers in 16:9 so the detail page frame
// does not crop the title.
const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const CATALOG = path.join(ROOT, "out/api/ports.json");
const CACHE = path.join(ROOT, "public/data/cover-cache.json");
const GEN_DIR = path.join(ROOT, "public/covers/generated");

const norm = (value) =>
  String(value)
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "");

const slugify = (value) =>
  String(value)
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 70);

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

function wrap(text, width = 26) {
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
  return lines.slice(0, 3);
}

function svg(game, system, year, platform) {
  const [from, to] = COLORS[system] ?? ["#1e1b4b", "#8b5cf6"];
  const lines = wrap(game);
  const startY = 330 - (lines.length - 1) * 42;
  const title = lines
    .map(
      (line, index) =>
        `<text x="600" y="${startY + index * 84}" text-anchor="middle" font-family="system-ui, sans-serif" font-size="68" font-weight="700" fill="#ffffff">${esc(line)}</text>`,
    )
    .join("\n  ");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="675" viewBox="0 0 1200 675">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${from}"/>
      <stop offset="1" stop-color="${to}"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="675" fill="url(#bg)"/>
  <circle cx="1030" cy="90" r="260" fill="#ffffff" opacity="0.08"/>
  <circle cx="130" cy="620" r="300" fill="#000000" opacity="0.18"/>
  <text x="60" y="80" font-family="monospace" font-size="22" letter-spacing="5" fill="#ffffff" opacity="0.8">OPENPORTSGAMES</text>
  ${title}
  <text x="600" y="520" text-anchor="middle" font-family="system-ui, sans-serif" font-size="30" fill="#ffffff" opacity="0.9">${esc(system === "Unknown" ? platform : system)}${year ? ` · ${year}` : ""}</text>
  <text x="600" y="625" text-anchor="middle" font-family="monospace" font-size="18" letter-spacing="3" fill="#ffffff" opacity="0.55">NATIVE PORT CATALOG</text>
</svg>
`;
}

const data = JSON.parse(fs.readFileSync(CATALOG, "utf8"));
const cache = JSON.parse(fs.readFileSync(CACHE, "utf8"));
const bySlug = new Map();
for (const port of data.ports ?? []) {
  const key = slugify(port.game ?? "");
  if (key && !bySlug.has(key)) {
    bySlug.set(key, {
      game: port.game,
      system: port.originalSystems?.[0] ?? "Unknown",
      year: port.originalYear,
      platform: port.platforms?.[0] ?? "PC",
    });
  }
}

let written = 0;
fs.mkdirSync(GEN_DIR, { recursive: true });
for (const cover of Object.values(cache)) {
  if (cover.credit !== "OpenPortsGames") continue;
  const match = cover.src.match(/\/covers\/generated\/([^/]+)\.svg$/);
  if (!match) continue;
  const info = bySlug.get(match[1]);
  if (!info) continue;
  fs.writeFileSync(path.join(GEN_DIR, `${match[1]}.svg`), svg(info.game, info.system, info.year, info.platform), "utf8");
  written++;
}
console.log(`regenerated ${written} covers in 16:9`);
