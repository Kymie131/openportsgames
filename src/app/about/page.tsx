import { Suspense } from "react";
import type { Metadata } from "next";
import { AboutContent } from "@/components/docs/about-content";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "About",
};

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