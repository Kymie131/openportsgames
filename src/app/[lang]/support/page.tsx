import { Suspense } from "react";
import type { Metadata } from "next";
import { SupportContent } from "@/components/docs/support-content";
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
    title: dictionaries[locale].support.title,
    description: dictionaries[locale].support.subtitle,
    path: "/support",
  });
}

export default function SupportRoute() {
  return (
    <section className="py-8">
      <Container className="max-w-3xl">
        <Suspense>
          <SupportContent />
        </Suspense>
      </Container>
    </section>
  );
}
