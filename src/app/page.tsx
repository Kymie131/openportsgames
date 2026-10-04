import type { Metadata } from "next";
import { HomeContent } from "@/components/home/home-content";
import { JsonLd } from "@/components/seo/json-ld";
import {
  getAndroidPortCount,
  getLatestPorts,
  getPort,
  getPortCount,
  getTestStatuses,
  originalSystemOf,
} from "@/lib/ports";
import type { Port } from "@/lib/ports/schema";
import { pageMeta } from "@/lib/seo";
import { SITE_DESCRIPTION, SITE_NAME, getSiteUrl } from "@/lib/site";

const FEATURED_SLUGS = [
  "ship-of-harkinian",
  "open-lara",
  "minish-cap",
  "dk64-recompiled",
  "metroid-prime-hunters-recompiled",
  "triaevum",
];

export const metadata: Metadata = pageMeta({ description: SITE_DESCRIPTION, path: "/" });

export default function Home() {
  const testStatuses = getTestStatuses();
  const withMeta = (port: Port) => ({
    port,
    testStatus: testStatuses[port.id],
    system: originalSystemOf(port.id),
  });

  const latest = getLatestPorts(6).map(withMeta);

  const featured = FEATURED_SLUGS.map((id) => getPort(id))
    .filter((port): port is Port => port !== undefined)
    .map(withMeta);

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
      <HomeContent
        latest={latest}
        featured={featured}
        counts={{ ports: getPortCount(), android: getAndroidPortCount() }}
      />
    </>
  );
}
