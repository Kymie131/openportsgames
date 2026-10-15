import type { Metadata } from "next";
import { PrivacyContent } from "@/components/docs/privacy-content";
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
    title: dictionaries[locale].privacy.title,
    description: dictionaries[locale].privacy.subtitle,
    path: "/privacy",
  });
}

export default function PrivacyRoute() {
  return (
    <section className="py-8">
      <Container className="max-w-3xl">
        <PrivacyContent />
      </Container>
    </section>
  );
}
