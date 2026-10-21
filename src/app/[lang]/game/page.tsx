import type { Metadata } from "next";
import { MergeGame } from "@/components/game/merge-game";
import { Container } from "@/components/layout/container";
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
    title: dictionaries[locale].game.title,
    description: dictionaries[locale].game.subtitle,
    path: "/game",
  });
}

export default function GameRoute() {
  return (
    <section className="py-8">
      <Container className="max-w-3xl">
        <MergeGame />
      </Container>
    </section>
  );
}
