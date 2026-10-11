const fs = require("fs");
const path = require("path");
const ROOT = "C:/Users/israe/OneDrive/Documentos/REPOS/pagina_web_ports_videogames/openportsgames";
const DIR = ROOT + "/src/content/ports";
const NA = { spdx: "NOASSERTION", note: "no SPDX license in the repository" };

const E = [
  ["jet-moto-anthology-recomp", "Jet Moto Anthology Recompiled", "Jet Moto", ["GTTeancum"], "Sony Computer Entertainment", 1996, "racing", ["windows"], "beta", "recompilation", ["https://github.com/GTTeancum/Jet-Moto-Anthology"], NA, "PlayStation",
    "Cumulative recompilation project for the Jet Moto games (PlayStation) with rendering improvements. It needs your own copy of the games.",
    "Proyecto de recompilación acumulativo de los juegos Jet Moto (PlayStation) con mejoras de renderizado. Necesita tu propia copia de los juegos."],
  ["legend-of-dragoon-severed-chains", "Severed Chains (The Legend of Dragoon)", "The Legend of Dragoon", ["Legend-of-Dragoon-Modding"], "Sony Computer Entertainment", 1999, "rpg", ["windows", "linux", "macos"], "beta", "decompilation", ["https://github.com/Legend-of-Dragoon-Modding/Severed-Chains"], NA, "PlayStation",
    "Severed Chains ports The Legend of Dragoon to PC, macOS and Linux from a reverse-engineered codebase. It adds modern options and needs your own disc.",
    "Severed Chains lleva The Legend of Dragoon a PC, macOS y Linux a partir de un código reversado. Añade opciones modernas y necesita tu propio disco."],
  ["street-fighter-alpha-3-recomp", "Street Fighter Alpha 3 Recompiled", "Street Fighter Alpha 3", ["TechnicallyComputers"], "Capcom", 1998, "fighting", ["windows"], "beta", "recompilation", ["https://github.com/TechnicallyComputers/Street-Fighter-Alpha-3-Recomp"], NA, "PlayStation",
    "Static recompilation of Street Fighter Alpha 3 (PlayStation) built with the PSXRecomp toolkit. It requires your own copy of the game.",
    "Recompilación estática de Street Fighter Alpha 3 (PlayStation) construida con el kit PSXRecomp. Requiere tu propia copia del juego."],
  ["vandal-hearts-recomp", "Vandal Hearts Recompiled", "Vandal Hearts", ["HalmyLyseas"], "Konami", 1996, "strategy", ["windows", "linux"], "beta", "decompilation", ["https://github.com/HalmyLyseas/VandalHearts-PcPort"], { spdx: "GPL-2.0" }, "PlayStation",
    "Native PC port of Vandal Hearts built on a byte-exact matching decompilation. It builds for Windows and Linux and needs your own disc.",
    "Port nativo para PC de Vandal Hearts construido sobre una decompilación byte-exact. Compila para Windows y Linux y necesita tu propio disco."],
  ["toy-story-2-recomp", "Toy Story 2 Recompiled", "Toy Story 2: Buzz Lightyear to the Rescue", ["PeriBluGaming"], "Activision", 1999, "platformer", ["windows", "linux", "macos"], "beta", "recompilation", ["https://github.com/PeriBluGaming/ToyStory2Recomp"], NA, "PlayStation",
    "Static recompilation of Toy Story 2: Buzz Lightyear to the Rescue (PlayStation) using PSXRecomp. It needs your own copy of the game.",
    "Recompilación estática de Toy Story 2: Buzz Lightyear to the Rescue (PlayStation) con PSXRecomp. Necesita tu propia copia del juego."],
  ["yu-gi-oh-forbidden-memories-recomp", "Yu-Gi-Oh! Forbidden Memories Recompiled", "Yu-Gi-Oh! Forbidden Memories", ["Unchiga"], "Konami", 1999, "strategy", ["windows", "linux"], "beta", "recompilation", ["https://github.com/Unchiga/Yu-Gi-Oh-Forbidden-Memories-Recompiled"], NA, "PlayStation",
    "Decompilation and recompilation of Yu-Gi-Oh! Forbidden Memories (PlayStation) to a native executable. It needs your own copy of the game.",
    "Decompilación y recompilación de Yu-Gi-Oh! Forbidden Memories (PlayStation) a un ejecutable nativo. Necesita tu propia copia del juego."],
  ["street-fighter-ex2-plus-recomp", "Street Fighter EX2 Plus Recompiled", "Street Fighter EX2 Plus", ["strider973"], "Capcom", 1999, "fighting", ["windows"], "beta", "recompilation", ["https://github.com/strider973/Street-Fighter-EX2-Plus-Recompiled"], NA, "PlayStation",
    "Static recompilation of Street Fighter EX2 Plus (PlayStation) built on PSXRecomp. It requires your own copy of the game.",
    "Recompilación estática de Street Fighter EX2 Plus (PlayStation) construida sobre PSXRecomp. Requiere tu propia copia del juego."],
  ["r-type-delta-recomp", "R-Type Delta Recompiled", "R-Type Delta", ["alexbeavs"], "Irem", 1998, "shooter", ["windows", "linux", "macos"], "alpha", "recompilation", ["https://github.com/alexbeavs-ps1-ports/r-type-delta-recomp"], NA, "PlayStation",
    "Bare recompilation of R-Type Delta (PlayStation) from the PSXRecomp toolkit. It builds for Windows, Linux and macOS and needs your own disc plus a BIOS.",
    "Recompilación básica de R-Type Delta (PlayStation) con el kit PSXRecomp. Compila para Windows, Linux y macOS y necesita tu propio disco y una BIOS."],
  ["mad-stalker-recomp", "Mad Stalker: Full Metal Force Recompiled", "Mad Stalker: Full Metal Force", ["omegakatana92"], "Family Soft", 1994, "fighting", ["windows", "linux"], "beta", "recompilation", ["https://github.com/omegakatana92/MadStalkerRecomp"], NA, "PlayStation",
    "Fan-made recompilation of Mad Stalker: Full Metal Force (PlayStation), still in progress. It requires your own disc and ships no assets.",
    "Recompilación hecha por fans de Mad Stalker: Full Metal Force (PlayStation), todavía en progreso. Requiere tu propio disco y no incluye recursos."],
  ["mega-man-8-recomp", "Mega Man 8 Recompiled", "Mega Man 8", ["omegakatana92"], "Capcom", 1996, "platformer", ["windows"], "beta", "recompilation", ["https://github.com/omegakatana92/Mega-Man-8-Recomp"], { spdx: "GPL-3.0" }, "PlayStation",
    "Recompilation of Mega Man 8 (PlayStation) built with mstan's PSXRecomp tool. It includes no game assets and needs your own copy.",
    "Recompilación de Mega Man 8 (PlayStation) construida con la herramienta PSXRecomp de mstan. No incluye recursos del juego y necesita tu propia copia."],
  ["sonic-secret-rings-reignition", "Project Reignition (Sonic and the Secret Rings)", "Sonic and the Secret Rings", ["kumapauz"], "Sega", 2007, "platformer", ["windows"], "beta", "reimplementation", ["https://github.com/kumapauz/project-reignition"], NA, "Wii",
    "Project Reignition is a fan remake of Sonic and the Secret Rings (Wii) for Windows. It is a community project and does not use the original game's assets directly.",
    "Project Reignition es un remake hecho por fans de Sonic and the Secret Rings (Wii) para Windows. Es un proyecto comunitario y no usa directamente los recursos del juego original."],
  ["pokemon-platinum-recomp", "Pokémon Platinum Recompiled", "Pokémon Platinum", ["cybervisi0n"], "Nintendo", 2008, "rpg", ["windows"], "beta", "decompilation", ["https://github.com/cybervisi0n/pokeplatinum"], NA, "Nintendo DS",
    "64-bit PC port of Pokémon Platinum based on the pret decompilation and the libntr suite. It needs your own copy of the game.",
    "Port para PC de 64 bits de Pokémon Platinum basado en la decompilación de pret y la suite libntr. Necesita tu propia copia del juego."],
  ["socom-2-recomp", "SOCOM II Recompiled", "SOCOM II: U.S. Navy SEALs", ["Scotho"], "Sony Computer Entertainment", 2003, "shooter", ["windows"], "beta", "recompilation", ["https://github.com/Scotho/socom-unzipped"], { spdx: "GPL-3.0" }, "PlayStation 2",
    "Static recompilation of SOCOM II: U.S. Navy SEALs (PlayStation 2) to PC, with self-hosted online play. It requires your own copy of the game.",
    "Recompilación estática de SOCOM II: U.S. Navy SEALs (PlayStation 2) para PC, con juego en línea autoalojado. Requiere tu propia copia del juego."],
  ["the-3rd-birthday-recomp", "The 3rd Birthday Recompiled", "The 3rd Birthday", ["BasedYuki"], "Square Enix", 2010, "shooter", ["windows"], "beta", "recompilation", ["https://github.com/BasedYuki/the-3rd-birthday-recomp"], NA, "PlayStation Portable",
    "Native PC port of The 3rd Birthday (PSP) through static recompilation. It includes no game data and needs your own ISO.",
    "Port nativo para PC de The 3rd Birthday (PSP) mediante recompilación estática. No incluye datos del juego y necesita tu propia ISO."],
  ["playstation-all-stars-recomp", "PlayStation All-Stars Recompiled", "PlayStation All-Stars Battle Royale", ["ColinGamez"], "Sony Computer Entertainment", 2012, "fighting", ["windows"], "alpha", "recompilation", ["https://github.com/ColinGamez/allstars-ps3"], NA, "PlayStation 3",
    "Native PC port of PlayStation All-Stars Battle Royale (PS3) built with ps3recomp, still in active development. It needs your own copy of the game.",
    "Port nativo para PC de PlayStation All-Stars Battle Royale (PS3) construido con ps3recomp, todavía en desarrollo activo. Necesita tu propia copia del juego."],
  ["shantae-recomp", "Shantae Recompiled", "Shantae", ["vibecodekun"], "WayForward", 2002, "platformer", ["windows", "linux"], "beta", "recompilation", ["https://github.com/vibecodekun/shantaerecomp"], NA, "Game Boy Color",
    "Static recompilation of Shantae (Game Boy Color) for Windows and Linux, with an expanded view, no slowdown, rewind and shader presets. It needs your own ROM.",
    "Recompilación estática de Shantae (Game Boy Color) para Windows y Linux, con vista ampliada, sin ralentización, rebobinado y preajustes de shaders. Necesita tu propia ROM."],
  ["final-fantasy-v-snes-recomp", "Final Fantasy V Recompiled", "Final Fantasy V", ["brainWave4"], "Square", 1992, "rpg", ["windows"], "beta", "recompilation", ["https://github.com/brainWave4/FinalFantasyVSNESRecomp"], NA, "Super Nintendo",
    "Static recompilation of Final Fantasy V (Super Nintendo) to a native executable. It requires your own ROM and ships no game data.",
    "Recompilación estática de Final Fantasy V (Super Nintendo) a un ejecutable nativo. Requiere tu propia ROM y no incluye datos del juego."],
  ["actraiser-recomp", "ActRaiser Recompiled", "ActRaiser", ["DerrickGold"], "Enix", 1990, "platformer", ["windows", "linux", "macos"], "beta", "recompilation", ["https://github.com/DerrickGold/ar-recomp"], NA, "Super Nintendo",
    "Recompilation of ActRaiser (Super Nintendo) for Windows, Linux and macOS. It needs your own ROM of the game.",
    "Recompilación de ActRaiser (Super Nintendo) para Windows, Linux y macOS. Necesita tu propia ROM del juego."],
  ["bubble-bobble-nes-recomp", "Bubble Bobble Recompiled", "Bubble Bobble", ["Junior-Jones"], "Taito", 1986, "platformer", ["windows"], "beta", "recompilation", ["https://github.com/Junior-Jones/Bubble-Bobble-NES-Static-Recomp"], NA, "Nintendo Entertainment System",
    "Static recompilation of Bubble Bobble (NES) for Windows 10 and 11. The ROM is not included, so you need your own copy.",
    "Recompilación estática de Bubble Bobble (NES) para Windows 10 y 11. No incluye la ROM, así que necesitas tu propia copia."],
  ["cannonball", "CannonBall", "OutRun", ["djyt"], "Sega", 1986, "racing", ["windows", "linux", "macos"], "stable", "reimplementation", ["https://github.com/djyt/cannonball"], NA, "Arcade",
    "CannonBall is an enhanced OutRun engine that runs the arcade game with 60 FPS, widescreen and new tracks. It needs the original OutRun ROM and builds for Windows, Linux and macOS.",
    "CannonBall es un motor mejorado de OutRun que ejecuta el juego arcade con 60 FPS, widescreen y pistas nuevas. Necesita la ROM original de OutRun y compila para Windows, Linux y macOS."],
];

const camel = (id) => id.split("-").map((w, i) => (i === 0 ? w : w[0].toUpperCase() + w.slice(1))).join("");
const esc = (s) => s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');

const files = [];
for (const [id, title, game, devs, pub, year, genre, plats, status, ptype, srcs, lic, sys, en, es] of E) {
  const license = lic.note !== undefined ? `{ spdx: "${lic.spdx}", note: "${esc(lic.note)}" }` : `{ spdx: "${lic.spdx}" }`;
  const body = `import type { Port } from "@/lib/ports/schema";

export const ${camel(id)}: Port = {
  schema: "port",
  id: "${id}",
  title: "${esc(title)}",
  game: "${esc(game)}",
  developers: [${devs.map((d) => `"${d}"`).join(", ")}],
  publisher: "${esc(pub)}",
  originalYear: ${year},
  portType: "${ptype}",
  genre: "${genre}",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: [${plats.map((p) => `"${p}"`).join(", ")}],
  status: "${status}",
  release: { version: null, date: null },
  sources: [${srcs.map((s) => `"${s}"`).join(", ")}],
  license: ${license},
  verified: false,
  originalSystem: "${sys}",
  notes:
    "${esc(en)}",
  notesEs:
    "${esc(es)}",
};
`;
  fs.writeFileSync(path.join(DIR, id + ".ts"), body, "utf8");
  files.push([id, camel(id), sys]);
}
console.log("wrote", files.length, "files");

let idx = fs.readFileSync(path.join(DIR, "index.ts"), "utf8");
const importAnchor = 'import { syphonFilterRecomp } from "./syphon-filter-recomp";';
if (!idx.includes(importAnchor)) throw new Error("import anchor not found");
idx = idx.replace(importAnchor, importAnchor + "\n" + files.map(([id, c]) => `import { ${c} } from "./${id}";`).join("\n"));
const arrAnchor = "  syphonFilterRecomp,\n];";
if (!idx.includes(arrAnchor)) throw new Error("array anchor not found");
idx = idx.replace(arrAnchor, "  syphonFilterRecomp,\n" + files.map(([, c]) => `  ${c},`).join("\n") + "\n];");
fs.writeFileSync(path.join(DIR, "index.ts"), idx, "utf8");

let meta = fs.readFileSync(path.join(DIR, "meta.ts"), "utf8");
const metaAnchor = '  "syphon-filter-recomp": "PlayStation",\n};';
if (!meta.includes(metaAnchor)) throw new Error("meta anchor not found");
meta = meta.replace(metaAnchor, '  "syphon-filter-recomp": "PlayStation",\n' + files.map(([id, , sys]) => `  "${id}": "${sys}",`).join("\n") + "\n};");
fs.writeFileSync(path.join(DIR, "meta.ts"), meta, "utf8");
console.log("updated index.ts and meta.ts");
