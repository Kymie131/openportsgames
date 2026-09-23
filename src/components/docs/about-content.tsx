"use client";

import { useT } from "@/lib/i18n/use-i18n";
import { DocHeader, DocList, DocPage, DocSection } from "./editorial";

export function AboutContent() {
  const t = useT();

  return (
    <DocPage>
      <DocHeader title={t.about.title} subtitle={t.about.subtitle} />
      <DocSection title={t.about.missionTitle}>
        <DocList items={t.about.mission} />
      </DocSection>
      <DocSection title={t.about.principlesTitle}>
        <DocList items={t.about.principles} />
      </DocSection>
      <DocSection title={t.about.dataTitle}>
        <DocList items={t.about.data} />
      </DocSection>
      <DocSection title={t.about.teamTitle}>
        <DocList items={t.about.team} />
      </DocSection>
    </DocPage>
  );
}
