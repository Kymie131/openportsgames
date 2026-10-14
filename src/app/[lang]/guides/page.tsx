import { Suspense } from "react";
import type { Metadata } from "next";
import { GuideContent } from "@/components/docs/guide-content";
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
    title: dictionaries[locale].guides.title,
    description: dictionaries[locale].guides.subtitle,
    path: "/guides",
  });
}

export default function GuidesRoute() {
  return (
    <section className="py-8">
      <Container className="max-w-3xl">
        <Suspense>
          <GuideContent />
        </Suspense>
      </Container>
    </section>
  );
}
