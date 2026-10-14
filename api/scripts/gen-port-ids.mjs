// Generates api/src/port-ids.json from the static site build output.
// Run the root build first: `npm run build` (produces out/api/ports.json).
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const apiDir = resolve(scriptDir, "..");
const repoRoot = resolve(apiDir, "..");

const sourcePath = join(repoRoot, "out", "api", "ports.json");
const targetPath = join(apiDir, "src", "port-ids.json");

const raw = readFileSync(sourcePath, "utf8");
const data = JSON.parse(raw);
const ports = Array.isArray(data) ? data : data.ports;

if (!Array.isArray(ports)) {
  throw new Error(`Unexpected ports.json shape at ${sourcePath}`);
}

const ids = ports
  .map((port) => port?.id)
  .filter((id) => typeof id === "string" && id.length > 0);

const unique = Array.from(new Set(ids)).sort();

mkdirSync(dirname(targetPath), { recursive: true });
writeFileSync(targetPath, `${JSON.stringify(unique, null, 2)}\n`, "utf8");

console.log(`Wrote ${unique.length} port ids to ${targetPath}`);
