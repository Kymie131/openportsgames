"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { useT } from "@/lib/i18n/use-i18n";
import { SUPPORT_PAYPAL_URL } from "@/lib/support";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

export function HomeContent() {
  const t = useT();

  return (
    <Container className="py-16 sm:py-24">
      <div className="max-w-2xl space-y-6">
        <div className="space-y-4">
          <h1 className="text-gradient text-3xl font-semibold tracking-tight sm:text-4xl">
            OpenPortsGames
          </h1>
          <p className="text-pretty text-lg leading-8 text-muted">{t.brand.tagline}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button asChild size="lg">
            <Link href="/ports">{t.home.browseCatalog}</Link>
          </Button>
          {SUPPORT_PAYPAL_URL && (
            <Button asChild variant="secondary" size="lg">
              <a href={SUPPORT_PAYPAL_URL} target="_blank" rel="noopener noreferrer">
                <Heart className="size-4" aria-hidden="true" />
                {t.support.donate}
              </a>
            </Button>
          )}
        </div>
      </div>
    </Container>
  );
}