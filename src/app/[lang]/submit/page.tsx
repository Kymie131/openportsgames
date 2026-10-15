import { Suspense } from "react";
import type { Metadata } from "next";
import { SubmitContent } from "@/components/docs/submit-content";
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
    title: dictionaries[locale].submit.title,
    description: dictionaries[locale].submit.subtitle,
    path: "/submit",
  });
}

export default function SubmitRoute() {
  return (
    <section className="py-8">
      <Container className="max-w-3xl">
        <Suspense>
          <SubmitContent />
        </Suspense>
      </Container>
    </section>
  );
}
