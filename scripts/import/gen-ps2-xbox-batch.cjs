// PS2, Xbox 360 and N64 projects from the October 2026 sweep that were not
// already in the catalog. Sources checked against existing entries.
const fs = require("fs");
const path = require("path");
const DIR = path.join(process.cwd(), "src/content/ports");

const E = [
  ["tales-of-legendia-recomp","Tales of Legendia Recompiled","Tales of Legendia","vamidi","Bandai Namco",2005,"rpg","PlayStation 2","recompilation","alpha",null,null,["windows","linux"],"vamidi/tales-of-legendia-ps2recomp","MIT"],
  ["yu-gi-oh-duelists-roses-recomp","Yu-Gi-Oh! The Duelists of the Roses Recompiled","Yu-Gi-Oh! The Duelists of the Roses","Glasena","Konami",2001,"strategy","PlayStation 2","recompilation","beta",null,null,["windows"],"Glasena/dotr-recomp","GPL-3.0"],
  ["drakengard-recomp","Drakengard Recompiled","Drakengard","k1gs","Square Enix",2003,"action-adventure","PlayStation 2","recompilation","alpha",null,null,["windows"],"k1gs/Drakengard1Recompile","MIT"],
  ["shadow-hearts-recomp","Shadow Hearts Recompiled","Shadow Hearts","NoulZ-One","Aruze",2001,"rpg","PlayStation 2","recompilation","alpha",null,null,["windows"],"NoulZ-One/Ring-Of-Judgment---Shadow-Hearts-Recomp","NOASSERTION"],
  ["devil-may-cry-ps2-recomp","Devil May Cry (PS2)","Devil May Cry","Gui-Tora","Capcom",2001,"action-adventure","PlayStation 2","recompilation","alpha",null,null,["windows"],"Gui-Tora/dmc-recomp","GPL-3.0"],
  ["50-cent-blood-on-the-sand-recomp","50 Cent: Blood on the Sand","50 Cent: Blood on the Sand","nlwstein","THQ",2009,"shooter","Xbox 360","recompilation","beta",null,null,["windows","macos","linux"],"nlwstein/skullburglar","NOASSERTION"],
  ["blue-dragon-android","Blue Dragon (Android)","Blue Dragon","JayElDragon","Microsoft Game Studios",2007,"rpg","Xbox 360","recompilation","beta","3.0","2026-10-23",["android"],"JayElDragon/blue-dragon-android","NOASSERTION"],
  ["beatles-rock-band-pc","The Beatles: Rock Band","The Beatles: Rock Band","mercurialw0rld","MTV Games",2009,"music","Xbox 360","recompilation","beta","0.6.1","2026-10-24",["windows"],"mercurialw0rld/thebeatlesrockband-pcport","NOASSERTION"],
  ["nhl-2k8-recomp","NHL 2K8 Recompiled","NHL 2K8","anishchandra24","2K Sports",2007,"sports","Xbox 360","recompilation","alpha",null,null,["windows"],"anishchandra24/NHL2K8-Recompiled","GPL-3.0"],
  ["enchanted-arms-recomp","Enchanted Arms Recompiled","Enchanted Arms","IAndrewJJ","Ubisoft",2006,"rpg","Xbox 360","recompilation","alpha",null,null,["windows"],"IAndrewJJ/EnchantedArmsRecomp","NOASSERTION"],
  ["nba-hangtime-recomp","NBA Hangtime Recompiled","NBA Hangtime","8bitninja64","Midway",1997,"sports","Nintendo 64","recompilation","beta","0.1.1","2026-10-20",["windows"],"8bitninja64/HangtimeRecomp","GPL-3.0"],
  ["knife-edge-recomp","Knife Edge: Nose Gunner Recompiled","Knife Edge: Nose Gunner","navjack","Kemco",1998,"shooter","Nintendo 64","recompilation","beta",null,null,["macos"],"navjack/KnifeEdgeRecomp","GPL-3.0"],
  ["star-wars-racer-android","Star Wars Episode I: Racer (Android)","Star Wars Episode I: Racer","dguillot-gh","LucasArts",1999,"racing","Nintendo 64","recompilation","beta",null,null,["android"],"dguillot-gh/star-wars-racer-recomp","NOASSERTION"],
  ["battleblock-theater-switch","BattleBlock Theater (Switch)","BattleBlock Theater","andresarevalo1","Microsoft Studios",2013,"platformer","Xbox 360","recompilation","beta","0.2.0","2026-10-22",["switch"],"andresarevalo1/BattleBlockRecomp-NX","GPL-3.0"],
  ["call-of-juarez-recomp","Call of Juarez Recompiled","Call of Juarez","rexelflip2-sudo","Ubisoft",2007,"shooter","Xbox 360","recompilation","alpha",null,null,["windows"],"rexelflip2-sudo/Call-of-Juarez-Xbox-360-Recomp","NOASSERTION"],
  ["splosion-man-recomp","Splosion Man Recompiled","Splosion Man","thefixinhixon","Microsoft Studios",2009,"platformer","Xbox 360","recompilation","beta","2.0","2026-10-04",["windows","linux"],"thefixinhixon/SplosionManRecomp","NOASSERTION"],
  ["the-maw-recomp","The Maw Recompiled","The Maw","thefixinhixon","Microsoft Studios",2009,"action-adventure","Xbox 360","recompilation","beta","1.0","2026-10-04",["linux"],"thefixinhixon/TheMawRecomp","NOASSERTION"],
  ["pacific-rim-recomp","Pacific Rim: The Video Game Recompiled","Pacific Rim: The Video Game","thefixinhixon","Yuke's",2013,"fighting","Xbox 360","recompilation","beta","1.0","2026-10-05",["linux"],"thefixinhixon/PacificRimRecomp","NOASSERTION"],
  ["real-steel-recomp","Real Steel Recompiled","Real Steel","thefixinhixon","Yuke's",2011,"fighting","Xbox 360","recompilation","beta","1.0","2026-10-05",["linux"],"thefixinhixon/RealSteelRecomp","NOASSERTION"],
  ["skate-2-recomp","Skate 2 Recompiled","Skate 2","cookingwithsimon","Electronic Arts",2008,"sports","Xbox 360","recompilation","beta","0.2.0","2026-10-11",["windows"],"cookingwithsimon/Skate2Recompiled","NOASSERTION"],
  ["doax2-recomp","Dead or Alive Xtreme 2 Recompiled","Dead or Alive Xtreme 2","Revan67","Tecmo",2006,"sports","Xbox 360","recompilation","alpha",null,null,["windows"],"Revan67/DOAX2-Recomp","NOASSERTION"],
  ["project-sylpheed-recomp","Project Sylpheed Recompiled","Project Sylpheed","icey9527","Square Enix",2006,"shooter","Xbox 360","recompilation","beta","1.0","2026-10-05",["windows"],"icey9527/ProjectSylpheedRecomp","NOASSERTION"],
  ["nhl-14-recomp","NHL 14 Recompiled","NHL 14","tpalko420-tech","Electronic Arts",2013,"sports","Xbox 360","recompilation","beta",null,null,["windows"],"tpalko420-tech/nhl14-recomp","NOASSERTION"],
  ["baja-1000-recomp","Baja 1000 Recompiled","Baja 1000","ReFraX32","Activision",2009,"racing","Xbox 360","recompilation","alpha",null,null,["windows"],"ReFraX32/Baja1000-Xbox360-Recomp","NOASSERTION"],
  ["harry-potter-azkaban-macos","Harry Potter and the Prisoner of Azkaban (macOS)","Harry Potter and the Prisoner of Azkaban","chaikosh","Electronic Arts",2004,"action-adventure","PlayStation 2","recompilation","alpha",null,null,["macos"],"chaikosh/azkaban-recomp","GPL-3.0"],
  ["nightfire-pc","007: Nightfire (PC)","007: Nightfire","YodaMMM","Electronic Arts",2002,"shooter","PlayStation 2","source-port","beta","0.1.20","2026-10-25",["windows"],"YodaMMM/NightfirePort","ISC"],
  ["wwe-crush-hour-pc","WWE Crush Hour Recompiled","WWE Crush Hour","KaikoClanworth1","THQ",2003,"racing","PlayStation 2","recompilation","beta",null,null,["windows"],"KaikoClanworth1/wwe-crush-hour-pc","GPL-3.0"],
];

const camel = (id) => {
  const value = id.split("-").map((w, i) => (i === 0 ? w : w[0].toUpperCase() + w.slice(1))).join("");
  return /^\d/.test(value) ? `p${value}` : value;
};
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
for (const [id, title] of E) {
  if (existingIds.has(id)) throw new Error(`duplicate id ${id}`);
  if (existingTitles.has(title.toLowerCase())) throw new Error(`duplicate title ${title}`);
}
const files = [];
for (const [id,title,game,dev,pub,year,genre,sys,type,status,version,date,platforms,repo,license] of E) {
  if (existingIds.has(id)) throw new Error(`duplicate id ${id}`);
  if (existingTitles.has(title.toLowerCase())) throw new Error(`duplicate title ${title}`);
  const licenseBlock = license === "NOASSERTION"
    ? `{ spdx: "NOASSERTION", note: "no SPDX license in the repository" }`
    : `{ spdx: ${q(license)} }`;
  const body = `import type { Port } from "@/lib/ports/schema";

export const ${camel(id)}: Port = {
  schema: "port",
  id: ${q(id)},
  title: ${q(title)},
  game: ${q(game)},
  developers: [${q(dev)}],
  publisher: ${q(pub)},
  originalYear: ${year},
  portType: ${q(type)},
  genre: ${q(genre)},
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: [${platforms.map(q).join(", ")}],
  status: ${q(status)},
  release: { version: ${version ? q(version) : "null"}, date: ${date ? q(date) : "null"} },
  sources: [${q("https://github.com/" + repo)}],
  license: ${licenseBlock},
  verified: false,
  sourceVerified: true,
  addedAt: "2026-10-25",
  originalSystems: [${q(sys)}],
  notes: ${q(`${title}: native ${type} of ${game} for ${platforms.join(", ")}. Bring your own copy of the game.`)},
  notesEs: ${q(`${title}: ${type === "recompilation" ? "recompilaciÃ³n" : "port"} nativo de ${game} para ${platforms.join(", ")}. Aporta tu propia copia del juego.`)},
};
`;
  fs.writeFileSync(path.join(DIR, `${id}.ts`), body, "utf8");
  files.push([id, camel(id), sys]);
}

let idx = indexBefore;
const importAnchor = 'import { sm64ex } from "./sm64ex";';
idx = idx.replace(importAnchor, `${importAnchor}\n${files.map(([id,c]) => `import { ${c} } from "./${id}";`).join("\n")}`);
const arrayAnchor = "\n];";
const lastArray = idx.lastIndexOf(arrayAnchor);
idx = `${idx.slice(0,lastArray)}\n${files.map(([,c]) => `  ${c},`).join("\n")}${idx.slice(lastArray)}`;
fs.writeFileSync(path.join(DIR, "index.ts"), idx, "utf8");

let meta = fs.readFileSync(path.join(DIR, "meta.ts"), "utf8");
const metaAnchor = "\n};";
const lastMeta = meta.lastIndexOf(metaAnchor);
meta = `${meta.slice(0,lastMeta)}\n${files.map(([id,,sys]) => `  ${q(id)}: [${q(sys)}],`).join("\n")}${meta.slice(lastMeta)}`;
fs.writeFileSync(path.join(DIR, "meta.ts"), meta, "utf8");

console.log(`wrote ${files.length} PS2/Xbox/N64 ports`);
