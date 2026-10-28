import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { absoluteUrl, getSiteUrl, SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";
import { ThemeScript } from "@/components/theme/theme-script";
import { LocaleProvider } from "@/components/i18n/locale-provider";
import { RatingSummaryProvider } from "@/components/community/rating-summary-provider";
import { SkipLink } from "@/components/layout/skip-link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { getImageHosts } from "@/lib/ports";
import { isLocale, locales } from "@/lib/i18n/locales";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  referrer: "strict-origin-when-cross-origin",
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    images: [
      {
        url: absoluteUrl("/opengraph-image.png"),
        width: 1200,
        height: 630,
        alt: `${SITE_NAME}: a community catalog of native game ports`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [absoluteUrl("/opengraph-image.png")],
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <html
      lang={lang}
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Preconnect to the hosts that serve port art. */}
        {getImageHosts().map((host) => (
          <link key={host} rel="preconnect" href={`https://${host}`} />
        ))}
      </head>
      <body className="flex min-h-full flex-col">
        <ThemeScript />
        <LocaleProvider locale={lang}>
          <RatingSummaryProvider>
            <SkipLink />
            <SiteHeader />
            <main id="main" className="flex-1">
              {children}
            </main>
            <SiteFooter />
          </RatingSummaryProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
