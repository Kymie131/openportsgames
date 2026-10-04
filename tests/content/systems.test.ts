import { describe, expect, it } from "vitest";
import { originalSystemOf, ports } from "@/lib/ports";
import { systemSlugByLabel, systems, resolveSystem } from "@/content/systems";

describe("system registry", () => {
  it("resolves every port's original system to a canonical entry", () => {
    for (const port of ports) {
      const label = originalSystemOf(port.id);
      expect(label, port.id).toBeTruthy();
      const resolved = resolveSystem(label);
      expect(resolved, `${port.id} (${label})`).not.toBeNull();
    }
  });

  it("normalizes known duplicate and composed labels", () => {
    expect(resolveSystem("GameCube")?.slug).toBe("gamecube");
    expect(resolveSystem("Nintendo GameCube")?.slug).toBe("gamecube");
    expect(resolveSystem("MS-DOS / Microsoft Windows")?.slug).toBe("ms-dos");
    expect(resolveSystem("Microsoft Windows / MS-DOS")?.slug).toBe("windows");
    expect(resolveSystem("PlayStation / Sega Saturn")?.secondary?.en).toBe("Sega Saturn");
    expect(resolveSystem("MS-DOS / Amiga")?.secondary?.en).toBe("Amiga");
  });

  it("maps every registered slug to a definition with a valid color", () => {
    for (const slug of Object.keys(systemSlugByLabel) as (keyof typeof systemSlugByLabel)[]) {
      expect(systemSlugByLabel[slug]).toBeDefined();
    }
    for (const [slug, definition] of Object.entries(systems)) {
      expect(definition.slug).toBe(slug);
      expect(definition.color).toMatch(/^#[0-9A-Fa-f]{6}$/);
      expect(definition.colorOnDark).toMatch(/^#[0-9A-Fa-f]{6}$/);
      expect(definition.name.en.length).toBeGreaterThan(0);
      expect(definition.name.es.length).toBeGreaterThan(0);
    }
  });

  it("returns null for an unknown system instead of inventing one", () => {
    expect(resolveSystem("Sega Dreamcast Ultra")).toBeNull();
    expect(resolveSystem(undefined)).toBeNull();
  });
});
