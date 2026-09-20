export const LOCALE_STORAGE_KEY = "opg-locale";

export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string | null): value is Locale {
  return value === "en" || value === "es";
}