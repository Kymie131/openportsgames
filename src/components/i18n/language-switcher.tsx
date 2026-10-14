"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useT } from "@/lib/i18n/use-i18n";
import { locales, localizePath, stripLocale } from "@/lib/i18n/locales";
import { cn } from "@/lib/utils";

/** Language picker: each option is a link to the same page in the other locale. */
export function LanguageSwitcher({ className }: { className?: string }) {
  const current = useLocale();
  const t = useT();
  const pathname = usePathname();
  const rest = stripLocale(pathname);

  return (
    <div
      className={cn("flex items-center rounded-md border border-border bg-surface", className)}
      role="group"
      aria-label={t.language.label}
    >
      {locales.map((locale) => (
        <Link
          key={locale}
          href={localizePath(locale, rest)}
          aria-current={locale === current ? "true" : undefined}
          lang={locale}
          className={cn(
            "inline-flex h-8 items-center justify-center rounded-md px-2.5 text-xs font-medium uppercase tracking-wide transition-colors duration-150",
            locale === current
              ? "bg-accent text-accent-contrast"
              : "text-muted hover:text-foreground",
          )}
        >
          {locale}
        </Link>
      ))}
    </div>
  );
}
