export const LOCALE_STORAGE_KEY = "opg-locale";

export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string | null): value is Locale {
  return value === "en" || value === "es";
}

/** Prefixes an app-absolute path with the locale segment, keeping trailing slashes. */
export function localizePath(locale: Locale, path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${clean}`;
}

/** Removes a leading `/en` or `/es` segment from a pathname. */
export function stripLocale(pathname: string): string {
  const match = pathname.match(/^\/(en|es)(?=\/|$)/);
  if (!match) return pathname || "/";
  const rest = pathname.slice(match[0].length);
  return rest === "" ? "/" : rest;
}
