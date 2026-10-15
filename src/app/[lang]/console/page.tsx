import { Suspense } from "react";
import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { ConsoleClient } from "@/components/console/console-client";
import { JsonLd } from "@/components/seo/json-ld";
import { getPorts, getTestStatuses } from "@/lib/ports";
import { originalSystemsById } from "@/content/ports/meta";
import { breadcrumbList, pageMeta } from "@/lib/seo";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { asLocale, localizePath } from "@/lib/i18n/locales";
import { absoluteUrl } from "@/lib/site";
import type { Port } from "@/lib/ports/schema";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = asLocale(lang);
  return pageMeta({
    locale,
    title: dictionaries[locale].console.title,
    description: dictionaries[locale].console.subtitle,
    path: "/console",
  });
}

export default async function ConsolePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = asLocale(lang);
  const t = dictionaries[locale];
  const portsByPlatform: Record<string, Port[]> = {};
  for (const port of getPorts()) {
    for (const platform of port.platforms) {
      (portsByPlatform[platform] ??= []).push(port);
    }
  }

  return (
    <section className="py-8">
      <JsonLd
        data={breadcrumbList([
          { name: t.nav.home, url: absoluteUrl(localizePath(locale, "/")) },
          { name: t.nav.console, url: absoluteUrl(localizePath(locale, "/console")) },
        ])}
      />
      <Container>
        <Suspense>
          <ConsoleClient
            portsByPlatform={portsByPlatform}
            testStatuses={getTestStatuses()}
            originalSystems={originalSystemsById}
          />
        </Suspense>
      </Container>
    </section>
  );
}
