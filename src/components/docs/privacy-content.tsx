"use client";

import { useT } from "@/lib/i18n/use-i18n";
import { CONTACT_EMAIL } from "@/lib/site";
import { DocHeader, DocList, DocPage, DocParagraph, DocSection } from "./editorial";

// DRAFT: this privacy policy is a working draft and needs human/legal review
// before it is considered final. See the dictionaries for the editable copy.
export function PrivacyContent() {
  const t = useT();

  return (
    <DocPage>
      <DocHeader title={t.privacy.title} subtitle={t.privacy.subtitle} />
      <DocSection title={t.privacy.dataTitle}>
        <DocList items={t.privacy.data} />
      </DocSection>
      <DocSection title={t.privacy.purposeTitle}>
        <DocList items={t.privacy.purpose} />
      </DocSection>
      <DocSection title={t.privacy.cookiesTitle}>
        <DocList items={t.privacy.cookies} />
      </DocSection>
      <DocSection title={t.privacy.thirdPartiesTitle}>
        <DocList items={t.privacy.thirdParties} />
      </DocSection>
      <DocSection title={t.privacy.retentionTitle}>
        <DocList items={t.privacy.retention} />
      </DocSection>
      <DocSection title={t.privacy.rightsTitle}>
        <DocList items={t.privacy.rights} />
      </DocSection>
      <DocSection title={t.privacy.deleteTitle}>
        <DocParagraph>{t.privacy.deleteBody}</DocParagraph>
      </DocSection>
      <DocSection title={t.privacy.contactTitle}>
        <DocParagraph>{t.privacy.contactBody}</DocParagraph>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="w-fit text-sm text-link underline-offset-4 hover:text-link-hover hover:underline"
        >
          {CONTACT_EMAIL}
        </a>
      </DocSection>
      <p className="max-w-2xl text-xs italic text-muted">{t.privacy.draftNote}</p>
    </DocPage>
  );
}
