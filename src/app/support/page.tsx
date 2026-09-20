import { Suspense } from "react";
import type { Metadata } from "next";
import { SupportContent } from "@/components/docs/support-content";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "Support",
};

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