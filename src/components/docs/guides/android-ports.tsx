import type { Messages } from "@/lib/i18n/dictionaries";
import { DocSection } from "../editorial";

export function AndroidPortsGuide({ messages }: { messages: Messages }) {
  const t = messages.guides;

  return (
    <>
      <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {t.phonePoints.map((point) => (
          <div key={point.title} className="rounded-lg border border-border bg-surface p-4">
            <dt className="text-sm font-semibold text-foreground">{point.title}</dt>
            <dd className="mt-1 text-sm leading-6 text-muted">{point.body}</dd>
          </div>
        ))}
      </dl>
      <DocSection id="steps" title={t.phoneStepsTitle}>
        <ol className="flex list-decimal flex-col gap-2 pl-5 text-sm leading-6 text-muted marker:font-mono marker:text-accent">
          {t.phoneSteps.map((step) => (
            <li key={step} className="pl-1">
              {step}
            </li>
          ))}
        </ol>
        <p className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-4 text-sm leading-6 text-foreground">
          {t.phoneWarning}
        </p>
      </DocSection>
    </>
  );
}
