"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CircleAlert,
  CircleCheck,
  ExternalLink,
  FileText,
  Globe,
  MessageCircle,
} from "lucide-react";
import type { HardwareProfile, Port, TestRecord } from "@/lib/ports/schema";
import type { TestStatus } from "@/components/catalog/test-badge";
import { TestBadge } from "@/components/catalog/test-badge";
import { PlatformMark } from "@/components/platforms/platform-mark";
import { SystemMark } from "@/components/platforms/system-mark";
import { consoleLogoForSystem } from "@/content/ports/console-logos";
import { formatDate } from "@/lib/dates";
import { assetPath } from "@/lib/utils";
import { useLocale, useT } from "@/lib/i18n/use-i18n";

const STATUS_TONE: Record<Port["status"], string> = {
  stable: "bg-[color-mix(in_oklab,var(--ok)_15%,transparent)] text-ok",
  beta: "bg-[color-mix(in_oklab,var(--warning)_15%,transparent)] text-warning",
  alpha: "bg-[color-mix(in_oklab,var(--danger)_15%,transparent)] text-danger",
};

function reportUrl(port: Port): string {
  const title = encodeURIComponent(`Broken link or wrong data: ${port.title}`);
  const body = encodeURIComponent(
    [
      "## Problem",
      "",
      "- Port: `" + port.id + "`",
      "- Current version: " + (port.release.version ?? "rolling builds"),
      "- Page: `/ports/" + port.id + "`",
      "",
      "What is wrong?",
    ].join("\n"),
  );
  return `https://github.com/Kymie131/openportsgames/issues/new?title=${title}&body=${body}`;
}

export function PortDetail({
  port,
  tests,
  hardwareById,
  originalSystem,
  testStatus,
}: {
  port: Port;
  tests: TestRecord[];
  hardwareById: Record<string, HardwareProfile>;
  originalSystem: string;
  testStatus?: TestStatus;
}) {
  const t = useT();
  const locale = useLocale();
  const needsOriginalAssets = (port.notes ?? "").toLowerCase().includes("requires");

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <Link
          href="/ports"
          className="inline-flex items-center gap-1 text-sm text-link transition-colors hover:text-link-hover"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          {t.detail.backToCatalog}
        </Link>

        <header className="flex flex-col gap-3">
          <div className="flex flex-col gap-1.5">
            <p className="text-sm text-muted">{port.game}</p>
            <h1 className="text-2xl font-semibold tracking-tight">{port.title}</h1>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2.5 text-muted" aria-hidden="true">
              {port.platforms.map((platform) => (
                <PlatformMark key={platform} platform={platform} />
              ))}
            </div>
            <TestBadge status={testStatus} />
            <span
              className={STATUS_TONE[port.status] + " rounded-full px-2 py-0.5 text-xs font-medium"}
            >
              {t.catalog[statusKey(port.status)]}
            </span>
          </div>
        </header>
      </div>

      {port.screenshots && port.screenshots.length > 0 ? (
        <PortGallery screenshots={port.screenshots} originalSystem={originalSystem} />
      ) : (
        <figure className="relative flex aspect-video items-center justify-center overflow-hidden rounded-lg border border-border bg-surface-2">
          <span className="text-6xl font-semibold tracking-tight text-muted" aria-hidden="true">
            {port.game.charAt(0)}
          </span>
          <ConsoleBadge system={originalSystem} />
        </figure>
      )}

      <dl className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col gap-0.5">
          <dt className="text-xs text-muted">{t.detail.originalSystem}</dt>
          <dd className="flex items-center gap-1.5 text-sm">
            <SystemMark system={originalSystem} />
            <span>{originalSystem}</span>
          </dd>
        </div>
        <Row label={t.detail.technique} value={t.portTypes[port.portType]} />
        <Row
          label={t.detail.license}
          value={
            port.license.note ? `${port.license.spdx} · ${port.license.note}` : port.license.spdx
          }
        />
        <Row label={t.detail.version} value={port.release.version ?? "—"} />
        <Row
          label={t.detail.date}
          value={port.release.date ? formatDate(port.release.date, locale) : "—"}
        />
      </dl>

      {port.notes && (
        <section className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold tracking-tight">{t.detail.about}</h2>
          <p className="text-sm leading-relaxed text-muted">{port.notes}</p>
          {needsOriginalAssets && <p className="text-sm text-muted">{t.detail.dependencies}</p>}
        </section>
      )}

      {port.features && port.features.length > 0 && (
        <section className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold tracking-tight">{t.detail.features}</h2>
          <ul className="flex list-disc flex-col gap-1.5 pl-5 text-sm text-muted">
            {port.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>
      )}

      {port.installGuide && (
        <section className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold tracking-tight">
            {port.installGuide.title ?? t.detail.installTitle}
          </h2>
          <ol className="flex list-decimal flex-col gap-1.5 pl-5 text-sm leading-relaxed text-muted">
            {port.installGuide.steps.map((step, index) => (
              <li key={index}>
                {locale === "es" ? (port.installGuide?.stepsEs?.[index] ?? step) : step}
              </li>
            ))}
          </ol>
        </section>
      )}

      {port.requirements && (port.requirements.minimum || port.requirements.recommended) && (
        <section className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold tracking-tight">{t.detail.requirements}</h2>
          <dl className="flex flex-col gap-2 text-sm text-muted">
            {port.requirements.minimum && (
              <Row label={t.detail.minimum} value={port.requirements.minimum} />
            )}
            {port.requirements.recommended && (
              <Row label={t.detail.recommended} value={port.requirements.recommended} />
            )}
          </dl>
        </section>
      )}

      {port.screenshots && port.screenshots.length > 0 && (
        <section className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold tracking-tight">{t.detail.screenshots}</h2>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {port.screenshots.map((shot) => (
              <li key={shot.src}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={shot.src}
                  alt={shot.alt}
                  className="aspect-video w-full rounded-lg border border-border object-cover"
                  loading="lazy"
                />
                <p className="mt-1 text-xs text-muted">{shot.credit}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold tracking-tight">{t.detail.whereToGet}</h2>
        <ul className="flex flex-col gap-2 text-sm">
          {port.sources.map((source) => (
            <li key={source}>
              <a
                href={source}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-link transition-colors hover:text-link-hover"
              >
                <ExternalLink className="size-4" aria-hidden="true" />
                {t.detail.officialSource}
              </a>
            </li>
          ))}
          {port.website && (
            <li>
              <a
                href={port.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-link transition-colors hover:text-link-hover"
              >
                <Globe className="size-4" aria-hidden="true" />
                {t.detail.website}
              </a>
            </li>
          )}
          {port.discord && (
            <li>
              <a
                href={port.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-link transition-colors hover:text-link-hover"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                {t.detail.discord}
              </a>
            </li>
          )}
          {port.docs && (
            <li>
              <a
                href={port.docs}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-link transition-colors hover:text-link-hover"
              >
                <FileText className="size-4" aria-hidden="true" />
                {t.detail.documentation}
              </a>
            </li>
          )}
        </ul>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold tracking-tight">{t.detail.tests}</h2>
        {tests.length === 0 ? (
          <p className="text-sm text-muted">{t.detail.noTests}</p>
        ) : (
          <ul className="flex flex-col gap-3">
            {tests.map((test) => {
              const stale = port.release.version !== null && test.version !== port.release.version;
              const profile = hardwareById[test.hardwareId];
              return (
                <li
                  key={test.id}
                  className={
                    stale
                      ? "rounded-lg border border-border bg-surface-2 p-4"
                      : "rounded-lg border border-border bg-surface p-4"
                  }
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      {test.result === "pass" ? (
                        <CircleCheck className="size-4 text-ok" aria-hidden="true" />
                      ) : (
                        <CircleAlert className="size-4 text-danger" aria-hidden="true" />
                      )}
                      <span className="text-sm font-medium">
                        {t.detail.result} · {t.detail[resultKey(test.result)]}
                      </span>
                      {stale && <span className="text-xs text-muted">{t.detail.testStale}</span>}
                    </div>
                    <span className="text-sm">{test.version}</span>
                  </div>
                  <dl className="mt-2 grid grid-cols-1 gap-x-6 gap-y-1 text-sm text-muted sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                      <dt className="text-xs">{t.detail.tester}</dt>
                      <dd>
                        <a
                          href={`https://github.com/${test.testerId}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-link hover:text-link-hover"
                        >
                          {test.testerId}
                        </a>
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs">{t.detail.hardware}</dt>
                      <dd>{profile?.label ?? test.hardwareId}</dd>
                    </div>
                    <div>
                      <dt className="text-xs">{t.detail.date}</dt>
                      <dd>{formatDate(test.date, locale)}</dd>
                    </div>
                    <div>
                      <dt className="text-xs">{t.detail.version}</dt>
                      <dd>{test.version}</dd>
                    </div>
                  </dl>
                  {test.notes && <p className="mt-2 text-sm text-muted">{test.notes}</p>}
                </li>
              );
            })}
          </ul>
        )}
        <div>
          <a
            href={reportUrl(port)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-2 text-sm text-muted transition-colors hover:border-accent-hover hover:text-foreground"
          >
            <CircleAlert className="size-4" aria-hidden="true" />
            {t.detail.report}
          </a>
        </div>
      </section>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <dt className="text-xs text-muted">{label}</dt>
      <dd className="text-sm">{value}</dd>
    </div>
  );
}

function statusKey(status: Port["status"]): "statusStable" | "statusBeta" | "statusAlpha" {
  const map: Record<Port["status"], "statusStable" | "statusBeta" | "statusAlpha"> = {
    stable: "statusStable",
    beta: "statusBeta",
    alpha: "statusAlpha",
  };
  return map[status];
}

function resultKey(result: TestRecord["result"]): "resultPass" | "resultFail" {
  return result === "pass" ? "resultPass" : "resultFail";
}

function ConsoleBadge({ system }: { system: string }) {
  const logo = consoleLogoForSystem(system);
  if (!logo) return null;
  return (
    <span
      className="absolute bottom-3 right-3 rounded-lg bg-white/80 px-2.5 py-2 shadow-sm backdrop-blur-sm"
      role="img"
      aria-label={system}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={logo} alt="" className="h-8 w-auto object-contain" />
    </span>
  );
}

function PortGallery({
  screenshots,
  originalSystem,
}: {
  screenshots: NonNullable<Port["screenshots"]>;
  originalSystem: string;
}) {
  const t = useT();
  const [index, setIndex] = useState(0);
  const active = screenshots[Math.min(index, screenshots.length - 1)];

  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-lg font-semibold tracking-tight">{t.detail.screenshots}</h2>
      <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-lg border border-border bg-surface-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={assetPath(active.src)}
          alt={active.alt}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <ConsoleBadge system={originalSystem} />
      </div>
      {screenshots.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1" role="group" aria-label={originalSystem}>
          {screenshots.map((shot, i) => (
            <button
              key={shot.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-pressed={i === index}
              aria-label={shot.alt}
              className={
                "shrink-0 overflow-hidden rounded-md border-2 transition-colors duration-150 " +
                (i === index ? "border-accent" : "border-transparent hover:border-accent-hover")
              }
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={assetPath(shot.src)}
                alt=""
                className="h-16 w-28 object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
