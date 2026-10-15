import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { Container } from "@/components/layout/container";
import { getToolPorts, originalSystemOf } from "@/lib/ports";
import { programCategoryLabels, programCategoryOrder, programs } from "@/content/programs";
import { pageMeta } from "@/lib/seo";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { asLocale, localizePath } from "@/lib/i18n/locales";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = asLocale(lang);
  return pageMeta({
    locale,
    title: dictionaries[locale].tools.title,
    description: dictionaries[locale].tools.subtitle,
    path: "/tools",
  });
}

export default async function ToolsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = asLocale(lang);
  const t = dictionaries[locale].tools;
  const tDetail = dictionaries[locale].detail;
  const tPortTypes = dictionaries[locale].portTypes;
  const systemTools = getToolPorts();

  return (
    <section className="py-8">
      <Container className="max-w-4xl">
        <header className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold tracking-tight">{t.title}</h1>
          <p className="text-sm leading-relaxed text-muted">{t.subtitle}</p>
          <p className="text-sm leading-relaxed text-muted">{t.intro}</p>
        </header>

        <div className="mt-10 flex flex-col gap-10">
          {programCategoryOrder.map((category) => {
            const items = programs.filter((program) => program.category === category);
            if (items.length === 0) return null;
            return (
              <section key={category} className="flex flex-col gap-3">
                <h2 className="text-lg font-semibold tracking-tight">
                  {programCategoryLabels[category][locale]}
                </h2>
                <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {items.map((program) => (
                    <li
                      key={program.id}
                      className="flex flex-col rounded-xl border border-border bg-surface p-4"
                    >
                      <div className="flex items-baseline justify-between gap-2">
                        <a
                          href={program.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-link transition-colors hover:text-link-hover"
                        >
                          {program.name}
                          <ExternalLink className="size-3.5 shrink-0" aria-hidden="true" />
                        </a>
                        {program.replaces && (
                          <span className="whitespace-nowrap text-[11px] text-muted">
                            {t.replaces} {program.replaces}
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-muted">
                        {program.description[locale]}
                      </p>
                      {(program.license || program.platforms) && (
                        <p className="mt-2 text-xs text-muted">
                          {program.license && (
                            <span className="font-mono">{program.license}</span>
                          )}
                          {program.license && program.platforms && " · "}
                          {program.platforms?.join(", ")}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>

        {systemTools.length > 0 && (
          <section className="mt-12 flex flex-col gap-3">
            <h2 className="text-lg font-semibold tracking-tight">{t.systemTitle}</h2>
            <ul className="flex flex-col gap-3">
              {systemTools.map((port) => {
                const system = originalSystemOf(port.id);
                return (
                  <li
                    key={port.id}
                    className="flex flex-col gap-1 rounded-xl border border-border bg-surface p-5"
                  >
                    <h3 className="text-base font-semibold tracking-tight">
                      <a
                        href={localizePath(locale, `/ports/${port.id}`)}
                        className="text-link transition-colors hover:text-link-hover"
                      >
                        {port.title}
                      </a>
                    </h3>
                    <p className="text-sm text-muted">{port.game}</p>
                    <p className="text-xs text-muted">
                      {system && (
                        <>
                          {tDetail.originalSystem}: <span>{system}</span>
                          {" · "}
                        </>
                      )}
                      {tDetail.technique}: <span>{tPortTypes[port.portType]}</span>
                    </p>
                  </li>
                );
              })}
            </ul>
          </section>
        )}
      </Container>
    </section>
  );
}
