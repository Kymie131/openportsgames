import { Suspense } from "react";
import type { Metadata } from "next";
import { LegalContent } from "@/components/docs/legal-content";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "Legal",
};

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