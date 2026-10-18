"use client";

import { useState } from "react";
import { ExternalLink, Gamepad2, Layers, Package, Puzzle } from "lucide-react";
import { LocalizedLink as Link } from "@/components/i18n/localized-link";
import { PortTile } from "@/components/catalog/port-tile";
import type { TestStatus } from "@/components/catalog/test-badge";
import { useT } from "@/lib/i18n/use-i18n";
import type { Port } from "@/lib/ports/schema";

export interface HubEmulator {
  id: string;
  name: string;
  source: string;
  compatibility: string;
  recommended: boolean;
  note: string;
}

type TabKey = "ports" | "homebrew" | "plugins" | "emulators";

const COMPAT_TONE: Record<string, string> = {
  excellent: "text-ok",
  high: "text-accent-3",
  good: "text-warning",
  limited: "text-danger",
};

export function ConsoleTabs({
  slug,
  running,
  games,
  homebrew,
  plugins,
  emulators,
  testStatuses,
}: {
  slug: string;
  running: Port[];
  games: Port[];
  homebrew: Port[];
  plugins: Port[];
  emulators: HubEmulator[];
  testStatuses: Record<string, TestStatus>;
}) {
  const t = useT();
  const [tab, setTab] = useState<TabKey>("ports");

  const tabs: { key: TabKey; label: string; count: number; icon: typeof Package }[] = [
    { key: "ports", label: t.console.tabs.ports, count: running.length + games.length, icon: Gamepad2 },
    { key: "homebrew", label: t.console.tabs.homebrew, count: homebrew.length, icon: Puzzle },
    { key: "plugins", label: t.console.tabs.plugins, count: plugins.length, icon: Package },
    { key: "emulators", label: t.console.tabs.emulators, count: emulators.length, icon: Layers },
  ];

  const grid = (ports: Port[]) => (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {ports.map((port, index) => (
        <li key={port.id}>
          <PortTile
            port={port}
            testStatus={testStatuses[port.id]}
            className="h-full"
            eager={index < 3}
          />
        </li>
      ))}
    </ul>
  );

  const empty = (text: string) => (
    <p className="rounded-lg border border-dashed border-border bg-surface px-5 py-6 text-sm text-muted">
      {text}
    </p>
  );

  return (
    <div className="flex flex-col gap-6">
      <div role="tablist" aria-label={t.console.tabs.label} className="flex flex-wrap gap-2">
        {tabs.map((entry) => {
          const Icon = entry.icon;
          const active = tab === entry.key;
          return (
            <button
              key={entry.key}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setTab(entry.key)}
              className={
                active
                  ? "inline-flex items-center gap-2 rounded-md border border-accent-hover bg-accent px-3 py-2 text-sm font-medium text-accent-contrast"
                  : "inline-flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-2 text-sm text-muted transition-colors hover:border-accent-hover hover:text-foreground"
              }
            >
              <Icon className="size-4" aria-hidden="true" />
              {entry.label}
              <span className={active ? "text-accent-contrast/80" : "text-muted"}>{entry.count}</span>
            </button>
          );
        })}
      </div>

      {tab === "ports" && (
        <div className="flex flex-col gap-8">
          <section className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-semibold tracking-tight">{t.console.runningTitle}</h2>
              <p className="max-w-2xl text-sm text-muted">{t.console.runningHelp}</p>
            </div>
            {running.length === 0 ? empty(t.console.runningEmpty) : grid(running)}
          </section>
          <section className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-semibold tracking-tight">{t.console.gamesTitle}</h2>
              <p className="max-w-2xl text-sm text-muted">{t.console.gamesHelp}</p>
            </div>
            {games.length === 0 ? empty(t.console.gamesEmpty) : grid(games)}
          </section>
        </div>
      )}

      {tab === "homebrew" && (
        <section className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-semibold tracking-tight">{t.console.homebrewTitle}</h2>
            <p className="max-w-2xl text-sm text-muted">{t.console.homebrewHelp}</p>
          </div>
          {homebrew.length === 0 ? empty(t.console.homebrewEmpty) : grid(homebrew)}
        </section>
      )}

      {tab === "plugins" && (
        <section className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-semibold tracking-tight">{t.console.pluginsTitle}</h2>
            <p className="max-w-2xl text-sm text-muted">{t.console.pluginsHelp}</p>
          </div>
          {plugins.length === 0 ? empty(t.console.pluginsEmpty) : grid(plugins)}
        </section>
      )}

      {tab === "emulators" && (
        <section className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-semibold tracking-tight">{t.console.emulatorsTitle}</h2>
            <p className="max-w-2xl text-sm text-muted">{t.console.emulatorsHelp}</p>
          </div>
          {emulators.length === 0 ? (
            empty(t.console.emulatorsEmpty)
          ) : (
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {emulators.map((emu) => (
                <li key={emu.id} className="rounded-lg border border-border bg-surface p-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-foreground">{emu.name}</span>
                    {emu.recommended && (
                      <span className="rounded-sm bg-[color-mix(in_oklab,var(--accent)_15%,transparent)] px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-accent">
                        {t.console.emulatorsPick}
                      </span>
                    )}
                    <span
                      className={`ml-auto text-xs ${COMPAT_TONE[emu.compatibility] ?? "text-muted"}`}
                    >
                      {emu.compatibility}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted">{emu.note}</p>
                  <a
                    href={emu.source}
                    rel="noopener noreferrer nofollow"
                    target="_blank"
                    className="mt-3 inline-flex items-center gap-1 text-xs text-link transition-colors hover:text-link-hover"
                  >
                    {t.console.emulatorsSource}
                    <ExternalLink className="size-3" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          )}
          <Link
            href={`/emulators?console=${slug}`}
            className="w-fit text-sm text-link transition-colors hover:text-link-hover"
          >
            {t.console.emulatorsLink}
          </Link>
        </section>
      )}
    </div>
  );
}
