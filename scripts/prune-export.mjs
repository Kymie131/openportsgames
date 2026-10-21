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
//
// The script is idempotent, verifies every duplicate before deleting it, and
// never fails the build: anything unexpected is reported and left in place.
import { createHash } from "node:crypto";
import { existsSync, readdirSync, readFileSync, statSync, unlinkSync } from "node:fs";
import { basename, dirname, join } from "node:path";

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

for (const file of walk(OUT_DIR)) {
  const base = basename(file);

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
  `[prune-export] removed ${removedFull} duplicate __next._full.txt and ${removedOg} unused per-port opengraph-image files.`,
);
if (keptFull > 0) console.log(`[prune-export] kept ${keptFull} non-duplicate __next._full.txt files.`);
if (keptOg > 0) console.log(`[prune-export] kept ${keptOg} opengraph-image files outside a page directory.`);
