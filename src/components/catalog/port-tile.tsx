"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import type { Port } from "@/lib/ports/schema";
import { PlatformMark } from "@/components/platforms/platform-mark";
import { TestBadge, type TestStatus } from "./test-badge";
import { useT } from "@/lib/i18n/use-i18n";
import { cn } from "@/lib/utils";

const STATUS_TONE: Record<Port["status"], string> = {
  stable: "bg-[color-mix(in_oklab,var(--ok)_15%,transparent)] text-ok",
  beta: "bg-[color-mix(in_oklab,var(--warning)_15%,transparent)] text-warning",
  alpha: "bg-[color-mix(in_oklab,var(--danger)_15%,transparent)] text-danger",
};

export function PortTile({
  port,
  testStatus,
  stars,
}: {
  port: Port;
  testStatus?: TestStatus;
  stars?: number;
}) {
  const t = useT();
  const [source] = port.sources;
  const starLabel =
    stars !== undefined && stars > 0 ? new Intl.NumberFormat("en").format(stars) : undefined;

  return (
    <article className="flex h-full flex-col gap-3 rounded-lg border border-border bg-surface p-4 transition-colors duration-150 hover:bg-surface-2">
      <Link
        href={`/ports/${port.id}`}
        className="flex h-14 items-center justify-center rounded-md border border-border bg-surface-2 transition-colors hover:border-accent-hover"
        aria-label={port.title}
      >
        <span className="text-2xl font-semibold tracking-tight text-muted">
          {port.game.charAt(0)}
        </span>
      </Link>

      <div className="flex flex-1 flex-col gap-1">
        <Link href={`/ports/${port.id}`} className="text-base font-semibold leading-snug hover:text-link">
          {port.title}
        </Link>
        <p className="text-sm text-muted">{port.game}</p>
      </div>

      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2.5 text-muted" aria-hidden="true">
          {port.platforms.map((platform) => (
            <PlatformMark key={platform} platform={platform} />
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-end gap-1.5">
          <span
            className={cn(
              "rounded-full px-2 py-0.5 text-xs font-medium",
              STATUS_TONE[port.status],
            )}
          >
            {t.catalog[`status${cap(port.status)}`]}
          </span>
          <TestBadge status={testStatus} />
        </div>
      </div>

      {port.release.version && (
        <p className="text-xs text-muted">
          {t.catalog.version} {port.release.version}
          {starLabel && <span className="ml-2 text-muted">★ {starLabel}</span>}
        </p>
      )}

      <div className="border-t border-border pt-3 text-sm">
        <Link
          href={source}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-link transition-colors duration-150 hover:text-link-hover"
          title={port.id}
        >
          {t.catalog.officialSource}
          <ExternalLink className="size-3.5" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

function cap(value: "stable" | "beta" | "alpha"): "Stable" | "Beta" | "Alpha" {
  return value.charAt(0).toUpperCase() + value.slice(1) as "Stable" | "Beta" | "Alpha";
}