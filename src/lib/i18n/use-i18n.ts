"use client";

import { useContext } from "react";
import type { Messages } from "@/lib/i18n/dictionaries";
import { LocaleContext } from "@/components/i18n/locale-context";

export function useLocale() {
  return useContext(LocaleContext).locale;
}

export function useT(): Messages {
  return useContext(LocaleContext).messages;
}
