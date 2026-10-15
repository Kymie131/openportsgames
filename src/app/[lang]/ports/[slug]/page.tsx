import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { PortDetail } from "@/components/ports/port-detail";
import { TakedownNotice } from "@/components/ports/takedown-notice";
import { JsonLd } from "@/components/seo/json-ld";
import { LocalizedLink as Link } from "@/components/i18n/localized-link";
import { pageMeta, portTitle, summarize, breadcrumbList } from "@/lib/seo";
import { asLocale, localizePath } from "@/lib/i18n/locales";
import { dictionaries } from "@/lib/i18n/dictionaries";
import {
  getPort,
  getPortIdSet,
  getPorts,
  getTakedownPort,
  getTestsForPort,
  getTestStatuses,
  originalSystemsOf,
  hardware,
} from "@/lib/ports";
import { absoluteUrl } from "@/lib/site";

export function generateStaticParams() {
  return [...getPortIdSet()].map((id) => ({ slug: id }));
}

/** A port has its own content when it carries notes, features, a guide or art. */
function hasOwnContent(port: NonNullable<ReturnType<typeof getPort>>): boolean {
  return Boolean(
    port.notes || port.features?.length || port.installGuide || port.screenshots?.length,
  );
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
  const localizedNotes = locale === "es" ? (port.notesEs ?? port.notes) : port.notes;
  const fallback =
    locale === "es"
      ? `${port.game}, port nativo para ${port.platforms.join(", ")}.`
      : `${port.game} native port for ${port.platforms.join(", ")}.`;
  const base = pageMeta({
    locale,
    title: portTitle(locale, port.game, port.title),
    description: summarize(localizedNotes ?? fallback),
    path: `/ports/${port.id}`,
  });
  // Per-port OG image generated from our own data (no third-party art).
  const ogImage = absoluteUrl(`/${locale}/ports/${port.id}/opengraph-image`);
  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      images: [{ url: ogImage, width: 1200, height: 630, alt: `${port.game} — ${port.title}` }],
    },
    twitter: { ...base.twitter, images: [ogImage] },
    ...(port.noindex || (!port.verified && !hasOwnContent(port))
      ? { robots: { index: false, follow: true } }
      : {}),
  };
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
  const localizedNotes = locale === "es" ? (port.notesEs ?? port.notes) : port.notes;
  const description =
    localizedNotes ??
    (locale === "es"
      ? `${port.game}, port nativo para ${port.platforms.join(", ")}.`
      : `${port.game} native port for ${port.platforms.join(", ")}.`);
  const t = dictionaries[locale];
  const portSystems = originalSystemsOf(port.id);
  const related = getPorts()
    .filter((candidate) => candidate.id !== port.id)
    .map((candidate) => {
      const sameSystem = originalSystemsOf(candidate.id).some(
        (system) => system !== "Unknown" && portSystems.includes(system),
      );
      const sameTechnique = candidate.portType === port.portType;
      const sameDeveloper = candidate.developers.some((name) => port.developers.includes(name));
      const rank = sameSystem ? 0 : sameTechnique ? 1 : sameDeveloper ? 2 : 3;
      return { candidate, rank };
    })
    .filter((entry) => entry.rank < 3)
    .sort((a, b) => a.rank - b.rank || a.candidate.title.localeCompare(b.candidate.title))
    .slice(0, 6)
    .map((entry) => entry.candidate);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: port.title,
          description,
          url: absoluteUrl(`/ports/${port.id}`),
          applicationCategory: "GameApplication",
          operatingSystem: port.platforms.map((platform) =>
            platform === "windows"
              ? "Windows"
              : platform === "linux"
                ? "Linux"
                : platform === "macos"
                  ? "macOS"
                  : platform === "android"
                    ? "Android"
                    : platform === "ios"
                      ? "iOS"
                      : platform,
          ),
          about: { "@type": "VideoGame", name: port.game },
          author: port.developers.map((name) => ({ "@type": "Organization", name })),
          license: port.license.spdx,
          inLanguage: [locale],
        }}
      />
      <JsonLd
        data={breadcrumbList([
          { name: t.nav.home, url: absoluteUrl(localizePath(locale, "/")) },
          { name: t.nav.ports, url: absoluteUrl(localizePath(locale, "/ports")) },
          { name: port.title, url: absoluteUrl(localizePath(locale, `/ports/${port.id}`)) },
        ])}
      />
      <section className="py-8">
        <Container className="max-w-3xl">
          <PortDetail
            port={port}
            tests={tests}
            hardwareById={hardwareById}
            originalSystems={originalSystemsOf(port.id)}
            testStatus={getTestStatuses()[port.id]}
          />
        </Container>
      </section>
      {related.length > 0 && (
        <section className="py-8" aria-labelledby="related-heading">
          <Container className="max-w-3xl">
            <h2 id="related-heading" className="mb-4 text-lg font-semibold tracking-tight">
              {t.detail.relatedTitle}
            </h2>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {related.map((candidate) => (
                <li key={candidate.id}>
                  <Link
                    href={`/ports/${candidate.id}`}
                    className="flex h-full flex-col gap-1 rounded-xl border border-border bg-surface p-4 transition-colors hover:border-accent-hover hover:bg-surface-2"
                  >
                    <span className="text-sm font-medium text-foreground">{candidate.title}</span>
                    <span className="text-xs text-muted">{candidate.game}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}
    </>
  );
}
