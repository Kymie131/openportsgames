import { Suspense } from "react";
import { CatalogPage } from "./catalog-page";
import { Container } from "@/components/layout/container";
import { getPorts, getTestResults, getTestStatuses } from "@/lib/ports";
import type { CatalogScope } from "@/lib/ports/catalog";
import { originalSystemsById } from "@/content/ports/meta";
import { githubStars } from "@/content/github-stars";

/** Server wrapper shared by the paginated catalog pages (`/ports`, `/pc`, `/android`). */
export function CatalogSection({
  scope,
  page,
  basePath,
}: {
  scope: CatalogScope;
  page: number;
  basePath: string;
}) {
  return (
    <section className="py-8">
      <Container>
        <Suspense>
          <CatalogPage
            ports={getPorts()}
            testStatuses={getTestStatuses()}
            testResults={getTestResults()}
            originalSystems={originalSystemsById}
            stars={githubStars}
            scope={scope}
            page={page}
            basePath={basePath}
          />
        </Suspense>
      </Container>
    </section>
  );
}
