"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BookOpen,
  Code,
  FlaskConical,
  HardDrive,
  Heart,
  Monitor,
  Smartphone,
  Zap,
} from "lucide-react";
import { useLocale, useT } from "@/lib/i18n/use-i18n";
import { SUPPORT_PAYPAL_URL } from "@/lib/support";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/layout/container";
import { PortTile } from "@/components/catalog/port-tile";
import type { TestStatus } from "@/components/catalog/test-badge";
import type { Port } from "@/lib/ports/schema";

export type FeaturedPort = {
  port: Port;
  testStatus?: TestStatus;
  system?: string;
};

export function HomeContent({
  featured,
  counts,
}: {
  featured: FeaturedPort[];
  counts: { ports: number; android: number };
}) {
  const t = useT();
  const locale = useLocale();
  const toNumber = (value: number) => new Intl.NumberFormat(locale).format(value);

  return (
    <Container className="py-14 sm:py-20">
      {/* Hero */}
      <section aria-labelledby="home-hero" className="space-y-12">
        <div className="max-w-2xl space-y-6">
          <Badge tone="accent">{t.home.eyebrow}</Badge>
          <div className="space-y-4">
            <h1
              id="home-hero"
              className="text-gradient text-4xl font-bold tracking-tight sm:text-5xl"
            >
              OpenPortsGames
            </h1>
            <p className="max-w-2xl text-pretty text-base leading-7 text-muted sm:text-lg">
              {t.home.lead}
            </p>
          </div>
          <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
            <Button asChild variant="secondary" size="lg">
              <Link href="/ports">{t.home.browseCatalog}</Link>
            </Button>
            <Button asChild size="lg">
              <a
                href={SUPPORT_PAYPAL_URL || "/support"}
                target={SUPPORT_PAYPAL_URL ? "_blank" : undefined}
                rel={SUPPORT_PAYPAL_URL ? "noopener noreferrer" : undefined}
              >
                <Heart className="size-4" aria-hidden="true" />
                {t.support.donate}
              </a>
            </Button>
          </div>
        </div>

        <dl className="grid max-w-2xl grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
          <div className="bg-surface px-5 py-4">
            <dt className="text-2xl font-semibold tracking-tight text-foreground">
              {toNumber(counts.ports)}
            </dt>
            <dd className="mt-0.5 text-sm text-muted">{t.home.statsPorts(counts.ports)}</dd>
          </div>
          <div className="bg-surface px-5 py-4">
            <dt className="text-2xl font-semibold tracking-tight text-foreground">
              {toNumber(counts.android)}
            </dt>
            <dd className="mt-0.5 text-sm text-muted">{t.home.statsAndroid(counts.android)}</dd>
          </div>
          <div className="bg-surface px-5 py-4">
            <dt className="text-2xl font-semibold tracking-tight text-foreground" aria-hidden="true">
              100%
            </dt>
            <dd className="mt-0.5 text-sm text-muted">{t.home.statsSources}</dd>
          </div>
        </dl>
      </section>

      {featured.length > 0 && (
        <section className="mt-14 sm:mt-24" aria-labelledby="featured-heading">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
            <div className="space-y-1">
              <h2
                id="featured-heading"
                className="text-2xl font-semibold tracking-tight text-foreground"
              >
                {t.home.featuredTitle}
              </h2>
              <p className="max-w-xl text-sm leading-6 text-muted">{t.home.featuredSubtitle}</p>
            </div>
            <Button asChild variant="ghost" size="sm" className="group">
              <Link href="/ports">
                {t.home.viewAll}
                <ArrowRight
                  className="size-3.5 transition-transform duration-150 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </Button>
          </div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map(({ port, testStatus, system }) => (
              <li key={port.id}>
                <PortTile port={port} testStatus={testStatus} system={system} className="h-full" />
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Explore */}
      <section className="mt-14 sm:mt-24" aria-labelledby="explore-heading">
        <SectionHeading
          id="explore-heading"
          title={t.home.exploreTitle}
          subtitle={t.home.exploreSubtitle}
        />
        <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <ExploreCard href="/pc" icon={Monitor} title={t.home.explorePC} description={t.home.explorePCDesc} />
          <ExploreCard
            href="/android"
            icon={Smartphone}
            title={t.home.exploreAndroid}
            description={t.home.exploreAndroidDesc}
          />
          <ExploreCard
            href="/guides"
            icon={BookOpen}
            title={t.home.exploreGuides}
            description={t.home.exploreGuidesDesc}
          />
          <ExploreCard
            href="/testing"
            icon={FlaskConical}
            title={t.home.exploreTesting}
            description={t.home.exploreTestingDesc}
          />
        </ul>
      </section>

      {/* Principles */}
      <section className="mt-14 sm:mt-24" aria-labelledby="principles-heading">
        <SectionHeading
          id="principles-heading"
          title={t.home.principlesTitle}
          subtitle={t.home.principlesSubtitle}
        />
        <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <PrincipleCard icon={Zap} title={t.home.principleNative} description={t.home.principleNativeDesc} />
          <PrincipleCard icon={Code} title={t.home.principleOpen} description={t.home.principleOpenDesc} />
          <PrincipleCard icon={HardDrive} title={t.home.principleOwn} description={t.home.principleOwnDesc} />
        </ul>
      </section>

      {/* CTA */}
      <section className="mt-14 sm:mt-24" aria-labelledby="cta-heading">
        <div className="rounded-lg border border-border bg-surface px-6 py-12 text-center sm:px-12">
          <h2 id="cta-heading" className="text-2xl font-semibold tracking-tight text-foreground">
            {t.home.ctaTitle}
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-muted">{t.home.ctaDesc}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
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

function SectionHeading({
  id,
  title,
  subtitle,
}: {
  id: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="max-w-2xl space-y-1">
      <h2 id={id} className="text-2xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      <p className="text-sm leading-6 text-muted">{subtitle}</p>
    </div>
  );
}

function ExploreCard({
  href,
  icon: Icon,
  title,
  description,
}: {
  href: string;
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <li>
      <Link
        href={href}
        className="group flex h-full flex-col gap-3 rounded-lg border border-border bg-surface p-5 transition-[border-color,background-color] duration-150 hover:border-accent-hover hover:bg-surface-2"
      >
        <span className="flex size-10 items-center justify-center rounded-md border border-border bg-surface-2 text-accent-2">
          <Icon className="size-5" aria-hidden="true" />
        </span>
        <span className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
          {title}
          <ArrowRight
            className="size-3.5 text-muted transition-transform duration-150 group-hover:translate-x-0.5 group-hover:text-link"
            aria-hidden="true"
          />
        </span>
        <span className="text-sm leading-6 text-muted">{description}</span>
      </Link>
    </li>
  );
}

function PrincipleCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <li>
      <div className="flex h-full flex-col gap-3 rounded-lg border border-border bg-surface p-5">
        <span className="flex size-10 items-center justify-center rounded-md border border-border bg-surface-2 text-accent-3">
          <Icon className="size-5" aria-hidden="true" />
        </span>
        <h3 className="text-sm font-semibold text-foreground">{title}</h3>
        <p className="text-sm leading-6 text-muted">{description}</p>
      </div>
    </li>
  );
}