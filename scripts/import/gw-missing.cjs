const fs = require("fs");
const path = require("path");
const GW = "C:/Users/israe/.local/share/opencode/tool-output/tool_122029c56001tS61iPkn67uUCO";
const PORTS = "C:/Users/israe/OneDrive/Documentos/REPOS/pagina_web_ports_videogames/openportsgames/src/content/ports";
const norm = (s) => (s || "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
const mine = new Set();
const mineSources = new Set();
for (const f of fs.readdirSync(PORTS)) {
  if (!f.endsWith(".ts")) continue;
  const c = fs.readFileSync(path.join(PORTS, f), "utf8");
  const g = (c.match(/game:\s*"([^"]+)"/) || [])[1];
  const t = (c.match(/title:\s*"([^"]+)"/) || [])[1];
  if (g) mine.add(norm(g));
  if (t) mine.add(norm(t));
  const src = c.match(/sources:\s*\[([^\]]*)\]/);
  if (src) for (const m of src[1].matchAll(/"(https:[^"]+)"/g)) mineSources.add(m[1].toLowerCase());
}
const j = JSON.parse(fs.readFileSync(GW, "utf8"));
let total = 0, missing = 0, withRepo = 0, withoutRepo = 0;
const rows = [];
for (const a of j.apps) {
  total++;
  const games = a.gameNames && a.gameNames.length ? a.gameNames : [a.name];
  if (games.some((g) => mine.has(norm(g)))) continue;
  missing++;
  const repo = a.repository || "";
  const url = repo ? "https://github.com/" + repo : "";
  const dupSrc = url && mineSources.has(url.toLowerCase());
  if (repo && !dupSrc) withRepo++; else withoutRepo++;
  rows.push({ name: (games[0] || a.name || "").trim(), repo, sp: a.sourcePlatform || "", plats: (a.platforms || []).join("/"), dupSrc });
}
console.log(`GameWave apps: ${total}`);
console.log(`In our catalog: ${total - missing}`);
console.log(`Still missing: ${missing}`);
console.log(`  - with a NEW repo link: ${withRepo}`);
console.log(`  - without repo / already-used repo: ${withoutRepo}`);
fs.writeFileSync("C:/Users/israe/AppData/Local/Temp/opencode/gw-final-missing.txt", rows.map((r) => [r.name, r.repo || "(no repo)", r.sp, r.plats, r.dupSrc ? "(repo already used)" : ""].join(" | ")).join("\n"), "utf8");
console.log("written gw-final-missing.txt");
