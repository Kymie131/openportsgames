import { Suspense } from "react";
import type { Metadata } from "next";
import { CatalogPage } from "@/components/catalog/catalog-page";
import { Container } from "@/components/layout/container";
import { getPorts, getTestResults, getTestStatuses } from "@/lib/ports";
import { originalSystemById } from "@/content/ports/meta";
import { githubStars } from "@/content/github-stars";
import { pageMeta } from "@/lib/seo";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { asLocale } from "@/lib/i18n/locales";

const TITLE = { en: "PC ports", es: "Ports para PC" } as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = asLocale(lang);
  return pageMeta({
    locale,
    title: TITLE[locale],
    description: dictionaries[locale].catalog.subtitlePc,
    path: "/pc",
  });
}

export default function PcPage() {
  return (
    <section className="py-8">
      <Container>
        <Suspense>
          <CatalogPage
            ports={getPorts()}
            testStatuses={getTestStatuses()}
            testResults={getTestResults()}
            originalSystems={originalSystemById}
            stars={githubStars}
            scope="pc"
          />
        </Suspense>
      </Container>
    </section>
  );
}
