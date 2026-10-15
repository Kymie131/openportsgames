import type { Metadata } from "next";
import { CatalogSection } from "@/components/catalog/catalog-section";
import { getPorts } from "@/lib/ports";
import { catalogPageCount } from "@/lib/ports/catalog";
import { pageMeta } from "@/lib/seo";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { asLocale } from "@/lib/i18n/locales";

const TITLE = { en: "PC ports", es: "Ports para PC" } as const;

export function generateStaticParams() {
  const count = catalogPageCount(getPorts(), "pc");
  return Array.from({ length: Math.max(0, count - 1) }, (_, index) => ({
    page: String(index + 2),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; page: string }>;
}): Promise<Metadata> {
  const { lang, page } = await params;
  const locale = asLocale(lang);
  return pageMeta({
    locale,
    title: TITLE[locale],
    description: dictionaries[locale].catalog.subtitlePc,
    path: `/pc/page/${page}`,
  });
}

export default async function PcPaginatedPage({ params }: { params: Promise<{ page: string }> }) {
  const { page } = await params;
  return <CatalogSection scope="pc" page={Number(page)} basePath="/pc" />;
}
