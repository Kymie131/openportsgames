import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { guideDefs } from "@/content/guides";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { localizePath, type Locale } from "@/lib/i18n/locales";
import { DocHeader, DocPage } from "./editorial";

export function GuideContent({ locale }: { locale: Locale }) {
  const guides = dictionaries[locale].guides;

  return (
    <DocPage>
      <DocHeader title={guides.title} subtitle={guides.subtitle} />
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {guideDefs.map((guide) => (
          <li key={guide.slug} id={guide.slug} className="scroll-mt-24">
            <Link
              href={localizePath(locale, `/guides/${guide.slug}`)}
              className="group flex h-full flex-col gap-2 rounded-lg border border-border bg-surface p-5 transition-colors hover:border-accent/60"
            >
              <span className="flex items-start justify-between gap-3">
                <span className="text-sm font-semibold text-foreground">{guide.title(guides)}</span>
                <ArrowRight
                  className="mt-0.5 size-4 shrink-0 text-muted transition-colors group-hover:text-accent"
                  aria-hidden="true"
                />
              </span>
              <span className="text-sm leading-6 text-muted">{guide.summary(guides)}</span>
            </Link>
          </li>
        ))}
      </ul>
    </DocPage>
  );
}
