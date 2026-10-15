import { describe, expect, it } from "vitest";
import { getGamePorts } from "@/lib/ports";
import { portShareImage } from "@/lib/ports/share";
import { OG_IMAGE } from "@/lib/seo";

describe("ficha share images", () => {
  it("uses the entry's own cover instead of the generic card", () => {
    const withCover = getGamePorts().filter((port) => port.cover);
    expect(withCover.length).toBeGreaterThan(0);
    for (const port of withCover) {
      const image = portShareImage("en", port);
      expect(image, port.id).toBeDefined();
      expect(image!.url, port.id).toBe(port.cover!.src);
      expect(image!.url, port.id).not.toBe(OG_IMAGE.url);
      expect(image!.url, port.id).toMatch(/^https:\/\//);
      expect(image!.alt, port.id).toContain(port.game);
    }
  });

  it("falls back to the generic card when there is no cover", () => {
    for (const port of getGamePorts().filter((port) => !port.cover)) {
      expect(portShareImage("en", port), port.id).toBeUndefined();
    }
  });

  it("localizes the alt text", () => {
    const port = getGamePorts().find((entry) => entry.cover);
    expect(port).toBeDefined();
    expect(portShareImage("es", port!)!.alt).toBe(`Carátula de ${port!.game}`);
    expect(portShareImage("en", port!)!.alt).toBe(`${port!.game} cover`);
  });
});
