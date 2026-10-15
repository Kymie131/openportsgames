"use client";

import { forwardRef, type ComponentProps } from "react";
import Link from "next/link";
import { useLocale } from "@/lib/i18n/use-i18n";
import { localizePath } from "@/lib/i18n/locales";

/** `next/link` that keeps internal links inside the current locale. */
export const LocalizedLink = forwardRef<HTMLAnchorElement, ComponentProps<typeof Link>>(
  function LocalizedLink({ href, ...props }, ref) {
    const locale = useLocale();
    const localized = typeof href === "string" ? localizePath(locale, href) : href;
    return <Link ref={ref} href={localized} {...props} />;
  },
);
