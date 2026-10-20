import { describe, expect, it } from "vitest";
import { OG_IMAGE, pageMeta, portPlatformLabel, portTitle, summarize } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

describe("port page titles", () => {
  it("names the actual target platform instead of always saying PC", () => {
    expect(portTitle("en", "Super Mario Galaxy", "GalaxyPad", ["android"])).toBe(
      "Super Mario Galaxy native Android port – GalaxyPad",
    );
    expect(portTitle("es", "Super Mario Galaxy", "GalaxyPad", ["android"])).toBe(
      "Super Mario Galaxy port nativo para Android – GalaxyPad",
    );
    expect(portTitle("en", "Wind Waker HD", "SwitchWakerHD", ["switch"])).toBe(
      "Wind Waker HD native Nintendo Switch port – SwitchWakerHD",
    );
  });

  it("keeps PC when the port also ships on desktop platforms", () => {
    expect(portTitle("en", "Forza Horizon", "Pinyon Shift", ["windows", "linux", "android"])).toBe(
      "Forza Horizon native PC port – Pinyon Shift",
    );
  });

  it("labels each non-desktop target", () => {
    expect(portPlatformLabel(["windows"])).toBe("PC");
    expect(portPlatformLabel(["web"])).toBe("PC");
    expect(portPlatformLabel(["ios"])).toBe("iOS");
    expect(portPlatformLabel(["psvita"])).toBe("PS Vita");
    expect(portPlatformLabel(["3ds"])).toBe("Nintendo 3DS");
    expect(portPlatformLabel(["psp"])).toBe("PSP");
    expect(portPlatformLabel(["ps2"])).toBe("PlayStation 2");
    expect(portPlatformLabel(["n64"])).toBe("Nintendo 64");
    expect(portPlatformLabel(["ds"])).toBe("Nintendo DS");
    expect(portPlatformLabel(["xbox360"])).toBe("Xbox 360");
    expect(portPlatformLabel(["dreamcast"])).toBe("Dreamcast");
    expect(portPlatformLabel(["arcade"])).toBe("Arcade");
    expect(portPlatformLabel(["windows", "psp"])).toBe("PC");
  });
});

describe("meta description summarizer", () => {
  it("keeps short descriptions untouched", () => {
    const text = "Native source port of Duke Nukem 3D.";
    expect(summarize(text)).toBe(text);
  });

  it("cuts long descriptions on a word boundary and closes with a period", () => {
    const long =
      "Fully commented disassembly of the first generation Pokémon games that builds " +
      "byte-perfect copies via rgbds. Produces the original Game Boy ROM rather than " +
      "a native modern executable.";
    const summary = summarize(long);
    expect(summary.length).toBeLessThanOrEqual(156);
    expect(summary.endsWith(".")).toBe(true);
    expect(summary.slice(-2, -1)).not.toBe(" ");
    expect(summary).not.toContain("…");
  });

  it("defaults to a 155-character cap", () => {
    expect(summarize("a".repeat(300)).length).toBe(156);
  });

  it("hard-cuts an unbroken token longer than the cap", () => {
    const summary = summarize("z".repeat(300));
    expect(summary).toBe("z".repeat(155) + ".");
  });

  it("never uses an ellipsis glyph", () => {
    expect(summarize("a".repeat(200))).not.toContain("…");
    expect(summarize("a".repeat(200)).endsWith(".")).toBe(true);
  });
});

describe("Open Graph image metadata", () => {
  it("points at the actual PNG asset with an absolute URL", () => {
    expect(OG_IMAGE.url).toBe(absoluteUrl("/opengraph-image.png"));
    expect(OG_IMAGE.width).toBe(1200);
    expect(OG_IMAGE.height).toBe(630);
  });
});

describe("per-locale page metadata", () => {
  it("sets a self-referential canonical and reciprocal es/en hreflang", () => {
    const meta = pageMeta({ locale: "es", title: "Guías", description: "desc", path: "/guides" });
    expect(meta.alternates?.canonical).toBe(absoluteUrl("/es/guides/"));
    const languages = meta.alternates?.languages as Record<string, string>;
    expect(languages.en).toBe(absoluteUrl("/en/guides/"));
    expect(languages.es).toBe(absoluteUrl("/es/guides/"));
    expect(languages["x-default"]).toBe(absoluteUrl("/en/guides/"));
    expect(meta.openGraph?.locale).toBe("es_ES");
  });

  it("uses the English canonical and en_US locale for the en route", () => {
    const meta = pageMeta({ locale: "en", description: "desc", path: "/ports/sm64ex" });
    expect(meta.alternates?.canonical).toBe(absoluteUrl("/en/ports/sm64ex/"));
    expect(meta.openGraph?.locale).toBe("en_US");
  });
});
