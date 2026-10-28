import { describe, expect, it } from "vitest";
import sitemap from "@/app/sitemap";
import { guideSlugs } from "@/content/guides";
import { locales } from "@/lib/i18n/locales";
import { absoluteUrl } from "@/lib/site";

const entries = sitemap();
const byUrl = new Map(entries.map((entry) => [entry.url, entry]));
const locs = new Set(byUrl.keys());

const languagesOf = (entry: (typeof entries)[number]) =>
  entry.alternates?.languages as Record<string, string>;

describe("sitemap", () => {
  it("is non-empty and every URL keeps a trailing slash", () => {
    expect(entries.length).toBeGreaterThan(0);
    for (const entry of entries) {
      expect(entry.url, entry.url).toMatch(/\/$/);
    }
  });

  it("includes en/es/x-default alternates on every <url>", () => {
    for (const entry of entries) {
      const languages = languagesOf(entry);
      expect(languages, entry.url).toBeTruthy();
      expect(Object.keys(languages).sort(), entry.url).toEqual(["en", "es", "x-default"]);
      expect(languages["x-default"], entry.url).toBe(languages.en);
    }
  });

  it("keeps alternates reciprocal between the en and es entries", () => {
    for (const entry of entries) {
      const languages = languagesOf(entry);
      const en = byUrl.get(languages.en);
      const es = byUrl.get(languages.es);
      expect(en, `missing en alternate ${languages.en}`).toBeTruthy();
      expect(es, `missing es alternate ${languages.es}`).toBeTruthy();
      expect(languagesOf(en!), entry.url).toEqual(languages);
      expect(languagesOf(es!), entry.url).toEqual(languages);
    }
  });

  it("lists every alternate target as its own <loc>", () => {
    for (const entry of entries) {
      for (const href of Object.values(languagesOf(entry))) {
        expect(locs.has(href), `${entry.url} -> ${href}`).toBe(true);
      }
    }
  });

  it("omits changefreq and priority", () => {
    for (const entry of entries) {
      expect("changeFrequency" in entry).toBe(false);
      expect("priority" in entry).toBe(false);
    }
  });

  it("uses ISO dates for lastmod when present", () => {
    for (const entry of entries) {
      if (entry.lastModified === undefined) continue;
      expect(String(entry.lastModified), entry.url).toMatch(/^\d{4}-\d{2}-\d{2}/);
    }
  });

  it("serves the regenerated slugs, not the mangled ones", () => {
    expect(locs.has(absoluteUrl("/en/ports/pokemon-sword/"))).toBe(true);
    expect(locs.has(absoluteUrl("/es/ports/pokemon-sword/"))).toBe(true);
    expect(locs.has(absoluteUrl("/en/ports/okamiden/"))).toBe(true);
    expect(locs.has(absoluteUrl("/en/ports/pok-mon-sword/"))).toBe(false);
  });

  it("lists every guide page in both locales", () => {
    for (const locale of locales) {
      for (const slug of guideSlugs) {
        expect(locs.has(absoluteUrl(`/${locale}/guides/${slug}/`)), slug).toBe(true);
      }
    }
  });
});
