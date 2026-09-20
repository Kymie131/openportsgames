"use client";

import { useState, useSyncExternalStore, type ReactNode } from "react";
import { LocaleContext } from "./locale-context";
import { dictionaries, defaultLocale } from "@/lib/i18n/dictionaries";
import { isLocale, LOCALE_STORAGE_KEY, type Locale } from "@/lib/i18n/locales";

function detectLocale(): Locale {
  if (typeof window === "undefined") return defaultLocale;
  try {
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    if (isLocale(stored)) return stored;
  } catch {
    /* storage unavailable */
  }
  return typeof navigator !== "undefined" && navigator.language.toLowerCase().startsWith("es")
    ? "es"
    : defaultLocale;
}

function subscribe() {
  return () => {};
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [manualLocale, setManualLocale] = useState<Locale | null>(null);
  const detected = useSyncExternalStore(subscribe, detectLocale, () => defaultLocale);
  const locale = manualLocale ?? detected;

  function setLocale(next: Locale) {
    setManualLocale(next);
    document.documentElement.lang = next;
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