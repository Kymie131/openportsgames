import { describe, expect, it } from "vitest";
import { dictionaries, defaultLocale } from "@/lib/i18n/dictionaries";
import { portTypes } from "@/lib/ports/schema";

const otherLocale = defaultLocale === "en" ? "es" : "en";

function isEmpty(value: string | string[] | undefined): boolean {
  if (value === undefined) return true;
  const list = Array.isArray(value) ? value : [value];
  return list.some((entry) => entry.trim().length < 3);
}

describe("editorial content", () => {
  const pages = ["guides", "submit", "support", "about", "legal"] as const;

  it("localizes every editorial page in both locales", () => {
    for (const locale of [defaultLocale, otherLocale] as const) {
      const t = dictionaries[locale];
      for (const page of pages) {
        expect(t[page].subtitle.trim().length, `${locale}.${page}`).toBeGreaterThan(3);
      }
    }
  });

  it("keeps both locales structurally aligned (faq and technique bodies)", () => {
    const en = dictionaries.en;
    const es = dictionaries.es;
    expect(es.guides.faq).toHaveLength(en.guides.faq.length);
    expect(es.guides.faq.map((item) => item.q)).toHaveLength(en.guides.faq.length);
    for (const technique of portTypes) {
      expect(isEmpty(en.guides.techniques[technique])).toBe(false);
      expect(isEmpty(es.guides.techniques[technique])).toBe(false);
    }
  });

  it("maps submit templates to the issue templates directory", () => {
    for (const locale of [defaultLocale, otherLocale] as const) {
      expect(dictionaries[locale].submit.portTemplateLabel.trim()).toBeTruthy();
      expect(dictionaries[locale].submit.testTemplateLabel.trim()).toBeTruthy();
      expect(dictionaries[locale].submit.openTemplate.trim()).toBeTruthy();
    }
  });

  it("keeps the 404 content complete in both locales", () => {
    for (const locale of [defaultLocale, otherLocale] as const) {
      const notFound = dictionaries[locale].common.notFound;
      expect(notFound.title.trim()).toBeTruthy();
      expect(notFound.body.trim()).toBeTruthy();
      expect(notFound.backToCatalog.trim()).toBeTruthy();
      expect(notFound.backToHome.trim()).toBeTruthy();
    }
  });

  it("covers all five editorial pages in nav and footer groups", () => {
    for (const locale of [defaultLocale, otherLocale] as const) {
      const t = dictionaries[locale];
      const navKeys = ["guides", "submit", "support", "about", "legal"] as const;
      for (const key of navKeys) {
        expect(t.nav[key].trim().length, `${locale}.nav.${key}`).toBeGreaterThan(1);
      }
      for (const group of ["catalog", "project", "site"] as const) {
        expect(t.footer.groups[group].trim().length, `${locale}.footer.${group}`).toBeGreaterThan(1);
      }
    }
  });

  it("documents at least four frequently asked questions", () => {
    expect(dictionaries.en.guides.faq.length).toBeGreaterThanOrEqual(4);
  });
});