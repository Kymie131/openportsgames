import { Suspense } from "react";
import type { Metadata } from "next";
import { CatalogPage } from "@/components/catalog/catalog-page";
import { Container } from "@/components/layout/container";
import { JsonLd } from "@/components/seo/json-ld";
import { getPorts, getTestResults, getTestStatuses } from "@/lib/ports";
import { originalSystemsById } from "@/content/ports/meta";
import { githubStars } from "@/content/github-stars";
import { breadcrumbList, pageMeta } from "@/lib/seo";
import { PAGE_SIZE } from "@/lib/ports/catalog";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { asLocale, localizePath } from "@/lib/i18n/locales";
import { absoluteUrl } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = asLocale(lang);
  return pageMeta({
    locale,
    title: dictionaries[locale].catalog.title,
    description: dictionaries[locale].catalog.subtitle,
    path: "/ports",
  });
}

export default async function PortsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = asLocale(lang);
  const t = dictionaries[locale];
  const ports = getPorts();
  const listUrl = absoluteUrl(localizePath(locale, "/ports"));

  return (
    <section className="py-8">
      <JsonLd
        data={breadcrumbList([
          { name: t.nav.home, url: absoluteUrl(localizePath(locale, "/")) },
          { name: t.nav.ports, url: listUrl },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: t.catalog.title,
          url: listUrl,
          numberOfItems: ports.length,
          itemListElement: ports.slice(0, PAGE_SIZE).map((port, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: port.title,
            url: absoluteUrl(localizePath(locale, `/ports/${port.id}`)),
          })),
        }}
      />
      <Container>
        <Suspense>
          <CatalogPage
            ports={ports}
            testStatuses={getTestStatuses()}
            testResults={getTestResults()}
            originalSystems={originalSystemsById}
            stars={githubStars}
            scope="all"
          />
        </Suspense>
      </Container>
    </section>
  );
}
