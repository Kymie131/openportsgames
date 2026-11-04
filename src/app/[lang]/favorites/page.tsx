import type { Metadata } from "next";

import { FavoritesList } from "@/components/community/favorites-list";
import { Container } from "@/components/layout/container";
import { getPorts } from "@/lib/ports";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { asLocale } from "@/lib/i18n/locales";
import { pageMeta } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = asLocale(lang);
  const t = dictionaries[locale].community.favorites;
  return {
    ...pageMeta({
      locale,
      title: t.title,
      description: t.description,
      path: "/favorites",
    }),
    robots: { index: false, follow: false },
  };
}

export default async function FavoritesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = asLocale(lang);
  const t = dictionaries[locale];

  const ports = getPorts().map((port) => ({
    id: port.id,
    title: port.title,
    game: port.game,
    platformLabel: port.platforms
      .map((platform) => t.platforms[platform])
      .filter(Boolean)
      .join(" · "),
    cover: port.cover ? { src: port.cover.src, alt: port.cover.alt } : null,
  }));

  return (
    <section className="py-8">
      <Container>
        <FavoritesList ports={ports} />
      </Container>
    </section>
  );
}
