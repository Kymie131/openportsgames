"use client";

import { useT } from "@/lib/i18n/use-i18n";
import { ExternalLink } from "@/components/ui/external-link";
import { DocHeader, DocList, DocPage, DocParagraph, DocSection } from "./editorial";

const REPO = "https://github.com/Kymie131/openportsgames";

export function SubmitContent() {
  const t = useT();

  return (
    <DocPage>
      <DocHeader title={t.submit.title} subtitle={t.submit.subtitle} />
      <DocSection title={t.submit.proposeTitle}>
        <DocParagraph>{t.submit.proposeIntro}</DocParagraph>
        <DocSectionText title={t.submit.stepsTitle}>
          <DocList items={t.submit.series} />
        </DocSectionText>
      </DocSection>
      <DocSection title={t.submit.templatesTitle}>
        <div className="flex flex-col gap-3 sm:flex-row">
          <TemplateCard
            label={t.submit.portTemplateLabel}
            description={t.submit.portTemplateDesc}
            href={`${REPO}/issues/new?template=port-proposal.yml`}
            cta={t.submit.openTemplate}
          />
          <TemplateCard
            label={t.submit.testTemplateLabel}
            description={t.submit.testTemplateDesc}
            href={`${REPO}/issues/new?template=test-report.yml`}
            cta={t.submit.openTemplate}
          />
        </div>
      </DocSection>
      <DocSection title={t.submit.criteriaTitle}>
        <DocList items={t.submit.criteria} />
      </DocSection>
      <DocSection title={t.submit.reviewTitle}>
        <DocList items={t.submit.review} />
      </DocSection>
    </DocPage>
  );
}

function DocSectionText({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium text-foreground">{title}</h3>
      {children}
    </div>
  );
}

function TemplateCard({
  label,
  description,
  href,
  cta,
}: {
  label: string;
  description: string;
  href: string;
  cta: string;
}) {
  return (
    <div className="flex flex-1 flex-col gap-2 rounded-lg border border-border bg-surface p-4">
      <h3 className="text-sm font-semibold text-foreground">{label}</h3>
      <p className="flex-1 text-sm leading-6 text-muted">{description}</p>
      <ExternalLink href={href}>{cta}</ExternalLink>
    </div>
  );
}