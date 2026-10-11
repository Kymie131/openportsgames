/** Public site constants and URL helpers. */

export const SITE_NAME = "OpenPortsGames";

export const SITE_DESCRIPTION =
  "Every link goes to the project's page (repository, releases or website), never to game files. Entries with the verification mark were reviewed one by one.";

const envUrl = process.env.NEXT_PUBLIC_SITE_URL;

export function getSiteUrl(): string {
  return envUrl ? envUrl.replace(/\/+$/, "") : "http://localhost:3000";
}

export function absoluteUrl(path: string): string {
  return `${getSiteUrl()}${path.startsWith("/") ? path : `/${path}`}`;
}
