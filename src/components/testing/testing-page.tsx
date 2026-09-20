"use client";

import type { HardwareProfile } from "@/lib/ports/schema";
import { useLocale, useT } from "@/lib/i18n/use-i18n";
import { formatDate } from "@/lib/dates";

export function TestingPage({ hardware }: { hardware: HardwareProfile[] }) {
  const t = useT();
  const locale = useLocale();

  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-1.5">
        <h1 className="text-2xl font-semibold tracking-tight">{t.testing.title}</h1>
        <p className="text-sm text-muted">{t.testing.subtitle}</p>
      </header>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold tracking-tight">{t.testing.methodTitle}</h2>
        <ol className="flex list-decimal flex-col gap-2 pl-5 text-sm leading-relaxed text-muted">
          <li>{t.testing.methodSteps.one}</li>
          <li>{t.testing.methodSteps.two}</li>
          <li>{t.testing.methodSteps.three}</li>
          <li>{t.testing.methodSteps.four}</li>
        </ol>
        <p className="text-sm font-medium text-foreground">{t.testing.noBadge}</p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold tracking-tight">{t.testing.hardwareTitle}</h2>
        <ul className="flex flex-col gap-3">
          {hardware.map((profile) => (
            <li
              key={profile.id}
              className="rounded-lg border border-border bg-surface p-4"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base font-semibold">{profile.label}</h3>
                <span className="text-xs text-muted">
                  {t.testing.updatedAt}: {formatDate(profile.updatedAt, locale)}
                </span>
              </div>
              <dl className="mt-3 grid grid-cols-1 gap-x-6 gap-y-1.5 text-sm text-muted sm:grid-cols-2">
                <Spec label="CPU" value={profile.specs.cpu} />
                <Spec label="GPU" value={profile.specs.gpu} />
                <Spec label="RAM" value={profile.specs.ram} />
                {profile.specs.storage && <Spec label="Storage" value={profile.specs.storage} />}
                <Spec label="OS" value={profile.specs.os} />
                {profile.specs.display && <Spec label="Display" value={profile.specs.display} />}
              </dl>
              <p className="mt-3 text-xs text-muted">
                {t.testing.tester}:{" "}
                <a
                  href={`https://github.com/${profile.tester}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link hover:text-link-hover"
                >
                  {profile.tester}
                </a>
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <dt className="text-xs text-muted">{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}