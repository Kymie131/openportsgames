import type { MetadataRoute } from "next";
import { getPorts } from "@/lib/ports";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

const STATIC_PAGES = [
  "/",
  "/ports/",
  "/pc/",
  "/android/",
  "/testing/",
  "/guides/",
  "/submit/",
  "/support/",
  "/about/",
  "/legal/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticEntries: MetadataRoute.Sitemap = STATIC_PAGES.map((path) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.6,
  }));
  const portEntries: MetadataRoute.Sitemap = getPorts().map((port) => ({
    url: absoluteUrl(`/ports/${port.id}/`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));
  return [...staticEntries, ...portEntries];
}
