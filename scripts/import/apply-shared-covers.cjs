// Reuses the cover art already catalogued for the same game on entries that do
// not have one. Official-art URLs are copied as-is; the donor entry's credit is
// preserved.
const fs = require("fs");
const path = require("path");

const DIR = path.join(process.cwd(), "src/content/ports");
const norm = (value) =>
  String(value)
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "");

const files = fs
  .readdirSync(DIR)
  .filter((file) => file.endsWith(".ts") && file !== "index.ts" && file !== "meta.ts")
  .map((file) => path.join(DIR, file));

const donors = new Map();
for (const file of files) {
  const text = fs.readFileSync(file, "utf8");
  const id = text.match(/id:\s*"([^"]+)"/)?.[1];
  const game = text.match(/game:\s*"([^"]+)"/)?.[1];
  const cover = text.match(
    /\n  cover: \{\n    src: "([^"]+)",\n    alt: "([^"]+)",\n    credit: "([^"]+)",\n  \},/,
  );
  if (!id || !game || !cover) continue;
  const key = norm(game);
  if (!donors.has(key)) {
    donors.set(key, {
      src: cover[1],
      alt: cover[2],
      credit: cover[3],
    });
  }
}

let written = 0;
const games = new Set();
for (const file of files) {
  const text = fs.readFileSync(file, "utf8");
  if (/\n  cover: \{/.test(text)) continue;
  const game = text.match(/game:\s*"([^"]+)"/)?.[1];
  if (!game) continue;
  const donor = donors.get(norm(game));
  if (!donor) continue;
  const block = `\n  cover: {\n    src: ${JSON.stringify(donor.src)},\n    alt: ${JSON.stringify(donor.alt)},\n    credit: ${JSON.stringify(donor.credit)},\n  },`;
  const anchor = text.lastIndexOf("\n};");
  if (anchor < 0) continue;
  fs.writeFileSync(file, `${text.slice(0, anchor)}${block}${text.slice(anchor)}`, "utf8");
  written++;
  games.add(game);
}

console.log(JSON.stringify({ written, games: [...games].slice(0, 40) }, null, 2));
