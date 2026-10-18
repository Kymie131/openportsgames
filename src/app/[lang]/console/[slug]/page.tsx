import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GithubMark } from "@/components/platforms/github-mark";
import { Container } from "@/components/layout/container";
import { ConsoleMark } from "@/components/emulators/console-mark";
import { PortTile } from "@/components/catalog/port-tile";
import { consoleDefs } from "@/content/consoles";
import { getConsoleHub } from "@/lib/console-hub";
import { getTestStatuses } from "@/lib/ports";
import { pageMeta } from "@/lib/seo";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { asLocale, localizePath, locales } from "@/lib/i18n/locales";
import type { Port } from "@/lib/ports/schema";

export function generateStaticParams() {
  return locales.flatMap((lang) => consoleDefs.map((def) => ({ lang, slug: def.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale = asLocale(lang);
  const hub = getConsoleHub(slug);
  if (!hub) return {};
  const t = dictionaries[locale].console;
  return pageMeta({
    locale,
    title: `${hub.def.name[locale]} homebrew`,
    description: t.hubTotal(hub.running.length, hub.games.length),
    path: `/console/${hub.def.slug}`,
  });
}

function Section({
  title,
  help,
  empty,
  ports,
  testStatuses,
}: {
  title: string;
  help: string;
  empty: string;
  ports: Port[];
  testStatuses: Record<string, "current" | "stale">;
}) {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
        <p className="max-w-2xl text-sm text-muted">{help}</p>
      </div>
      {ports.length === 0 ? (
        <p className="rounded-lg border border-dashed border-border bg-surface px-5 py-6 text-sm text-muted">
          {empty}
        </p>
      ) : (
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
      )}
    </section>
  );
}

export default async function ConsoleHubPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const locale = asLocale(lang);
  const hub = getConsoleHub(slug);
  if (!hub) notFound();

  const t = dictionaries[locale].console;
  const testStatuses = getTestStatuses();
  const github = hub.sources.filter((source) => source.github);
  const others = hub.sources.filter((source) => !source.github);

  return (
    <section className="flex flex-col gap-8 py-8">
      <Container className="flex flex-col gap-8">
        <a
          href={localizePath(locale, "/console")}
          className="inline-flex w-fit items-center gap-1 text-sm text-link transition-colors hover:text-link-hover"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          {t.allConsoles}
        </a>

        <header className="flex flex-wrap items-center gap-4">
          <ConsoleMark
            abbreviation={hub.def.abbreviation}
            color={hub.def.color}
            logo={hub.def.logo}
            size="lg"
          />
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-semibold tracking-tight">{hub.def.name[locale]}</h1>
            <p className="text-sm text-muted">
              {hub.def.manufacturer} · {hub.def.year}
            </p>
            <p className="text-sm text-muted">
              {t.hubTotal(hub.running.length, hub.games.length)}
            </p>
          </div>
        </header>

        <Section
          title={t.runningTitle}
          help={t.runningHelp}
          empty={t.runningEmpty}
          ports={hub.running}
          testStatuses={testStatuses}
        />

        <Section
          title={t.gamesTitle}
          help={t.gamesHelp}
          empty={t.gamesEmpty}
          ports={hub.games}
          testStatuses={testStatuses}
        />

        <section className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-semibold tracking-tight">{t.sourcesTitle}</h2>
            <p className="max-w-2xl text-sm text-muted">{t.sourcesHelp}</p>
          </div>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[...github, ...others].map((source) => (
              <li
                key={source.host}
                className="flex items-start gap-3 rounded-lg border border-border bg-surface p-4"
              >
                {source.github ? (
                  <GithubMark className="mt-0.5 size-4 shrink-0 text-muted" />
                ) : (
                  <ExternalLink className="mt-0.5 size-4 shrink-0 text-muted" aria-hidden="true" />
                )}
                <div className="flex min-w-0 flex-col gap-1">
                  <span className="truncate text-sm font-semibold text-foreground">
                    {source.host}
                  </span>
                  <span className="text-xs text-muted">{t.sourcesCount(source.portIds.length)}</span>
                  <span className="flex flex-wrap gap-x-3 gap-y-1">
                    {source.urls.slice(0, 3).map((url) => (
                      <a
                        key={url}
                        href={url}
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                        className="truncate text-xs text-link transition-colors hover:text-link-hover"
                      >
                        {url.replace(/^https?:\/\/(www\.)?/, "").slice(0, 48)}
                      </a>
                    ))}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </section>
  );
}
