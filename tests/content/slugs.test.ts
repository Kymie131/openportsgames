import { describe, expect, it } from "vitest";
import { ports } from "@/lib/ports";
import { slugify } from "@/lib/ports/slug";

/** The old slugifier: it collapsed non-ASCII letters to hyphens instead of stripping them. */
function legacySlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

describe("slugify", () => {
  it("strips diacritics after an NFD decomposition", () => {
    expect(slugify("Pokémon Sword")).toBe("pokemon-sword");
    expect(slugify("Fūrai no Shiren 2 — Oni Shūrai! Shiren-jō!")).toBe(
      "furai-no-shiren-2-oni-shurai-shiren-jo",
    );
    expect(slugify("Ōkamiden")).toBe("okamiden");
    expect(slugify("Viva Piñata")).toBe("viva-pinata");
  });

  it("collapses punctuation and casing into a kebab slug", () => {
    expect(slugify("F-Zero (SNES) Recompiled")).toBe("f-zero-snes-recompiled");
    expect(slugify("  spaced  out  ")).toBe("spaced-out");
  });

  it("is idempotent", () => {
    for (const value of ["pokemon-sword", "2ship2harkinian", "metal-slug-x-recomp"]) {
      expect(slugify(value)).toBe(value);
    }
  });
});

describe("port slugs", () => {
  it("keeps every id a normalized lowercase kebab slug", () => {
    for (const port of ports) {
      expect(port.id, port.title).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
      expect(slugify(port.id), port.id).toBe(port.id);
    }
  });

  it("never leaves a diacritic-derived stray hyphen (pok-mon, f-rai, ...)", () => {
    for (const port of ports) {
      const proper = slugify(port.title);
      const legacy = legacySlug(port.title);
      // Only titles with diacritics differ between the proper and legacy slug.
      if (proper !== legacy) {
        expect(port.id, `${port.id} still uses the mangled slug ${legacy}`).not.toBe(legacy);
      }
    }
  });

  it("has no duplicate slugs", () => {
    const ids = ports.map((port) => port.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});
