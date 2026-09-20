import { Suspense } from "react";
import type { Metadata } from "next";
import { SupportContent } from "@/components/docs/support-content";
import { Container } from "@/components/layout/container";
import { pageMeta } from "@/lib/seo";
import { dictionaries } from "@/lib/i18n/dictionaries";

export const metadata: Metadata = pageMeta({
  title: "Support",
  description: dictionaries.en.support.subtitle,
  path: "/support",
});

export default function SupportRoute() {
  return (
    <section className="py-8">
      <Container className="max-w-3xl">
        <Suspense>
          <SupportContent />
        </Suspense>
      </Container>
    </section>
  );
}