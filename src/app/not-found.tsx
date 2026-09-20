"use client";

import Link from "next/link";
import { useT } from "@/lib/i18n/use-i18n";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

export default function NotFoundContent() {
  const t = useT();

  return (
    <section className="flex flex-1 items-center justify-center py-16">
      <Container className="flex max-w-xl flex-col items-start gap-4 py-16">
        <p className="text-sm font-medium uppercase tracking-wide text-accent">404</p>
        <h1 className="text-2xl font-semibold tracking-tight">{t.common.notFound.title}</h1>
        <p className="text-sm leading-6 text-muted">{t.common.notFound.body}</p>
        <div className="flex flex-wrap gap-3 pt-1">
          <Button asChild>
            <Link href="/ports">{t.common.notFound.backToCatalog}</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/">{t.common.notFound.backToHome}</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}