import { Suspense } from "react";
import type { Metadata } from "next";
import { LegalContent } from "@/components/docs/legal-content";
import { Container } from "@/components/layout/container";
import { pageMeta } from "@/lib/seo";
import { dictionaries } from "@/lib/i18n/dictionaries";

export const metadata: Metadata = pageMeta({
  title: "Legal",
  description: dictionaries.en.legal.subtitle,
  path: "/legal",
});

export default function LegalRoute() {
  return (
    <section className="py-8">
      <Container className="max-w-3xl">
        <Suspense>
          <LegalContent />
        </Suspense>
      </Container>
    </section>
  );
}
