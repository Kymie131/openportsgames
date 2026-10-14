import { describe, expect, it } from "vitest";
import { asLocale, localizePath, stripLocale } from "@/lib/i18n/locales";

describe("localizePath", () => {
  it("prefixes the locale and always keeps a trailing slash", () => {
    expect(localizePath("en", "/ports")).toBe("/en/ports/");
    expect(localizePath("es", "/ports/sm64ex")).toBe("/es/ports/sm64ex/");
    expect(localizePath("en", "/")).toBe("/en/");
    expect(localizePath("es", "/guides/")).toBe("/es/guides/");
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
