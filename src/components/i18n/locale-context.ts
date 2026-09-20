import { createContext } from "react";
import { defaultLocale, dictionaries, type Messages } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/locales";

export const LocaleContext = createContext<{
  locale: Locale;
  messages: Messages;
  setLocale: (locale: Locale) => void;
}>({
  locale: defaultLocale,
  messages: dictionaries[defaultLocale],
  setLocale: () => {},
});