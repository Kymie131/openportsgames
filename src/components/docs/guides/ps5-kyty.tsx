import Link from "next/link";
import type { Messages } from "@/lib/i18n/dictionaries";
import { localizePath, type Locale } from "@/lib/i18n/locales";
import { DocSection } from "../editorial";

export function Ps5KytyGuide({ messages, locale }: { messages: Messages; locale: Locale }) {
  const t = messages.guides;

  return (
    <>
      <p className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-4 text-sm leading-6 text-foreground">
        {t.kytyWarning}
      </p>
      <DocSection id="steps" title={t.phoneStepsTitle}>
        <ol className="flex list-decimal flex-col gap-2 pl-5 text-sm leading-6 text-muted marker:font-mono marker:text-accent">
          {t.kytySteps.map((step) => (
            <li key={step} className="pl-1">
              {step}
            </li>
          ))}
        </ol>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href={localizePath(locale, "/emulators")}
            className="text-sm font-medium text-accent hover:underline"
          >
            {messages.nav.emulators} →
          </Link>
          <a
            href="https://github.com/KytyPS5/KytyPS5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-accent hover:underline"
          >
            {t.kytySource} ↗
          </a>
        </div>
      </DocSection>
    </>
  );
}
