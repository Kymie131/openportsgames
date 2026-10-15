import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { getToolPorts, originalSystemOf } from "@/lib/ports";
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
  const tools = getToolPorts();

  return (
    <section className="py-8">
      <Container className="max-w-3xl">
        <header className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold tracking-tight">{t.title}</h1>
          <p className="text-sm leading-relaxed text-muted">{t.subtitle}</p>
          <p className="text-sm leading-relaxed text-muted">{t.intro}</p>
        </header>

        {tools.length === 0 ? (
          <p className="mt-8 text-sm text-muted">{t.empty}</p>
        ) : (
          <ul className="mt-8 flex flex-col gap-3">
            {tools.map((port) => {
              const system = originalSystemOf(port.id);
              return (
                <li
                  key={port.id}
                  className="flex flex-col gap-1 rounded-xl border border-border bg-surface p-5"
                >
                  <h2 className="text-base font-semibold tracking-tight">
                    <a
                      href={localizePath(locale, `/ports/${port.id}`)}
                      className="text-link transition-colors hover:text-link-hover"
                    >
                      {port.title}
                    </a>
                  </h2>
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
        )}
      </Container>
    </section>
  );
}
