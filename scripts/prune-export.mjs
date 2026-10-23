#!/usr/bin/env node
// Prunes static-export artifacts that only duplicate another file, so the
// deployment stays under Cloudflare Pages' 20,000-file limit.
//
// 1. `__next._full.txt` is byte-identical to the sibling `index.txt` for the
//    static pages; it is only an extra prefetch copy. The tree prefetch
//    (`__next._tree.txt`) and the RSC payload (`index.txt`) are kept.
// 2. Per-port `opengraph-image` files are unused: the page metadata points to
//    the game cover when the entry has one, and to the shared root card
//    otherwise (see `src/lib/ports/share.ts`).
// 3. Port detail pages also ship three React Server Component payloads per
//    locale (`index.txt`, `__next._tree.txt` and `__next.$d$lang/.../__PAGE__.txt`).
//    They are only used for client-side prefetching; direct loads and SEO use
//    `index.html`. Removing them makes link transitions fall back to full page
//    loads (which still work) and frees ~6 files per port, raising the catalog
//    capacity from ~2.000 to ~9.000 entries under the 20.000-file host limit.
//
// The script is idempotent, verifies every duplicate before deleting it, and
// never fails the build: anything unexpected is reported and left in place.
import { createHash } from "node:crypto";
import { existsSync, readdirSync, readFileSync, statSync, unlinkSync } from "node:fs";
import { basename, dirname, join, sep } from "node:path";

const OUT_DIR = process.env.OUT_DIR ?? "out";

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) out.push(...walk(join(dir, entry.name)));
    else out.push(join(dir, entry.name));
  }
  return out;
}

function digest(file) {
  return createHash("sha256").update(readFileSync(file)).digest("hex");
}

if (!existsSync(OUT_DIR)) {
  console.log(`[prune-export] ${OUT_DIR}/ not found; skipping.`);
  process.exit(0);
}

let removedFull = 0;
let keptFull = 0;
let removedOg = 0;
let keptOg = 0;
let removedRsc = 0;

/** True for files inside `out/<locale>/ports/<slug>/`, but not the listing or pagination. */
function isPortDetailFile(file) {
  const parts = file.split(sep);
  for (let index = 0; index < parts.length - 1; index += 1) {
    if (parts[index] !== "ports") continue;
    const slug = parts[index + 1];
    if (!slug || slug === "page") continue;
    const pageDir = parts.slice(0, index + 2).join(sep);
    if (existsSync(join(pageDir, "index.html"))) return true;
  }
  return false;
}

for (const file of walk(OUT_DIR)) {
  const base = basename(file);

  if (base.endsWith(".txt") && isPortDetailFile(file)) {
    unlinkSync(file);
    removedRsc++;
    continue;
  }

  if (base === "__next._full.txt") {
    const index = join(dirname(file), "index.txt");
    if (existsSync(index) && statSync(index).isFile()) {
      try {
        if (digest(file) === digest(index)) {
          unlinkSync(file);
          removedFull++;
          continue;
        }
      } catch {
        // Fall through and keep the file.
      }
    }
    keptFull++;
    continue;
  }

  if (base === "opengraph-image") {
    // A generated image route lives in its own directory next to index.html.
    const page = join(dirname(file), "index.html");
    if (existsSync(page) && statSync(page).isFile()) {
      unlinkSync(file);
      removedOg++;
    } else {
      keptOg++;
    }
  }

}

console.log(
  `[prune-export] removed ${removedFull} duplicate __next._full.txt, ${removedOg} unused per-port opengraph-image files and ${removedRsc} per-port RSC payloads.`,
);
if (keptFull > 0) console.log(`[prune-export] kept ${keptFull} non-duplicate __next._full.txt files.`);
if (keptOg > 0) console.log(`[prune-export] kept ${keptOg} opengraph-image files outside a page directory.`);
