/**
 * Public, server-independent site constants and URL helpers.
 * Kept separate so the data layer and the components never read
 * process.env directly.
 */

export const SITE_NAME = "OpenPortsGames";

export const SITE_DESCRIPTION =
  "A curated catalog of native game ports for PC and Android — decompilations, recompilations and engine rewrites. Official sources only, never a download link.";

const envUrl = process.env.NEXT_PUBLIC_SITE_URL;

export function getSiteUrl(): string {
  return envUrl ? envUrl.replace(/\/+$/, "") : "http://localhost:3000";
}

export function absoluteUrl(path: string): string {
  return `${getSiteUrl()}${path.startsWith("/") ? path : `/${path}`}`;
}
