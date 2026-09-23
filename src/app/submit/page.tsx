import { Suspense } from "react";
import type { Metadata } from "next";
import { SubmitContent } from "@/components/docs/submit-content";
import { Container } from "@/components/layout/container";
import { pageMeta } from "@/lib/seo";
import { dictionaries } from "@/lib/i18n/dictionaries";

export const metadata: Metadata = pageMeta({
  title: "Submit",
  description: dictionaries.en.submit.subtitle,
  path: "/submit",
});

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
