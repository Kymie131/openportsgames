import { Suspense } from "react";
import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { EmulatorsClient } from "@/components/emulators/emulators-client";
import { getPorts } from "@/lib/ports";
import { originalSystemById } from "@/content/ports/meta";
import { pageMeta } from "@/lib/seo";
import { dictionaries } from "@/lib/i18n/dictionaries";

export const metadata: Metadata = pageMeta({
  title: "Emulators",
  description: dictionaries.en.emulators.subtitle,
  path: "/emulators",
});

export default function EmulatorsPage() {
  const portsBySystem: Record<string, number> = {};
  for (const port of getPorts()) {
    const system = originalSystemById[port.id];
    if (system) portsBySystem[system] = (portsBySystem[system] ?? 0) + 1;
  }

  return (
    <section className="py-8">
      <Container>
        <Suspense>
          <EmulatorsClient portsBySystem={portsBySystem} />
        </Suspense>
      </Container>
    </section>
  );
}
