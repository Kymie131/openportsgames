"use client";

import { ArrowUpRight } from "lucide-react";

import { LocalizedLink as Link } from "@/components/i18n/localized-link";
import { PortImageFallback } from "@/components/ports/port-image-fallback";
import { ScreenshotFrame } from "@/components/ports/screenshot-frame";
import { SystemBadge } from "@/components/platforms/system-badge";
import type { TestStatus } from "@/components/catalog/test-badge";
import { TestBadge } from "@/components/catalog/test-badge";
import { imageAlt, primaryImage } from "@/lib/ports/images";
import type { Port } from "@/lib/ports/schema";
import { useLocale, useT } from "@/lib/i18n/use-i18n";

export function SpotlightCard({
  port,
  system,
  testStatus,
  label,
  cta,
}: {
  port: Port;
  system?: string;
  testStatus?: TestStatus;
  label: string;
  cta: string;
}) {
  const t = useT();
  const locale = useLocale();
  const primary = primaryImage(port);
  const statusLabel =
    port.status === "stable"
      ? t.catalog.statusStable
      : port.status === "beta"
        ? t.catalog.statusBeta
        : t.catalog.statusAlpha;
  const fallback = (
    <PortImageFallback game={port.game} system={system} statusLabel={statusLabel} />
  );

  return (
    <Link
      href={`/ports/${port.id}`}
      className="group relative block overflow-hidden rounded-2xl border border-border bg-surface shadow-xl shadow-black/10 transition-shadow duration-300 hover:shadow-2xl hover:shadow-accent/10"
      aria-label={`${label}: ${port.game}`}
    >
      <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5]">
        {primary ? (
          <ScreenshotFrame
            src={primary.src}
            alt={imageAlt(primary.kind, port.game, locale)}
            eager
            className="h-full w-full"
            imageClassName="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            fallback={fallback}
          />
        ) : (
          <div className="h-full w-full">{fallback}</div>
        )}

        <div className="absolute inset-0 z-20 bg-gradient-to-t from-background via-background/20 to-transparent" />

        <span className="absolute left-4 top-4 z-30 inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-background/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-accent backdrop-blur">
          <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
          {label}
        </span>
        <span className="absolute right-4 top-4 z-30 inline-flex size-8 items-center justify-center rounded-full border border-border bg-background/70 text-foreground backdrop-blur transition-colors group-hover:border-accent/50 group-hover:text-accent">
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </span>

        <div className="absolute inset-x-0 bottom-0 z-30 space-y-3 p-5 sm:p-6">
          <div className="flex flex-wrap items-center gap-2">
            <SystemBadge system={system} size="sm" />
            <span className="rounded-full border border-border bg-background/60 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted backdrop-blur">
              {statusLabel}
            </span>
            {testStatus && (
              <span className="rounded-full border border-border bg-background/60 px-2 py-0.5 backdrop-blur">
                <TestBadge status={testStatus} />
              </span>
            )}
          </div>

          <div>
            <h2 className="text-2xl font-semibold leading-tight tracking-tight text-foreground sm:text-3xl">
              {port.game}
            </h2>
            <p className="mt-1 line-clamp-1 text-sm text-muted">{port.title}</p>
          </div>

          <div className="flex items-center justify-between gap-3">
            <span className="text-sm font-medium text-accent">{cta}</span>
            {port.release.version && (
              <span className="font-mono text-[11px] text-muted">
                {t.catalog.version} {port.release.version}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
