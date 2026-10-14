// Generates the plan-B redirect list (docs/redirects-301.csv) from the catalog.
// Plan A is a wildcard Redirect Rule per section, documented in docs/DEPLOYMENT.md.
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const BASE = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://openportsgames.com").replace(/\/+$/, "");
const dir = path.join(ROOT, "src", "content", "ports");

const ids = [];
for (const f of fs.readdirSync(dir)) {
  if (!f.endsWith(".ts") || ["index.ts", "meta.ts", "console-logos.ts"].includes(f)) continue;
  const match = fs.readFileSync(path.join(dir, f), "utf8").match(/id:\s*"([a-z0-9-]+)"/);
  if (match) ids.push(match[1]);
}

const sections = [
  "ports",
  "pc",
  "android",
  "console",
  "emulators",
  "guides",
  "testing",
  "submit",
  "support",
  "about",
  "legal",
];

const rows = [];
for (const section of sections) rows.push([`${BASE}/${section}/`, `${BASE}/en/${section}/`, "301"]);
for (const id of ids) rows.push([`${BASE}/ports/${id}/`, `${BASE}/en/ports/${id}/`, "301"]);

const csv = ["source_url,target_url,status", ...rows.map((r) => r.join(","))].join("\n");
fs.writeFileSync(path.join(ROOT, "docs", "redirects-301.csv"), `${csv}\n`);
console.log(`Wrote ${rows.length} redirect rows to docs/redirects-301.csv`);
