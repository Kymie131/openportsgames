#!/usr/bin/env node
// Adds a batch of catalog entries from a JSON file and updates the registry.
//
// Usage: node scripts/add-ports.mjs path/to/entries.json
//
// Each item needs: id, title, game, dev, publisher, year, type, genre,
// platforms, status, version, date, repo, license, systems, summary,
// summaryEs, notes, notesEs. Optional: kind.
//
// The script is idempotent: entries whose file already exists are skipped, and
// generated cover art is only written when the SVG is missing.
import fs from "node:fs";
import path from "node:path";

const DIR = path.join(process.cwd(), "src/content/ports");
const COVERS = path.join(process.cwd(), "public/covers/generated");
const ADDED_AT = "2026-11-18";

const slugify = (value) =>
  value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const varName = (id) => {
  const camel = id
    .split("-")
    .map((part, index) => (index === 0 ? part : part[0].toUpperCase() + part.slice(1)))
    .join("");
  return /^[0-9]/.test(camel) ? `port${camel}` : camel;
};

const escapeXml = (value) =>
  String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

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

function coverSvg(game, system, year) {
  const lines = wrap(game);
  const start = 330 - (lines.length - 1) * 42;
  const title = lines
    .map(
      (line, index) =>
        `<text x="600" y="${start + index * 84}" text-anchor="middle" font-family="system-ui,sans-serif" font-size="68" font-weight="700" fill="#fff">${escapeXml(line)}</text>`,
    )
    .join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="675" viewBox="0 0 1200 675"><defs><linearGradient id="b" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1e1b4b"/><stop offset="1" stop-color="#8b5cf6"/></linearGradient></defs><rect width="1200" height="675" fill="url(#b)"/><text x="60" y="80" font-family="monospace" font-size="22" letter-spacing="5" fill="#fff" opacity=".8">OPENPORTSGAMES</text>${title}<text x="600" y="520" text-anchor="middle" font-family="system-ui,sans-serif" font-size="30" fill="#fff" opacity=".9">${escapeXml(system)}${year ? ` · ${year}` : ""}</text><text x="600" y="625" text-anchor="middle" font-family="monospace" font-size="18" letter-spacing="3" fill="#fff" opacity=".55">NATIVE PORT CATALOG</text></svg>`;
}

function entrySource(entry) {
  const licenseNote =
    entry.license === "NOASSERTION" ? `, note: "no SPDX license in the repository"` : "";
  const lines = [
    `import type { Port } from "@/lib/ports/schema";`,
    ``,
    `export const ${varName(entry.id)}: Port = {`,
    `  schema: "port",`,
    `  id: ${JSON.stringify(entry.id)},`,
    `  title: ${JSON.stringify(entry.title)},`,
  ];
  if (entry.kind) lines.push(`  kind: ${JSON.stringify(entry.kind)},`);
  lines.push(
    `  game: ${JSON.stringify(entry.game)},`,
    `  developers: [${JSON.stringify(entry.dev)}],`,
    `  publisher: ${JSON.stringify(entry.publisher)},`,
    `  originalYear: ${entry.year},`,
    `  portType: ${JSON.stringify(entry.type)},`,
    `  genre: ${JSON.stringify(entry.genre)},`,
    `  openSource: true,`,
    `  originalGameLicense: "proprietary",`,
    `  platforms: ${JSON.stringify(entry.platforms)},`,
    `  status: ${JSON.stringify(entry.status)},`,
    `  release: { version: ${entry.version ? JSON.stringify(entry.version) : "null"}, date: ${entry.date ? JSON.stringify(entry.date) : "null"} },`,
    `  sources: [${JSON.stringify(entry.repo)}],`,
    `  license: { spdx: ${JSON.stringify(entry.license)}${licenseNote} },`,
    `  verified: false,`,
    `  sourceVerified: true,`,
  );
  if (!entry.version) lines.push(`  wip: true,`);
  lines.push(
    `  addedAt: "${ADDED_AT}",`,
    `  originalSystems: ${JSON.stringify(entry.systems)},`,
    `  summary: ${JSON.stringify(entry.summary)},`,
    `  summaryEs: ${JSON.stringify(entry.summaryEs)},`,
    `  notes: ${JSON.stringify(entry.notes)},`,
    `  notesEs: ${JSON.stringify(entry.notesEs)},`,
    `  cover: {`,
    `    src: "https://openportsgames.com/covers/generated/${slugify(entry.game)}.svg",`,
    `    alt: ${JSON.stringify(`${entry.game} (generated cover)`)},`,
    `    credit: "OpenPortsGames",`,
    `  },`,
    `};`,
    ``,
  );
  return lines.join("\n");
}

const inputPath = process.argv[2];
if (!inputPath) {
  console.error("[add-ports] usage: node scripts/add-ports.mjs <entries.json>");
  process.exit(1);
}

const entries = JSON.parse(fs.readFileSync(path.join(process.cwd(), inputPath), "utf8"));
const created = [];

for (const entry of entries) {
  const file = path.join(DIR, `${entry.id}.ts`);
  if (fs.existsSync(file)) {
    console.log(`[add-ports] exists ${entry.id}`);
    continue;
  }
  fs.writeFileSync(file, entrySource(entry), "utf8");
  created.push(entry);
}

const indexPath = path.join(DIR, "index.ts");
let index = fs.readFileSync(indexPath, "utf8");
index = index.replace(
  /export const portCases: Port\[\] = \[/,
  `${created.map((entry) => `import { ${varName(entry.id)} } from "./${entry.id}";`).join("\n")}\nexport const portCases: Port[] = [`,
);
index = index.replace(
  /\n\];\s*$/,
  `\n${created.map((entry) => `  ${varName(entry.id)},`).join("\n")}\n];\n`,
);
fs.writeFileSync(indexPath, index, "utf8");

const metaPath = path.join(DIR, "meta.ts");
let meta = fs.readFileSync(metaPath, "utf8");
meta = meta.replace(
  /\n};\s*$/,
  `\n${created.map((entry) => `  ${JSON.stringify(entry.id)}: ${JSON.stringify(entry.systems)},`).join("\n")}\n};\n`,
);
fs.writeFileSync(metaPath, meta, "utf8");

fs.mkdirSync(COVERS, { recursive: true });
for (const entry of created) {
  const slug = slugify(entry.game);
  const file = path.join(COVERS, `${slug}.svg`);
  if (fs.existsSync(file)) continue;
  fs.writeFileSync(file, coverSvg(entry.game, entry.systems[0] ?? "Other", entry.year), "utf8");
}

console.log(`[add-ports] created ${created.length} entries`);
