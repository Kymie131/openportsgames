// Generates the plan-B redirect list (docs/redirects-301.csv) from the catalog.
// Plan A is a wildcard Redirect Rule per section, documented in docs/DEPLOYMENT.md.
//
// Ids are taken from the ports actually registered in src/content/ports/index.ts
// (not from every file on disk): unregistered/orphan files produce no page, so a
// redirect pointing at them would 404.
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const BASE = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://openportsgames.com").replace(/\/+$/, "");
const dir = path.join(ROOT, "src", "content", "ports");

// Modules wired into the catalog, e.g. import { x } from "./sm64ex";
const index = fs.readFileSync(path.join(dir, "index.ts"), "utf8");
const modules = [...index.matchAll(/from\s+"\.\/([^"]+)"/g)].map((m) => m[1]);

const ids = [];
for (const mod of modules) {
  const file = path.join(dir, `${mod}.ts`);
  if (!fs.existsSync(file)) continue;
  const src = fs.readFileSync(file, "utf8");
  if (/status:\s*"takedown"/.test(src)) continue;
  const match = src.match(/id:\s*"([a-z0-9-]+)"/);
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
