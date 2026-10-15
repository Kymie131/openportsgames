import type { Metadata } from "next";
import { CatalogSection } from "@/components/catalog/catalog-section";
import { pageMeta } from "@/lib/seo";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { asLocale } from "@/lib/i18n/locales";

const TITLE = { en: "Android ports", es: "Ports para Android" } as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = asLocale(lang);
  return pageMeta({
    locale,
    title: TITLE[locale],
    description: dictionaries[locale].catalog.subtitleAndroid,
    path: "/android",
  });
}

export default function AndroidPage() {
  return <CatalogSection scope="android" page={1} basePath="/android" />;
}
