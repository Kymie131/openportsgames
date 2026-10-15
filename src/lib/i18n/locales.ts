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

/**
 * Prefixes an app-absolute path with the locale segment. The trailing slash is
 * applied to the **pathname** only, never after `?` or `#`, so a link like
 * `/ports?sort=newest` becomes `/es/ports/?sort=newest` (not `/es/ports?sort=newest/`).
 */
export function localizePath(locale: Locale, path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;

  const hashIndex = clean.indexOf("#");
  const hash = hashIndex === -1 ? "" : clean.slice(hashIndex);
  const withoutHash = hashIndex === -1 ? clean : clean.slice(0, hashIndex);

  const queryIndex = withoutHash.indexOf("?");
  const query = queryIndex === -1 ? "" : withoutHash.slice(queryIndex);
  let pathname = queryIndex === -1 ? withoutHash : withoutHash.slice(0, queryIndex);

  if (pathname === "") pathname = "/";
  const withTrailing = pathname.endsWith("/") ? pathname : `${pathname}/`;
  return `/${locale}${withTrailing}${query}${hash}`;
}

/** Removes a leading `/en` or `/es` segment from a pathname. */
export function stripLocale(pathname: string): string {
  const match = pathname.match(/^\/(en|es)(?=\/|$)/);
  if (!match) return pathname || "/";
  const rest = pathname.slice(match[0].length);
  return rest === "" ? "/" : rest;
}
