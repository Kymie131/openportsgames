import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { ThemeScript } from "@/components/theme/theme-script";
import { assetPath } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Page not found · OpenPortsGames",
  description: "The page you are looking for does not exist.",
  robots: { index: false, follow: true },
};

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-center px-6 py-12 text-center text-foreground">
        <ThemeScript />
        <main className="flex w-full max-w-lg flex-col items-center gap-6 rounded-2xl border border-border bg-surface/80 px-6 py-10 shadow-xl shadow-black/5 backdrop-blur-sm sm:px-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={assetPath("/logos/brand/openportsgames-transparent.png")}
            alt="OpenPortsGames"
            className="h-8 w-auto"
          />
          <div className="flex flex-col items-center gap-2">
            <p className="font-mono text-sm font-medium tracking-[0.3em] text-accent">404</p>
            <h1 className="text-2xl font-semibold tracking-tight">Page not found</h1>
            <p className="max-w-sm text-sm leading-6 text-muted">
              This address may have changed or the link may be wrong. Choose a language to keep
              browsing the catalog:
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/es/"
              lang="es"
              className="inline-flex h-10 items-center rounded-md bg-accent px-5 text-sm font-medium text-accent-contrast transition-colors hover:bg-accent-hover"
            >
              Español
            </Link>
            <Link
              href="/en/"
              lang="en"
              className="inline-flex h-10 items-center rounded-md border border-border bg-surface-2 px-5 text-sm font-medium text-foreground transition-colors hover:bg-surface"
            >
              English
            </Link>
          </div>
        </main>
        <p className="mt-6 text-xs text-muted">
          OpenPortsGames · native ports, recompilations and decompilations
        </p>
      </body>
    </html>
  );
}
