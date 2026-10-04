"use client";

import { resolveSystem } from "@/content/systems";
import { useLocale } from "@/lib/i18n/use-i18n";
import { cn } from "@/lib/utils";

/**
 * Compact "which console is this from" badge.
 *
 * Renders an optional official logo plus the system name, with border and
 * background tinted from the system's brand color. It always carries text, so
 * it never relies on color alone to convey meaning.
 */
export function SystemBadge({
  system,
  size = "md",
  className,
}: {
  system: string | undefined | null;
  size?: "sm" | "md";
  className?: string;
}) {
  const locale = useLocale();
  const resolved = resolveSystem(system);
  if (!resolved) return null;

  const { definition, name, secondary } = resolved;
  const tint = `color-mix(in oklab, ${definition.color} 14%, transparent)`;
  const border = `color-mix(in oklab, ${definition.color} 38%, transparent)`;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border font-medium leading-none text-foreground",
        size === "sm" ? "px-2 py-0.5 text-xs" : "px-2.5 py-1 text-sm",
        className,
      )}
      style={{ backgroundColor: tint, borderColor: border }}
    >
      {resolved.logo && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={resolved.logo}
          alt=""
          aria-hidden="true"
          className={cn("rounded-sm bg-white/90 object-contain p-0.5", size === "sm" ? "size-4" : "size-5")}
        />
      )}
      <span>{locale === "es" ? name.es : name.en}</span>
      {secondary && (
        <span className="text-muted">· {locale === "es" ? secondary.es : secondary.en}</span>
      )}
    </span>
  );
}
