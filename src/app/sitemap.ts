import type { MetadataRoute } from "next";
import { getPorts, portLastModified } from "@/lib/ports";
import { catalogPageCount, type CatalogScope } from "@/lib/ports/catalog";
import { absoluteUrl, SITE_CONTENT_UPDATED } from "@/lib/site";
import { locales, localizePath } from "@/lib/i18n/locales";
import { consoleDefs } from "@/content/consoles";

export const dynamic = "force-static";

const STATIC_PAGES = [
  "/",
  "/ports",
  "/pc",
  "/android",
  "/console",
  "/emulators",
  "/tools",
  "/testing",
  "/guides",
  "/missing",
  "/submit",
  "/support",
  "/about",
  "/legal",
  "/privacy",
  "/terms",
];

/** Sections whose listings paginate at `/…/page/N/` (page 1 is the base path). */
const PAGINATED: { base: string; scope: CatalogScope }[] = [
  { base: "/ports", scope: "all" },
  { base: "/pc", scope: "pc" },
  { base: "/android", scope: "android" },
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

  const allPorts = getPorts();
  for (const { base, scope } of PAGINATED) {
    const pages = catalogPageCount(allPorts, scope);
    for (let page = 2; page <= pages; page += 1) {
      addPath(`${base}/page/${page}`, SITE_CONTENT_UPDATED);
    }
  }

  for (const port of allPorts) addPath(`/ports/${port.id}`, portLastModified(port));

  for (const def of consoleDefs) addPath(`/console/${def.slug}`, SITE_CONTENT_UPDATED);

  return entries;
}
