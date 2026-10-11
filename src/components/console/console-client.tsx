"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { consoleDefs, getConsoleDef } from "@/content/consoles";
import { ConsoleMark } from "@/components/emulators/console-mark";
import { PortTile } from "@/components/catalog/port-tile";
import type { TestStatus } from "@/components/catalog/test-badge";
import type { Port } from "@/lib/ports/schema";
import { useLocale, useT } from "@/lib/i18n/use-i18n";

export function ConsoleClient({
  portsByPlatform,
  testStatuses,
  originalSystems,
}: {
  portsByPlatform: Record<string, Port[]>;
  testStatuses: Record<string, TestStatus>;
  originalSystems: Record<string, string>;
}) {
  const t = useT();
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const params = useSearchParams();
  const slug = params.get("console");
  const def = slug ? getConsoleDef(slug) : undefined;

  const go = (query: string) => {
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  };

  if (def) {
    const ports = portsByPlatform[def.platform] ?? [];
    return (
      <div className="flex flex-col gap-6">
        <button
          type="button"
          onClick={() => go("")}
          className="inline-flex w-fit items-center gap-1 text-sm text-link transition-colors hover:text-link-hover"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          {t.console.allConsoles}
        </button>
        <header className="flex items-center gap-4">
          <ConsoleMark
            abbreviation={def.abbreviation}
            color={def.color}
            logo={def.logo}
            size="lg"
          />
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-semibold tracking-tight">{def.name[locale]}</h1>
            <p className="text-sm text-muted">
              {def.manufacturer} · {def.year}
            </p>
            <p className="text-xs text-muted">{t.console.portCount(ports.length)}</p>
          </div>
        </header>
        {ports.length === 0 ? (
          <div className="flex flex-col gap-2 rounded-lg border border-border bg-surface px-6 py-10 text-center">
            <p className="text-sm font-medium text-foreground">{t.console.noPorts}</p>
            <p className="text-sm text-muted">{t.console.noPortsHelp}</p>
          </div>
        ) : (
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ports.map((port, index) => (
              <li key={port.id}>
                <PortTile
                  port={port}
                  testStatus={testStatuses[port.id]}
                  system={originalSystems[port.id]}
                  className="h-full"
                  eager={index < 3}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <header className="flex flex-col gap-1.5">
        <h1 className="text-2xl font-semibold tracking-tight">{t.console.title}</h1>
        <p className="max-w-2xl text-sm text-muted">{t.console.subtitle}</p>
      </header>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {consoleDefs.map((consoleDef) => {
          const count = (portsByPlatform[consoleDef.platform] ?? []).length;
          return (
            <li key={consoleDef.slug}>
              <button
                type="button"
                onClick={() => go(`console=${consoleDef.slug}`)}
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
                  <span className="text-xs text-muted">{t.console.portCount(count)}</span>
                </span>
                <ArrowRight className="ml-auto size-4 shrink-0 text-muted" aria-hidden="true" />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
