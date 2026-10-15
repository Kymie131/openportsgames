import { Suspense } from "react";
import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { ConsoleClient } from "@/components/console/console-client";
import { getGamePorts, getTestStatuses } from "@/lib/ports";
import { originalSystemById } from "@/content/ports/meta";
import { pageMeta } from "@/lib/seo";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { asLocale } from "@/lib/i18n/locales";
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

export default function ConsolePage() {
  const portsByPlatform: Record<string, Port[]> = {};
  for (const port of getGamePorts()) {
    for (const platform of port.platforms) {
      (portsByPlatform[platform] ??= []).push(port);
    }
  }

  return (
    <section className="py-8">
      <Container>
        <Suspense>
          <ConsoleClient
            portsByPlatform={portsByPlatform}
            testStatuses={getTestStatuses()}
            originalSystems={originalSystemById}
          />
        </Suspense>
      </Container>
    </section>
  );
}
