import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticle } from "@/components/docs/guides/guide-article";
import { Container } from "@/components/layout/container";
import { getGuideDef, guideSlugs } from "@/content/guides";
import { pageMeta } from "@/lib/seo";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { asLocale, locales } from "@/lib/i18n/locales";

export function generateStaticParams() {
  return locales.flatMap((lang) => guideSlugs.map((slug) => ({ lang, slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale = asLocale(lang);
  const def = getGuideDef(slug);
  if (!def) return {};
  const guides = dictionaries[locale].guides;
  return pageMeta({
    locale,
    title: def.title(guides),
    description: def.summary(guides),
    path: `/guides/${def.slug}`,
  });
}

export default async function GuideRoute({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const locale = asLocale(lang);
  const def = getGuideDef(slug);
  if (!def) notFound();

  return (
    <section className="py-8">
      <Container className="max-w-3xl">
        <GuideArticle slug={def.slug} locale={locale} />
      </Container>
    </section>
  );
}
