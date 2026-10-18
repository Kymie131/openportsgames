"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { LocalizedLink as LocalizedLinkComponent } from "@/components/i18n/localized-link";
import { usePathname, useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink, Layers, Search } from "lucide-react";
import {
  allConsoles,
  countEmulators,
  generations,
  getConsole,
  getGeneration,
  type Compatibility,
  type ConsoleDef,
  type Emulator,
  type EmulatorPlatform,
} from "@/content/emulators";
import { ConsoleMark } from "./console-mark";
import { useLocale, useT } from "@/lib/i18n/use-i18n";
import { cn } from "@/lib/utils";

/** Maps a console to the `originalSystem` labels used by the catalog. */
const CONSOLE_TO_SYSTEM: Record<string, string[]> = {
  nes: ["Nintendo Entertainment System"],
  snes: ["Super Nintendo"],
  "nintendo-64": ["Nintendo 64"],
  gamecube: ["GameCube", "Nintendo GameCube"],
  wii: ["Wii"],
  "game-boy": ["Game Boy", "Game Boy / Game Boy Color"],
  "game-boy-color": ["Game Boy Color", "Game Boy / Game Boy Color"],
  "game-boy-advance": ["Game Boy Advance"],
  "nintendo-ds": ["Nintendo DS"],
  "nintendo-3ds": ["Nintendo 3DS"],
  playstation: ["PlayStation"],
  "playstation-2": ["PlayStation 2"],
  "playstation-3": ["PlayStation 3"],
  "playstation-4": ["PlayStation 4"],
  "playstation-portable": ["PlayStation Portable"],
  xbox: ["Xbox"],
  "xbox-360": ["Xbox 360"],
  genesis: ["Sega Mega Drive / Genesis"],
  "sega-saturn": ["Sega Saturn"],
  "sega-cd": ["Sega CD / Mega-CD"],
  dreamcast: ["Dreamcast"],
};

const COMPAT_RANK: Record<Compatibility, number> = { excellent: 4, high: 3, good: 2, limited: 1 };

function sortEmulators(list: Emulator[]): Emulator[] {
  return [...list].sort((a, b) => {
    if (a.recommended !== b.recommended) return a.recommended ? -1 : 1;
    return COMPAT_RANK[b.compatibility] - COMPAT_RANK[a.compatibility];
  });
}

function compatTone(c: Compatibility): string {
  if (c === "excellent") return "bg-[color-mix(in_oklab,var(--ok)_15%,transparent)] text-ok";
  if (c === "high") return "bg-[color-mix(in_oklab,var(--accent-3)_15%,transparent)] text-accent-3";
  if (c === "good") return "bg-[color-mix(in_oklab,var(--warning)_15%,transparent)] text-warning";
  return "bg-[color-mix(in_oklab,var(--danger)_15%,transparent)] text-danger";
}

export function EmulatorsClient({ portsBySystem }: { portsBySystem: Record<string, number> }) {
  const t = useT();
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [search, setSearch] = useState("");

  // Read the query after mount so the generation list is server-rendered and
  // crawlable instead of bailing out to client-only rendering.
  useEffect(() => {
    const read = () => setSearch(window.location.search.replace(/^\?/, ""));
    read();
    window.addEventListener("popstate", read);
    return () => window.removeEventListener("popstate", read);
  }, []);

  const params = useMemo(() => new URLSearchParams(search), [search]);
  const genId = params.get("gen");
  const consoleSlug = params.get("console");

  const generation = genId ? getGeneration(genId) : undefined;
  const consoleDef = generation && consoleSlug ? getConsole(consoleSlug) : undefined;

  /** Keeps the URL and the view in sync: Next client navigation alone would only change the URL. */
  const drill = (query: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault();
    go(query);
  };

  const go = (query: string) => {
    setSearch(query);
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  };

  const portCount = useMemo(() => {
    const count = (console: ConsoleDef) => {
      const labels = CONSOLE_TO_SYSTEM[console.slug] ?? [];
      return labels.reduce((sum, label) => sum + (portsBySystem[label] ?? 0), 0);
    };
    return count;
  }, [portsBySystem]);

  const query = (params.get("q") ?? "").trim();
  const inputRef = useRef<HTMLInputElement>(null);

  const allEmulators = useMemo(() => {
    const out: { emu: Emulator; consoleDef: ConsoleDef }[] = [];
    for (const gen of generations) {
      for (const consoleDef of gen.consoles) {
        for (const emu of consoleDef.emulators) {
          out.push({ emu, consoleDef });
        }
      }
    }
    return out;
  }, []);

  const searchForm = (
    <form
      role="search"
      onSubmit={(event) => {
        event.preventDefault();
        const value = inputRef.current?.value.trim() ?? "";
        go(value ? `q=${encodeURIComponent(value)}` : "");
      }}
      className="flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-2 focus-within:border-accent-hover sm:max-w-sm"
    >
      <Search className="size-4 shrink-0 text-muted" aria-hidden="true" />
      <input
        ref={inputRef}
        key={query}
        type="search"
        defaultValue={query}
        placeholder={t.emulators.searchPlaceholder}
        aria-label={t.emulators.searchPlaceholder}
        className="w-full bg-transparent text-sm text-foreground placeholder:text-muted focus:outline-none"
      />
    </form>
  );

  if (consoleDef) {
    return (
      <ConsoleView
        consoleDef={consoleDef}
        generationName={generation!.name[locale]}
        portCount={portCount(consoleDef)}
        onBack={() => go(`gen=${generation!.id}`)}
      />
    );
  }

  if (generation) {
    return (
      <div className="flex flex-col gap-6">
        <button
          type="button"
          onClick={() => go("")}
          className="inline-flex w-fit items-center gap-1 text-sm text-link transition-colors hover:text-link-hover"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          {t.emulators.allGenerations}
        </button>
        <header className="flex flex-col gap-1">
          <p className="font-mono text-xs uppercase tracking-widest text-muted">
            {generation.range[locale]}
          </p>
          <h1 className="text-2xl font-semibold tracking-tight">{generation.name[locale]}</h1>
          <p className="text-sm text-muted">
            {t.emulators.chooseConsole(generation.consoles.length)}
          </p>
        </header>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {generation.consoles.map((consoleDef) => (
            <li key={consoleDef.slug}>
              <Link
                href={`${pathname}?gen=${generation.id}&console=${consoleDef.slug}`}
                onClick={drill(`gen=${generation.id}&console=${consoleDef.slug}`)}
                className="flex w-full items-center gap-3 rounded-lg border border-border bg-surface p-4 text-left transition-[border-color,background-color] duration-150 hover:border-accent-hover hover:bg-surface-2"
              >
                <ConsoleMark
                  abbreviation={consoleDef.abbreviation}
                  color={consoleDef.color}
                  logo={consoleDef.logo}
                />
                <span className="flex min-w-0 flex-col gap-0.5">
                  <span className="truncate text-sm font-semibold text-foreground">
                    {consoleDef.name[locale]}
                  </span>
                  <span className="text-xs text-muted">
                    {consoleDef.manufacturer} · {consoleDef.year}
                  </span>
                  <span className="text-xs text-muted">
                    {consoleDef.emulators.length > 0
                      ? t.emulators.emulatorCount(consoleDef.emulators.length)
                      : t.emulators.noEmulators}
                  </span>
                </span>
                <ArrowRight className="ml-auto size-4 shrink-0 text-muted" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (query) {
    const q = query.toLowerCase();
    const matches = allEmulators.filter(({ emu }) => emu.name.toLowerCase().includes(q));
    return (
      <div className="flex flex-col gap-6">
        <header className="flex flex-col gap-3">
          <div className="flex flex-col gap-1.5">
            <h1 className="text-2xl font-semibold tracking-tight">{t.emulators.title}</h1>
            <p className="max-w-2xl text-sm text-muted">{t.emulators.subtitle}</p>
          </div>
          {searchForm}
        </header>
        {matches.length === 0 ? (
          <div className="flex flex-col gap-2 rounded-lg border border-border bg-surface px-6 py-10 text-center">
            <p className="text-sm font-medium text-foreground">{t.emulators.noResults}</p>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            <p className="text-sm text-muted">{t.emulators.searchResults(matches.length)}</p>
            <ul className="flex flex-col gap-4">
              {matches.map(({ emu, consoleDef }) => (
                <li key={emu.id}>
                  <EmulatorCard emu={emu} consoleName={consoleDef.name[locale]} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <header className="flex flex-col gap-3">
        <div className="flex flex-col gap-1.5">
          <h1 className="text-2xl font-semibold tracking-tight">{t.emulators.title}</h1>
          <p className="max-w-2xl text-sm text-muted">{t.emulators.subtitle}</p>
        </div>
        {searchForm}
      </header>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {generations.map((gen) => {
          const consoleCount = gen.consoles.length;
          const emuCount = gen.consoles.reduce((sum, c) => sum + c.emulators.length, 0);
          return (
            <li key={gen.id}>
              <Link
                href={`${pathname}?gen=${gen.id}`}
                onClick={drill(`gen=${gen.id}`)}
                className="flex h-full w-full flex-col gap-3 rounded-lg border border-border bg-surface p-5 text-left transition-[border-color,background-color] duration-150 hover:border-accent-hover hover:bg-surface-2"
              >
                <span className="flex items-center gap-2">
                  <span className="flex size-9 items-center justify-center rounded-md border border-border bg-surface-2 text-accent-2">
                    <Layers className="size-4" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-xs uppercase tracking-widest text-muted">
                    {gen.range[locale]}
                  </span>
                </span>
                <span className="text-base font-semibold text-foreground">{gen.name[locale]}</span>
                <span className="text-xs text-muted">
                  {t.emulators.consoleCount(consoleCount)} · {t.emulators.emulatorCount(emuCount)}
                </span>
                <span className="mt-auto flex flex-wrap gap-1.5 pt-1">
                  {gen.consoles.slice(0, 8).map((c) => (
                    <ConsoleMark
                      key={c.slug}
                      abbreviation={c.abbreviation}
                      color={c.color}
                      logo={c.logo}
                      size="sm"
                    />
                  ))}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
      <p className="text-xs text-muted">
        {t.emulators.totalLine(countEmulators(), allConsoles.length)}
      </p>
      <p className="rounded-lg border border-border bg-surface-2 px-4 py-3 text-xs text-muted">
        {t.emulators.disclaimer}
      </p>
    </div>
  );
}

const PLATFORM_LABEL: Partial<Record<EmulatorPlatform, string>> = {
  windows: "Windows",
  linux: "Linux",
  macos: "macOS",
  android: "Android",
  ios: "iOS",
  web: "Web",
  bsd: "BSD",
  switch: "Switch",
  psp: "PSP",
  psvita: "PS Vita",
  ds: "DS",
  "3ds": "3DS",
  wii: "Wii",
  wiiu: "Wii U",
  ps2: "PS2",
  ps3: "PS3",
  ps4: "PS4",
};

function EmulatorCard({ emu, consoleName }: { emu: Emulator; consoleName?: string }) {
  const t = useT();
  const locale = useLocale();
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-border bg-surface p-5">
      <div className="flex flex-wrap items-center gap-2">
        <h2 className="text-base font-semibold text-foreground">{emu.name}</h2>
        {consoleName && (
          <span className="rounded-full border border-border px-2 py-0.5 text-xs text-muted">
            {consoleName}
          </span>
        )}
        {emu.recommended && (
          <span className="rounded-full bg-[color-mix(in_oklab,var(--accent)_15%,transparent)] px-2 py-0.5 text-xs font-medium text-accent">
            {t.emulators.bestPick}
          </span>
        )}
        <span
          className={cn(
            "rounded-full px-2 py-0.5 text-xs font-medium",
            compatTone(emu.compatibility),
          )}
        >
          {t.emulators.compatibility[emu.compatibility]}
        </span>
        <span className="rounded-full border border-border px-2 py-0.5 text-xs text-muted">
          {emu.openSource ? t.catalog.openSource : t.catalog.closedSource}
        </span>
      </div>
      <p className="text-sm leading-relaxed text-muted">{emu.note[locale]}</p>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted">
        <span className="flex flex-wrap items-center gap-1.5">
          <span className="text-foreground/70">{t.emulators.platformsLabel}:</span>
          {emu.platforms.map((p) => (
            <span key={p} className="rounded bg-surface-2 px-1.5 py-0.5">
              {PLATFORM_LABEL[p] ?? p}
            </span>
          ))}
        </span>
        {emu.license && (
          <span>
            {t.detail.license}: <span className="font-mono">{emu.license}</span>
          </span>
        )}
      </div>
      <a
        href={emu.source}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-fit items-center gap-1.5 text-sm text-link transition-colors hover:text-link-hover"
      >
        {t.emulators.officialSite}
        <ExternalLink className="size-3.5" aria-hidden="true" />
      </a>
    </div>
  );
}

function ConsoleView({
  consoleDef,
  generationName,
  portCount,
  onBack,
}: {
  consoleDef: ConsoleDef;
  generationName: string;
  portCount: number;
  onBack: () => void;
}) {
  const t = useT();
  const locale = useLocale();
  const emulators = sortEmulators(consoleDef.emulators);

  return (
    <div className="flex flex-col gap-6">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex w-fit items-center gap-1 text-sm text-link transition-colors hover:text-link-hover"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        {generationName}
      </button>

      <header className="flex items-center gap-4">
        <ConsoleMark
          abbreviation={consoleDef.abbreviation}
          color={consoleDef.color}
          logo={consoleDef.logo}
          size="lg"
        />
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold tracking-tight">{consoleDef.name[locale]}</h1>
          <p className="text-sm text-muted">
            {consoleDef.manufacturer} · {consoleDef.year}
          </p>
          {portCount > 0 && (
            <LocalizedLinkComponent
              href={`/ports?system=${encodeURIComponent((CONSOLE_TO_SYSTEM[consoleDef.slug] ?? [])[0] ?? "")}`}
              className="w-fit text-xs text-link transition-colors hover:text-link-hover"
            >
              {t.emulators.catalogPorts(portCount)}
            </LocalizedLinkComponent>
          )}
        </div>
      </header>

      {emulators.length === 0 ? (
        <div className="flex flex-col gap-2 rounded-lg border border-border bg-surface px-6 py-10 text-center">
          <p className="text-sm font-medium text-foreground">{t.emulators.noEmulators}</p>
          <p className="text-sm text-muted">{t.emulators.noEmulatorsHelp}</p>
        </div>
      ) : (
        <ul className="flex flex-col gap-4">
          {emulators.map((emu) => (
            <li key={emu.id}>
              <EmulatorCard emu={emu} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
