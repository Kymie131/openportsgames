import type { Messages } from "@/lib/i18n/dictionaries";
import { DocList, DocSection } from "../editorial";

export function TaigaGuide({ messages }: { messages: Messages }) {
  const t = messages.guides;

  return (
    <>
      <a
        href="https://github.com/GabrielTaiga/Taiga-Launcher-for-Steam/releases/latest"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-fit items-center gap-1.5 rounded-md bg-accent px-3 py-2 text-sm font-medium text-accent-contrast transition-colors hover:bg-accent-hover"
      >
        {t.taigaDownload} →
      </a>
      <DocList items={t.taigaPoints} />
      <DocSection id="compatibility" title={t.taigaCompatTitle}>
        <div className="rounded-lg border border-border bg-surface p-4">
          <h3 className="text-sm font-semibold text-foreground">{t.taigaCompatYesTitle}</h3>
          <DocList items={t.taigaCompatYes} />
        </div>
        <div className="rounded-lg border border-border bg-surface p-4">
          <h3 className="text-sm font-semibold text-foreground">{t.taigaCompatNoTitle}</h3>
          <DocList items={t.taigaCompatNo} />
        </div>
      </DocSection>
      <DocSection id="setup" title={t.taigaStepsTitle}>
        <ol className="flex list-decimal flex-col gap-2 pl-5 text-sm leading-6 text-muted marker:font-mono marker:text-accent">
          {t.taigaSteps.map((step) => (
            <li key={step} className="pl-1">
              {step}
            </li>
          ))}
        </ol>
        <p className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-4 text-sm leading-6 text-foreground">
          {t.taigaWarning}
        </p>
        <a
          href="https://github.com/GabrielTaiga/Taiga-Launcher-for-Steam"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-accent hover:underline"
        >
          {t.taigaSource} →
        </a>
      </DocSection>
    </>
  );
}
