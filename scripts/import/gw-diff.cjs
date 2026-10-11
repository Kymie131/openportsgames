const fs = require("fs");
const path = require("path");
const GW = "C:/Users/israe/.local/share/opencode/tool-output/tool_122029c56001tS61iPkn67uUCO";
const PORTS = "C:/Users/israe/OneDrive/Documentos/REPOS/pagina_web_ports_videogames/openportsgames/src/content/ports";

const norm = (s) => (s || "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

const mine = new Set();
for (const f of fs.readdirSync(PORTS)) {
  if (!f.endsWith(".ts")) continue;
  const c = fs.readFileSync(path.join(PORTS, f), "utf8");
  const g = (c.match(/game:\s*"([^"]+)"/) || [])[1];
  const t = (c.match(/title:\s*"([^"]+)"/) || [])[1];
  if (g) mine.add(norm(g));
  if (t) mine.add(norm(t));
}

const j = JSON.parse(fs.readFileSync(GW, "utf8"));
const EXCLUDE = new Set(["PC / Other", "Multiple", "Multi-platform", "PC", "Others", "PC / RSDKv5"]);
const rows = [];
for (const a of j.apps) {
  const sp = a.sourcePlatform || "";
  if (EXCLUDE.has(sp)) continue;
  const games = a.gameNames && a.gameNames.length ? a.gameNames : [a.name];
  const hit = games.some((g) => mine.has(norm(g)));
  rows.push({
    missing: !hit,
    name: (games[0] || a.name || "").trim(),
    repo: a.repository || "",
    sp,
    plats: (a.platforms || []).join("/"),
  });
}
const missing = rows.filter((r) => r.missing);
console.log("Console-ish entries:", rows.length, "| missing from our catalog:", missing.length);
const byPlat = {};
for (const r of missing) byPlat[r.sp] = (byPlat[r.sp] || 0) + 1;
for (const [k, v] of Object.entries(byPlat).sort((a, b) => b[1] - a[1])) console.log(v + "  " + k);
fs.writeFileSync("C:/Users/israe/AppData/Local/Temp/opencode/gw-missing.txt",
  missing.map((r) => [r.name, r.repo, r.sp, r.plats].join(" | ")).join("\n"), "utf8");
console.log("\nwritten gw-missing.txt");
