import type { Locale } from "@/lib/i18n/locales";
import type { Port } from "./schema";

/**
 * Share image for a ficha: the game cover it already shows, with a localized
 * alt. `undefined` when the entry has no cover, so `pageMeta` keeps the generic
 * OpenPortsGames card.
 */
export function portShareImage(
  locale: Locale,
  port: Port,
): { url: string; alt: string } | undefined {
  if (!port.cover) return undefined;
  return {
    url: port.cover.src,
    alt: locale === "es" ? `Carátula de ${port.game}` : `${port.game} cover`,
  };
}
