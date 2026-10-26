"use client";

import { LocalizedLink as Link } from "@/components/i18n/localized-link";
import { useT } from "@/lib/i18n/use-i18n";
import { DocHeader, DocList, DocPage, DocParagraph, DocSection } from "./editorial";

const TECHNIQUES = [
  "decompilation",
  "recompilation",
  "reimplementation",
  "source-port",
  "runtime-port",
] as const;

export function GuideContent() {
  const t = useT();

  return (
    <DocPage>
      <DocHeader title={t.guides.title} subtitle={t.guides.subtitle} />
      <DocSection title={t.guides.whatTitle}>
        <DocList items={t.guides.what} />
      </DocSection>
      <DocSection title={t.guides.techniquesTitle}>
        <DocParagraph>{t.guides.techniquesIntro}</DocParagraph>
        <dl className="flex flex-col gap-3">
          {TECHNIQUES.map((technique) => (
            <div key={technique} className="rounded-lg border border-border bg-surface p-4">
              <dt className="text-sm font-semibold text-foreground">{t.portTypes[technique]}</dt>
              <dd className="mt-1 text-sm leading-6 text-muted">
                {t.guides.techniques[technique]}
              </dd>
            </div>
          ))}
        </dl>
        <DocParagraph>{t.guides.techniquesNote}</DocParagraph>
      </DocSection>
      <DocSection title={t.guides.copyTitle}>
        <DocList items={t.guides.copy} />
      </DocSection>
      <DocSection title={t.guides.phoneTitle}>
        <DocParagraph>{t.guides.phoneIntro}</DocParagraph>
        <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {t.guides.phonePoints.map((point) => (
            <div key={point.title} className="rounded-lg border border-border bg-surface p-4">
              <dt className="text-sm font-semibold text-foreground">{point.title}</dt>
              <dd className="mt-1 text-sm leading-6 text-muted">{point.body}</dd>
            </div>
          ))}
        </dl>
        <h3 className="pt-1 text-sm font-semibold text-foreground">{t.guides.phoneStepsTitle}</h3>
        <ol className="flex list-decimal flex-col gap-2 pl-5 text-sm leading-6 text-muted marker:font-mono marker:text-accent">
          {t.guides.phoneSteps.map((step) => (
            <li key={step} className="pl-1">
              {step}
            </li>
          ))}
        </ol>
        <p className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-4 text-sm leading-6 text-foreground">
          {t.guides.phoneWarning}
        </p>
      </DocSection>

      <DocSection title={t.guides.winlatorTitle}>
        <DocParagraph>{t.guides.winlatorIntro}</DocParagraph>
        <p className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-4 text-sm leading-6 text-foreground">
          {t.guides.winlatorWarning}
        </p>
        <h3 className="pt-1 text-sm font-semibold text-foreground">
          {t.guides.winlatorStepsTitle}
        </h3>
        <ol className="flex list-decimal flex-col gap-2 pl-5 text-sm leading-6 text-muted marker:font-mono marker:text-accent">
          {t.guides.winlatorSteps.map((step) => (
            <li key={step} className="pl-1">
              {step}
            </li>
          ))}
        </ol>
        <h3 className="pt-1 text-sm font-semibold text-foreground">
          {t.guides.winlatorExamplesTitle}
        </h3>
        <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {t.guides.winlatorExamples.map((example) => (
            <div key={example.name} className="rounded-lg border border-border bg-surface p-4">
              <dt className="text-sm font-semibold text-foreground">{example.name}</dt>
              <dd className="mt-1 text-sm leading-6 text-muted">{example.body}</dd>
              <a
                href={example.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex text-xs font-medium text-accent hover:underline"
              >
                Steam ↗
              </a>
            </div>
          ))}
        </dl>
        <a
          href="https://github.com/brunodev85/winlator"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex text-sm font-medium text-accent hover:underline"
        >
          {t.guides.winlatorSource} ↗
        </a>
      </DocSection>

      <DocSection title={t.guides.kytyTitle}>
        <DocParagraph>{t.guides.kytyIntro}</DocParagraph>
        <p className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-4 text-sm leading-6 text-foreground">
          {t.guides.kytyWarning}
        </p>
        <ol className="flex list-decimal flex-col gap-2 pl-5 text-sm leading-6 text-muted marker:font-mono marker:text-accent">
          {t.guides.kytySteps.map((step) => (
            <li key={step} className="pl-1">
              {step}
            </li>
          ))}
        </ol>
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/emulators" className="text-sm font-medium text-accent hover:underline">
            {t.nav.emulators} →
          </Link>
          <a
            href="https://github.com/KytyPS5/KytyPS5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-accent hover:underline"
          >
            {t.guides.kytySource} ↗
          </a>
        </div>
      </DocSection>

      <DocSection title={t.guides.taigaTitle}>
        <DocParagraph>{t.guides.taigaIntro}</DocParagraph>
        <a
          href="https://github.com/GabrielTaiga/Taiga-Launcher-for-Steam/releases/latest"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center gap-1.5 rounded-md bg-accent px-3 py-2 text-sm font-medium text-accent-contrast transition-colors hover:bg-accent-hover"
        >
          {t.guides.taigaDownload} →
        </a>
        <DocList items={t.guides.taigaPoints} />
        <h3 className="pt-1 text-sm font-semibold text-foreground">
          {t.guides.taigaCompatTitle}
        </h3>
        <div className="rounded-lg border border-border bg-surface p-4">
          <h4 className="text-sm font-semibold text-foreground">
            {t.guides.taigaCompatYesTitle}
          </h4>
          <DocList items={t.guides.taigaCompatYes} />
        </div>
        <div className="rounded-lg border border-border bg-surface p-4">
          <h4 className="text-sm font-semibold text-foreground">
            {t.guides.taigaCompatNoTitle}
          </h4>
          <DocList items={t.guides.taigaCompatNo} />
        </div>
        <h3 className="pt-1 text-sm font-semibold text-foreground">{t.guides.taigaStepsTitle}</h3>
        <ol className="flex list-decimal flex-col gap-2 pl-5 text-sm leading-6 text-muted marker:font-mono marker:text-accent">
          {t.guides.taigaSteps.map((step) => (
            <li key={step} className="pl-1">
              {step}
            </li>
          ))}
        </ol>
        <p className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-4 text-sm leading-6 text-foreground">
          {t.guides.taigaWarning}
        </p>
        <a
          href="https://github.com/GabrielTaiga/Taiga-Launcher-for-Steam"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-accent hover:underline"
        >
          {t.guides.taigaSource} →
        </a>
      </DocSection>

      <DocSection title={t.guides.faqTitle}>
        <dl className="flex flex-col gap-4">
          {t.guides.faq.map((item, index) => (
            <div key={index} className="flex flex-col gap-1.5">
              <dt className="text-sm font-medium text-foreground">{item.q}</dt>
              <dd className="text-sm leading-6 text-muted">{item.a}</dd>
            </div>
          ))}
        </dl>
      </DocSection>
    </DocPage>
  );
}
