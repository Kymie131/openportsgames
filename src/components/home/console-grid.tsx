"use client";

import { LocalizedLink as Link } from "@/components/i18n/localized-link";
import { ArrowRight } from "lucide-react";
import { useLocale, useT } from "@/lib/i18n/use-i18n";

export type ConsoleSummary = {
  slug: string;
  name: { en: string; es: string };
  logo: string | null;
  color: string;
  count: number;
};

export function ConsoleGrid({ systems }: { systems: ConsoleSummary[] }) {
  const t = useT();
  const locale = useLocale();

  if (systems.length === 0) return null;

  return (
    <section className="mt-14 sm:mt-24" aria-labelledby="consoles-heading">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
        <div className="space-y-1">
          <h2
            id="consoles-heading"
            className="text-2xl font-semibold tracking-tight text-foreground"
          >
            {t.home.consolesTitle}
          </h2>
          <p className="max-w-xl text-sm leading-6 text-muted">{t.home.consolesSubtitle}</p>
        </div>
        <Link
          href="/console"
          className="group inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
        >
          {t.home.consolesAll}
          <ArrowRight
            className="size-3.5 transition-transform duration-150 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>

      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {systems.map((system) => (
          <li key={system.slug}>
            <Link
              href={`/console/${system.slug}`}
              className="group flex h-full flex-col items-center gap-3 rounded-xl border border-border bg-surface p-4 text-center transition-colors hover:border-accent/60 hover:bg-surface-2"
              style={{
                backgroundImage: `radial-gradient(circle at 50% 0%, color-mix(in oklab, ${system.color} 18%, transparent), transparent 70%)`,
              }}
            >
              <span className="flex size-12 items-center justify-center rounded-lg bg-background/80 p-1.5 shadow-sm">
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
                  <span className="font-mono text-xs font-bold uppercase text-foreground">
                    {system.name.en.slice(0, 4)}
                  </span>
                )}
              </span>
              <span className="flex flex-col gap-1">
                <span className="block text-xs font-semibold leading-4 text-foreground">
                  {locale === "es" ? system.name.es : system.name.en}
                </span>
                <span className="block text-[11px] text-muted">
                  {t.home.consolesCount(system.count)}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
