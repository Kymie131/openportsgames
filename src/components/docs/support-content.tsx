"use client";

import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useT } from "@/lib/i18n/use-i18n";
import { SUPPORT_PAYPAL_URL } from "@/lib/support";
import { DocHeader, DocList, DocPage, DocParagraph, DocSection } from "./editorial";

export function SupportContent() {
  const t = useT();

  return (
    <DocPage>
      <DocHeader title={t.support.title} subtitle={t.support.subtitle} />
      <DocSection title={t.support.donationTitle}>
        <DocParagraph>{t.support.donationIntro}</DocParagraph>
        {SUPPORT_PAYPAL_URL ? (
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <a href={SUPPORT_PAYPAL_URL} target="_blank" rel="noopener noreferrer">
                <Heart className="size-4" aria-hidden="true" />
                {t.support.donate}
              </a>
            </Button>
          </div>
        ) : (
          <DocParagraph>{t.support.donationSetup}</DocParagraph>
        )}
        <p className="text-sm font-medium text-foreground">{t.support.noPressure}</p>
      </DocSection>
      <DocSection title={t.support.otherTitle}>
        <DocList items={t.support.series} />
      </DocSection>
    </DocPage>
  );
}
