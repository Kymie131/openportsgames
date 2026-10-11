const fs = require("fs");
const path = require("path");
const ROOT = "C:/Users/israe/OneDrive/Documentos/REPOS/pagina_web_ports_videogames/openportsgames";
const DIR = ROOT + "/src/content/ports";
const SRC = "https://portsdr.com/";

const E = [
  ["battle-arena-toshinden-recomp", "Battle Arena Toshinden Recompiled", "Battle Arena Toshinden", "Takara", 1995, "fighting", "PlayStation"],
  ["bloody-roar-2-recomp", "Bloody Roar 2 Recompiled", "Bloody Roar 2", "Hudson Soft", 1999, "fighting", "PlayStation"],
  ["bomberman-fantasy-race-recomp", "Bomberman Fantasy Race Recompiled", "Bomberman Fantasy Race", "Hudson Soft", 1998, "racing", "PlayStation"],
  ["bomberman-world-recomp", "Bomberman World Recompiled", "Bomberman World", "Hudson Soft", 1998, "action-adventure", "PlayStation"],
  ["bomberman-party-edition-recomp", "Bomberman Party Edition Recompiled", "Bomberman Party Edition", "Hudson Soft", 2000, "action-adventure", "PlayStation"],
  ["dragon-ball-gt-final-bout-recomp", "Dragon Ball GT: Final Bout Recompiled", "Dragon Ball GT: Final Bout", "Bandai", 1997, "fighting", "PlayStation"],
  ["digimon-world-recomp", "Digimon World Recompiled", "Digimon World", "Bandai", 1999, "rpg", "PlayStation"],
  ["klonoa-door-to-phantomile-recomp", "Klonoa: Door to Phantomile Recompiled", "Klonoa: Door to Phantomile", "Namco", 1997, "platformer", "PlayStation"],
  ["legend-of-legaia-recomp", "Legend of Legaia Recompiled", "Legend of Legaia", "Sony Computer Entertainment", 1998, "rpg", "PlayStation"],
  ["marvel-vs-capcom-recomp", "Marvel vs. Capcom Recompiled", "Marvel vs. Capcom: Clash of Super Heroes", "Capcom", 1998, "fighting", "PlayStation"],
  ["star-wars-masters-of-teras-kasi-recomp", "Masters of Teras Kasi Recompiled", "Star Wars: Masters of Teras Kasi", "LucasArts", 1997, "fighting", "PlayStation"],
  ["puyo-puyo-box-recomp", "Puyo Puyo Box Recompiled", "Puyo Puyo Box", "Compile", 2000, "puzzle", "PlayStation"],
  ["rampage-through-time-recomp", "Rampage: Through Time Recompiled", "Rampage: Through Time", "Midway Games", 2000, "action-adventure", "PlayStation"],
  ["samurai-shodown-warriors-rage-recomp", "Samurai Shodown: Warriors Rage Recompiled", "Samurai Shodown: Warriors Rage", "SNK", 1999, "fighting", "PlayStation"],
  ["soulblade-recomp", "SoulBlade Recompiled", "SoulBlade", "Namco", 1996, "fighting", "PlayStation"],
  ["star-wars-jedi-power-battles-recomp", "Jedi Power Battles Recompiled", "Star Wars Episode I: Jedi Power Battles", "LucasArts", 2000, "action-adventure", "PlayStation"],
  ["strider-2-recomp", "Strider 2 Recompiled", "Strider 2", "Capcom", 1999, "platformer", "PlayStation"],
  ["twisted-metal-4-recomp", "Twisted Metal 4 Recompiled", "Twisted Metal 4", "Sony Computer Entertainment", 1999, "racing", "PlayStation"],
  ["x-men-mutant-academy-2-recomp", "X-Men: Mutant Academy 2 Recompiled", "X-Men: Mutant Academy 2", "Activision", 2001, "fighting", "PlayStation"],
  ["street-fighter-ex-plus-alpha-recomp", "Street Fighter EX Plus Alpha Recompiled", "Street Fighter EX Plus Alpha", "Capcom", 1997, "fighting", "PlayStation"],
  ["ace-combat-5-recomp", "Ace Combat 5 Recompiled", "Ace Combat 5: The Unsung War", "Namco", 2004, "shooter", "PlayStation 2"],
  ["dark-cloud-2-recomp", "Dark Cloud 2 Recompiled", "Dark Cloud 2", "Sony Computer Entertainment", 2002, "rpg", "PlayStation 2"],
  ["sly-cooper-recomp", "Sly Cooper Recompiled", "Sly Cooper and the Thievius Raccoonus", "Sony Computer Entertainment", 2002, "platformer", "PlayStation 2"],
  ["timesplitters-2-recomp", "TimeSplitters 2 Recompiled", "TimeSplitters 2", "Eidos Interactive", 2002, "shooter", "PlayStation 2"],
  ["ace-combat-x-recomp", "Ace Combat X Recompiled", "Ace Combat X: Skies of Deception", "Namco", 2006, "shooter", "PlayStation Portable"],
  ["mobile-suit-gundam-seed-battle-assault-recomp", "Gundam SEED: Battle Assault Recompiled", "Mobile Suit Gundam SEED: Battle Assault", "Bandai", 2004, "fighting", "Game Boy Advance"],
  ["jungle-strike-recomp", "Jungle Strike Recompiled", "Jungle Strike", "Electronic Arts", 1993, "action-adventure", "Super Nintendo"],
  ["super-mario-all-stars-recomp", "Super Mario All-Stars Recompiled", "Super Mario All-Stars", "Nintendo", 1993, "platformer", "Super Nintendo"],
  ["kirbys-dream-land-recomp", "Kirby's Dream Land Recompiled", "Kirby's Dream Land", "Nintendo", 1992, "platformer", "Game Boy"],
  ["tetris-gb-recomp", "Tetris (Game Boy) Recompiled", "Tetris", "Nintendo", 1989, "puzzle", "Game Boy"],
  ["zelda-2-adventure-of-link-recomp", "Zelda II: The Adventure of Link Recompiled", "Zelda II: The Adventure of Link", "Nintendo", 1987, "action-adventure", "Nintendo Entertainment System"],
  ["space-channel-5-recomp", "Space Channel 5 Recompiled", "Space Channel 5", "Sega", 1999, "music", "Dreamcast"],
  ["buck-bumble-recomp", "Buck Bumble Recompiled", "Buck Bumble", "Ubisoft", 1998, "shooter", "Nintendo 64"],
  ["shadows-of-the-empire-recomp", "Shadows of the Empire Recompiled", "Star Wars: Shadows of the Empire", "Nintendo", 1996, "shooter", "Nintendo 64"],
];

const camel = (id) => id.split("-").map((w, i) => (i === 0 ? w : w[0].toUpperCase() + w.slice(1))).join("");
const esc = (s) => s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');

const files = [];
for (const [id, title, game, pub, year, genre, sys] of E) {
  const en = `Recompilation of ${game} (${sys}) listed by the PortsDR community index. No public repository or release is linked, and it needs your own copy of the game.`;
  const es = `Recompilación de ${game} (${sys}) listada en el índice comunitario PortsDR. No hay repositorio ni release públicos enlazados, y necesita tu propia copia del juego.`;
  const body = `import type { Port } from "@/lib/ports/schema";

export const ${camel(id)}: Port = {
  schema: "port",
  id: "${id}",
  title: "${esc(title)}",
  game: "${esc(game)}",
  developers: ["PortsDR"],
  publisher: "${esc(pub)}",
  originalYear: ${year},
  portType: "recompilation",
  genre: "${genre}",
  openSource: false,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["${SRC}"],
  license: { spdx: "NOASSERTION", note: "no public repository or license" },
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
const importAnchor = 'import { slayTheSpire2Android } from "./slay-the-spire-2-android";';
if (!idx.includes(importAnchor)) throw new Error("import anchor not found");
idx = idx.replace(importAnchor, importAnchor + "\n" + files.map(([id, c]) => `import { ${c} } from "./${id}";`).join("\n"));
const arrAnchor = "  slayTheSpire2Android,\n];";
if (!idx.includes(arrAnchor)) throw new Error("array anchor not found");
idx = idx.replace(arrAnchor, "  slayTheSpire2Android,\n" + files.map(([, c]) => `  ${c},`).join("\n") + "\n];");
fs.writeFileSync(path.join(DIR, "index.ts"), idx, "utf8");

let meta = fs.readFileSync(path.join(DIR, "meta.ts"), "utf8");
const metaAnchor = '  "slay-the-spire-2-android": "Microsoft Windows",\n};';
if (!meta.includes(metaAnchor)) throw new Error("meta anchor not found");
meta = meta.replace(metaAnchor, '  "slay-the-spire-2-android": "Microsoft Windows",\n' + files.map(([id, , sys]) => `  "${id}": "${sys}",`).join("\n") + "\n};");
fs.writeFileSync(path.join(DIR, "meta.ts"), meta, "utf8");
console.log("updated index.ts and meta.ts");

let test = fs.readFileSync(ROOT + "/tests/content/ports.test.ts", "utf8");
const testAnchor = `      "https://github.com/elliotttate/DKC2Recomp": [
        "dkc-recompiled",
        "dkc2-recomp",
      ],
    };`;
if (!test.includes(testAnchor)) throw new Error("test anchor not found");
const idsList = files.map(([id]) => `        "${id}",`).join("\n");
test = test.replace(testAnchor, `      "https://github.com/elliotttate/DKC2Recomp": [
        "dkc-recompiled",
        "dkc2-recomp",
      ],
      // PortsDR is a community index, not a repository: every entry it lists
      // shares the same landing page until a dedicated project link exists.
      "https://portsdr.com/": [
${idsList}
      ],
    };`);
fs.writeFileSync(ROOT + "/tests/content/ports.test.ts", test, "utf8");
console.log("updated ports.test.ts intentional map");
