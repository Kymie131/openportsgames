import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { ExploreClient } from "@/components/explore/explore-client";
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
    title: dictionaries[locale].explore.title,
    description: dictionaries[locale].explore.subtitle,
    path: "/explore",
  });
}

export default function ExplorePage() {
  return (
    <section className="py-8">
      <Container>
        <ExploreClient />
      </Container>
    </section>
  );
}
