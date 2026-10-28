import type { Messages } from "@/lib/i18n/dictionaries";
import { DocList, DocParagraph, DocSection } from "../editorial";

const TECHNIQUES = [
  "decompilation",
  "recompilation",
  "reimplementation",
  "source-port",
  "runtime-port",
] as const;

export function NativePortsGuide({ messages }: { messages: Messages }) {
  const t = messages.guides;

  return (
    <>
      {t.what.slice(1).map((paragraph) => (
        <DocParagraph key={paragraph}>{paragraph}</DocParagraph>
      ))}
      <DocSection id="techniques" title={t.techniquesTitle}>
        <DocParagraph>{t.techniquesIntro}</DocParagraph>
        <dl className="flex flex-col gap-3">
          {TECHNIQUES.map((technique) => (
            <div key={technique} className="rounded-lg border border-border bg-surface p-4">
              <dt className="text-sm font-semibold text-foreground">
                {messages.portTypes[technique]}
              </dt>
              <dd className="mt-1 text-sm leading-6 text-muted">
                {t.techniques[technique]}
              </dd>
            </div>
          ))}
        </dl>
        <DocParagraph>{t.techniquesNote}</DocParagraph>
      </DocSection>
      <DocSection id="legal" title={t.copyTitle}>
        <DocList items={t.copy} />
      </DocSection>
    </>
  );
}
