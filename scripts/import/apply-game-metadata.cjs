// Applies the cached game metadata to every port file: bilingual synopsis and,
// only when the current publisher is unknown and the source is Wikidata, the
// publisher. Never overwrites an existing year or publisher.
const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const DIR = path.join(ROOT, "src/content/ports");
const CACHE = path.join(ROOT, "public/data/game-metadata.json");
const REPORT = path.join(ROOT, "docs/GAME-METADATA-REPORT.md");
const norm = (value) =>
  String(value)
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "");

const cache = JSON.parse(fs.readFileSync(CACHE, "utf8"));
let summaries = 0;
let publishers = 0;
let matched = 0;
const mismatches = [];
const unresolved = [];

for (const file of fs.readdirSync(DIR)) {
  if (!file.endsWith(".ts") || file === "index.ts" || file === "meta.ts") continue;
  const full = path.join(DIR, file);
  let text = fs.readFileSync(full, "utf8");
  const game = text.match(/game:\s*"([^"]+)"/)?.[1];
  const id = text.match(/id:\s*"([^"]+)"/)?.[1];
  if (!game || !id) continue;
  const meta = cache[norm(game)];
  if (!meta) {
    unresolved.push({ id, game });
    continue;
  }
  matched++;
  const year = Number(text.match(/originalYear:\s*(\d+)/)?.[1] ?? 0);
  if (meta.year && year && Math.abs(meta.year - year) > 1) {
    mismatches.push({ id, game, portYear: year, metadataYear: meta.year, source: meta.source });
  }

  if (!/\n  summary:/.test(text) && meta.summaryEn) {
    const block = `\n  summary: ${JSON.stringify(meta.summaryEn)},\n  summaryEs: ${JSON.stringify(meta.summaryEs ?? meta.summaryEn)},`;
    const anchor = text.search(/\n  notes:/);
    if (anchor >= 0) text = `${text.slice(0, anchor)}${block}${text.slice(anchor)}`;
    else {
      const end = text.lastIndexOf("\n};");
      if (end >= 0) text = `${text.slice(0, end)}${block}${text.slice(end)}`;
    }
    summaries++;
  }

  if (meta.source === "wikidata" && meta.publisher && /publisher:\s*"Unknown"/.test(text)) {
    text = text.replace(
      /publisher:\s*"Unknown"/,
      `publisher: ${JSON.stringify(meta.publisher.slice(0, 80))}`,
    );
    publishers++;
  }

  fs.writeFileSync(full, text);
}

const lines = [
  "# Informe de metadatos de juegos",
  "",
  `- Fichas con metadatos de juego: **${matched}**`,
  `- Sinopsis añadidas: **${summaries}**`,
  `- Publishers completados (solo si faltaban): **${publishers}**`,
  `- Fichas sin coincidencia en Wikidata/Wikipedia/Steam: **${unresolved.length}**`,
  `- Años que difieren más de 1 respecto a la fuente: **${mismatches.length}**`,
  "",
  "## Años a revisar",
  "",
  ...mismatches
    .slice(0, 200)
    .map((row) => `- \`${row.id}\` — ${row.game}: ficha ${row.portYear}, ${row.source} ${row.metadataYear}`),
  "",
  "## Sin coincidencia",
  "",
  ...unresolved.slice(0, 300).map((row) => `- \`${row.id}\` — ${row.game}`),
  "",
];
fs.writeFileSync(REPORT, `${lines.join("\n")}\n`);
console.log(
  JSON.stringify({ matched, summaries, publishers, mismatches: mismatches.length, unresolved: unresolved.length }, null, 2),
);
