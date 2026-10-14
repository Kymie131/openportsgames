export const LOCALE_STORAGE_KEY = "opg-locale";

export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string | null): value is Locale {
  return value === "en" || value === "es";
}

/** Narrows a route param to a supported locale, falling back to English. */
export function asLocale(value: string): Locale {
  return isLocale(value) ? value : "en";
}

/** Prefixes an app-absolute path with the locale segment. Always keeps a trailing slash. */
export function localizePath(locale: Locale, path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  const withTrailing = clean.endsWith("/") ? clean : `${clean}/`;
  return `/${locale}${withTrailing}`;
}

/** Removes a leading `/en` or `/es` segment from a pathname. */
export function stripLocale(pathname: string): string {
  const match = pathname.match(/^\/(en|es)(?=\/|$)/);
  if (!match) return pathname || "/";
  const rest = pathname.slice(match[0].length);
  return rest === "" ? "/" : rest;
}
