import { Suspense } from "react";
import type { Metadata } from "next";
import { PrivacyContent } from "@/components/docs/privacy-content";
import { Container } from "@/components/layout/container";
import { pageMeta } from "@/lib/seo";
import { dictionaries } from "@/lib/i18n/dictionaries";

export const metadata: Metadata = pageMeta({
  title: "Privacy",
  description: dictionaries.en.privacy.subtitle,
  path: "/privacy",
});

export default function PrivacyRoute() {
  return (
    <section className="py-8">
      <Container className="max-w-3xl">
        <Suspense>
          <PrivacyContent />
        </Suspense>
      </Container>
    </section>
  );
}
