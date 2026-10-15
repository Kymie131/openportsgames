import { Suspense } from "react";
import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { EmulatorsClient } from "@/components/emulators/emulators-client";
import { JsonLd } from "@/components/seo/json-ld";
import { getPorts } from "@/lib/ports";
import { originalSystemsById } from "@/content/ports/meta";
import { breadcrumbList, pageMeta } from "@/lib/seo";
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
    title: dictionaries[locale].emulators.title,
    description: dictionaries[locale].emulators.subtitle,
    path: "/emulators",
  });
}

export default async function EmulatorsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = asLocale(lang);
  const t = dictionaries[locale];
  const portsBySystem: Record<string, number> = {};
  for (const port of getPorts()) {
    for (const system of originalSystemsById[port.id] ?? []) {
      if (system !== "Unknown") portsBySystem[system] = (portsBySystem[system] ?? 0) + 1;
    }
  }

  return (
    <section className="py-8">
      <JsonLd
        data={breadcrumbList([
          { name: t.nav.home, url: absoluteUrl(localizePath(locale, "/")) },
          { name: t.nav.emulators, url: absoluteUrl(localizePath(locale, "/emulators")) },
        ])}
      />
      <Container>
        <Suspense>
          <EmulatorsClient portsBySystem={portsBySystem} />
        </Suspense>
      </Container>
    </section>
  );
}
