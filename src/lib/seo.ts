import type { Metadata } from "next";
import { SITE_NAME, absoluteUrl } from "@/lib/site";

export const OG_IMAGE = {
  url: absoluteUrl("/opengraph-image.png"),
  width: 1200,
  height: 630,
  alt: `${SITE_NAME} — a curated catalog of native game ports`,
};

const DESCRIPTION_MAX = 155;

/**
 * Truncates a long description for meta tags. Cuts on a word boundary (the
 * last space before the cap, falling back to a hard cut for a single
 * unbroken token) and appends an ellipsis. Only affects the tag, never the
 * on-page copy or the data layer.
 */
export function summarize(text: string, max: number = DESCRIPTION_MAX): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return `${lastSpace > 0 ? cut.slice(0, lastSpace) : cut}…`;
}

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
      images: [OG_IMAGE.url],
    },
  };
}
