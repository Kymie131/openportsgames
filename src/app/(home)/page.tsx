import type { Metadata } from "next";
import Link from "next/link";
import { getSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "OpenPortsGames",
  alternates: {
    canonical: `${getSiteUrl()}/en/`,
    languages: {
      en: `${getSiteUrl()}/en/`,
      es: `${getSiteUrl()}/es/`,
      "x-default": `${getSiteUrl()}/`,
    },
  },
};

/**
 * Static landing page for the bare domain. It has no server redirects (static
 * export), so it shows visible language links and, when JavaScript is available,
 * forwards to /es/ for Spanish browsers and /en/ otherwise.
 */
const REDIRECT_SCRIPT = `
try {
  var lang = (navigator.language || "en").toLowerCase();
  location.replace(lang.indexOf("es") === 0 ? "/es/" : "/en/");
} catch (e) {}
`;

export default function LandingPage() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: REDIRECT_SCRIPT }} />
      <main className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-16 text-center">
        <p className="text-sm font-medium uppercase tracking-wide text-accent">OpenPortsGames</p>
        <h1 className="max-w-xl text-2xl font-semibold tracking-tight sm:text-3xl">
          Choose your language
        </h1>
        <p className="max-w-md text-sm leading-6 text-muted">
          A community catalog of native game ports. Pick a language to keep browsing:
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/es/"
            lang="es"
            className="rounded-md border border-accent/40 px-5 py-2.5 text-sm font-medium text-accent transition-colors hover:border-accent hover:bg-surface-2 hover:text-accent-hover"
          >
            Español
          </Link>
          <Link
            href="/en/"
            lang="en"
            className="rounded-md border border-accent/40 px-5 py-2.5 text-sm font-medium text-accent transition-colors hover:border-accent hover:bg-surface-2 hover:text-accent-hover"
          >
            English
          </Link>
        </div>
      </main>
    </>
  );
}
