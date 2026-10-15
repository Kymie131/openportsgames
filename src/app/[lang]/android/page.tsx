import { Suspense } from "react";
import type { Metadata } from "next";
import { CatalogPage } from "@/components/catalog/catalog-page";
import { Container } from "@/components/layout/container";
import { JsonLd } from "@/components/seo/json-ld";
import { getPorts, getTestResults, getTestStatuses } from "@/lib/ports";
import { originalSystemsById } from "@/content/ports/meta";
import { githubStars } from "@/content/github-stars";
import { breadcrumbList, pageMeta } from "@/lib/seo";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { asLocale, localizePath } from "@/lib/i18n/locales";
import { absoluteUrl } from "@/lib/site";

const TITLE = { en: "Android ports", es: "Ports para Android" } as const;

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
    description: dictionaries[locale].catalog.subtitleAndroid,
    path: "/android",
  });
}

export default async function AndroidPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = asLocale(lang);
  const t = dictionaries[locale];
  return (
    <section className="py-8">
      <JsonLd
        data={breadcrumbList([
          { name: t.nav.home, url: absoluteUrl(localizePath(locale, "/")) },
          { name: t.nav.android, url: absoluteUrl(localizePath(locale, "/android")) },
        ])}
      />
      <Container>
        <Suspense>
          <CatalogPage
            ports={getPorts()}
            testStatuses={getTestStatuses()}
            testResults={getTestResults()}
            originalSystems={originalSystemsById}
            stars={githubStars}
            scope="android"
          />
        </Suspense>
      </Container>
    </section>
  );
}
