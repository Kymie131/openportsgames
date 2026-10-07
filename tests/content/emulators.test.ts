import { describe, expect, it } from "vitest";
import { allConsoles, countEmulators, generations } from "@/content/emulators";

describe("emulator registry", () => {
  it("exposes generations with unique ids and ascending numbers", () => {
    const ids = generations.map((g) => g.id);
    expect(new Set(ids).size).toBe(ids.length);
    expect(ids.length).toBeGreaterThan(0);
  });

  it("uses unique console slugs across all generations", () => {
    const slugs = allConsoles.map((c) => c.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("links only to official https sources", () => {
    for (const consoleDef of allConsoles) {
      for (const emu of consoleDef.emulators) {
        expect(emu.source, `${consoleDef.slug}/${emu.id}`).toMatch(/^https:\/\//);
      }
    }
  });

  it("marks at most one best pick per console", () => {
    for (const consoleDef of allConsoles) {
      const picks = consoleDef.emulators.filter((emu) => emu.recommended);
      expect(picks.length, consoleDef.slug).toBeLessThanOrEqual(1);
    }
  });

  it("gives every emulator a localized note and at least one platform", () => {
    for (const consoleDef of allConsoles) {
      for (const emu of consoleDef.emulators) {
        expect(emu.note.en.length, emu.id).toBeGreaterThan(10);
        expect(emu.note.es.length, emu.id).toBeGreaterThan(10);
        expect(emu.platforms.length, emu.id).toBeGreaterThan(0);
      }
    }
  });

  it("counts a non-trivial number of emulators", () => {
    expect(countEmulators()).toBeGreaterThan(40);
  });
});
