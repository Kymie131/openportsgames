"use client";

import { useT } from "@/lib/i18n/use-i18n";
import { Container } from "@/components/layout/container";

export function HomeContent() {
  const t = useT();

  return (
    <Container className="py-16 sm:py-24">
      <div className="max-w-2xl space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          OpenPortsGames
        </h1>
        <p className="text-pretty text-lg leading-8 text-muted">{t.brand.tagline}</p>
      </div>
    </Container>
  );
}