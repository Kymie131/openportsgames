import type { Metadata } from "next";
import { CatalogSection } from "@/components/catalog/catalog-section";
import { pageMeta } from "@/lib/seo";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { asLocale } from "@/lib/i18n/locales";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = asLocale(lang);
  return pageMeta({
    locale,
    title: dictionaries[locale].catalog.title,
    description: dictionaries[locale].catalog.subtitle,
    path: "/ports",
  });
}

export default function PortsPage() {
  return <CatalogSection scope="all" page={1} basePath="/ports" />;
}
