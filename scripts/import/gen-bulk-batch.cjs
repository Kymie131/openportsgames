// Bulk-imports catalogued projects from the verified project index.
//
// Metadata comes from, in order:
//   1. an existing catalog entry for the same game (year, publisher, genre);
//   2. a year parsed from the project title/description;
//   3. the public Steam Store search + appdetails endpoints.
// Entries without a plausible original year are skipped instead of guessed.
//
// Usage:
//   node scripts/import/gen-bulk-batch.cjs [limit]
// Defaults to 250 entries.
const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const DIR = path.join(ROOT, "src/content/ports");
const INDEX = path.join(DIR, "index.ts");
const META = path.join(DIR, "meta.ts");
const PROJECTS = path.join(ROOT, "public/data/projects.json");
const API_CATALOG = path.join(ROOT, "out/api/ports.json");
const LIMIT = Number(process.argv[2] ?? 250);
const TODAY = "2026-10-23";

const q = (value) => JSON.stringify(value);
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
    .slice(0, 80);

const TYPE_EN = {
  decompilation: "decompilation",
  "static-recomp": "static recompilation",
  "source-port": "source port",
  "engine-remake": "engine remake",
  "browser-port": "browser port",
};
const TYPE_ES = {
  decompilation: "decompilación",
  "static-recomp": "recompilación estática",
  "source-port": "source port",
  "engine-remake": "recreación de motor",
  "browser-port": "port de navegador",
};
const TYPE_PORT = {
  decompilation: "decompilation",
  "static-recomp": "recompilation",
  "source-port": "source-port",
  "engine-remake": "reimplementation",
  "browser-port": "source-port",
};

const GENRE_RULES = [
  [/kart|racing|rally|drift|burnout|need for speed|gran turismo|f-zero|fzero|outrun|out run|colin mcrae|a2 racer|micro machines|wipeout/i, "racing"],
  [/fighting|fighter|kombat|street fighter|tekken|smash bros|guilty gear|soulcalibur|dead or alive|virtua fighter|bloody roar/i, "fighting"],
  [/fifa|nba|madden|nhl|wwe|tony hawk|skate|ssx|mario tennis|mario golf|sports/i, "sports"],
  [/quake|doom|wolfenstein|halo|call of duty|shooter|half-life|unreal|battlefield|metro|sniper|goldeneye|perfect dark|timesplitters|serious sam|raptor|tyrian/i, "shooter"],
  [/final fantasy|pokemon|kingdom hearts|chrono|dragon quest|elder scrolls|fallout|persona|xenoblade|fire emblem|paper mario|mario & luigi|ultima|diablo|souls|witcher|baldurs gate|neverwinter|might and magic|silkroad/i, "rpg"],
  [/mario|sonic|crash|spyro|raymond|rayman|kirby|donkey kong|banjo|jak and daxter|ratchet|celeste|hollow knight|shovel knight|mega man|megaman|vvvvvv|prehistorik|apotris/i, "platformer"],
  [/warcraft|starcraft|command & conquer|command and conquer|age of empires|civilization|total war|advance wars|pikmin|heroes of might|strategy/i, "strategy"],
  [/simcity|the sims|animal crossing|harvest moon|story of seasons|flight simulator|train simulator|roller coaster|tycoon|cities skylines|banished|micropolis|simulation/i, "simulation"],
  [/tetris|puzzle|puyo|dr\. mario|bejeweled|portal|sudoku|minesweeper|apotris|zuma/i, "puzzle"],
  [/guitar hero|rock band|rhythm|beatmania|just dance|osu|music/i, "music"],
  [/grand theft auto|gta|sleeping dogs|prototype|saints row|watch dogs|just cause|red dead|far cry|assassin.?s creed|spider-man|open world/i, "open-world"],
  [/zelda|tomb raider|uncharted|god of war|metal gear|resident evil|silent hill|devil may cry|ninja gaiden|batman|harry potter|buffy|star wars|action.?adventure/i, "action-adventure"],
];

const SYSTEM_RULES = [
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
  [/\bpc\b|windows/i, "Windows"],
];

function readExisting() {
  const indexText = fs.readFileSync(INDEX, "utf8");
  const ids = new Set();
  const titles = new Set();
  const sources = new Set();
  for (const match of indexText.matchAll(/from\s+"\.\/([^"]+)"/g)) {
    const file = path.join(DIR, `${match[1]}.ts`);
    const text = fs.readFileSync(file, "utf8");
    const id = text.match(/id:\s*"([^"]+)"/)?.[1];
    const title = text.match(/\btitle:\s*"([^"]+)"/)?.[1];
    if (id) ids.add(id);
    if (title) titles.add(title.toLowerCase());
    for (const source of text.matchAll(/sources:\s*\[([\s\S]*?)\]/g)) {
      for (const url of source[1].matchAll(/"([^"]+)"/g)) {
        try {
          sources.add(norm(new URL(url[1]).host + new URL(url[1]).pathname));
        } catch {
          /* ignore malformed */
        }
      }
    }
  }
  return { indexText, ids, titles, sources };
}

function loadCatalogMap() {
  if (!fs.existsSync(API_CATALOG)) {
    console.warn("out/api/ports.json not found; catalog enrichment disabled. Run npm run build first.");
    return new Map();
  }
  const data = JSON.parse(fs.readFileSync(API_CATALOG, "utf8"));
  const map = new Map();
  for (const port of data.ports ?? []) {
    const key = norm(port.game ?? "");
    if (!key) continue;
    const current = map.get(key);
    if (!current || (port.originalYear && port.originalYear < current.originalYear)) {
      map.set(key, {
        year: port.originalYear,
        publisher: port.publisher,
        genre: port.genre,
        systems: port.originalSystems,
      });
    }
  }
  return map;
}

async function steamLookup(name) {
  const searchUrl = `https://store.steampowered.com/api/storesearch/?term=${encodeURIComponent(name)}&l=english&cc=us`;
  const searchResponse = await fetch(searchUrl, { headers: { "user-agent": "openportsgames-catalog/1.0" } });
  if (!searchResponse.ok) return null;
  const search = await searchResponse.json();
  const items = Array.isArray(search.items) ? search.items : [];
  const target = norm(name);
  const item = items.find((entry) => norm(entry.name) === target);
  if (!item) return null;
  const detailsResponse = await fetch(
    `https://store.steampowered.com/api/appdetails?appids=${item.id}&l=english&cc=us`,
    { headers: { "user-agent": "openportsgames-catalog/1.0" } },
  );
  if (!detailsResponse.ok) return null;
  const details = await detailsResponse.json();
  const data = details?.[item.id]?.data;
  if (!data) return null;
  const year = Number(String(data.release_date?.date ?? "").match(/\b(19\d{2}|20\d{2})\b/)?.[1] ?? 0);
  const genres = (data.genres ?? []).map((genre) => String(genre.description));
  return {
    year: year >= 1970 ? year : null,
    publisher: (data.publishers ?? [])[0] ?? null,
    genres,
  };
}

function genreFromKeywords(text) {
  for (const [pattern, genre] of GENRE_RULES) {
    if (pattern.test(text)) return genre;
  }
  return null;
}

function genreFromSteam(genres) {
  const text = genres.join(" ");
  if (/racing/i.test(text)) return "racing";
  if (/sports/i.test(text)) return "sports";
  if (/\brpg\b/i.test(text)) return "rpg";
  if (/strategy/i.test(text)) return "strategy";
  if (/simulation/i.test(text)) return "simulation";
  if (/adventure/i.test(text)) return "action-adventure";
  return null;
}

function genreFromLabels(labels) {
  const text = labels.join(" ");
  if (/racing/i.test(text)) return "racing";
  if (/sports/i.test(text)) return "sports";
  if (/role-playing|\brpg\b/i.test(text)) return "rpg";
  if (/strategy/i.test(text)) return "strategy";
  if (/simulation/i.test(text)) return "simulation";
  if (/puzzle/i.test(text)) return "puzzle";
  if (/platform/i.test(text)) return "platformer";
  if (/shooter/i.test(text)) return "shooter";
  if (/fighting/i.test(text)) return "fighting";
  if (/music|rhythm/i.test(text)) return "music";
  if (/open world/i.test(text)) return "open-world";
  if (/adventure/i.test(text)) return "action-adventure";
  return null;
}

function systemsFromOriginal(original) {
  const parts = String(original || "")
    .split(/\s*[/,+&]\s*/)
    .map((part) => part.trim())
    .filter(Boolean);
  const systems = [];
  for (const part of parts) {
    const label = SYSTEM_RULES.find(([pattern]) => pattern.test(part))?.[1];
    if (label && !systems.includes(label)) systems.push(label);
  }
  if (systems.length === 0) systems.push("Unknown");
  return systems;
}

const isConsoleSystems = (systems) =>
  systems.some((system) =>
    /PlayStation|Xbox|Nintendo|Game Boy|Sega|Dreamcast|Saturn|Arcade/.test(system),
  );

function platformsFromProject(project) {
  const platforms = [];
  const text = `${project.description} ${project.original}`;
  if (project.targets.includes("web")) platforms.push("web");
  if (project.targets.includes("android")) platforms.push("android");
  if (project.targets.includes("pc")) {
    platforms.push("windows");
    if (/linux/i.test(text)) platforms.push("linux");
    if (/macos|mac os|apple silicon|mac\b/i.test(text)) platforms.push("macos");
  }
  if (platforms.length === 0) platforms.push("windows");
  return [...new Set(platforms)];
}

function semver(raw) {
  if (!raw) return null;
  const match = String(raw).match(/(\d+)\.(\d+)(?:\.(\d+))?([.-][0-9A-Za-z]+)?/);
  if (!match) return null;
  return `${match[1]}.${match[2]}${match[3] ? `.${match[3]}` : ""}${match[4] ?? ""}`;
}

function isoDate(value) {
  if (typeof value !== "string") return null;
  const date = value.slice(0, 10);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return null;
  return date <= TODAY && date >= "1970-01-01" ? date : null;
}

function uniqueTitle(base, owner, titles) {
  let title = base.slice(0, 80);
  if (!titles.has(title.toLowerCase())) return title;
  const suffix = ` (${owner})`;
  title = `${base.slice(0, Math.max(1, 80 - suffix.length))}${suffix}`;
  if (!titles.has(title.toLowerCase())) return title;
  return null;
}

function uniqueId(base, owner, ids) {
  let id = slugify(base);
  if (!id) id = slugify(owner);
  if (!ids.has(id)) return id;
  id = slugify(`${base}-${owner}`);
  if (!ids.has(id)) return id;
  return null;
}

async function mapLimit(items, limit, worker) {
  const results = new Array(items.length);
  let cursor = 0;
  async function run() {
    while (cursor < items.length) {
      const index = cursor++;
      results[index] = await worker(items[index], index);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, run));
  return results;
}

async function main() {
  const projects = JSON.parse(fs.readFileSync(PROJECTS, "utf8"));
  const { indexText, ids, titles, sources } = readExisting();
  const catalog = loadCatalogMap();
  const wikidataPath = path.join(ROOT, "public/data/wikidata-enrichment.json");
  const wikidata = fs.existsSync(wikidataPath)
    ? JSON.parse(fs.readFileSync(wikidataPath, "utf8"))
    : {};

  const knownSource = (project) => {
    try {
      const url = new URL(project.url);
      return sources.has(norm(url.host + url.pathname));
    } catch {
      return false;
    }
  };

  const candidates = projects
    .filter((project) => project.url?.startsWith("https://"))
    .filter((project) => !knownSource(project))
    .filter((project) => project.owner.length >= 2)
    .filter((project) => project.title.length >= 3 && project.game.length >= 2)
    .filter((project) => !titles.has(project.title.toLowerCase()))
    .sort((a, b) => {
      const playableA = a.release || a.browser ? 1 : 0;
      const playableB = b.release || b.browser ? 1 : 0;
      if (playableA !== playableB) return playableB - playableA;
      if (b.stars !== a.stars) return b.stars - a.stars;
      return String(b.updated).localeCompare(String(a.updated));
    });

  const picked = [];
  let skippedNoYear = 0;
  let skippedConsoleSteam = 0;
  let skippedDuplicate = 0;

  await mapLimit(candidates, 5, async (project) => {
    if (picked.length >= LIMIT + 80) return;
    const key = norm(project.game);
    const existing = catalog.get(key);
    const parsedYear = Number(
      `${project.title} ${project.description}`.match(/\b(19[7-9]\d|20[0-2]\d)\b/)?.[1] ?? 0,
    );
    const wikidataProject = wikidata[project.url] ?? null;
    let steam = null;
    if (!existing?.year && !parsedYear && !wikidataProject?.year) {
      try {
        steam = await steamLookup(project.game);
        await new Promise((resolve) => setTimeout(resolve, 120));
      } catch {
        steam = null;
      }
    }
    const yearSource = existing?.year
      ? "catalog"
      : parsedYear
        ? "parsed"
        : wikidataProject?.year
          ? "wikidata"
          : steam?.year
            ? "steam"
            : null;
    const year = existing?.year || parsedYear || wikidataProject?.year || steam?.year || 0;
    if (year < 1970 || year > 2026) {
      skippedNoYear++;
      return;
    }
    const systems = systemsFromOriginal(project.original);
    if (yearSource === "steam" && isConsoleSystems(systems)) {
      skippedConsoleSteam++;
      return;
    }
    const title = uniqueTitle(project.title, project.owner, titles);
    const id = uniqueId(project.id || project.title, project.owner, ids);
    if (!title || !id) {
      skippedDuplicate++;
      return;
    }
    const genre =
      existing?.genre ||
      genreFromKeywords(`${project.game} ${project.title} ${project.description}`) ||
      genreFromLabels(wikidataProject?.genres ?? []) ||
      genreFromSteam(steam?.genres ?? []) ||
      "action-adventure";
    const publisher = (
      existing?.publisher ||
      wikidataProject?.publisher ||
      steam?.publisher ||
      "Unknown"
    ).slice(0, 80);
    const platforms = platformsFromProject(project);
    const version = semver(project.release);
    const date = version ? isoDate(project.releaseDate) ?? TODAY : null;
    const typeEn = TYPE_EN[project.type] ?? project.type;
    const typeEs = TYPE_ES[project.type] ?? project.type;
    const platformEn = platforms.map((p) => ({ windows: "Windows", linux: "Linux", macos: "macOS", android: "Android", web: "the browser" })[p] ?? p).join(", ");
    const platformEs = platforms.map((p) => ({ windows: "Windows", linux: "Linux", macos: "macOS", android: "Android", web: "el navegador" })[p] ?? p).join(", ");
    const playEn = project.browser ? "Playable in the browser." : "Bring your own copy of the game.";
    const playEs = project.browser ? "Jugable en el navegador." : "Aporta tu propia copia del juego.";

    picked.push({
      id,
      title,
      game: project.game.slice(0, 80),
      owner: project.owner,
      publisher,
      year,
      genre,
      portType: TYPE_PORT[project.type] ?? "source-port",
      platforms,
      status: version ? "beta" : "alpha",
      version,
      date,
      sources: [project.url],
      license: project.license || "NOASSERTION",
      licenseNote: project.license ? null : "no SPDX license in the repository",
      openSource: Boolean(project.repo),
      systems,
      notes: `${project.game}: ${typeEn} by ${project.owner} for ${platformEn}. ${playEn}`,
      notesEs: `${project.game}: ${typeEs} de ${project.owner} para ${platformEs}. ${playEs}`,
      wip: !version,
    });
    titles.add(title.toLowerCase());
    ids.add(id);
  });

  picked.sort((a, b) => b.year - a.year || a.title.localeCompare(b.title));
  const selected = picked.slice(0, LIMIT);

  const camel = (id) => { const value = id.split("-").map((word, i) => (i === 0 ? word : word[0].toUpperCase() + word.slice(1))).join(""); return /^\d/.test(value) ? `p${value}` : value; };
  const files = [];
  for (const entry of selected) {
    const license = entry.licenseNote
      ? `{ spdx: ${q(entry.license)}, note: ${q(entry.licenseNote)} }`
      : `{ spdx: ${q(entry.license)} }`;
    const body = `import type { Port } from "@/lib/ports/schema";

export const ${camel(entry.id)}: Port = {
  schema: "port",
  id: ${q(entry.id)},
  title: ${q(entry.title)},
  game: ${q(entry.game)},
  developers: [${q(entry.owner)}],
  publisher: ${q(entry.publisher)},
  originalYear: ${entry.year},
  portType: ${q(entry.portType)},
  genre: ${q(entry.genre)},
  openSource: ${entry.openSource ? "true" : "false"},
  originalGameLicense: "proprietary",
  platforms: [${entry.platforms.map(q).join(", ")}],
  status: ${q(entry.status)},
  release: { version: ${entry.version ? q(entry.version) : "null"}, date: ${entry.date ? q(entry.date) : "null"} },
  sources: [${q(entry.sources[0])}],
  license: ${license},
  verified: false,
  sourceVerified: true,
${entry.wip ? "  wip: true,\n" : ""}  addedAt: "${TODAY}",
  originalSystems: [${entry.systems.map(q).join(", ")}],
  notes: ${q(entry.notes)},
  notesEs: ${q(entry.notesEs)},
};
`;
    fs.writeFileSync(path.join(DIR, `${entry.id}.ts`), body, "utf8");
    files.push([entry.id, camel(entry.id), entry.systems]);
  }

  let idx = indexText;
  const importAnchor = 'import { sm64ex } from "./sm64ex";';
  idx = idx.replace(
    importAnchor,
    `${importAnchor}\n${files.map(([id, c]) => `import { ${c} } from "./${id}";`).join("\n")}`,
  );
  const arrayAnchor = "\n];";
  const lastArray = idx.lastIndexOf(arrayAnchor);
  idx = `${idx.slice(0, lastArray)}\n${files.map(([, c]) => `  ${c},`).join("\n")}${idx.slice(lastArray)}`;
  fs.writeFileSync(INDEX, idx, "utf8");

  let meta = fs.readFileSync(META, "utf8");
  const metaAnchor = "\n};";
  const lastMeta = meta.lastIndexOf(metaAnchor);
  meta = `${meta.slice(0, lastMeta)}\n${files
    .map(([id, , systems]) => `  ${q(id)}: [${systems.map(q).join(", ")}],`)
    .join("\n")}${meta.slice(lastMeta)}`;
  fs.writeFileSync(META, meta, "utf8");

  console.log(
    `wrote ${files.length} ports (${picked.length} enriched, ${skippedNoYear} without year, ${skippedConsoleSteam} console/Steam-only, ${skippedDuplicate} duplicate titles)`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
