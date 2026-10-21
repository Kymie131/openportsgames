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
        counts={{
          ports: getPortCount(),
          verifiedSource: getGamePorts().filter((port) => port.sourceVerified).length,
          tested: getTestedPortIds().size,
        }}
      />
    </>
  );
}
