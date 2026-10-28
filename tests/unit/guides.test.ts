import { describe, expect, it } from "vitest";
import { getGuideDef, guideDefs, guideSlugs } from "@/content/guides";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { locales } from "@/lib/i18n/locales";

describe("guides registry", () => {
  it("keeps one definition per slug, in the same order", () => {
    expect(guideDefs.map((guide) => guide.slug)).toEqual([...guideSlugs]);
  });

  it("has no duplicate slugs", () => {
    expect(new Set(guideSlugs).size).toBe(guideSlugs.length);
  });

  it("resolves every slug and rejects unknown ones", () => {
    for (const slug of guideSlugs) {
      expect(getGuideDef(slug)?.slug).toBe(slug);
    }
    expect(getGuideDef("not-a-guide")).toBeUndefined();
  });

  it("has a non-empty title and summary in every locale", () => {
    for (const locale of locales) {
      const guides = dictionaries[locale].guides;
      for (const guide of guideDefs) {
        expect(guide.title(guides).trim(), guide.slug).not.toBe("");
        expect(guide.summary(guides).trim(), guide.slug).not.toBe("");
      }
    }
  });
});
