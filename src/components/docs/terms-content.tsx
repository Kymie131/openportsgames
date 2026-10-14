"use client";

import { useT } from "@/lib/i18n/use-i18n";
import { CONTACT_EMAIL } from "@/lib/site";
import { DocHeader, DocList, DocPage, DocParagraph, DocSection } from "./editorial";

// DRAFT: these terms of use are a working draft and need human/legal review
// before they are considered final. See the dictionaries for the editable copy.
export function TermsContent() {
  const t = useT();

  return (
    <DocPage>
      <DocHeader title={t.terms.title} subtitle={t.terms.subtitle} />
      <DocSection title={t.terms.rulesTitle}>
        <DocList items={t.terms.rules} />
      </DocSection>
      <DocSection title={t.terms.moderationTitle}>
        <DocList items={t.terms.moderation} />
      </DocSection>
      <DocSection title={t.terms.removalTitle}>
        <DocList items={t.terms.removal} />
      </DocSection>
      <DocSection title={t.terms.warrantyTitle}>
        <DocList items={t.terms.warranty} />
      </DocSection>
      <DocSection title={t.terms.contactTitle}>
        <DocParagraph>{t.terms.contactBody}</DocParagraph>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="w-fit text-sm text-link underline-offset-4 hover:text-link-hover hover:underline"
        >
          {CONTACT_EMAIL}
        </a>
      </DocSection>
      <p className="max-w-2xl text-xs italic text-muted">{t.terms.draftNote}</p>
    </DocPage>
  );
}
