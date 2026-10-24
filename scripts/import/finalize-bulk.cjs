// Normalizes the systems of bulk-imported entries, drops console entries whose
// year could only be guessed from a Steam re-release, and rebuilds index.ts and
// meta.ts from the files on disk.
const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const DIR = path.join(ROOT, "src/content/ports");
const PROJECTS = path.join(ROOT, "public/data/projects.json");
const API_CATALOG = path.join(ROOT, "out/api/ports.json");
const BULK = /: (decompilation|static recompilation|source port|engine remake|browser port) by /;

const norm = (value) =>
  String(value)
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "");

const RULES = [
  [/wii u/i, "Wii U"],
  [/\bwii\b/i, "Wii"],
  [/switch/i, "Nintendo Switch"],
  [/gamecube/i, "Nintendo GameCube"],
  [/n64|nintendo 64/i, "Nintendo 64"],
  [/snes|super nintendo/i, "Super Nintendo"],
  [/\bnes\b|nintendo entertainment/i, "Nintendo Entertainment System"],
  [/game boy advance|\bgba\b/i, "Game Boy Advance"],
  [/game boy color|\bgbc\b|game boy/i, "Game Boy / Game Boy Color"],
  [/nintendo ds|\bnds\b/i, "Nintendo DS"],
  [/3ds/i, "Nintendo 3DS"],
  [/playstation 5|\bps5\b/i, "PlayStation 5"],
  [/playstation 4|\bps4\b/i, "PlayStation 4"],
  [/playstation 3|\bps3\b/i, "PlayStation 3"],
  [/playstation 2|\bps2\b/i, "PlayStation 2"],
  [/playstation portable|\bpsp\b/i, "PlayStation Portable"],
  [/playstation|\bps1\b|\bpsx\b/i, "PlayStation"],
  [/xbox 360/i, "Xbox 360"],
  [/\bxbox\b/i, "Xbox"],
  [/dreamcast/i, "Dreamcast"],
  [/saturn/i, "Sega Saturn"],
  [/genesis|mega drive/i, "Sega Mega Drive / Genesis"],
  [/ms-dos|\bdos\b/i, "MS-DOS"],
  [/arcade/i, "Arcade"],
  [/\bpc\b|windows|linux|mac/i, "Windows"],
];

function systemsFromOriginal(original) {
  const parts = String(original || "")
    .split(/\s*[/,+&]\s*/)
    .map((part) => part.trim())
    .filter(Boolean);
  const out = [];
  for (const part of parts) {
    const label = RULES.find(([pattern]) => pattern.test(part))?.[1];
    if (label && !out.includes(label)) out.push(label);
  }
  if (out.length === 0) out.push("Unknown");
  return out;
}

const isConsole = (systems) =>
  systems.some((system) =>
    /PlayStation|Xbox|Nintendo|Game Boy|Sega|Dreamcast|Saturn|Arcade/.test(system),
  );

const projects = JSON.parse(fs.readFileSync(PROJECTS, "utf8"));
const byUrl = new Map(projects.map((project) => [project.url, project]));
const wikidataPath = path.join(ROOT, "public/data/wikidata-enrichment.json");
const wikidata = fs.existsSync(wikidataPath)
  ? JSON.parse(fs.readFileSync(wikidataPath, "utf8"))
  : {};
const catalog = JSON.parse(fs.readFileSync(API_CATALOG, "utf8")).ports;
const catalogByGame = new Map();
for (const port of catalog) {
  const key = norm(port.game || "");
  if (key && !catalogByGame.has(key)) catalogByGame.set(key, port);
}

let updated = 0;
let removed = 0;
const kept = [];
for (const file of fs.readdirSync(DIR)) {
  if (!file.endsWith(".ts") || file === "index.ts" || file === "meta.ts") continue;
  const full = path.join(DIR, file);
  let text = fs.readFileSync(full, "utf8");
  const id = text.match(/id:\s*"([^"]+)"/)?.[1];
  if (!id) continue;

  if (BULK.test(text)) {
    const url = text.match(/sources:\s*\["([^"]+)"\]/)?.[1];
    const project = byUrl.get(url);
    const game = text.match(/game:\s*"([^"]+)"/)?.[1] ?? "";
    const parsedYear = Number(
      `${project?.title ?? ""} ${project?.description ?? ""}`.match(/\b(19[7-9]\d|20[0-2]\d)\b/)?.[1] ?? 0,
    );
    const trustedYear = catalogByGame.get(norm(game))?.originalYear || parsedYear || wikidata[url]?.year;
    const systems = systemsFromOriginal(project?.original ?? "");
    if (!trustedYear && isConsole(systems)) {
      fs.unlinkSync(full);
      removed++;
      continue;
    }
    if (systems.length) {
      const replacement = `originalSystems: [${systems.map((system) => JSON.stringify(system)).join(", ")}]`;
      const next = text.replace(/originalSystems:\s*\[[^\]]*\]/, replacement);
      if (next !== text) {
        fs.writeFileSync(full, next);
        text = next;
        updated++;
      }
    }
  }
  kept.push({ id, file, text });
}

const entries = kept
  .map(({ id, file, text }) => ({
    id,
    file,
    name: text.match(/export const ([A-Za-z0-9_]+)/)?.[1],
    systems:
      (text.match(/originalSystems:\s*\[([\s\S]*?)\]/)?.[1] ?? "").match(/"([^"]+)"/g)?.map((s) => s.slice(1, -1)) ??
      ["Unknown"],
  }))
  .filter((entry) => entry.name)
  .sort((a, b) => a.id.localeCompare(b.id));

const imports = entries.map((entry) => `import { ${entry.name} } from "./${entry.file.replace(/\.ts$/, "")}";`).join("\n");
const array = entries.map((entry) => `  ${entry.name},`).join("\n");
fs.writeFileSync(
  path.join(DIR, "index.ts"),
  `import type { Port } from "@/lib/ports/schema";\n\n${imports}\n\nexport const portCases: Port[] = [\n${array}\n];\n`,
  "utf8",
);

const meta = entries
  .map((entry) => `  ${JSON.stringify(entry.id)}: [${entry.systems.map((s) => JSON.stringify(s)).join(", ")}],`)
  .join("\n");
fs.writeFileSync(
  path.join(DIR, "meta.ts"),
  `import type { Port } from "@/lib/ports/schema";\n\nexport const originalSystemsById: Record<Port["id"], string[]> = {\n${meta}\n};\n`,
  "utf8",
);

console.log(`updated ${updated} system lists, removed ${removed} guessed console entries, ${entries.length} ports remain`);
