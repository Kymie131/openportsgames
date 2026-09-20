import type { Metadata } from "next";
import { HomeContent } from "@/components/home/home-content";
import { JsonLd } from "@/components/seo/json-ld";
import { pageMeta } from "@/lib/seo";
import { SITE_DESCRIPTION, SITE_NAME, getSiteUrl } from "@/lib/site";

export const metadata: Metadata = pageMeta({ description: SITE_DESCRIPTION, path: "/" });

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: SITE_NAME,
          description: SITE_DESCRIPTION,
          url: getSiteUrl(),
          inLanguage: ["en", "es"],
        }}
      />
      <HomeContent />
    </>
  );
}