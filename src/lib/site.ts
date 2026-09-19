/**
 * Public, server-independent site constants and URL helpers.
 * Kept separate so the data layer and the components never read
 * process.env directly.
 */

export const SITE_NAME = "OpenPortsGames";

export const SITE_DESCRIPTION =
  "A curated catalog of native game ports: decompilations, recompilations and engine reimplementations for PC and Android.";

const envUrl = process.env.NEXT_PUBLIC_SITE_URL;

export function getSiteUrl(): string {
  return envUrl ? envUrl.replace(/\/+$/, "") : "http://localhost:3000";
}

export function absoluteUrl(path: string): string {
  return `${getSiteUrl()}${path.startsWith("/") ? path : `/${path}`}`;
}
