import { Suspense } from "react";
import type { Metadata } from "next";
import { CatalogPage } from "@/components/catalog/catalog-page";
import { Container } from "@/components/layout/container";
import { getPorts, getTestResults, getTestStatuses } from "@/lib/ports";
import { originalSystemById } from "@/content/ports/meta";
import { githubStars } from "@/content/github-stars";
import { pageMeta } from "@/lib/seo";
import { dictionaries } from "@/lib/i18n/dictionaries";

export const metadata: Metadata = pageMeta({
  title: "PC ports",
  description: dictionaries.en.catalog.subtitlePc,
  path: "/pc",
});

export default function PcPage() {
  return (
    <section className="py-8">
      <Container>
        <Suspense>
          <CatalogPage
            ports={getPorts()}
            testStatuses={getTestStatuses()}
            testResults={getTestResults()}
            originalSystems={originalSystemById}
            stars={githubStars}
            scope="pc"
          />
        </Suspense>
      </Container>
    </section>
  );
}
