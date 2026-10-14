import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { absoluteUrl, getSiteUrl, SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";
import { ThemeScript } from "@/components/theme/theme-script";

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
  title: SITE_NAME,
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
};

export default function LandingLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ThemeScript />
        {children}
      </body>
    </html>
  );
}
