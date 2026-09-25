"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import type { Port } from "@/lib/ports/schema";
import { PlatformMark } from "@/components/platforms/platform-mark";
import { SystemMark } from "@/components/platforms/system-mark";
import { TestBadge, type TestStatus } from "./test-badge";
import { consoleLogoForSystem } from "@/content/ports/console-logos";
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
  system,
  className,
}: {
  port: Port;
  testStatus?: TestStatus;
  stars?: number;
  system?: string;
  className?: string;
}) {
  const t = useT();
  const [source] = port.sources;
  const starLabel =
    stars !== undefined && stars > 0 ? new Intl.NumberFormat("en").format(stars) : undefined;
  const consoleLogo = consoleLogoForSystem(system);
  const [cover] = port.screenshots ?? [];

  return (
    <article
      className={cn(
        "flex h-full flex-col gap-3 rounded-lg border border-border bg-surface p-4",
        "transition-[border-color,background-color,box-shadow,transform] duration-150",
        "hover:-translate-y-0.5 hover:border-accent-hover hover:bg-surface-2 hover:shadow-sm",
        className,
      )}
    >
      {cover ? (
        <Link
          href={`/ports/${port.id}`}
          className="block overflow-hidden rounded-md border border-border transition-colors duration-150 hover:border-accent-hover"
          aria-label={port.title}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={cover.src}
            alt={cover.alt}
            className="aspect-video w-full object-cover"
            loading="lazy"
          />
        </Link>
      ) : (
        <Link
          href={`/ports/${port.id}`}
          className="flex h-14 items-center justify-center gap-2 rounded-md border border-border bg-surface-2 transition-colors duration-150 hover:border-accent-hover"
          aria-label={port.title}
        >
          {consoleLogo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={consoleLogo}
              alt={system}
              className="h-10 max-w-[70%] rounded-md bg-white/90 p-1.5 object-contain"
              loading="lazy"
            />
          ) : (
            <>
              {system && (
                <SystemMark
                  system={system}
                  glyphClassName="size-6"
                  labelClassName="text-sm font-semibold tracking-tight text-muted"
                />
              )}
              <span className="text-2xl font-semibold tracking-tight text-muted" aria-hidden="true">
                {port.game.charAt(0)}
              </span>
            </>
          )}
        </Link>
      )}

      <div className="flex flex-1 flex-col gap-1">
        <h3 className="line-clamp-2 text-base font-semibold leading-snug">
          <Link href={`/ports/${port.id}`} className="hover:text-link">
            {port.game}
          </Link>
        </h3>
        <p className="truncate text-sm text-muted" title={port.title}>
          {port.title}
        </p>
      </div>

      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2.5 text-muted" aria-hidden="true">
          {port.platforms.map((platform) => (
            <PlatformMark key={platform} platform={platform} />
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-end gap-1.5">
          <span
            className={cn("rounded-full px-2 py-0.5 text-xs font-medium", STATUS_TONE[port.status])}
          >
            {t.catalog[`status${cap(port.status)}`]}
          </span>
          <TestBadge status={testStatus} />
        </div>
      </div>

      {port.release.version && (
        <p className="text-xs text-muted">
          {t.catalog.version}{" "}
          <span className="font-mono text-accent-3">{port.release.version}</span>
          {starLabel && <span className="ml-2 text-accent-2">★ {starLabel}</span>}
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

export function PortTileSkeleton({
  className,
  label = "Loading",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <div
      role="status"
      aria-label={label}
      className={cn(
        "flex h-full flex-col gap-3 rounded-lg border border-border bg-surface p-4",
        className,
      )}
    >
      <div className="h-14 animate-pulse rounded-md bg-surface-2" aria-hidden="true" />
      <div className="flex flex-1 flex-col gap-2" aria-hidden="true">
        <div className="h-4 w-3/4 animate-pulse rounded bg-surface-2" />
        <div className="h-4 w-1/2 animate-pulse rounded bg-surface-2" />
        <div className="mt-1 h-3 w-2/3 animate-pulse rounded bg-surface-2" />
      </div>
      <div className="flex items-center justify-between gap-2" aria-hidden="true">
        <div className="flex gap-2.5">
          <div className="size-4 animate-pulse rounded-sm bg-surface-2" />
          <div className="size-4 animate-pulse rounded-sm bg-surface-2" />
        </div>
        <div className="h-5 w-16 animate-pulse rounded-full bg-surface-2" />
      </div>
      <div className="border-t border-border pt-3" aria-hidden="true">
        <div className="h-4 w-24 animate-pulse rounded bg-surface-2" />
      </div>
    </div>
  );
}

function cap(value: "stable" | "beta" | "alpha"): "Stable" | "Beta" | "Alpha" {
  return (value.charAt(0).toUpperCase() + value.slice(1)) as "Stable" | "Beta" | "Alpha";
}
