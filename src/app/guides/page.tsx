import { Suspense } from "react";
import type { Metadata } from "next";
import { GuideContent } from "@/components/docs/guide-content";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "Guides",
};

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