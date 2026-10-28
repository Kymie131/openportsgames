import type { Messages } from "@/lib/i18n/dictionaries";

type GuidesCopy = Messages["guides"];

export const guideSlugs = [
  "native-ports",
  "android-ports",
  "winlator",
  "ps5-kyty",
  "taiga-achievements",
  "faq",
] as const;

export type GuideSlug = (typeof guideSlugs)[number];

export interface GuideDef {
  slug: GuideSlug;
  title: (guides: GuidesCopy) => string;
  summary: (guides: GuidesCopy) => string;
}

export const guideDefs: GuideDef[] = [
  {
    slug: "native-ports",
    title: (guides) => guides.whatTitle,
    summary: (guides) => guides.what[0],
  },
  {
    slug: "android-ports",
    title: (guides) => guides.phoneTitle,
    summary: (guides) => guides.phoneIntro,
  },
  {
    slug: "winlator",
    title: (guides) => guides.winlatorTitle,
    summary: (guides) => guides.winlatorIntro,
  },
  {
    slug: "ps5-kyty",
    title: (guides) => guides.kytyTitle,
    summary: (guides) => guides.kytyIntro,
  },
  {
    slug: "taiga-achievements",
    title: (guides) => guides.taigaTitle,
    summary: (guides) => guides.taigaIntro,
  },
  {
    slug: "faq",
    title: (guides) => guides.faqTitle,
    summary: (guides) => guides.faqIntro,
  },
];

export function getGuideDef(slug: string): GuideDef | undefined {
  return guideDefs.find((guide) => guide.slug === slug);
}
