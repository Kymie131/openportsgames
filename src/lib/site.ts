/** Public site constants and URL helpers. */

export const SITE_NAME = "OpenPortsGames";

/**
 * Date the editorial/static pages (home, guides, legal, …) were last revised.
 * Used as a fixed `<lastmod>` in the sitemap so it reflects content changes
 * instead of the build time. Bump it when those pages change.
 */
export const SITE_CONTENT_UPDATED = "2026-10-27";

export const SITE_DESCRIPTION =
  "Every link goes to the project's page (repository, releases or website), never to game files. Entries with the verification mark were reviewed one by one.";

const envUrl = process.env.NEXT_PUBLIC_SITE_URL;

/**
 * Contact address for privacy and terms requests.
 *
 * PLACEHOLDER: set `NEXT_PUBLIC_CONTACT_EMAIL` to the real address. Until then
 * a reserved example address is shown so no request is silently misdirected.
 */
export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "privacy@openportsgames.example";

export function getSiteUrl(): string {
  return envUrl ? envUrl.replace(/\/+$/, "") : "http://localhost:3000";
}

export function absoluteUrl(path: string): string {
  return `${getSiteUrl()}${path.startsWith("/") ? path : `/${path}`}`;
}
