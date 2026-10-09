"use client";

import { useT } from "@/lib/i18n/use-i18n";
import { DocCredits, DocHeader, DocList, DocPage, DocSection } from "./editorial";

export function AboutContent() {
  const t = useT();

  return (
    <DocPage>
      <DocHeader title={t.about.title} subtitle={t.about.subtitle} />
      <DocList items={t.about.mission} />
      <DocSection title={t.about.principlesTitle}>
        <DocList items={t.about.principles} />
      </DocSection>
      <DocSection title={t.about.teamTitle}>
        <DocList items={t.about.team} />
      </DocSection>
      <DocSection title={t.about.creditsTitle}>
        <DocCredits items={t.about.credits} />
      </DocSection>
    </DocPage>
  );
}
