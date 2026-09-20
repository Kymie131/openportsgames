"use client";

import { useContext } from "react";
import { useLocale, useT } from "@/lib/i18n/use-i18n";
import { locales } from "@/lib/i18n/locales";
import { LocaleContext } from "./locale-context";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const current = useLocale();
  const t = useT();
  const { setLocale } = useContext(LocaleContext);

  return (
    <div
      className={cn("flex items-center rounded-md border border-border bg-surface", className)}
      role="group"
      aria-label={t.language.label}
    >
      {locales.map((locale) => (
        <button
          key={locale}
          type="button"
          onClick={() => setLocale(locale)}
          aria-pressed={locale === current}
          lang={locale}
          className={cn(
            "h-8 rounded-md px-2.5 text-xs font-medium uppercase tracking-wide transition-colors duration-150",
            locale === current
              ? "bg-accent text-accent-contrast"
              : "text-muted hover:text-foreground",
          )}
        >
          {locale}
        </button>
      ))}
    </div>
  );
}