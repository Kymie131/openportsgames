import type { Messages } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/locales";
import { summarize } from "@/lib/seo";
import type { Port } from "./schema";

/** Meta descriptions shorter than this are padded with the standard tail. */
export const MIN_DESCRIPTION = 70;

/**
 * Localized `<meta name="description">` for a port.
 *
 * Uses the same localized text as the page body (`notesEs` on `/es/`), falling
 * back to a localized template built from the available data when the entry has
 * no localized text, and padding too-short texts with the standard tail so the
 * result stays within the 70–155 character window search engines prefer.
 */
export function portDescription(locale: Locale, port: Port, t: Messages): string {
  const localized = (locale === "es" ? port.notesEs : port.notes)?.trim() ?? "";

  if (localized === "") {
    const platform =
      port.platforms.map((key) => t.platforms[key]).join(", ") ||
    port.originalSystems?.find((system) => system !== "Unknown") ||
    "PC";
    const technique = t.portTypes[port.portType];
    return summarize(
      locale === "es"
        ? `${port.game} para ${platform}: port nativo (${technique}). Requiere tu copia original del juego. Fuente oficial.`
        : `${port.game} for ${platform}: native port (${technique}). Requires your own copy of the game. Official source.`,
    );
  }

  if (localized.length >= MIN_DESCRIPTION) return summarize(localized);

  const tail =
    locale === "es"
      ? "Requiere tu copia original del juego. Fuente oficial."
      : "Requires your own copy of the game. Official source.";
  return summarize(`${localized} ${tail}`);
}
