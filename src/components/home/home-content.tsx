"use client";

import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  BookOpen,
  Code,
  FlaskConical,
  Gamepad2,
  HardDrive,
  Monitor,
  Smartphone,
  Zap,
} from "lucide-react";

import { LocalizedLink as Link } from "@/components/i18n/localized-link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { ConsoleGrid, type ConsoleSummary } from "./console-grid";
import { LatestShowcase } from "./latest-showcase";
import { SpotlightCard } from "./spotlight-card";
import { PaypalMark } from "@/components/platforms/paypal-mark";
import { SUPPORT_PAYPAL_URL } from "@/lib/support";
import { useLocale, useT } from "@/lib/i18n/use-i18n";
import type { TestStatus } from "@/components/catalog/test-badge";
import type { Port } from "@/lib/ports/schema";

export type FeaturedPort = {
  port: Port;
  testStatus?: TestStatus;
  system?: string;
};

export function HomeContent({
  latest,
  recentlyAdded,
  featured,
  systems,
  counts,
}: {
  latest: FeaturedPort[];
  recentlyAdded: FeaturedPort[];
  featured: FeaturedPort[];
  systems: ConsoleSummary[];
  counts: { ports: number; verifiedSource: number; tested: number };
}) {
  const t = useT();
  const locale = useLocale();
  const toNumber = (value: number) => new Intl.NumberFormat(locale).format(value);

  const spotlight = featured[0] ?? recentlyAdded[0] ?? latest[0] ?? null;
  const showcaseNew = recentlyAdded.filter((entry) => entry.port.id !== spotlight?.port.id);
  const showcaseUpdated = latest.filter((entry) => entry.port.id !== spotlight?.port.id);
  const showcaseFeatured = featured.filter((entry) => entry.port.id !== spotlight?.port.id);

  const explore: Array<{
    href: string;
    icon: LucideIcon;
    title: string;
    description: string;
  }> = [
    { href: "/pc", icon: Monitor, title: t.home.explorePC, description: t.home.explorePCDesc },
    {
      href: "/android",
      icon: Smartphone,
      title: t.home.exploreAndroid,
      description: t.home.exploreAndroidDesc,
    },
    {
      href: "/console",
      icon: Gamepad2,
      title: t.home.exploreConsole,
      description: t.home.exploreConsoleDesc,
    },
    {
      href: "/guides",
      icon: BookOpen,
      title: t.home.exploreGuides,
      description: t.home.exploreGuidesDesc,
    },
    {
      href: "/testing",
      icon: FlaskConical,
      title: t.home.exploreTesting,
      description: t.home.exploreTestingDesc,
    },
  ];

  const principles: Array<{ icon: LucideIcon; title: string; description: string }> = [
    { icon: Zap, title: t.home.principleNative, description: t.home.principleNativeDesc },
    { icon: Code, title: t.home.principleOpen, description: t.home.principleOpenDesc },
    { icon: HardDrive, title: t.home.principleOwn, description: t.home.principleOwnDesc },
  ];

  return (
    <Container className="py-10 sm:py-14">
      <section
        aria-labelledby="home-hero"
        className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-12"
      >
        <div className="space-y-7">
          <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em]">
            <span className="text-accent">01 / OpenPortsGames</span>
            <span className="h-px w-8 bg-border" aria-hidden="true" />
            <span className="text-muted">{t.home.eyebrow}</span>
          </div>

          <div className="space-y-3">
            <h1
              id="home-hero"
              className="text-4xl font-semibold leading-[0.95] tracking-[-0.055em] text-foreground sm:text-6xl lg:text-7xl"
            >
              OpenPortsGames
            </h1>
            <p className="font-serif text-2xl italic leading-[1.05] text-accent sm:text-4xl">
              {t.home.heroTaglineA}{" "}
              <span className="text-foreground">{t.home.heroTaglineB}</span>
            </p>
          </div>

          <p className="max-w-xl text-pretty text-base leading-7 text-muted sm:text-lg">
            {t.home.lead}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="shadow-lg shadow-accent/20 transition-shadow hover:shadow-accent/30"
            >
              <Link href="/ports">{t.home.browseCatalog}</Link>
            </Button>
            {SUPPORT_PAYPAL_URL ? (
              <Button asChild variant="secondary" size="lg">
                <a href={SUPPORT_PAYPAL_URL} target="_blank" rel="noopener noreferrer">
                  <PaypalMark className="size-4" aria-hidden="true" />
                  {t.support.donate}
                </a>
              </Button>
            ) : (
              <Button asChild variant="secondary" size="lg">
                <Link href="/support">
                  <PaypalMark className="size-4" aria-hidden="true" />
                  {t.support.donate}
                </Link>
              </Button>
            )}
          </div>

          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
            {t.home.heroTrust}
          </p>

          <dl className="grid grid-cols-3 gap-3 border-t border-border pt-5 sm:gap-6">
            <Stat
              href="/ports"
              value={toNumber(counts.ports)}
              label={t.home.statsPortsLabel}
            />
            <Stat
              href="/ports?state=verified"
              value={toNumber(counts.verifiedSource)}
              label={t.home.statsVerifiedLabel}
            />
            <Stat
              href="/testing"
              value={toNumber(counts.tested)}
              label={t.home.statsTestedLabel}
            />
          </dl>
        </div>

        {spotlight && (
          <SpotlightCard
            port={spotlight.port}
            system={spotlight.system}
            testStatus={spotlight.testStatus}
            label={
              spotlight.port.id === "hookshot"
                ? t.home.spotlightNewLabel
                : t.home.spotlightLabel
            }
            cta={t.home.spotlightCta}
          />
        )}
      </section>

      <ConsoleGrid systems={systems} />

      <LatestShowcase
        newPorts={showcaseNew}
        updatedPorts={showcaseUpdated}
        featuredPorts={showcaseFeatured}
      />

      <section className="mt-14 sm:mt-20" aria-labelledby="explore-heading">
        <SectionHeading id="explore-heading" index="04" title={t.home.exploreTitle} />
        <ul className="mt-7 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
          {explore.map(({ href, icon: Icon, title, description }) => (
            <li key={href}>
              <Link
                href={href}
                className="group flex h-full flex-col gap-3 border-t border-border pt-4 transition-colors hover:border-accent/60"
              >
                <div className="flex items-center justify-between">
                  <Icon className="size-5 text-accent" aria-hidden="true" />
                  <ArrowUpRight
                    className="size-4 text-muted transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    aria-hidden="true"
                  />
                </div>
                <span className="text-sm font-semibold text-foreground">{title}</span>
                <span className="text-xs leading-5 text-muted">{description}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14 sm:mt-20" aria-labelledby="principles-heading">
        <SectionHeading id="principles-heading" index="05" title={t.home.principlesTitle} />
        <ul className="mt-7 grid gap-6 sm:grid-cols-3">
          {principles.map(({ icon: Icon, title, description }, index) => (
            <li key={title} className="border-t border-border pt-5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-accent">0{index + 1}</span>
                <Icon className="size-5 text-muted" aria-hidden="true" />
              </div>
              <h3 className="mt-3 text-lg font-semibold tracking-tight text-foreground">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14 sm:mt-20" aria-labelledby="cta-heading">
        <div className="grid gap-6 border-t border-border pt-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="max-w-xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent">
              06 / {t.home.ctaEyebrow}
            </p>
            <h2
              id="cta-heading"
              className="mt-2 text-3xl font-semibold tracking-tight text-foreground"
            >
              {t.home.ctaTitle}
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted">{t.home.ctaDesc}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/submit">{t.home.ctaContribute}</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/guides">{t.guides.title}</Link>
            </Button>
          </div>
        </div>
      </section>
    </Container>
  );
}

function Stat({ href, value, label }: { href: string; value: string; label: string }) {
  return (
    <div className="group relative">
      <dt className="font-mono text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        {value}
      </dt>
      <dd className="mt-1 text-[11px] leading-4 text-muted sm:text-xs">{label}</dd>
      <Link
        href={href}
        aria-label={label}
        className="absolute inset-0 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      />
    </div>
  );
}

function SectionHeading({
  id,
  index,
  title,
}: {
  id: string;
  index: string;
  title: string;
}) {
  return (
    <div className="border-b border-border pb-4">
      <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent">{index}</p>
      <h2 id={id} className="mt-1 text-2xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
    </div>
  );
}
