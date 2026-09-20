import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { PortDetail } from "@/components/ports/port-detail";
import { JsonLd } from "@/components/seo/json-ld";
import { pageMeta } from "@/lib/seo";
import {
  getPort,
  getPorts,
  getTestsForPort,
  getTestStatuses,
  originalSystemOf,
  hardware,
} from "@/lib/ports";
import { absoluteUrl } from "@/lib/site";

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
  return pageMeta({
    title: port.title,
    description: port.notes ?? `${port.game} native port for ${port.platforms.join(", ")}.`,
    path: `/ports/${port.id}`,
  });
}

export default async function PortPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const port = getPort(slug);
  if (!port) notFound();

  const tests = getTestsForPort(port.id);
  const hardwareById = Object.fromEntries(hardware.map((profile) => [profile.id, profile]));

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "VideoGame",
          name: port.title,
          description: port.notes ?? `${port.game} native port.`,
          url: absoluteUrl(`/ports/${port.id}`),
          about: { "@type": "VideoGame", name: port.game },
          developer: port.developers.map((name) => ({ "@type": "Organization", name })),
          license: port.license.spdx,
          genre: "Native re-release",
          operatingSystem: port.platforms.map((platform) =>
            platform === "windows" ? "Windows" : platform === "linux" ? "Linux" : platform === "macos" ? "macOS" : "Android",
          ),
          inLanguage: ["en", "es"],
        }}
      />
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
    </>
  );
}