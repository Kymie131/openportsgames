const fs = require("fs");
const path = require("path");
const ROOT = "C:/Users/israe/OneDrive/Documentos/REPOS/pagina_web_ports_videogames/openportsgames";
const DIR = ROOT + "/src/content/ports";

const NA = { spdx: "NOASSERTION", note: "no SPDX license in the repository" };

const E = [
  [
    "dantes-inferno-recomp", "Dante's Inferno Recompiled", "Dante's Inferno",
    ["florinp93"], "Electronic Arts", 2010, "action-adventure", ["windows", "linux"], "beta", "recompilation", true,
    ["https://github.com/florinp93/hells-gate-recomp"], NA,
    "Static recompilation of Dante's Inferno (Xbox 360) with the ReXGlue SDK, building native Windows and Linux executables. It needs a copy of the original game, since no assets are included.",
    "Recompilación estática de Dante's Inferno (Xbox 360) con el SDK ReXGlue, que genera ejecutables nativos para Windows y Linux. Necesita una copia del juego original, ya que no incluye ningún recurso.",
  ],
  [
    "dantes-inferno-android", "Dante's Inferno Android", "Dante's Inferno",
    ["WINDROID-EMU"], "Electronic Arts", 2010, "action-adventure", ["android"], "beta", "recompilation", true,
    ["https://github.com/WINDROID-EMU/Dantes-inferno-Android"], NA,
    "Community Android build of Dante's Inferno, separate from the desktop recompilation. It is an experimental project and some of its cases are untested.",
    "Build comunitaria para Android de Dante's Inferno, distinta de la recompilación de escritorio. Es un proyecto experimental y algunos de sus casos no están probados.",
  ],
  [
    "daytona-usa-recomp", "Daytona USA Recompiled", "Daytona USA",
    ["Subarasheese"], "Sega", 1993, "racing", ["windows", "linux"], "beta", "recompilation", true,
    ["https://github.com/Subarasheese/daytona-xbla-recomp"], NA,
    "Recompilation of the Xbox Live Arcade release of Daytona USA to native Windows and Linux. It requires your own copy of the game.",
    "Recompilación de la versión de Daytona USA para Xbox Live Arcade a ejecutables nativos de Windows y Linux. Requiere tu propia copia del juego.",
  ],
  [
    "dodonpachi-saidaioujou-recomp", "DoDonPachi SaiDaiOuJou Recompiled", "DoDonPachi SaiDaiOuJou",
    ["eandis"], "Cave", 2012, "shooter", ["windows"], "beta", "recompilation", true,
    ["https://github.com/eandis/SDOJ-Recomp"], NA,
    "Static recompilation of the Xbox 360 version of DoDonPachi SaiDaiOuJou, a bullet-hell shooter by Cave. It runs as a native Windows executable and needs your own copy of the game.",
    "Recompilación estática de la versión de Xbox 360 de DoDonPachi SaiDaiOuJou, un matamarcianos de Cave. Se ejecuta de forma nativa en Windows y necesita tu propia copia del juego.",
  ],
  [
    "crackdown-2-recomp", "Crackdown 2 Recompiled", "Crackdown 2",
    ["matty45"], "Microsoft Game Studios", 2010, "action-adventure", ["windows"], "beta", "recompilation", true,
    ["https://github.com/matty45/Crackdown2-Recomp"], NA,
    "Recompilation of Crackdown 2 (Xbox 360) to a native Windows executable. As with the project for the first game, you must supply your own copy.",
    "Recompilación de Crackdown 2 (Xbox 360) a un ejecutable nativo para Windows. Igual que en el proyecto del primer juego, debes aportar tu propia copia.",
  ],
  [
    "test-drive-unlimited-recomp", "Test Drive Unlimited Recompiled", "Test Drive Unlimited",
    ["testdriveupgrade"], "Atari", 2006, "racing", ["windows"], "beta", "recompilation", true,
    ["https://github.com/testdriveupgrade/TDURecomp"], NA,
    "Recompilation of Test Drive Unlimited (Xbox 360) for Windows. It requires the original game files and is still in development.",
    "Recompilación de Test Drive Unlimited (Xbox 360) para Windows. Requiere los archivos del juego original y sigue en desarrollo.",
  ],
  [
    "dragon-ball-raging-blast-2-recomp", "Dragon Ball: Raging Blast 2 Recompiled", "Dragon Ball: Raging Blast 2",
    ["WistfulHopes"], "Bandai Namco", 2010, "fighting", ["windows"], "beta", "recompilation", true,
    ["https://github.com/WistfulHopes/RB2"], NA,
    "Recompilation of Dragon Ball: Raging Blast 2 (Xbox 360) to native Windows. It does not include the game, so you need your own copy.",
    "Recompilación de Dragon Ball: Raging Blast 2 (Xbox 360) a Windows nativo. No incluye el juego, así que necesitas tu propia copia.",
  ],
  [
    "midnight-club-la-recomp", "Midnight Club: Los Angeles Recompiled", "Midnight Club: Los Angeles",
    ["3bdull4h2008"], "Rockstar Games", 2008, "racing", ["windows"], "beta", "recompilation", true,
    ["https://github.com/3bdull4h2008/mcla-recompilation"], NA,
    "Recompilation of Midnight Club: Los Angeles (Xbox 360) for Windows. It needs your own copy of the game.",
    "Recompilación de Midnight Club: Los Angeles (Xbox 360) para Windows. Necesita tu propia copia del juego.",
  ],
  [
    "burnout-revenge-recomp", "Burnout Revenge Recompiled", "Burnout Revenge",
    ["shipa-2"], "Electronic Arts", 2005, "racing", ["windows", "linux"], "beta", "recompilation", true,
    ["https://github.com/shipa-2/Xerenge"], NA,
    "Recompilation of Burnout Revenge (Xbox 360) to native Windows and Linux. It requires your own copy of the game.",
    "Recompilación de Burnout Revenge (Xbox 360) a Windows y Linux nativos. Requiere tu propia copia del juego.",
  ],
  [
    "conan-2007-recomp", "Conan (2007) Recompiled", "Conan",
    ["crazyriddler"], "THQ", 2007, "action-adventure", ["windows"], "beta", "recompilation", true,
    ["https://github.com/crazyriddler/Conan2007Recomp"], NA,
    "Recompilation of the 2007 Conan game (Xbox 360) to a native Windows executable. You must supply your own copy.",
    "Recompilación del juego Conan de 2007 (Xbox 360) a un ejecutable nativo para Windows. Debes aportar tu propia copia.",
  ],
  [
    "rumble-roses-xx-recomp", "Rumble Roses XX Recompiled", "Rumble Roses XX",
    ["Revan67"], "Konami", 2006, "fighting", ["windows"], "beta", "recompilation", true,
    ["https://github.com/Revan67/RumbleRosesXX-Recomp"], NA,
    "Recompilation of Rumble Roses XX (Xbox 360) for Windows. It needs the original game and does not bundle any content.",
    "Recompilación de Rumble Roses XX (Xbox 360) para Windows. Necesita el juego original y no incluye ningún contenido.",
  ],
  [
    "call-of-duty-3-recomp", "Call of Duty 3 Recompiled", "Call of Duty 3",
    ["FrankHUN88453"], "Activision", 2006, "shooter", ["windows"], "beta", "recompilation", true,
    ["https://github.com/FrankHUN88453/CoD3Recomp"], NA,
    "Recompilation of Call of Duty 3 (Xbox 360) to native Windows. It requires your own copy of the game.",
    "Recompilación de Call of Duty 3 (Xbox 360) a Windows nativo. Requiere tu propia copia del juego.",
  ],
  [
    "project-1944-recomp", "Call of Duty 3: Project 1944", "Call of Duty 3",
    ["zenit2893-cmyk"], "Activision", 2006, "shooter", ["windows"], "beta", "recompilation", true,
    ["https://github.com/zenit2893-cmyk/project-1944"], NA,
    "A separate recompilation of Call of Duty 3 (Xbox 360) by another developer. It builds for Windows and needs your own copy of the game.",
    "Una recompilación distinta de Call of Duty 3 (Xbox 360) hecha por otro desarrollador. Compila para Windows y necesita tu propia copia del juego.",
  ],
  [
    "rayman-origins-recomp", "Rayman Origins Recompiled", "Rayman Origins",
    ["BelmanteGu"], "Ubisoft", 2011, "platformer", ["windows", "macos", "android"], "beta", "recompilation", true,
    ["https://github.com/BelmanteGu/RaymanOriginsRecomp"], NA,
    "Recompilation of Rayman Origins (Xbox 360) that builds for Windows, macOS and Android. It requires your own copy of the game.",
    "Recompilación de Rayman Origins (Xbox 360) que compila para Windows, macOS y Android. Requiere tu propia copia del juego.",
  ],
  [
    "viva-pinata-recomp", "Viva Piñata Recompiled", "Viva Piñata",
    ["crabinacrabic"], "Microsoft Game Studios", 2006, "simulation", ["windows"], "beta", "recompilation", true,
    ["https://github.com/crabinacrabic/VivaPinataRecomp"], NA,
    "Recompilation of the original Viva Piñata (Xbox 360) for Windows. It needs your own copy of the game.",
    "Recompilación del Viva Piñata original (Xbox 360) para Windows. Necesita tu propia copia del juego.",
  ],
  [
    "infinite-undiscovery-recomp", "Infinite Undiscovery Recompiled", "Infinite Undiscovery",
    ["doc-haz"], "Square Enix", 2008, "rpg", ["windows"], "beta", "recompilation", true,
    ["https://github.com/doc-haz/infinite-undiscovery-recomp"], NA,
    "Recompilation of Infinite Undiscovery (Xbox 360) to a native Windows executable. It does not include the game.",
    "Recompilación de Infinite Undiscovery (Xbox 360) a un ejecutable nativo para Windows. No incluye el juego.",
  ],
  [
    "crash-of-the-titans-recomp", "Crash of the Titans Recompiled", "Crash of the Titans",
    ["OAleex"], "Sierra Entertainment", 2007, "platformer", ["windows"], "alpha", "recompilation", true,
    ["https://github.com/OAleex/MojoRecomp"], NA,
    "Recompilation of Crash of the Titans (Xbox 360) for Windows, still in an early state. It requires your own copy of the game.",
    "Recompilación de Crash of the Titans (Xbox 360) para Windows, todavía en un estado temprano. Requiere tu propia copia del juego.",
  ],
  [
    "call-of-duty-mw2-recomp", "Call of Duty: Modern Warfare 2 Recompiled", "Call of Duty: Modern Warfare 2",
    ["PaulCombal"], "Activision", 2009, "shooter", ["windows", "linux"], "beta", "recompilation", true,
    ["https://github.com/PaulCombal/mw2-recompiled"], NA,
    "Recompilation of Call of Duty: Modern Warfare 2 (Xbox 360) to native Windows and Linux. It requires your own copy of the game.",
    "Recompilación de Call of Duty: Modern Warfare 2 (Xbox 360) a Windows y Linux nativos. Requiere tu propia copia del juego.",
  ],
  [
    "blue-droid", "Blue Dragon (BlueDroid)", "Blue Dragon",
    ["RedZeroGotcha"], "Microsoft Game Studios", 2006, "rpg", ["android"], "alpha", "recompilation", true,
    ["https://github.com/RedZeroGotcha/BlueDroid"], NA,
    "Android recompilation of Blue Dragon (Xbox 360), separate from the desktop reblue project. It is an early build that needs your own copy of the game.",
    "Recompilación para Android de Blue Dragon (Xbox 360), distinta del proyecto reblue de escritorio. Es una build temprana que necesita tu propia copia del juego.",
  ],
  [
    "x-men-destiny-recomp", "X-Men Destiny Recompiled", "X-Men Destiny",
    ["florinp93"], "Activision", 2011, "action-adventure", ["windows", "linux"], "beta", "recompilation", true,
    ["https://github.com/florinp93/xmd-recompiled"], NA,
    "Static recompilation of X-Men Destiny (Xbox 360) with the ReXGlue SDK, rendering through Direct3D 12 on Windows and Vulkan on Linux. It ships no game content and includes a launcher for graphics and controls.",
    "Recompilación estática de X-Men Destiny (Xbox 360) con el SDK ReXGlue, que usa Direct3D 12 en Windows y Vulkan en Linux. No incluye contenido del juego y trae un lanzador para gráficos y controles.",
  ],
  [
    "army-of-two-recomp", "Army of Two Recompiled", "Army of Two",
    ["nikolaygorb"], "Electronic Arts", 2008, "shooter", ["windows", "linux"], "beta", "recompilation", true,
    ["https://github.com/nikolaygorb/ArmyOfTwoRecomp"], NA,
    "Static recompilation of Army of Two (Xbox 360) with the ReXGlue SDK to native Windows and Linux. It offers Vulkan or Direct3D 12 output and a 60 FPS option, and requires your own copy of the game.",
    "Recompilación estática de Army of Two (Xbox 360) con el SDK ReXGlue a Windows y Linux nativos. Ofrece salida Vulkan o Direct3D 12 y una opción de 60 FPS, y requiere tu propia copia del juego.",
  ],
  [
    "gears-of-war-2-hollow", "Gears of War 2: Hollow", "Gears of War 2",
    ["xHeliosx"], "Microsoft Game Studios", 2008, "shooter", ["windows"], "beta", "recompilation", false,
    ["https://www.moddb.com/mods/gears-of-war-2-hollow"], { spdx: "NOASSERTION", note: "no public repository or license" },
    "Community PC build of Gears of War 2 assembled from a leaked development build, with mouse and keyboard support, a settings launcher and the full campaign. Its author treats it as a beta and it is not distributed through a public repository.",
    "Build comunitaria para PC de Gears of War 2 montada a partir de una build de desarrollo filtrada, con soporte de ratón y teclado, un lanzador de ajustes y la campaña completa. Su autor la considera una beta y no se distribuye mediante un repositorio público.",
  ],
  [
    "gears-of-war-3-jacinto", "Gears of War 3: Project Jacinto", "Gears of War 3",
    ["xHeliosx"], "Microsoft Studios", 2011, "shooter", ["windows"], "alpha", "recompilation", false,
    ["https://www.nexusmods.com/gearsofwar3"], { spdx: "NOASSERTION", note: "no public repository or license" },
    "Project Jacinto brings the Xbox 360 version of Gears of War 3 to PC from a cancelled development build. The base port is shared through the community rather than a public repository, and this page collects the fixes and tools built around it.",
    "Project Jacinto lleva la versión de Xbox 360 de Gears of War 3 a PC a partir de una build de desarrollo cancelada. El port base se comparte a través de la comunidad y no de un repositorio público, y esta página reúne los arreglos y herramientas creados a su alrededor.",
  ],
  [
    "minecraft-x360-ios", "Minecraft: Xbox 360 Edition (iOS)", "Minecraft: Xbox 360 Edition",
    ["DevZer0D4Y"], "Microsoft Studios", 2012, "simulation", ["ios"], "beta", "recompilation", true,
    ["https://github.com/DevZer0D4Y/MCX360-EDITION"], NA,
    "Recompilation project for Minecraft: Xbox 360 Edition that targets iOS. It is indexed by recomp.fyi and requires your own copy of the game.",
    "Proyecto de recompilación de Minecraft: Xbox 360 Edition orientado a iOS. Está indexado en recomp.fyi y requiere tu propia copia del juego.",
  ],
];

const camel = (id) => id.split("-").map((w, i) => (i === 0 ? w : w[0].toUpperCase() + w.slice(1))).join("");
const esc = (s) => s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');

const files = [];
for (const [id, title, game, devs, pub, year, genre, plats, status, ptype, openSrc, srcs, lic, en, es] of E) {
  const license =
    lic.note !== undefined
      ? `{ spdx: "${lic.spdx}", note: "${esc(lic.note)}" }`
      : `{ spdx: "${lic.spdx}" }`;
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
  openSource: ${openSrc},
  originalGameLicense: "proprietary",
  platforms: [${plats.map((p) => `"${p}"`).join(", ")}],
  status: "${status}",
  release: { version: null, date: null },
  sources: [${srcs.map((s) => `"${s}"`).join(", ")}],
  license: ${license},
  verified: false,
  originalSystem: "Xbox 360",
  notes:
    "${esc(en)}",
  notesEs:
    "${esc(es)}",
};
`;
  fs.writeFileSync(path.join(DIR, id + ".ts"), body, "utf8");
  files.push([id, camel(id)]);
}
console.log("wrote", files.length, "files");

let idx = fs.readFileSync(path.join(DIR, "index.ts"), "utf8");
const importAnchor = 'import { saintsRowRecomp } from "./saints-row-recomp";';
if (!idx.includes(importAnchor)) throw new Error("import anchor not found");
idx = idx.replace(importAnchor, importAnchor + "\n" + files.map(([id, c]) => `import { ${c} } from "./${id}";`).join("\n"));
const arrAnchor = "  saintsRowRecomp,\n];";
if (!idx.includes(arrAnchor)) throw new Error("array anchor not found");
idx = idx.replace(arrAnchor, "  saintsRowRecomp,\n" + files.map(([, c]) => `  ${c},`).join("\n") + "\n];");
fs.writeFileSync(path.join(DIR, "index.ts"), idx, "utf8");

let meta = fs.readFileSync(path.join(DIR, "meta.ts"), "utf8");
const metaAnchor = '  "saints-row-recomp": "Xbox 360",\n};';
if (!meta.includes(metaAnchor)) throw new Error("meta anchor not found");
meta = meta.replace(metaAnchor, '  "saints-row-recomp": "Xbox 360",\n' + files.map(([id]) => `  "${id}": "Xbox 360",`).join("\n") + "\n};");
fs.writeFileSync(path.join(DIR, "meta.ts"), meta, "utf8");
console.log("updated index.ts and meta.ts");
