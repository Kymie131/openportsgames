import { Suspense } from "react";
import type { Metadata } from "next";
import { AboutContent } from "@/components/docs/about-content";
import { Container } from "@/components/layout/container";
import { pageMeta } from "@/lib/seo";
import { dictionaries } from "@/lib/i18n/dictionaries";

export const metadata: Metadata = pageMeta({
  title: "About",
  description: dictionaries.en.about.subtitle,
  path: "/about",
});

export default function AboutRoute() {
  return (
    <section className="py-8">
      <Container className="max-w-3xl">
        <Suspense>
          <AboutContent />
        </Suspense>
      </Container>
    </section>
  );
}