// Browser ports and recent native ports discovered in the October 2026 sweep.
const fs = require("fs");
const path = require("path");

const DIR = path.join(process.cwd(), "src/content/ports");

const E = [
  {
    id: "resident-evil-outbreak-browser",
    title: "Resident Evil Outbreak (Browser)",
    game: "Resident Evil Outbreak",
    dev: "OutbreakWeb",
    pub: "Capcom",
    year: 2003,
    genre: "action-adventure",
    sys: "PlayStation 2",
    type: "recompilation",
    status: "beta",
    version: null,
    date: null,
    platforms: ["web"],
    repo: "https://outbreakweb.com",
    license: "NOASSERTION",
    openSource: false,
    warning: "Unofficial fan project with its own server; Capcom has not endorsed it.",
    warningEs: "Proyecto fan no oficial con servidor propio; Capcom no lo ha respaldado.",
    en: "Browser version of the Resident Evil Outbreak decomp, covering File #1 and File #2 with scenarios, online play and private rooms. Unofficial fan project.",
    es: "Versión de navegador de la decompilación de Resident Evil Outbreak, con File #1 y File #2, escenarios, online y salas privadas. Proyecto fan no oficial.",
  },
  {
    id: "war-of-the-monsters-recomp",
    title: "War of the Monsters Recompiled",
    game: "War of the Monsters",
    dev: "yanm1103",
    pub: "Sony Computer Entertainment",
    year: 2005,
    genre: "fighting",
    sys: "PlayStation 2",
    type: "recompilation",
    status: "alpha",
    version: null,
    date: null,
    platforms: ["windows"],
    repo: "https://github.com/yanm1103/War_of_the_Monsters_recomp",
    license: "GPL-3.0",
    en: "Work-in-progress static recompilation of War of the Monsters (PS2) with quality-of-life fixes and new features. Bring your own disc.",
    es: "Recompilación estática en curso de War of the Monsters (PS2), con mejoras de calidad de vida y funciones nuevas. Aporta tu propio disco.",
  },
  {
    id: "champions-of-norrath-recomp",
    title: "Champions of Norrath Recompiled",
    game: "Champions of Norrath",
    dev: "sandroct",
    pub: "Sony Online Entertainment",
    year: 2004,
    genre: "rpg",
    sys: "PlayStation 2",
    type: "recompilation",
    status: "alpha",
    version: null,
    date: null,
    platforms: ["windows"],
    repo: "https://github.com/sandroct/CoNRecomp",
    license: "GPL-3.0",
    en: "Work-in-progress native Windows port of Champions of Norrath built with PS2Recomp. Bring your own game disc.",
    es: "Port nativo en curso para Windows de Champions of Norrath, construido con PS2Recomp. Aporta tu propio disco del juego.",
  },
  {
    id: "tenchu-z-recomp",
    title: "Tenchu Z Recompiled",
    game: "Tenchu Z",
    dev: "Llamapixels",
    pub: "Microsoft Game Studios",
    year: 2008,
    genre: "action-adventure",
    sys: "Xbox 360",
    type: "recompilation",
    status: "alpha",
    version: null,
    date: null,
    platforms: ["windows"],
    repo: "https://github.com/Llamapixels/TenchuZRecomp",
    license: "NOASSERTION",
    licenseNote: "no SPDX license in the repository",
    en: "Work-in-progress HoloCatt static recompilation of Tenchu Z (Xbox 360) for Windows. Bring your own disc image.",
    es: "Recompilación estática HoloCatt en curso de Tenchu Z (Xbox 360) para Windows. Aporta tu propia imagen del disco.",
  },
  {
    id: "mirror-s-edge-android",
    title: "Mirror's Edge (Android)",
    game: "Mirror's Edge",
    dev: "MoonCellar-Team",
    pub: "Electronic Arts",
    year: 2010,
    genre: "action-adventure",
    sys: "iOS",
    type: "source-port",
    status: "beta",
    version: "1.0.1",
    date: "2026-10-22",
    platforms: ["android", "windows", "linux"],
    repo: "https://github.com/MoonCellar-Team/Glassline",
    license: "NOASSERTION",
    licenseNote: "no SPDX license in the repository",
    en: "Unofficial port of the 2010 iPad version of Mirror's Edge to Android, Linux and Windows, with touch controls and gamepad support.",
    es: "Port no oficial de la versión iPad de Mirror's Edge (2010) a Android, Linux y Windows, con controles táctiles y mando.",
  },
  {
    id: "ultimate-mortal-kombat-3-ios-pc",
    title: "Ultimate Mortal Kombat 3 (iOS) PC",
    game: "Ultimate Mortal Kombat 3",
    dev: "MaryNCRT",
    pub: "Warner Bros. Games",
    year: 2010,
    genre: "fighting",
    sys: "iOS",
    type: "decompilation",
    status: "beta",
    version: null,
    date: null,
    platforms: ["windows"],
    repo: "https://github.com/MaryNCRT/Ultimate-Mortal-Kombat-3-iOS-Decompiled",
    license: "NOASSERTION",
    licenseNote: "no SPDX license in the repository",
    en: "Native PC port of the iOS release of Ultimate Mortal Kombat 3, with DirectX, Vulkan and OpenGL renderers, widescreen and multiplayer. Original assets required.",
    es: "Port nativo para PC de la versión iOS de Ultimate Mortal Kombat 3, con render DirectX, Vulkan y OpenGL, widescreen y multijugador. Requiere recursos originales.",
  },
  {
    id: "dead-or-alive-2-ultimate-recomp",
    title: "Dead or Alive 2 Ultimate Recompiled",
    game: "Dead or Alive 2 Ultimate",
    dev: "NoRain211",
    pub: "Tecmo",
    year: 2004,
    genre: "fighting",
    sys: "Xbox",
    type: "recompilation",
    status: "beta",
    version: "0.1.2",
    date: "2026-10-20",
    platforms: ["windows"],
    repo: "https://github.com/NoRain211/doa2u-re",
    license: "GPL-3.0",
    en: "Static recompilation of Dead or Alive 2 Ultimate (Xbox) for Windows with a hand-written runtime. Requires your own copy of the game.",
    es: "Recompilación estática de Dead or Alive 2 Ultimate (Xbox) para Windows con un runtime propio. Requiere tu propia copia del juego.",
  },
  {
    id: "a2-racer-2-re",
    title: "A2 Racer II (Browser)",
    game: "A2 Racer II",
    dev: "berobloom",
    pub: "Davilex Games",
    year: 1998,
    genre: "racing",
    sys: "Windows",
    type: "reimplementation",
    status: "beta",
    version: null,
    date: null,
    platforms: ["linux", "web"],
    repo: "https://github.com/berobloom/a2racer2-re",
    license: "NOASSERTION",
    licenseNote: "no SPDX license in the repository",
    en: "Reverse engineering and C reimplementation of A2 Racer II for Linux and the browser via WebAssembly. Needs your own game data.",
    es: "Ingeniería inversa y reimplementación en C de A2 Racer II para Linux y el navegador mediante WebAssembly. Necesita tus propios datos del juego.",
  },
  {
    id: "sonic-advance-web",
    title: "Sonic Advance (Web)",
    game: "Sonic Advance",
    dev: "NahuelGenchi",
    pub: "Sega",
    year: 2003,
    genre: "platformer",
    sys: "Game Boy Advance",
    type: "source-port",
    status: "beta",
    version: null,
    date: null,
    platforms: ["web"],
    repo: "https://github.com/NahuelGenchi/onsoku-advance",
    license: "GPL-3.0",
    en: "From-scratch front-end port of Sonic Advance that runs in the browser without emulation, using assets extracted from your own ROM.",
    es: "Port del front-end de Sonic Advance hecho desde cero que corre en el navegador sin emulación, usando recursos extraídos de tu propia ROM.",
  },
  {
    id: "gta-vice-city-web",
    title: "Grand Theft Auto: Vice City (Web)",
    game: "Grand Theft Auto: Vice City",
    dev: "origami-ltd",
    pub: "Rockstar Games",
    year: 2002,
    genre: "open-world",
    sys: "Windows",
    type: "recompilation",
    status: "beta",
    version: null,
    date: null,
    platforms: ["web"],
    repo: "https://github.com/origami-ltd/wasm-revc",
    license: "NOASSERTION",
    licenseNote: "no SPDX license in the repository",
    en: "WebAssembly and WebGPU port of Grand Theft Auto: Vice City that streams your own game files in the browser. No game data included.",
    es: "Port a WebAssembly y WebGPU de Grand Theft Auto: Vice City que transmite tus propios archivos en el navegador. No incluye datos del juego.",
  },
  {
    id: "cnc-generals-zero-hour-web",
    title: "Command & Conquer: Generals - Zero Hour (Web)",
    game: "Command & Conquer: Generals - Zero Hour",
    dev: "origami-ltd",
    pub: "Electronic Arts",
    year: 2003,
    genre: "strategy",
    sys: "Windows",
    type: "recompilation",
    status: "beta",
    version: null,
    date: null,
    platforms: ["web"],
    repo: "https://github.com/origami-ltd/wasm-generals",
    license: "NOASSERTION",
    licenseNote: "no SPDX license in the repository",
    en: "WebAssembly and WebGPU port of Command & Conquer: Generals - Zero Hour that loads your own game files. No assets are bundled.",
    es: "Port a WebAssembly y WebGPU de Command & Conquer: Generals - Zero Hour que carga tus propios archivos. No incluye recursos.",
  },
  {
    id: "vvvvvv-web",
    title: "VVVVVV (Web)",
    game: "VVVVVV",
    dev: "cyanpurr",
    pub: "Terry Cavanagh",
    year: 2010,
    genre: "platformer",
    sys: "Windows",
    type: "source-port",
    status: "beta",
    version: null,
    date: null,
    platforms: ["web"],
    repo: "https://github.com/cyanpurr/VVVVVV-WASM",
    license: "NOASSERTION",
    licenseNote: "no license file in the repository",
    en: "WebAssembly port of VVVVVV for the browser, built from the open-source game. Bring your own data files.",
    es: "Port a WebAssembly de VVVVVV para el navegador, construido desde el juego open source. Aporta tus propios archivos de datos.",
  },
  {
    id: "quake-ii-web",
    title: "Quake II (Web)",
    game: "Quake II",
    dev: "GMH-Code",
    pub: "id Software",
    year: 1997,
    genre: "shooter",
    sys: "Windows",
    type: "source-port",
    status: "beta",
    version: null,
    date: null,
    platforms: ["web"],
    repo: "https://github.com/GMH-Code/Qwasm2",
    license: "NOASSERTION",
    licenseNote: "no SPDX license in the repository",
    en: "Quake II engine in the browser with WebGL 2 and software-rendered modes. Bring your own game data.",
    es: "Motor de Quake II en el navegador con WebGL 2 y modos de render por software. Aporta tus propios datos del juego.",
  },
];

const camel = (id) =>
  id.split("-").map((w, i) => (i === 0 ? w : w[0].toUpperCase() + w.slice(1))).join("");
const q = (v) => JSON.stringify(v);

const indexBefore = fs.readFileSync(path.join(DIR, "index.ts"), "utf8");
const existingIds = new Set();
const existingTitles = new Set();
for (const m of indexBefore.matchAll(/from\s+"\.\/([^"]+)"/g)) {
  const src = fs.readFileSync(path.join(DIR, `${m[1]}.ts`), "utf8");
  const id = src.match(/id:\s*"([^"]+)"/)?.[1];
  const title = src.match(/\btitle:\s*"([^"]+)"/)?.[1];
  if (id) existingIds.add(id);
  if (title) existingTitles.add(title.toLowerCase());
}
for (const r of E) {
  if (existingIds.has(r.id)) throw new Error(`duplicate id ${r.id}`);
  if (existingTitles.has(r.title.toLowerCase())) throw new Error(`duplicate title ${r.title}`);
}

const files = [];
for (const r of E) {
  const license = r.licenseNote
    ? `{ spdx: ${q(r.license)}, note: ${q(r.licenseNote)} }`
    : `{ spdx: ${q(r.license)} }`;
  const body = `import type { Port } from "@/lib/ports/schema";

export const ${camel(r.id)}: Port = {
  schema: "port",
  id: ${q(r.id)},
  title: ${q(r.title)},
  game: ${q(r.game)},
  developers: [${q(r.dev)}],
  publisher: ${q(r.pub)},
  originalYear: ${r.year},
  portType: ${q(r.type)},
  genre: ${q(r.genre)},
  openSource: ${r.openSource === false ? "false" : "true"},
  originalGameLicense: "proprietary",
  platforms: [${r.platforms.map(q).join(", ")}],
  status: ${q(r.status)},
  release: { version: ${r.version ? q(r.version) : "null"}, date: ${r.date ? q(r.date) : "null"} },
  sources: [${q(r.repo)}],
  license: ${license},
  verified: false,
  sourceVerified: true,
  addedAt: "2026-10-23",
  originalSystems: [${q(r.sys)}],
  notes: ${q(r.en)},
  notesEs: ${q(r.es)},
${r.warning ? `  warning: ${q(r.warning)},\n  warningEs: ${q(r.warningEs)},\n` : ""}};
`;
  fs.writeFileSync(path.join(DIR, `${r.id}.ts`), body, "utf8");
  files.push([r.id, camel(r.id), r.sys]);
}

let idx = indexBefore;
const importAnchor = 'import { sm64ex } from "./sm64ex";';
if (!idx.includes(importAnchor)) throw new Error("import anchor not found");
idx = idx.replace(
  importAnchor,
  importAnchor + "\n" + files.map(([id, c]) => `import { ${c} } from "./${id}";`).join("\n"),
);
const arrayAnchor = "\n];";
const lastArray = idx.lastIndexOf(arrayAnchor);
if (lastArray === -1) throw new Error("array anchor not found");
idx = idx.slice(0, lastArray) + "\n" + files.map(([, c]) => `  ${c},`).join("\n") + idx.slice(lastArray);
fs.writeFileSync(path.join(DIR, "index.ts"), idx, "utf8");

let meta = fs.readFileSync(path.join(DIR, "meta.ts"), "utf8");
const metaAnchor = "\n};";
const lastMeta = meta.lastIndexOf(metaAnchor);
if (lastMeta === -1) throw new Error("meta anchor not found");
meta =
  meta.slice(0, lastMeta) +
  "\n" +
  files.map(([id, , sys]) => `  ${q(id)}: [${q(sys)}],`).join("\n") +
  meta.slice(lastMeta);
fs.writeFileSync(path.join(DIR, "meta.ts"), meta, "utf8");

console.log(`wrote ${files.length} port files and wired index.ts + meta.ts`);
