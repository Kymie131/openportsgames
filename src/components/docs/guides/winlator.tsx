import type { Messages } from "@/lib/i18n/dictionaries";
import { DocSection } from "../editorial";

export function WinlatorGuide({ messages }: { messages: Messages }) {
  const t = messages.guides;

  return (
    <>
      <p className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-4 text-sm leading-6 text-foreground">
        {t.winlatorWarning}
      </p>
      <DocSection id="setup" title={t.winlatorStepsTitle}>
        <ol className="flex list-decimal flex-col gap-2 pl-5 text-sm leading-6 text-muted marker:font-mono marker:text-accent">
          {t.winlatorSteps.map((step) => (
            <li key={step} className="pl-1">
              {step}
            </li>
          ))}
        </ol>
      </DocSection>
      <DocSection id="examples" title={t.winlatorExamplesTitle}>
        <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {t.winlatorExamples.map((example) => (
            <div key={example.name} className="rounded-lg border border-border bg-surface p-4">
              <dt className="text-sm font-semibold text-foreground">{example.name}</dt>
              <dd className="mt-1 text-sm leading-6 text-muted">{example.body}</dd>
              <a
                href={example.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex text-xs font-medium text-accent hover:underline"
              >
                Steam ↗
              </a>
            </div>
          ))}
        </dl>
        <a
          href="https://github.com/brunodev85/winlator"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex text-sm font-medium text-accent hover:underline"
        >
          {t.winlatorSource} ↗
        </a>
      </DocSection>
    </>
  );
}
