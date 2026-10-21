"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Search } from "lucide-react";
import { LocalizedLink as Link } from "@/components/i18n/localized-link";
import { ConsoleMark } from "@/components/emulators/console-mark";
import { useLocale, useT } from "@/lib/i18n/use-i18n";

export interface ConsoleCard {
  slug: string;
  name: string;
  manufacturer: string;
  year: number;
  abbreviation: string;
  color: string;
  logo?: string;
  running: number;
  games: number;
  preview: { id: string; game: string }[];
}

/**
 * Console index. The list is server-rendered (crawlable); the search box only
 * filters it client-side, and every card is a real link to `/console/<slug>/`.
 */
export function ConsoleIndex({ consoles }: { consoles: ConsoleCard[] }) {
  const t = useT();
  const locale = useLocale();
  const router = useRouter();
  const [query, setQuery] = useState("");

  // Legacy deep links (`/console/?console=playstation-2`) move to the real route.
  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get("console");
    if (slug) router.replace(`/${locale}/console/${slug}/`);
  }, [locale, router]);

  const q = query.trim().toLowerCase();
  const visible = useMemo(
    () =>
      q
        ? consoles.filter((consoleDef) =>
            `${consoleDef.name} ${consoleDef.manufacturer}`.toLowerCase().includes(q),
          )
        : consoles,
    [consoles, q],
  );

  return (
    <div className="flex flex-col gap-6">
      <header className="flex flex-col gap-3">
        <div className="flex flex-col gap-1.5">
          <h1 className="text-2xl font-semibold tracking-tight">{t.console.title}</h1>
          <p className="max-w-2xl text-sm text-muted">{t.console.subtitle}</p>
        </div>
        <form
          role="search"
          onSubmit={(event) => event.preventDefault()}
          className="flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-2 focus-within:border-accent-hover sm:max-w-sm"
        >
          <Search className="size-4 shrink-0 text-muted" aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t.console.searchPlaceholder}
            aria-label={t.console.searchPlaceholder}
            className="w-full bg-transparent text-sm text-foreground placeholder:text-muted focus:outline-none"
          />
        </form>
      </header>

      {visible.length === 0 ? (
        <p className="rounded-lg border border-border bg-surface px-6 py-10 text-center text-sm text-muted">
          {t.console.noResults}
        </p>
      ) : (
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((consoleDef) => (
            <li
              key={consoleDef.slug}
              className="rounded-lg border border-border bg-surface p-4 transition-colors duration-150 hover:border-accent-hover"
            >
              <Link
                href={`/console/${consoleDef.slug}`}
                className="flex w-full items-center gap-3 text-left"
              >
                <ConsoleMark
                  abbreviation={consoleDef.abbreviation}
                  color={consoleDef.color}
                  logo={consoleDef.logo}
                />
                <span className="flex min-w-0 flex-col gap-0.5">
                  <span className="truncate text-sm font-semibold text-foreground">
                    {consoleDef.name}
                  </span>
                  <span className="text-xs text-muted">
                    {consoleDef.manufacturer} · {consoleDef.year}
                  </span>
                  <span className="text-xs text-muted">
                    {t.console.hubTotal(consoleDef.running, consoleDef.games)}
                  </span>
                </span>
                <ArrowRight className="ml-auto size-4 shrink-0 text-muted" aria-hidden="true" />
              </Link>
              {consoleDef.preview.length > 0 && (
                <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1 border-t border-border pt-3">
                  {consoleDef.preview.map((port) => (
                    <li key={port.id}>
                      <Link
                        href={`/ports/${port.id}`}
                        className="text-xs text-link transition-colors hover:text-link-hover"
                      >
                        {port.game}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
