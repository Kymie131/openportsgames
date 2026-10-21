import { Suspense } from "react";
import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { ConsoleIndex, type ConsoleCard } from "@/components/console/console-index";
import { getAllConsoleHubs } from "@/lib/console-hub";
import { pageMeta } from "@/lib/seo";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { asLocale } from "@/lib/i18n/locales";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = asLocale(lang);
  return pageMeta({
    locale,
    title: dictionaries[locale].console.title,
    description: dictionaries[locale].console.subtitle,
    path: "/console",
  });
}

export default async function ConsolePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = asLocale(lang);

  const consoles: ConsoleCard[] = getAllConsoleHubs().map((hub) => ({
    slug: hub.def.slug,
    name: hub.def.name[locale],
    manufacturer: hub.def.manufacturer,
    year: hub.def.year,
    abbreviation: hub.def.abbreviation,
    color: hub.def.color,
    logo: hub.def.logo,
    running: hub.running.length,
    games: hub.games.length,
    preview: [...hub.running, ...hub.games].slice(0, 6).map((port) => ({
      id: port.id,
      game: port.game,
    })),
  }));

  return (
    <section className="py-8">
      <Container>
        <Suspense>
          <ConsoleIndex consoles={consoles} />
        </Suspense>
      </Container>
    </section>
  );
}
