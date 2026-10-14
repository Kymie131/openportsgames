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

/** Truncates a description for meta tags on a word boundary. */
export function summarize(text: string, max: number = DESCRIPTION_MAX): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return `${lastSpace > 0 ? cut.slice(0, lastSpace) : cut}…`;
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
