import type { Metadata } from "next";
import { SITE_NAME, absoluteUrl } from "@/lib/site";

export const OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${SITE_NAME} — a curated catalog of native game ports`,
};

/**
 * Per-page metadata: title (the layout template appends the site name),
 * description, canonical URL, Open Graph and Twitter card. Shared by all
 * routes so metadata stays consistent and indexable.
 */
export function pageMeta({
  title,
  description,
  path,
}: {
  title?: string;
  description: string;
  path: string;
}): Metadata {
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      title: title ? `${title} · ${SITE_NAME}` : SITE_NAME,
      description,
      url: absoluteUrl(path),
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} · ${SITE_NAME}` : SITE_NAME,
      description,
      images: ["/opengraph-image"],
    },
  };
}