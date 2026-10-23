"use client";

import { ArrowRight, BadgeCheck, Code2, Gamepad2 } from "lucide-react";
import { PlatformMark } from "@/components/platforms/platform-mark";
import { resolveSystem } from "@/content/systems";
import { SCOPED_PLATFORMS } from "@/lib/ports/catalog";
import { portKind, type PlatformKey, type Port } from "@/lib/ports/schema";
import { useLocale, useT } from "@/lib/i18n/use-i18n";
import { localizePath } from "@/lib/i18n/locales";
import { cn } from "@/lib/utils";

type Scope = "pc" | "android";

type SystemCard = {
  slug: string;
  label: string;
  name: { en: string; es: string };
  logo: string | null;
  color: string;
  count: number;
};

const PLATFORM_ORDER: Record<Scope, PlatformKey[]> = {
  pc: ["windows", "linux", "macos"],
  android: ["android"],
};

export function PlatformHero({
  scope,
  ports,
  originalSystems,
}: {
  scope: Scope;
  ports: Port[];
  originalSystems: Record<string, string[]>;
}) {
  const t = useT();
  const locale = useLocale();
  const scopedPlatforms = SCOPED_PLATFORMS[scope];
  const inScope = ports.filter(
    (port) =>
      portKind(port) === "game" && port.platforms.some((key) => scopedPlatforms.includes(key)),
  );

  const platformCards = PLATFORM_ORDER[scope]
    .map((key) => ({
      key,
      count: inScope.filter((port) => port.platforms.includes(key)).length,
    }))
    .filter((entry) => entry.count > 0);

  const systems = new Map<string, SystemCard & { ids: Set<string> }>();
  for (const port of inScope) {
    for (const label of originalSystems[port.id] ?? []) {
      if (label === "Unknown") continue;
      const resolved = resolveSystem(label);
      if (!resolved) continue;
      const current = systems.get(resolved.slug) ?? {
        slug: resolved.slug,
        label,
        name: resolved.name,
        logo: resolved.logo,
        color: resolved.definition.color,
        count: 0,
        ids: new Set<string>(),
      };
      current.ids.add(port.id);
      current.count = current.ids.size;
      systems.set(resolved.slug, current);
    }
  }
  const topSystems = [...systems.values()]
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);

  const stats = [
    { label: t.catalog.heroStatPorts, value: inScope.length, icon: Gamepad2 },
    {
      label: t.catalog.heroStatVerified,
      value: inScope.filter((port) => port.sourceVerified).length,
      icon: BadgeCheck,
    },
    {
      label: t.catalog.heroStatOpen,
      value: inScope.filter((port) => port.openSource).length,
      icon: Code2,
    },
  ];

  const basePath = scope === "pc" ? "/pc" : "/android";
  const sectionHref = localizePath(locale, basePath);
  const title = scope === "pc" ? t.catalog.titlePc : t.catalog.titleAndroid;
  const subtitle = scope === "pc" ? t.catalog.subtitlePc : t.catalog.subtitleAndroid;
  const eyebrow = scope === "pc" ? t.catalog.heroPcEyebrow : t.catalog.heroAndroidEyebrow;

  return (
    <div className="space-y-8">
      <section className="relative overflow-hidden rounded-2xl border border-border bg-surface p-6 sm:p-9">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 0%, color-mix(in oklab, var(--accent) 22%, transparent), transparent 45%), radial-gradient(circle at 95% 20%, color-mix(in oklab, var(--accent-3) 18%, transparent), transparent 40%)",
          }}
        />
        <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)] lg:items-center">
          <div className="space-y-5">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">{eyebrow}</p>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {title}
              </h1>
              <p className="max-w-xl text-sm leading-6 text-muted sm:text-base">{subtitle}</p>
            </div>
            <dl className="grid max-w-xl grid-cols-3 gap-3">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-border bg-background/70 px-3 py-3"
                  >
                    <dt className="flex items-center gap-1.5 text-[11px] text-muted">
                      <Icon className="size-3.5" aria-hidden="true" />
                      {stat.label}
                    </dt>
                    <dd className="mt-1 font-mono text-xl font-bold tracking-tight text-foreground">
                      {stat.value.toLocaleString(locale)}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>

          <div className={cn("grid gap-3", platformCards.length > 1 && "sm:grid-cols-3")}>
            {platformCards.map(({ key, count }) => (
              <a
                key={key}
                href={`${sectionHref}?platform=${key}`}
                className="group flex flex-col gap-3 rounded-xl border border-border bg-background/80 p-4 transition-colors hover:border-accent/60 hover:bg-surface-2"
              >
                <span className="flex size-10 items-center justify-center rounded-lg bg-surface-2 text-foreground">
                  <PlatformMark platform={key} className="size-5" />
                </span>
                <span className="space-y-0.5">
                  <span className="block text-sm font-semibold text-foreground">
                    {t.platforms[key]}
                  </span>
                  <span className="block text-xs text-muted">
                    {t.catalog.systemsCount(count)}
                  </span>
                </span>
                <span className="mt-auto inline-flex items-center gap-1 text-[11px] font-medium text-accent">
                  {t.catalog.filterPlatform}
                  <ArrowRight
                    className="size-3 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {topSystems.length > 0 && (
        <section aria-labelledby="platform-systems-heading" className="space-y-3">
          <div className="flex flex-wrap items-end justify-between gap-2">
            <div>
              <h2
                id="platform-systems-heading"
                className="text-lg font-semibold tracking-tight text-foreground"
              >
                {t.catalog.systemsTitle}
              </h2>
              <p className="text-sm text-muted">{t.catalog.systemsSubtitle}</p>
            </div>
          </div>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
            {topSystems.map((system) => (
              <li key={system.slug}>
                <a
                  href={`${sectionHref}?system=${encodeURIComponent(system.label)}`}
                  className="group flex h-full flex-col items-center gap-2 rounded-xl border border-border bg-surface p-3 text-center transition-colors hover:border-accent/60 hover:bg-surface-2"
                  style={{
                    backgroundImage: `radial-gradient(circle at 50% 0%, color-mix(in oklab, ${system.color} 16%, transparent), transparent 70%)`,
                  }}
                >
                  <span className="flex size-10 items-center justify-center rounded-lg bg-background/80 p-1 shadow-sm">
                    {system.logo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={system.logo}
                        alt=""
                        aria-hidden="true"
                        className="max-h-full max-w-full object-contain"
                        loading="lazy"
                      />
                    ) : (
                      <span className="font-mono text-[10px] font-bold uppercase text-foreground">
                        {system.name.en.slice(0, 4)}
                      </span>
                    )}
                  </span>
                  <span className="text-[11px] font-semibold leading-4 text-foreground">
                    {locale === "es" ? system.name.es : system.name.en}
                  </span>
                  <span className="text-[10px] text-muted">
                    {t.catalog.systemsCount(system.count)}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
