import { describe, expect, it } from "vitest";
import { asLocale, localizePath, stripLocale } from "@/lib/i18n/locales";

describe("localizePath", () => {
  it("prefixes the locale and always keeps a trailing slash", () => {
    expect(localizePath("en", "/ports")).toBe("/en/ports/");
    expect(localizePath("es", "/ports/sm64ex")).toBe("/es/ports/sm64ex/");
    expect(localizePath("en", "/")).toBe("/en/");
    expect(localizePath("es", "/guides/")).toBe("/es/guides/");
  });

  it("keeps the trailing slash before the query string", () => {
    expect(localizePath("es", "/ports?sort=newest")).toBe("/es/ports/?sort=newest");
    expect(localizePath("en", "/pc?q=zelda&page=2")).toBe("/en/pc/?q=zelda&page=2");
    expect(localizePath("es", "/ports/")).toBe("/es/ports/");
  });

  it("keeps the trailing slash before a hash and combined query+hash", () => {
    expect(localizePath("es", "/guides#faq")).toBe("/es/guides/#faq");
    expect(localizePath("en", "/ports?sort=newest#top")).toBe("/en/ports/?sort=newest#top");
    expect(localizePath("es", "/#main")).toBe("/es/#main");
  });

  it("never emits a slash directly after a query or hash", () => {
    for (const path of ["/ports?sort=newest", "/ports?q=a#b", "/x#y"]) {
      const localized = localizePath("es", path);
      expect(localized).not.toMatch(/[?#][^?#]*\/$/);
    }
  });
});

describe("stripLocale", () => {
  it("removes a leading locale segment", () => {
    expect(stripLocale("/en/ports/")).toBe("/ports/");
    expect(stripLocale("/es/")).toBe("/");
    expect(stripLocale("/en")).toBe("/");
    expect(stripLocale("/ports/")).toBe("/ports/");
  });
});

describe("asLocale", () => {
  it("narrows supported locales and falls back to English", () => {
    expect(asLocale("es")).toBe("es");
    expect(asLocale("en")).toBe("en");
    expect(asLocale("fr")).toBe("en");
  });
});
