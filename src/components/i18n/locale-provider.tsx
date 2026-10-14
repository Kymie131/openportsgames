"use client";

import { type ReactNode } from "react";
import { LocaleContext } from "./locale-context";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { LOCALE_STORAGE_KEY, type Locale } from "@/lib/i18n/locales";

/**
 * The active locale comes from the route (`[lang]`), never from the browser.
 * `setLocale` only remembers the preference for the entry redirect; the URL is
 * the source of truth.
 */
export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  function setLocale(next: Locale) {
    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
    } catch {
      /* storage unavailable */
    }
  }

  return (
    <LocaleContext.Provider value={{ locale, messages: dictionaries[locale], setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}
