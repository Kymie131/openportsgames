import { describe, expect, it } from "vitest";
import { getGamePorts } from "@/lib/ports";
import { portDescription } from "@/lib/ports/description";
import { dictionaries } from "@/lib/i18n/dictionaries";

/** Entries whose Spanish and English bodies are intentionally the same text. */
const IDENTICAL_OK = new Set(["generalsgamecode", "chikis-chase"]);

describe("localized ficha meta descriptions", () => {
  const games = getGamePorts();

  it("stays within 70-160 characters in both locales", () => {
    for (const port of games) {
      for (const locale of ["en", "es"] as const) {
        const description = portDescription(locale, port, dictionaries[locale]);
        expect(description.length, `${port.id} ${locale} (${description.length})`).toBeGreaterThanOrEqual(70);
        expect(description.length, `${port.id} ${locale} (${description.length})`).toBeLessThanOrEqual(160);
      }
    }
  });

  it("never reuses the English description on the Spanish route", () => {
    for (const port of games) {
      if (IDENTICAL_OK.has(port.id)) continue;
      const en = portDescription("en", port, dictionaries.en);
      const es = portDescription("es", port, dictionaries.es);
      expect(es, port.id).not.toBe(en);
    }
  });
});
