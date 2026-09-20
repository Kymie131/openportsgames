"use client";

import { useT } from "@/lib/i18n/use-i18n";
import { ExternalLink } from "@/components/ui/external-link";
import { DocHeader, DocList, DocPage, DocParagraph, DocSection } from "./editorial";

const REPO = "https://github.com/Kymie131/openportsgames";

export function LegalContent() {
  const t = useT();

  return (
    <DocPage>
      <DocHeader title={t.legal.title} subtitle={t.legal.subtitle} />
      <DocSection title={t.legal.disclaimerTitle}>
        <DocList items={t.legal.disclaimer} />
      </DocSection>
      <DocSection title={t.legal.takedownTitle}>
        <DocList items={t.legal.takedown} />
      </DocSection>
      <DocSection title={t.legal.privacyTitle}>
        <DocList items={t.legal.privacy} />
      </DocSection>
      <DocSection title={t.legal.contactTitle}>
        <DocParagraph>{t.legal.contactBody}</DocParagraph>
        <ExternalLink href={`${REPO}/issues`}>{REPO}</ExternalLink>
      </DocSection>
    </DocPage>
  );
}