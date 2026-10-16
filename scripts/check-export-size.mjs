#!/usr/bin/env node
// Counts the files produced by the static export and warns before the host
// limit is reached. Cloudflare Pages rejects a deployment above 20,000 files.
import { readdirSync } from "node:fs";
import { join } from "node:path";

const OUT_DIR = process.env.OUT_DIR ?? "out";
const WARN_AT = Number(process.env.EXPORT_WARN_AT ?? 18000);
const LIMIT = 20000;

function countFiles(dir) {
  let total = 0;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) total += countFiles(join(dir, entry.name));
    else total += 1;
  }
  return total;
}

let total;
try {
  total = countFiles(OUT_DIR);
} catch {
  console.log(`[export-size] ${OUT_DIR}/ not found; skipping.`);
  process.exit(0);
}

console.log(`[export-size] ${total} files in ${OUT_DIR}/ (warn at ${WARN_AT}, limit ${LIMIT}).`);
if (total >= LIMIT) {
  console.warn(
    `[export-size] WARNING: ${total} files reaches the ${LIMIT}-file host limit. The deployment may fail.`,
  );
} else if (total >= WARN_AT) {
  console.warn(
    `[export-size] WARNING: ${total} files is above ${WARN_AT}. Only ${LIMIT - total} files before the host limit.`,
  );
}
process.exit(0);
