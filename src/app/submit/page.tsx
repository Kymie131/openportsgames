import { Suspense } from "react";
import type { Metadata } from "next";
import { SubmitContent } from "@/components/docs/submit-content";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "Submit",
};

export default function SubmitRoute() {
  return (
    <section className="py-8">
      <Container className="max-w-3xl">
        <Suspense>
          <SubmitContent />
        </Suspense>
      </Container>
    </section>
  );
}