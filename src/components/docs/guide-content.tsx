"use client";

import { useT } from "@/lib/i18n/use-i18n";
import { DocHeader, DocList, DocPage, DocParagraph, DocSection } from "./editorial";

const TECHNIQUES = ["decompilation", "recompilation", "reimplementation", "source-port"] as const;

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
