import type { Metadata } from "next";
import { CatalogSection } from "@/components/catalog/catalog-section";
import { pageMeta } from "@/lib/seo";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { asLocale } from "@/lib/i18n/locales";

const DESCRIPTION = {
  en: "Native PC ports of console games: decompilations, recompilations and engine rewrites for Windows, Linux and macOS. Official sources only.",
  es: "Ports nativos para PC de juegos de consola: decompilaciones, recompilaciones y reimplementaciones para Windows, Linux y macOS. Solo fuentes oficiales.",
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = asLocale(lang);
  return pageMeta({
    locale,
    title: dictionaries[locale].catalog.titlePc,
    description: DESCRIPTION[locale],
    path: "/pc",
  });
}

export default function PcPage() {
  return <CatalogSection scope="pc" page={1} basePath="/pc" />;
}
