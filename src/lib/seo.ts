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

/** `<title>` for a port page: the game, the platform and the port's own name. */
export function portTitle(locale: Locale, game: string, portName: string): string {
  return locale === "es"
    ? `${game} port nativo para PC – ${portName}`
    : `${game} native PC port – ${portName}`;
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
}: {
  locale: Locale;
  title?: string;
  description: string;
  path: string;
}): Metadata {
  const canonical = absoluteUrl(localizePath(locale, path));
  const languages = {
    en: absoluteUrl(localizePath("en", path)),
    es: absoluteUrl(localizePath("es", path)),
    "x-default": absoluteUrl(localizePath("en", path)),
  };
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
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} · ${SITE_NAME}` : SITE_NAME,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
