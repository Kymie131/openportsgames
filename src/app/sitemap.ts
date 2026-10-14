import type { MetadataRoute } from "next";
import { getPorts } from "@/lib/ports";
import { absoluteUrl } from "@/lib/site";
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
  const now = new Date();
  const paths = [...STATIC_PAGES, ...getPorts().map((port) => `/ports/${port.id}`)];
  const entries: MetadataRoute.Sitemap = [];

  for (const path of paths) {
    const isPort = path.startsWith("/ports/");
    const languages = {
      en: absoluteUrl(localizePath("en", path)),
      es: absoluteUrl(localizePath("es", path)),
      "x-default": absoluteUrl(localizePath("en", path)),
    };
    for (const locale of locales) {
      entries.push({
        url: absoluteUrl(localizePath(locale, path)),
        lastModified: now,
        changeFrequency: isPort ? "monthly" : "weekly",
        priority: path === "/" ? 1 : isPort ? 0.8 : 0.6,
        alternates: { languages },
      });
    }
  }

  return entries;
}
