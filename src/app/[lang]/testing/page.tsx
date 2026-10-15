import { Suspense } from "react";
import type { Metadata } from "next";
import { TestingPage } from "@/components/testing/testing-page";
import { Container } from "@/components/layout/container";
import { hardware } from "@/lib/ports";
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
    title: dictionaries[locale].testing.title,
    description: dictionaries[locale].testing.subtitle,
    path: "/testing",
  });
}

export default function TestingRoute() {
  return (
    <section className="py-8">
      <Container className="max-w-3xl">
        <Suspense>
          <TestingPage hardware={hardware} />
        </Suspense>
      </Container>
    </section>
  );
}
