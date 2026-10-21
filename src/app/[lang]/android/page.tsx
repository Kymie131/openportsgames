import type { Metadata } from "next";
import { CatalogSection } from "@/components/catalog/catalog-section";
import { pageMeta } from "@/lib/seo";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { asLocale } from "@/lib/i18n/locales";

const DESCRIPTION = {
  en: "Native Android ports and APK builds of PC and console games: decompilations, recompilations and engine rewrites. No emulators, no game files.",
  es: "Ports nativos para Android y builds APK de juegos de PC y consola: decompilaciones, recompilaciones y reimplementaciones. Sin emuladores ni archivos de juego.",
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
    title: dictionaries[locale].catalog.titleAndroid,
    description: DESCRIPTION[locale],
    path: "/android",
  });
}

export default function AndroidPage() {
  return <CatalogSection scope="android" page={1} basePath="/android" />;
}
