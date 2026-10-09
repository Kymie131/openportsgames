import type { Metadata } from "next";
import { SITE_NAME, absoluteUrl } from "@/lib/site";

export const OG_IMAGE = {
  url: absoluteUrl("/opengraph-image.png"),
  width: 1200,
  height: 630,
  alt: `${SITE_NAME}: a community catalog of native game ports`,
};

const DESCRIPTION_MAX = 155;

/** Truncates a description for meta tags on a word boundary. */
export function summarize(text: string, max: number = DESCRIPTION_MAX): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return `${lastSpace > 0 ? cut.slice(0, lastSpace) : cut}…`;
}

/** Builds per-page metadata (title, description, canonical, OG, Twitter). */
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
