import { Suspense } from "react";
import type { Metadata } from "next";
import { CatalogPage } from "@/components/catalog/catalog-page";
import { Container } from "@/components/layout/container";
import { getPorts, getTestStatuses } from "@/lib/ports";

export const metadata: Metadata = {
  title: "PC ports",
};

export default function PcPage() {
  return (
    <section className="py-8">
      <Container>
        <Suspense>
          <CatalogPage ports={getPorts()} testStatuses={getTestStatuses()} scope="pc" />
        </Suspense>
      </Container>
    </section>
  );
}