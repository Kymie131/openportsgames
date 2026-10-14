import { Suspense } from "react";
import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { ConsoleClient } from "@/components/console/console-client";
import { getPorts, getTestStatuses } from "@/lib/ports";
import { originalSystemById } from "@/content/ports/meta";
import { pageMeta } from "@/lib/seo";
import { dictionaries } from "@/lib/i18n/dictionaries";
import type { Port } from "@/lib/ports/schema";

export const metadata: Metadata = pageMeta({
  title: "Console homebrew",
  description: dictionaries.en.console.subtitle,
  path: "/console",
});

export default function ConsolePage() {
  const portsByPlatform: Record<string, Port[]> = {};
  for (const port of getPorts()) {
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
