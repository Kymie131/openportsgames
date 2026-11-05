"use client";

import { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { LocalizedLink as Link } from "@/components/i18n/localized-link";
import { PortImageFallback } from "@/components/ports/port-image-fallback";
import { ScreenshotFrame } from "@/components/ports/screenshot-frame";
import { SystemBadge } from "@/components/platforms/system-badge";
import { TestBadge, type TestStatus } from "@/components/catalog/test-badge";
import { imageAlt, primaryImage } from "@/lib/ports/images";
import type { Port } from "@/lib/ports/schema";
import { useLocale, useT } from "@/lib/i18n/use-i18n";

export type ShowcaseEntry = {
  port: Port;
  system?: string;
  testStatus?: TestStatus;
};

type Tab = "new" | "updated" | "featured";

export function LatestShowcase({
  newPorts,
  updatedPorts,
  featuredPorts,
}: {
  newPorts: ShowcaseEntry[];
  updatedPorts: ShowcaseEntry[];
  featuredPorts: ShowcaseEntry[];
}) {
  const t = useT();
  const [active, setActive] = useState<Tab>("new");

  const tabs: Array<{ id: Tab; label: string }> = [
    { id: "new", label: t.home.tabNew },
    { id: "updated", label: t.home.tabUpdated },
  ];
  if (featuredPorts.length > 0) {
    tabs.push({ id: "featured", label: t.home.tabFeatured });
  }

  const entries =
    active === "new" ? newPorts : active === "updated" ? updatedPorts : featuredPorts;

  function onTabKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const index = tabs.findIndex((tab) => tab.id === active);
    const nextIndex =
      event.key === "ArrowRight"
        ? (index + 1) % tabs.length
        : (index - 1 + tabs.length) % tabs.length;
    const next = tabs[nextIndex];
    setActive(next.id);
    document.getElementById(`showcase-tab-${next.id}`)?.focus();
  }

  return (
    <section className="mt-14 sm:mt-20" aria-labelledby="showcase-heading">
      <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-b border-border pb-4">
        <div className="max-w-xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent">03</p>
          <h2
            id="showcase-heading"
            className="mt-1 text-2xl font-semibold tracking-tight text-foreground"
          >
            {t.home.showcaseTitle}
          </h2>
          <p className="mt-1 text-sm leading-6 text-muted">{t.home.showcaseSubtitle}</p>
        </div>
        <div
          role="tablist"
          aria-label={t.home.showcaseTitle}
          onKeyDown={onTabKeyDown}
          className="flex rounded-full border border-border bg-surface p-1"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              id={`showcase-tab-${tab.id}`}
              type="button"
              role="tab"
              aria-selected={active === tab.id}
              aria-controls="showcase-panel"
              tabIndex={active === tab.id ? 0 : -1}
              onClick={() => setActive(tab.id)}
              className={
                active === tab.id
                  ? "rounded-full bg-accent px-3.5 py-2 text-xs font-semibold text-accent-contrast"
                  : "rounded-full px-3.5 py-2 text-xs font-medium text-muted transition-colors hover:text-foreground"
              }
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div
        role="tabpanel"
        id="showcase-panel"
        aria-labelledby={`showcase-tab-${active}`}
      >
        {entries.length === 0 ? (
          <p className="mt-6 text-sm text-muted">{t.home.showcaseEmpty}</p>
        ) : (
          <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            <LeadCard entry={entries[0]} />
            <ul className="flex flex-col justify-center divide-y divide-border">
              {entries.slice(1).map((entry, index) => (
                <PortRow key={entry.port.id} entry={entry} index={index} />
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

function LeadCard({ entry }: { entry: ShowcaseEntry }) {
  const t = useT();
  const locale = useLocale();
  const { port, system, testStatus } = entry;
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
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface">
      <Link href={`/ports/${port.id}`} className="block" aria-label={port.game}>
        <div className="relative aspect-[16/10]">
          {primary ? (
            <ScreenshotFrame
              src={primary.src}
              alt={imageAlt(primary.kind, port.game, locale)}
              className="h-full w-full"
              imageClassName="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              fallback={fallback}
            />
          ) : (
            <div className="h-full w-full">{fallback}</div>
          )}
          <span className="absolute left-3 top-3 rounded-full border border-border bg-background/75 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted backdrop-blur">
            {statusLabel}
          </span>
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
        <div className="flex flex-wrap items-center gap-2">
          <SystemBadge system={system} size="sm" />
          <TestBadge status={testStatus} />
        </div>
        <div>
          <h3 className="text-xl font-semibold leading-tight tracking-tight">
            <Link href={`/ports/${port.id}`} className="hover:text-accent">
              {port.game}
            </Link>
          </h3>
          <p className="mt-1 line-clamp-1 text-sm text-muted">{port.title}</p>
        </div>
        {port.summary && (
          <p className="line-clamp-2 text-sm leading-6 text-muted">{port.summary}</p>
        )}
        <div className="mt-auto flex items-center justify-between gap-3 border-t border-border pt-3">
          <span className="font-mono text-[11px] text-muted">
            {port.release.version ? `v${port.release.version}` : t.home.noRelease}
          </span>
          <Link
            href={`/ports/${port.id}`}
            className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
          >
            {t.home.spotlightCta}
            <ArrowRight className="size-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}

function PortRow({ entry, index }: { entry: ShowcaseEntry; index: number }) {
  const t = useT();
  const locale = useLocale();
  const { port, system, testStatus } = entry;
  const primary = primaryImage(port);
  const fallback = (
    <div className="flex h-full w-full items-center justify-center bg-surface-2 px-2 text-center font-mono text-[10px] font-bold uppercase tracking-wider text-muted">
      {port.game.slice(0, 3)}
    </div>
  );

  return (
    <li>
      <Link
        href={`/ports/${port.id}`}
        className="group flex items-center gap-4 rounded-lg px-2 py-3 transition-colors hover:bg-surface-2"
      >
        <div className="relative w-24 shrink-0 overflow-hidden rounded-md border border-border bg-surface-2 sm:w-28">
          <div className="aspect-[4/3]">
            {primary ? (
              <ScreenshotFrame
                src={primary.src}
                alt={imageAlt(primary.kind, port.game, locale)}
                className="h-full w-full"
                imageClassName="object-cover"
                fallback={fallback}
              />
            ) : (
              <div className="h-full w-full">{fallback}</div>
            )}
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] text-muted">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="truncate text-sm font-semibold text-foreground group-hover:text-accent">
              {port.game}
            </span>
          </div>
          <p className="mt-0.5 truncate text-xs text-muted">{port.title}</p>
          <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
            <SystemBadge system={system} size="sm" />
            <span className="font-mono text-[10px] text-muted">
              {port.release.version ? `v${port.release.version}` : t.home.noRelease}
            </span>
            <TestBadge status={testStatus} />
          </div>
        </div>

        <ArrowUpRight
          className="size-4 shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
          aria-hidden="true"
        />
      </Link>
    </li>
  );
}
