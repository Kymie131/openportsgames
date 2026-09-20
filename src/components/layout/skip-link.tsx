"use client";

import { useT } from "@/lib/i18n/use-i18n";
import { cn } from "@/lib/utils";

/**
 * Visible only on keyboard focus, first element inside <body>.
 */
export function SkipLink({ className }: { className?: string }) {
  const t = useT();

  return (
    <a
      href="#main"
      className={cn(
        "sr-only rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-contrast",
        "focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50",
        className,
      )}
    >
      {t.common.skipToContent}
    </a>
  );
}