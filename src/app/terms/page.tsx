import { Suspense } from "react";
import type { Metadata } from "next";
import { TermsContent } from "@/components/docs/terms-content";
import { Container } from "@/components/layout/container";
import { pageMeta } from "@/lib/seo";
import { dictionaries } from "@/lib/i18n/dictionaries";

export const metadata: Metadata = pageMeta({
  title: "Terms",
  description: dictionaries.en.terms.subtitle,
  path: "/terms",
});

export default function TermsRoute() {
  return (
    <section className="py-8">
      <Container className="max-w-3xl">
        <Suspense>
          <TermsContent />
        </Suspense>
      </Container>
    </section>
  );
}
