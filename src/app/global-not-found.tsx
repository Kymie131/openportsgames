import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Page not found · OpenPortsGames",
  description: "The page you are looking for does not exist.",
  robots: { index: false, follow: true },
};

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-6 text-center text-foreground">
        <p className="text-sm font-medium uppercase tracking-wide text-accent">404</p>
        <h1 className="text-2xl font-semibold tracking-tight">Page not found</h1>
        <p className="max-w-md text-sm leading-6 text-muted">
          This address may have changed or the link may be wrong. Choose a language to keep
          browsing the catalog:
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/es/"
            lang="es"
            className="rounded-md border border-accent/40 px-4 py-2 text-sm text-accent transition-colors hover:border-accent hover:text-accent-hover"
          >
            Español
          </Link>
          <Link
            href="/en/"
            lang="en"
            className="rounded-md border border-accent/40 px-4 py-2 text-sm text-accent transition-colors hover:border-accent hover:text-accent-hover"
          >
            English
          </Link>
        </div>
      </body>
    </html>
  );
}
