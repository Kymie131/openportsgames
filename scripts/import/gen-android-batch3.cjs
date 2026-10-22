// Third batch of native Android ports from awesome-android-native-ports.
// Remaining entries that are actual games (tools and frameworks are skipped).
// Repository metadata checked through the GitHub API on 2026-10-22.
const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const DIR = path.join(ROOT, "src/content/ports");

const E = [
  {
    id: "aerofoil-android",
    title: "Aerofoil (Glider PRO)",
    game: "Glider PRO",
    dev: "elasota",
    pub: "Casady & Greene",
    year: 1994,
    genre: "simulation",
    sys: "Macintosh",
    type: "source-port",
    status: "stable",
    version: "1.1.2",
    date: "2021-11-10",
    platforms: ["android"],
    repo: "elasota/Aerofoil",
    license: "GPL-2.0",
    en: "Multiplatform port of Glider PRO, the classic Macintosh paper airplane game, with an Android build and the original house layouts.",
    es: "Port multiplataforma de Glider PRO, el clásico juego de aviones de papel de Macintosh, con build para Android y las casas originales.",
  },
  {
    id: "micropolis-android",
    title: "Micropolis (Android)",
    game: "Micropolis",
    dev: "ds17f",
    pub: "Maxis",
    year: 1989,
    genre: "simulation",
    sys: "MS-DOS",
    type: "reimplementation",
    status: "beta",
    version: "0.1.7",
    date: "2026-09-30",
    platforms: ["android"],
    repo: "ds17f/andropolis",
    license: "GPL-3.0",
    en: "Native Android port of Micropolis, the open-source SimCity engine, running the MicropolisCore C++ core through NDK and JNI.",
    es: "Port nativo para Android de Micropolis, el motor open source de SimCity, ejecutando el núcleo C++ MicropolisCore mediante NDK y JNI.",
  },
  {
    id: "prehistorik-2-android",
    title: "Prehistorik 2 (Android)",
    game: "Prehistorik 2",
    dev: "missingno7",
    pub: "Titus Interactive",
    year: 1993,
    genre: "platformer",
    sys: "MS-DOS",
    type: "source-port",
    status: "beta",
    version: "0.4.0",
    date: "2026-07-12",
    platforms: ["android"],
    repo: "missingno7/pre2_port",
    license: "NOASSERTION",
    licenseNote: "no license file in the repository",
    en: "Source-port workbench for Prehistorik 2 with an arm64 Android APK. Bring your own copy of the DOS game.",
    es: "Banco de trabajo de código fuente de Prehistorik 2 con APK arm64 para Android. Aporta tu propia copia del juego de DOS.",
  },
  {
    id: "richman-4-android",
    title: "Richman 4 (Android)",
    game: "Richman 4",
    dev: "lhr0909",
    pub: "Softstar",
    year: 1998,
    genre: "strategy",
    sys: "Windows",
    type: "source-port",
    status: "alpha",
    version: null,
    date: null,
    platforms: ["android", "macos"],
    repo: "lhr0909/richman4-remastered",
    license: "GPL-3.0",
    en: "Native C++ and SDL3 port of Richman 4 (大富翁4) for macOS and Android. Requires your own copy of the game.",
    es: "Port nativo en C++ y SDL3 de Richman 4 (大富翁4) para macOS y Android. Requiere tu propia copia del juego.",
  },
  {
    id: "space-rangers-hd-android",
    title: "Space Rangers HD (Android)",
    game: "Space Rangers HD: A War Apart",
    dev: "pakompom",
    pub: "1C Company",
    year: 2013,
    genre: "strategy",
    sys: "Windows",
    type: "source-port",
    status: "beta",
    version: null,
    date: "2026-10-15",
    platforms: ["android", "windows", "linux"],
    repo: "pakompom/SpaceRangersHD_FPC",
    license: "NOASSERTION",
    licenseNote: "no SPDX license in the repository",
    en: "Cross-platform port of Space Rangers HD: A War Apart built from the decompilation, with an Android arm64 APK. No game data included.",
    es: "Port multiplataforma de Space Rangers HD: A War Apart construido desde la descompilación, con APK arm64 para Android. No incluye datos del juego.",
  },
  {
    id: "touhou-6-sdl2-android",
    title: "Touhou 6 (SDL2)",
    game: "Touhou 6: The Embodiment of Scarlet Devil",
    dev: "CNTianQi233",
    pub: "Team Shanghai Alice",
    year: 2002,
    genre: "shooter",
    sys: "Windows",
    type: "source-port",
    status: "beta",
    version: "1.1.0",
    date: "2026-05-20",
    platforms: ["android"],
    repo: "CNTianQi233/th06-sdl2",
    license: "CC0-1.0",
    en: "Rebuild of the Touhou 6 decompilation that replaces Direct3D 8 with SDL2 and OpenGL, adding an Android build. Bring your own game data.",
    es: "Reconstrucción de la descompilación de Touhou 6 que sustituye Direct3D 8 por SDL2 y OpenGL, añadiendo build para Android. Aporta tus propios datos del juego.",
  },
  {
    id: "white-album-2-android",
    title: "WHITE ALBUM2 (Android)",
    game: "WHITE ALBUM2",
    dev: "dorakyuraduang",
    pub: "Aquaplus",
    year: 2011,
    genre: "rpg",
    sys: "Windows",
    type: "recompilation",
    status: "alpha",
    version: "0.3b",
    date: "2026-08-31",
    platforms: ["android", "windows"],
    repo: "dorakyuraduang/whitealbum2-Android",
    license: "MIT",
    en: "Static recompilation project for WHITE ALBUM2 with Windows x64 and Android ARM64 targets. Bring your own game files.",
    es: "Proyecto de recompilación estática de WHITE ALBUM2 con objetivos Windows x64 y Android ARM64. Aporta tus propios archivos del juego.",
  },
  {
    id: "ultima-5-android",
    title: "Ultima V (Android)",
    game: "Ultima V: Warriors of Destiny",
    dev: "synthwave-pixel",
    pub: "Origin Systems",
    year: 1988,
    genre: "rpg",
    sys: "MS-DOS",
    type: "reimplementation",
    status: "beta",
    version: "1.1.140",
    date: "2026-10-22",
    platforms: ["android"],
    repo: "synthwave-pixel/ultima5",
    license: "NOASSERTION",
    licenseNote: "no SPDX license in the repository",
    en: "Modernized Ultima V engine with an Android build, adding a touch-friendly interface on top of the original DOS role-playing game.",
    es: "Motor modernizado de Ultima V con build para Android, que añade una interfaz táctil sobre el juego de rol original de DOS.",
  },
  {
    id: "openttd-android",
    title: "OpenTTD (Android)",
    game: "Transport Tycoon Deluxe",
    dev: "pelya",
    pub: "MicroProse",
    year: 1994,
    genre: "simulation",
    sys: "MS-DOS",
    type: "reimplementation",
    status: "beta",
    version: "1.9.1.77",
    date: "2019-04-26",
    platforms: ["android"],
    repo: "pelya/openttd-android",
    license: "NOASSERTION",
    licenseNote: "no SPDX license in the repository",
    en: "Android build of OpenTTD with touch controls and the full transport management simulation.",
    es: "Build para Android de OpenTTD con controles táctiles y toda la simulación de gestión de transporte.",
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
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: [${r.platforms.map(q).join(", ")}],
  status: ${q(r.status)},
  release: { version: ${r.version ? q(r.version) : "null"}, date: ${r.date ? q(r.date) : "null"} },
  sources: [${q(`https://github.com/${r.repo}`)}],
  license: ${license},
  verified: false,
  sourceVerified: true,
  addedAt: "2026-10-22",
  originalSystems: [${q(r.sys)}],
  notes: ${q(r.en)},
  notesEs: ${q(r.es)},
};
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

console.log(`wrote ${files.length} Android port files and wired index.ts + meta.ts`);
