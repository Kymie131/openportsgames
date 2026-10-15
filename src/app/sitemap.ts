import type { MetadataRoute } from "next";
import { getPorts, isIndexablePort, portLastModified } from "@/lib/ports";
import { absoluteUrl, SITE_CONTENT_UPDATED } from "@/lib/site";
import { locales, localizePath } from "@/lib/i18n/locales";

export const dynamic = "force-static";

const STATIC_PAGES = [
  "/",
  "/ports",
  "/pc",
  "/android",
  "/console",
  "/emulators",
  "/testing",
  "/guides",
  "/submit",
  "/support",
  "/about",
  "/legal",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  const addPath = (path: string, lastModified: string | undefined) => {
    const languages = {
      en: absoluteUrl(localizePath("en", path)),
      es: absoluteUrl(localizePath("es", path)),
      "x-default": absoluteUrl(localizePath("en", path)),
    };
    for (const locale of locales) {
      entries.push({
        url: absoluteUrl(localizePath(locale, path)),
        ...(lastModified ? { lastModified } : {}),
        alternates: { languages },
      });
    }
  };

  for (const path of STATIC_PAGES) addPath(path, SITE_CONTENT_UPDATED);
  for (const port of getPorts()) {
    if (isIndexablePort(port)) addPath(`/ports/${port.id}`, portLastModified(port));
  }

  return entries;
}
