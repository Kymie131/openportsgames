import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getGuideDef, type GuideSlug } from "@/content/guides";
import { dictionaries, type Messages } from "@/lib/i18n/dictionaries";
import { localizePath, type Locale } from "@/lib/i18n/locales";
import { DocHeader, DocPage } from "../editorial";
import { AndroidPortsGuide } from "./android-ports";
import { FaqGuide } from "./faq";
import { NativePortsGuide } from "./native-ports";
import { Ps5KytyGuide } from "./ps5-kyty";
import { TaigaGuide } from "./taiga";
import { WinlatorGuide } from "./winlator";

function GuideBody({
  slug,
  messages,
  locale,
}: {
  slug: GuideSlug;
  messages: Messages;
  locale: Locale;
}): ReactNode {
  switch (slug) {
    case "native-ports":
      return <NativePortsGuide messages={messages} />;
    case "android-ports":
      return <AndroidPortsGuide messages={messages} />;
    case "winlator":
      return <WinlatorGuide messages={messages} />;
    case "ps5-kyty":
      return <Ps5KytyGuide messages={messages} locale={locale} />;
    case "taiga-achievements":
      return <TaigaGuide messages={messages} />;
    case "faq":
      return <FaqGuide messages={messages} />;
  }
}

export function GuideArticle({ slug, locale }: { slug: GuideSlug; locale: Locale }) {
  const def = getGuideDef(slug);
  if (!def) return null;

  const messages = dictionaries[locale];
  const guides = messages.guides;

  return (
    <div className="flex flex-col gap-6">
      <Link
        href={localizePath(locale, "/guides")}
        className="inline-flex w-fit items-center gap-1 text-sm text-link transition-colors hover:text-link-hover"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        {guides.backToGuides}
      </Link>
      <DocPage>
        <DocHeader title={def.title(guides)} subtitle={def.summary(guides)} />
        <GuideBody slug={slug} messages={messages} locale={locale} />
      </DocPage>
    </div>
  );
}
