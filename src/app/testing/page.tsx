import { Suspense } from "react";
import type { Metadata } from "next";
import { TestingPage } from "@/components/testing/testing-page";
import { Container } from "@/components/layout/container";
import { hardware } from "@/lib/ports";

export const metadata: Metadata = {
  title: "Testing",
};

export default function TestingRoute() {
  return (
    <section className="py-8">
      <Container className="max-w-3xl">
        <Suspense>
          <TestingPage hardware={hardware} />
        </Suspense>
      </Container>
    </section>
  );
}