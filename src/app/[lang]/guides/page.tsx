import { Suspense } from "react";
import type { Metadata } from "next";
import { GuideContent } from "@/components/docs/guide-content";
import { Container } from "@/components/layout/container";
import { pageMeta } from "@/lib/seo";
import { dictionaries } from "@/lib/i18n/dictionaries";

export const metadata: Metadata = pageMeta({
  title: "Guides",
  description: dictionaries.en.guides.subtitle,
  path: "/guides",
});

export default function GuidesRoute() {
  return (
    <section className="py-8">
      <Container className="max-w-3xl">
        <Suspense>
          <GuideContent />
        </Suspense>
      </Container>
    </section>
  );
}
