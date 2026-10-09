/** Public site constants and URL helpers. */

export const SITE_NAME = "OpenPortsGames";

export const SITE_DESCRIPTION =
  "This catalog gives you no downloads or file links: we send you to the official source of each project.";

const envUrl = process.env.NEXT_PUBLIC_SITE_URL;

export function getSiteUrl(): string {
  return envUrl ? envUrl.replace(/\/+$/, "") : "http://localhost:3000";
}

export function absoluteUrl(path: string): string {
  return `${getSiteUrl()}${path.startsWith("/") ? path : `/${path}`}`;
}
