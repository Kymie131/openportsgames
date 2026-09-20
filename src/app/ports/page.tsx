import { Suspense } from "react";
import type { Metadata } from "next";
import { CatalogPage } from "@/components/catalog/catalog-page";
import { Container } from "@/components/layout/container";
import { getPorts, getTestedPortIds } from "@/lib/ports";

export const metadata: Metadata = {
  title: "Catalog",
};

export default function PortsPage() {
  return (
    <section className="py-8">
      <Container>
        <Suspense>
          <CatalogPage ports={getPorts()} testedIds={[...getTestedPortIds()]} scope="all" />
        </Suspense>
      </Container>
    </section>
  );
}