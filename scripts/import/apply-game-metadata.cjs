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
let generated = 0;
const mismatches = [];
const unresolved = [];

const GENRE_EN = {
  platformer: "platform", "action-adventure": "action-adventure", rpg: "role-playing",
  racing: "racing", strategy: "strategy", shooter: "shooter", fighting: "fighting",
  sports: "sports", simulation: "simulation", "open-world": "open-world",
  puzzle: "puzzle", music: "music",
};
const GENRE_ES = {
  platformer: "plataformas", "action-adventure": "acción y aventura", rpg: "rol",
  racing: "carreras", strategy: "estrategia", shooter: "disparos", fighting: "lucha",
  sports: "deportes", simulation: "simulación", "open-world": "mundo abierto",
  puzzle: "puzles", music: "música",
};

function insertSummary(text, en, es, isGenerated) {
  if (/\n  summary:/.test(text)) return text;
  const block = `\n  summary: ${JSON.stringify(en)},\n  summaryEs: ${JSON.stringify(es)},${isGenerated ? "\n  summaryGenerated: true," : ""}`;
  const anchor = text.search(/\n  notes:/);
  if (anchor >= 0) return `${text.slice(0, anchor)}${block}${text.slice(anchor)}`;
  const end = text.lastIndexOf("\n};");
  return end >= 0 ? `${text.slice(0, end)}${block}${text.slice(end)}` : text;
}

for (const file of fs.readdirSync(DIR)) {
  if (!file.endsWith(".ts") || file === "index.ts" || file === "meta.ts") continue;
  const full = path.join(DIR, file);
  let text = fs.readFileSync(full, "utf8");
  const game = text.match(/game:\s*"([^"]+)"/)?.[1];
  const id = text.match(/id:\s*"([^"]+)"/)?.[1];
  if (!game || !id) continue;
  const kind = text.match(/kind:\s*"([^"]+)"/)?.[1] ?? "game";
  if (kind !== "game") continue;
  const meta = cache[norm(game)];
  if (!meta) {
    const genre = text.match(/genre:\s*"([^"]+)"/)?.[1] ?? "action-adventure";
    const year = Number(text.match(/originalYear:\s*(\d+)/)?.[1] ?? 0);
    const systemMatch = (text.match(/originalSystems:\s*\[([\s\S]*?)\]/)?.[1] ?? "").match(/"([^"]+)"/);
    const system = systemMatch && systemMatch[1] !== "Unknown" ? systemMatch[1] : null;
    const publisher = text.match(/publisher:\s*"([^"]+)"/)?.[1];
    const knownPublisher = publisher && publisher !== "Unknown" ? publisher : null;
    const en = `${game} is a ${GENRE_EN[genre] ?? "video"} game${knownPublisher ? ` published by ${knownPublisher}` : ""}${system ? ` for ${system}` : ""}${year ? `, released in ${year}` : ""}.`;
    const es = `${game} es un videojuego de ${GENRE_ES[genre] ?? "acción"}${knownPublisher ? ` publicado por ${knownPublisher}` : ""}${system ? ` para ${system}` : ""}${year ? `, lanzado en ${year}` : ""}.`;
    text = insertSummary(text, en, es, true);
    fs.writeFileSync(full, text);
    generated++;
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
  `- Sinopsis aÃ±adidas: **${summaries}**`,
  `- Publishers completados (solo si faltaban): **${publishers}**`,
  `- Sinopsis generadas a partir de la ficha: **${generated}**` + "`n" + `- Fichas sin sinopsis verificada (resumen generado): **${unresolved.length}**`,
  `- AÃ±os que difieren mÃ¡s de 1 respecto a la fuente: **${mismatches.length}**`,
  "",
  "## AÃ±os a revisar",
  "",
  ...mismatches
    .slice(0, 200)
    .map((row) => `- \`${row.id}\` â€” ${row.game}: ficha ${row.portYear}, ${row.source} ${row.metadataYear}`),
  "",
  "## Sin coincidencia",
  "",
  ...unresolved.slice(0, 300).map((row) => `- \`${row.id}\` â€” ${row.game}`),
  "",
];
fs.writeFileSync(REPORT, `${lines.join("\n")}\n`);
console.log(
  JSON.stringify({ matched, summaries, generated, publishers, mismatches: mismatches.length, unresolved: unresolved.length }, null, 2),
);
