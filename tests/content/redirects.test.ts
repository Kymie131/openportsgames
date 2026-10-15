import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { getPorts } from "@/lib/ports";

const root = process.cwd();

const activePortIds = new Set(getPorts().map((port) => port.id));

/** Static sections that ship a page under /[lang]/<section>/. */
const SECTIONS = new Set([
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
]);

interface Row {
  source: string;
  target: string;
  status: string;
}

function readCsv(relativePath: string): Row[] {
  const text = fs.readFileSync(path.join(root, relativePath), "utf8").trim();
  const [header, ...lines] = text.split(/\r?\n/);
  expect(header, relativePath).toBe("source_url,target_url,status");
  return lines.map((line) => {
    const [source, target, status] = line.split(",");
    return { source, target, status };
  });
}

/** Asserts a redirect target resolves to a route the static export builds. */
function assertExistingRoute(target: string, context: string) {
  const url = new URL(target);
  expect(url.protocol, `${context}: ${target}`).toBe("https:");
  expect(url.pathname.endsWith("/"), `${context}: missing trailing slash ${target}`).toBe(true);

  const port = url.pathname.match(/^\/(?:en|es)\/ports\/([^/]+)\/$/);
  if (port) {
    expect(activePortIds.has(port[1]), `${context}: no page for port "${port[1]}"`).toBe(true);
    return;
  }

  const section = url.pathname.match(/^\/(?:en|es)\/([^/]+)\/$/);
  if (section) {
    expect(SECTIONS.has(section[1]), `${context}: no page for section "${section[1]}"`).toBe(true);
    return;
  }

  throw new Error(`${context}: unrecognized target ${target}`);
}

describe("redirect lists", () => {
  const files = ["docs/redirects-301.csv", "docs/redirects-slugs.csv"];

  it("are non-empty", () => {
    for (const file of files) {
      expect(readCsv(file).length, file).toBeGreaterThan(0);
    }
  });

  it("only point at existing catalog routes", () => {
    for (const file of files) {
      for (const row of readCsv(file)) {
        expect(row.status, file).toBe("301");
        assertExistingRoute(row.target, file);
      }
    }
  });

  it("redirects-301 covers every active port with a legacy -> /en/ rule", () => {
    const rows = readCsv("docs/redirects-301.csv");
    const byTarget = new Set(rows.map((row) => row.target));
    for (const port of getPorts()) {
      expect(byTarget.has(`https://openportsgames.com/en/ports/${port.id}/`), port.id).toBe(true);
    }
  });
});
