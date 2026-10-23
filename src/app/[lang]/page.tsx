import type { Metadata } from "next";
import { HomeContent } from "@/components/home/home-content";
import { JsonLd } from "@/components/seo/json-ld";
import {
  getLatestPortsGrouped,
  getPort,
  getPortCount,
  getGamePorts,
  getRecentlyAddedPorts,
  getTestedPortIds,
  getTestStatuses,
  originalSystemOf,
} from "@/lib/ports";
import type { Port } from "@/lib/ports/schema";
import { portKind } from "@/lib/ports/schema";
import { originalSystemsById } from "@/content/ports/meta";
import { resolveSystem } from "@/content/systems";
import type { ConsoleSummary } from "@/components/home/console-grid";
import { pageMeta } from "@/lib/seo";
import { SITE_NAME, getSiteUrl } from "@/lib/site";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { asLocale } from "@/lib/i18n/locales";

const FEATURED_SLUGS = [
  "ship-of-harkinian",
  "open-lara",
  "minish-cap",
  "dk64-recompiled",
  "metroid-prime-hunters-recompiled",
  "triaevum",
];

const NON_CONSOLE_SYSTEMS = new Set([
  "windows",
  "ms-dos",
  "macintosh",
  "amiga",
  "commodore-64",
  "zx-spectrum",
  "other",
]);

const HOME_TITLE = {
  en: "OpenPortsGames – native ports, recompilations and decompilations for PC and Android",
  es: "OpenPortsGames – Catálogo de ports nativos, recompilaciones y decompilaciones para PC y Android",
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = asLocale(lang);
  return {
    ...pageMeta({
      locale,
      description: dictionaries[locale].brand.tagline,
      path: "/",
    }),
    title: { absolute: HOME_TITLE[locale] },
  };
}

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = asLocale(lang);
  const description = dictionaries[locale].brand.tagline;
  const testStatuses = getTestStatuses();
  const withMeta = (port: Port) => ({
    port,
    testStatus: testStatuses[port.id],
    system: originalSystemOf(port.id),
  });

  const recentlyAdded = getRecentlyAddedPorts(6)
    .filter((port) => portKind(port) === "game")
    .map(withMeta);
  const newIds = new Set(recentlyAdded.map(({ port }) => port.id));
  const latest = getLatestPortsGrouped(12)
    .filter((port) => !newIds.has(port.id))
    .slice(0, 6)
    .map(withMeta);

  const featured = FEATURED_SLUGS.map((id) => getPort(id))
    .filter((port): port is Port => port !== undefined && portKind(port) === "game")
    .map(withMeta);

  const portsBySystem = new Map<string, Set<string>>();
  const resolvedBySystem = new Map<string, NonNullable<ReturnType<typeof resolveSystem>>>();
  for (const port of getGamePorts()) {
    for (const label of originalSystemsById[port.id] ?? []) {
      const resolved = resolveSystem(label);
      if (!resolved || NON_CONSOLE_SYSTEMS.has(resolved.slug)) continue;
      const ids = portsBySystem.get(resolved.slug) ?? new Set<string>();
      ids.add(port.id);
      portsBySystem.set(resolved.slug, ids);
      resolvedBySystem.set(resolved.slug, resolved);
    }
  }
  const consoleSystems: ConsoleSummary[] = [...portsBySystem.entries()]
    .map(([slug, ids]) => {
      const resolved = resolvedBySystem.get(slug);
      if (!resolved) return null;
      return {
        slug,
        name: resolved.name,
        logo: resolved.logo,
        color: resolved.definition.color,
        count: ids.size,
      };
    })
    .filter((entry): entry is ConsoleSummary => entry !== null)
    .sort((a, b) => b.count - a.count)
    .slice(0, 18);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: SITE_NAME,
          description,
          url: getSiteUrl(),
          inLanguage: [locale],
        }}
      />
      <HomeContent
        latest={latest}
        recentlyAdded={recentlyAdded}
        featured={featured}
        systems={consoleSystems}
        counts={{
          ports: getPortCount(),
          verifiedSource: getGamePorts().filter((port) => port.sourceVerified).length,
          tested: getTestedPortIds().size,
        }}
      />
    </>
  );
}
