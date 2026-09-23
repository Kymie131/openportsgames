"use client";

import { Check, TriangleAlert } from "lucide-react";
import { useT } from "@/lib/i18n/use-i18n";
import { cn } from "@/lib/utils";

export type TestStatus = "current" | "stale";

export function TestBadge({ status, className }: { status?: TestStatus; className?: string }) {
  const t = useT();
  if (!status) return null;
  const stale = status === "stale";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium",
        stale
          ? "bg-surface-2 text-muted"
          : "bg-[color-mix(in_oklab,var(--ok)_15%,transparent)] text-ok",
        className,
      )}
    >
      {stale ? (
        <TriangleAlert className="size-3" aria-hidden="true" />
      ) : (
        <Check className="size-3" aria-hidden="true" />
      )}
      {stale ? t.catalog.testedOlder : t.catalog.tested}
    </span>
  );
}
