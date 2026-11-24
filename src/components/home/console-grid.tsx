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

/** Short glyph for systems that have no artwork in `public/logos/console`. */
const SHORT_LABEL: Record<string, string> = {
  "switch-2": "2",
  "playstation-5": "PS5",
  "sega-md": "16",
  "sega-saturn": "ST",
  dreamcast: "DC",
  "virtual-boy": "VB",
  arcade: "AR",
  windows: "PC",
  macintosh: "MAC",
};

const GLYPH_COLOR: Record<string, string> = {
  "switch-2": "#e60012",
  "playstation-5": "#1f5bd8",
  "sega-md": "#e6007e",
  "sega-saturn": "#1b1b4b",
  dreamcast: "#f37021",
  "virtual-boy": "#c8102e",
  arcade: "#7c3aed",
  windows: "#0a7cd6",
  macintosh: "#334155",
};

function SystemGlyph({ system }: { system: ConsoleSummary }) {
  if (system.logo) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={system.logo}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="size-full object-contain"
      />
    );
  }

  const label = SHORT_LABEL[system.slug] ?? system.name.en.slice(0, 3).toUpperCase();
  const color = GLYPH_COLOR[system.slug] ?? system.color;

  return (
    <span
      className="flex size-full items-center justify-center rounded-[10px] text-[13px] font-extrabold leading-none"
      style={{ color, backgroundColor: `${color}1a` }}
    >
      {label}
    </span>
  );
}

export function ConsoleGrid({ systems }: { systems: ConsoleSummary[] }) {
  const t = useT();
  const locale = useLocale();

  if (systems.length === 0) return null;

  return (
    <section className="mt-14 sm:mt-20" aria-labelledby="consoles-heading">
      <div className="rounded-3xl border border-pink-200/70 bg-[linear-gradient(140deg,#fdf3f8_0%,#fce7f3_45%,#fbd3e6_100%)] p-5 shadow-[0_1px_2px_rgba(190,24,93,0.06)] sm:p-8">
        <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
          <div className="max-w-xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-pink-600">02</p>
            <h2
              id="consoles-heading"
              className="mt-1 text-2xl font-semibold tracking-tight text-[#1e293b]"
            >
              {t.home.consolesTitle}
            </h2>
            <p className="mt-1 text-sm leading-6 text-[#64748b]">{t.home.consolesSubtitle}</p>
          </div>
          <Link
            href="/console"
            className="group inline-flex items-center gap-1 text-sm font-semibold text-pink-700 hover:underline"
          >
            {t.home.consolesAll}
            <ArrowRight
              className="size-3.5 transition-transform duration-150 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>

        <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
          {systems.map((system) => (
            <li key={system.slug}>
              <Link
                href={consoleHref(system)}
                title={`${t.home.consolesCount(system.count)}`}
                className="group flex items-center gap-3.5"
              >
                <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-[#f1dbe7] bg-white p-2.5 shadow-[0_2px_8px_rgba(190,24,93,0.10)] transition-transform duration-150 group-hover:-translate-y-0.5">
                  <SystemGlyph system={system} />
                </span>
                <span className="min-w-0 truncate text-[15px] font-bold text-[#0f172a] group-hover:text-pink-700">
                  {locale === "es" ? system.name.es : system.name.en}
                </span>
              </Link>
            </li>
          ))}
          <li>
            <Link href="/pc" className="group flex items-center gap-3.5">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-[#f1dbe7] bg-white p-2.5 shadow-[0_2px_8px_rgba(190,24,93,0.10)] transition-transform duration-150 group-hover:-translate-y-0.5">
                <span className="grid size-full grid-cols-2 gap-[3px] rounded-[10px] bg-[#0a7cd6] p-[5px]">
                  <span className="rounded-[2px] bg-white/95" />
                  <span className="rounded-[2px] bg-white/95" />
                  <span className="rounded-[2px] bg-white/95" />
                  <span className="rounded-[2px] bg-white/95" />
                </span>
              </span>
              <span className="min-w-0 truncate text-[15px] font-bold text-[#0f172a] group-hover:text-pink-700">
                {t.home.consolesPc}
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
