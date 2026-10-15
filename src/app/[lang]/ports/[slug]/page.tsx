import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { PortDetail } from "@/components/ports/port-detail";
import { TakedownNotice } from "@/components/ports/takedown-notice";
import { JsonLd } from "@/components/seo/json-ld";
import { pageMeta } from "@/lib/seo";
import { portDescription } from "@/lib/ports/description";
import { asLocale } from "@/lib/i18n/locales";
import { dictionaries } from "@/lib/i18n/dictionaries";
import {
  getPort,
  getPortIdSet,
  getTakedownPort,
  getTestsForPort,
  getTestStatuses,
  originalSystemOf,
  hardware,
} from "@/lib/ports";
import { absoluteUrl } from "@/lib/site";
import { portKind } from "@/lib/ports/schema";

export function generateStaticParams() {
  return [...getPortIdSet()].map((id) => ({ slug: id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale = asLocale(lang);
  const port = getPort(slug);
  if (!port) {
    const takedown = getTakedownPort(slug);
    if (!takedown) return {};
    return {
      title: takedown.title,
      robots: { index: false, follow: false },
    };
  }
  return pageMeta({
    locale,
    title: port.title,
    description: portDescription(locale, port, dictionaries[locale]),
    path: `/ports/${port.id}`,
  });
}

export default async function PortPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const locale = asLocale(lang);
  const port = getPort(slug);
  if (!port) {
    const takedown = getTakedownPort(slug);
    if (!takedown) notFound();
    return (
      <section className="py-8">
        <Container className="max-w-3xl">
          <TakedownNotice port={takedown} />
        </Container>
      </section>
    );
  }

  const tests = getTestsForPort(port.id);
  const hardwareById = Object.fromEntries(hardware.map((profile) => [profile.id, profile]));
  const operatingSystem = port.platforms.map((platform) =>
    platform === "windows"
      ? "Windows"
      : platform === "linux"
        ? "Linux"
        : platform === "macos"
          ? "macOS"
          : platform === "android"
            ? "Android"
            : platform,
  );
  const jsonLd =
    portKind(port) === "game"
      ? {
          "@context": "https://schema.org",
          "@type": "VideoGame",
          name: port.title,
          description: port.notes ?? `${port.game} native port.`,
          url: absoluteUrl(`/ports/${port.id}`),
          about: { "@type": "VideoGame", name: port.game },
          developer: port.developers.map((name) => ({ "@type": "Organization", name })),
          license: port.license.spdx,
          genre: "Native re-release",
          operatingSystem,
          inLanguage: [locale],
        }
      : {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: port.title,
          description: port.notes ?? `${port.game} native reimplementation.`,
          url: absoluteUrl(`/ports/${port.id}`),
          applicationCategory: "UtilitiesApplication",
          developer: port.developers.map((name) => ({ "@type": "Organization", name })),
          license: port.license.spdx,
          operatingSystem,
          inLanguage: [locale],
        };

  return (
    <>
      <JsonLd data={jsonLd} />
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
