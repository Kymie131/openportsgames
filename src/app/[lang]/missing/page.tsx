import type { Metadata } from "next";

import { MissingPorts } from "@/components/community/missing-ports";
import { Container } from "@/components/layout/container";
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
  return pageMeta({
    locale,
    title: dictionaries[locale].community.missingPorts.title,
    description: dictionaries[locale].community.missingPorts.subtitle,
    path: "/missing",
  });
}

export default function MissingPage() {
  return (
    <section className="py-8">
      <Container className="max-w-3xl">
        <MissingPorts />
      </Container>
    </section>
  );
}
