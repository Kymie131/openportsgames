import { describe, expect, it } from "vitest";
import { existsSync, readdirSync } from "node:fs";
import path from "node:path";
import {
  consoleLogoForSystem,
  consoleLogoSlugBySystem,
  consoleLogoSlugs,
} from "@/content/ports/console-logos";
import { originalSystemOf, ports } from "@/lib/ports";

const LOGO_DIR = path.join(process.cwd(), "public", "logos", "console");

describe("console logo badges", () => {
  it("keeps the available slug list in sync with the logos folder", () => {
    const files = readdirSync(LOGO_DIR).filter((file) => file.endsWith(".png"));
    const slugsOnDisk = files.map((file) => file.replace(/\.png$/, "")).sort();
    expect([...consoleLogoSlugs].sort()).toEqual(slugsOnDisk);
  });

  it("never resolves a badge path to a missing file", () => {
    for (const slug of consoleLogoSlugs) {
      expect(existsSync(path.join(LOGO_DIR, `${slug}.png`)), slug).toBe(true);
    }
  });

  it("every mapped system with artwork resolves to an existing logo", () => {
    for (const system of Object.keys(consoleLogoSlugBySystem)) {
      const logo = consoleLogoForSystem(system);
      if (logo !== null) {
        expect(logo, system).toMatch(/^\/logos\/console\/[a-z0-9-]+\.png$/);
        const file = path.join(LOGO_DIR, path.basename(logo));
        expect(existsSync(file), system).toBe(true);
      }
    }
  });

  it("annotates every catalog entry with a resolvable logo or an explicit fallback", () => {
    for (const port of ports) {
      const system = originalSystemOf(port.id) ?? "";
      const logo = consoleLogoForSystem(system);
      if (logo !== null) {
        expect(existsSync(path.join(LOGO_DIR, path.basename(logo))), port.id).toBe(true);
      }
    }
  });
});