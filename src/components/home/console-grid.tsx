"use client";

import { ArrowRight } from "lucide-react";

import { LocalizedLink as Link } from "@/components/i18n/localized-link";
import { useLocale, useT } from "@/lib/i18n/use-i18n";

export type ConsoleSummary = {
  slug: string;
  name: { en: string; es: string };
  logo: string | null;
  color: string;
  count: number;
};

/**
 * System slugs and console-hub slugs differ for several platforms. Mapping
 * them here keeps the shelf links on real pages; unknown systems fall back to
 * the catalog filtered by their original label.
 */
const CONSOLE_SLUG_BY_SYSTEM: Record<string, string> = {
  nes: "nes",
  snes: "snes",
  n64: "nintendo-64",
  gamecube: "gamecube",
  wii: "wii",
  "wii-u": "wii-u",
  switch: "switch",
  "game-boy": "game-boy",
  gba: "game-boy-advance",
  nds: "nintendo-ds",
  "3ds": "nintendo-3ds",
  playstation: "playstation",
  "playstation-2": "playstation-2",
  "playstation-3": "playstation-3",
  "playstation-4": "playstation-4",
  "playstation-5": "playstation-5",
  psp: "playstation-portable",
  xbox: "xbox",
  "xbox-360": "xbox-360",
  "sega-md": "mega-drive",
  "sega-saturn": "sega-saturn",
  dreamcast: "dreamcast",
  arcade: "arcade",
};

function consoleHref(system: ConsoleSummary): string {
  const hub = CONSOLE_SLUG_BY_SYSTEM[system.slug];
  if (hub) return `/console/${hub}`;
  return `/ports?system=${encodeURIComponent(system.name.en)}`;
}

export function ConsoleGrid({ systems }: { systems: ConsoleSummary[] }) {
  const t = useT();
  const locale = useLocale();

  if (systems.length === 0) return null;

  return (
    <section className="mt-14 sm:mt-20" aria-labelledby="consoles-heading">
      <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-3 border-b border-border pb-4">
        <div className="max-w-xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent">02</p>
          <h2
            id="consoles-heading"
            className="mt-1 text-2xl font-semibold tracking-tight text-foreground"
          >
            {t.home.consolesTitle}
          </h2>
          <p className="mt-1 text-sm leading-6 text-muted">{t.home.consolesSubtitle}</p>
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

      <ul className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-3">
        {systems.slice(0, 6).map((system) => (
          <li key={system.slug}>
            <Link
              href={consoleHref(system)}
              className="group flex h-full items-center gap-3 rounded-xl border border-border bg-surface px-3.5 py-3 transition-colors duration-200 hover:border-accent/50 hover:bg-surface-2"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-2 p-1.5">
                {system.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={system.logo}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="max-h-full max-w-full object-contain"
                  />
                ) : (
                  <span className="font-mono text-[10px] font-bold uppercase text-foreground">
                    {system.name.en.slice(0, 4)}
                  </span>
                )}
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold text-foreground">
                  {locale === "es" ? system.name.es : system.name.en}
                </span>
                <span className="block font-mono text-[11px] text-muted">
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
