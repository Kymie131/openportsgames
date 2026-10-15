// Generates docs/redirects-slugs.csv: 301 redirects from the slugs that were
// mangled before slugify() stripped diacritics (Pokémon -> pok-mon). Kept in
// sync with src/lib/ports/slug.ts; the pairs below are the historical ones.
//
// Cloudflare: upload under Rules -> Bulk Redirects (columns source_url,target_url,status).
// The legacy root form (/ports/<old>/) is included so it 301s straight to the
// new localized URL instead of chaining through /en/ports/<old>/.
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const BASE = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://openportsgames.com").replace(/\/+$/, "");

/** old slug -> new slug (see src/lib/ports/slug.ts). */
const RENAMES = {
  "fushigi-no-dungeon-f-rai-no-shiren-2-oni-sh-rai-shiren-j":
    "fushigi-no-dungeon-furai-no-shiren-2-oni-shurai-shiren-jo",
  "jpn-pok-mon-blue": "jpn-pokemon-blue",
  kamiden: "okamiden",
  "pok-mon-black-2-and-white-2": "pokemon-black-2-and-white-2",
  "pok-mon-moon": "pokemon-moon",
  "pok-mon-sword": "pokemon-sword",
};

const rows = [];
for (const [oldSlug, newSlug] of Object.entries(RENAMES)) {
  rows.push([`${BASE}/ports/${oldSlug}/`, `${BASE}/en/ports/${newSlug}/`, "301"]);
  rows.push([`${BASE}/en/ports/${oldSlug}/`, `${BASE}/en/ports/${newSlug}/`, "301"]);
  rows.push([`${BASE}/es/ports/${oldSlug}/`, `${BASE}/es/ports/${newSlug}/`, "301"]);
}

const csv = ["source_url,target_url,status", ...rows.map((r) => r.join(","))].join("\n");
fs.writeFileSync(path.join(ROOT, "docs", "redirects-slugs.csv"), `${csv}\n`);
console.log(`Wrote ${rows.length} redirect rows to docs/redirects-slugs.csv`);
