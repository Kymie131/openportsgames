import { describe, expect, it } from "vitest";
import { OG_IMAGE, summarize } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

describe("meta description summarizer", () => {
  it("keeps short descriptions untouched", () => {
    const text = "Native source port of Duke Nukem 3D.";
    expect(summarize(text)).toBe(text);
  });

  it("cuts long descriptions on a word boundary and appends an ellipsis", () => {
    const long =
      "Fully commented disassembly of the first generation Pokémon games that builds " +
      "byte-perfect copies via rgbds. Produces the original Game Boy ROM rather than " +
      "a native modern executable.";
    const summary = summarize(long);
    expect(summary.length).toBeLessThanOrEqual(156);
    expect(summary.endsWith("…")).toBe(true);
    expect(summary[summary.length - 2]).not.toBe(" ");
  });

  it("defaults to a 155-character cap", () => {
    expect(summarize("a".repeat(300)).length).toBe(156);
  });

  it("hard-cuts an unbroken token longer than the cap", () => {
    const summary = summarize("z".repeat(300));
    expect(summary).toBe("z".repeat(155) + "…");
  });

  it("uses the ellipsis glyph, never an ASCII ellipsis", () => {
    expect(summarize("a".repeat(200))).toContain("…");
  });
});

describe("Open Graph image metadata", () => {
  it("points at the actual PNG asset with an absolute URL", () => {
    expect(OG_IMAGE.url).toBe(absoluteUrl("/opengraph-image.png"));
    expect(OG_IMAGE.width).toBe(1200);
    expect(OG_IMAGE.height).toBe(630);
  });
});
