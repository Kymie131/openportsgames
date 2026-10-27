// Promote an existing account to the "admin" role.
//
// Usage: npm run promote-admin -- you@example.com
//
// The account must have signed in at least once so its user row exists.
import { execFileSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const API_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const email = (process.argv[2] ?? "").trim().toLowerCase();

if (!/^[^\s'\\@]+@[^\s'\\@]+\.[^\s'\\@]+$/.test(email) || email.length > 254) {
  console.error("Usage: npm run promote-admin -- <email>");
  process.exit(1);
}

const sql = `UPDATE user SET role = 'admin', updated_at = (cast(unixepoch('subsecond') * 1000 as integer)) WHERE lower(email) = '${email}';`;
const npx = process.platform === "win32" ? "npx.cmd" : "npx";

execFileSync(
  npx,
  [
    "--yes",
    "wrangler@latest",
    "d1",
    "execute",
    "openportsgames-db",
    "--remote",
    "--command",
    sql,
  ],
  { cwd: API_DIR, stdio: "inherit", shell: process.platform === "win32" },
);

console.log(`Admin role requested for ${email}.`);

