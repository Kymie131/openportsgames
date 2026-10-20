import type { Metadata } from "next";
import { SITE_NAME, absoluteUrl } from "@/lib/site";
import { localizePath, type Locale } from "@/lib/i18n/locales";

export const OG_IMAGE = {
  url: absoluteUrl("/opengraph-image.png"),
  width: 1200,
  height: 630,
  alt: `${SITE_NAME}: a community catalog of native game ports`,
};

const DESCRIPTION_MAX = 155;

const OG_LOCALE: Record<Locale, string> = { en: "en_US", es: "es_ES" };

/**
 * Trims a description for meta tags. Collapses whitespace, cuts on a word
 * boundary and closes with a period, so it never ends mid-sentence and never
 * shows an ellipsis.
 */
export function summarize(text: string, max: number = DESCRIPTION_MAX): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  const head = (lastSpace > 0 ? cut.slice(0, lastSpace) : cut).replace(
    /[\s,;:.\u2013\u2014-]+$/,
    "",
  );
  return `${head}.`;
}

/**
 * Short label for the platform a port targets, as it should read in a title:
 * Android, iOS, a console name, or PC for desktop/web targets. A port that
 * also ships on desktop keeps "PC" so it matches the usual "… pc port" query.
 */
export function portPlatformLabel(platforms: readonly string[]): string {
  const hasDesktop = platforms.some((key) => ["windows", "linux", "macos", "web"].includes(key));
  if (!hasDesktop) {
    const labels: ReadonlyArray<readonly [string, string]> = [
      ["android", "Android"],
      ["ios", "iOS"],
      ["switch", "Nintendo Switch"],
      ["psvita", "PS Vita"],
      ["3ds", "Nintendo 3DS"],
      ["ds", "Nintendo DS"],
      ["wiiu", "Wii U"],
      ["wii", "Wii"],
      ["ps5", "PlayStation 5"],
      ["ps4", "PlayStation 4"],
      ["ps3", "PlayStation 3"],
      ["ps2", "PlayStation 2"],
      ["ps1", "PlayStation"],
      ["psp", "PSP"],
      ["xbox360", "Xbox 360"],
      ["xbox", "Xbox"],
      ["n64", "Nintendo 64"],
      ["snes", "SNES"],
      ["nes", "NES"],
      ["gba", "Game Boy Advance"],
      ["gbc", "Game Boy Color"],
      ["gb", "Game Boy"],
      ["dreamcast", "Dreamcast"],
      ["saturn", "Sega Saturn"],
      ["genesis", "Sega Genesis"],
      ["arcade", "Arcade"],
    ];
    for (const [key, label] of labels) {
      if (platforms.includes(key)) return label;
    }
  }
  return "PC";
}

/** `<title>` for a port page: the game, the target platform and the port's own name. */
export function portTitle(
  locale: Locale,
  game: string,
  portName: string,
  platforms: readonly string[],
): string {
  const platform = portPlatformLabel(platforms);
  return locale === "es"
    ? `${game} port nativo para ${platform} – ${portName}`
    : `${game} native ${platform} port – ${portName}`;
}

/** Schema.org BreadcrumbList for a list of {name, url} items, in order. */
export function breadcrumbList(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Builds per-page metadata for one locale: a self-referential canonical, a
 * reciprocal es/en hreflang pair (x-default -> the English version) and the
 * matching Open Graph locale/alternateLocale.
 */
export function pageMeta({
  locale,
  title,
  description,
  path,
  image,
  twitterCard,
}: {
  locale: Locale;
  title?: string;
  description: string;
  path: string;
  /** Per-page share image; falls back to the generic OpenPortsGames card. */
  image?: { url: string; alt: string };
  /** Overrides the Twitter card type (defaults to `summary` when an image is set). */
  twitterCard?: "summary" | "summary_large_image";
}): Metadata {
  const canonical = absoluteUrl(localizePath(locale, path));
  const languages = {
    en: absoluteUrl(localizePath("en", path)),
    es: absoluteUrl(localizePath("es", path)),
    "x-default": absoluteUrl(localizePath("en", path)),
  };
  const ogImages = image ? [{ url: image.url, alt: image.alt }] : [OG_IMAGE];
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical, languages },
    openGraph: {
      title: title ? `${title} · ${SITE_NAME}` : SITE_NAME,
      description,
      url: canonical,
      siteName: SITE_NAME,
      type: "website",
      locale: OG_LOCALE[locale],
      alternateLocale: locale === "es" ? ["en_US"] : ["es_ES"],
      images: ogImages,
    },
    twitter: {
      card: twitterCard ?? (image ? "summary" : "summary_large_image"),
      title: title ? `${title} · ${SITE_NAME}` : SITE_NAME,
      description,
      images: [image ? image.url : OG_IMAGE.url],
    },
  };
}
