import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { PortDetail } from "@/components/ports/port-detail";
import {
  getPort,
  getPorts,
  getTestsForPort,
  getTestStatuses,
  originalSystemOf,
  hardware,
} from "@/lib/ports";

export function generateStaticParams() {
  return getPorts().map((port) => ({ slug: port.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const port = getPort(slug);
  if (!port) return {};
  return {
    title: `${port.title} — OpenPortsGames`,
    description: port.notes ?? `${port.game} native port.`,
  };
}

export default async function PortPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const port = getPort(slug);
  if (!port) notFound();

  const tests = getTestsForPort(port.id);
  const hardwareById = Object.fromEntries(hardware.map((profile) => [profile.id, profile]));

  return (
    <section className="py-8">
      <Container className="max-w-3xl">
        <PortDetail
          port={port}
          tests={tests}
          hardwareById={hardwareById}
          originalSystem={originalSystemOf(port.id) ?? "—"}
          testStatus={getTestStatuses()[port.id]}
        />
      </Container>
    </section>
  );
}