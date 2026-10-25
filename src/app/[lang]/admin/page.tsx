import type { Metadata } from "next";

import { AdminDashboard } from "@/components/community/admin-dashboard";
import { asLocale } from "@/lib/i18n/locales";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = asLocale(lang);
  return {
    title: locale === "es" ? "Moderación" : "Moderation",
    description:
      locale === "es"
        ? "Herramientas internas de moderación de OpenPortsGames."
        : "Internal moderation tools for OpenPortsGames.",
    robots: { index: false, follow: false },
  };
}

export default function AdminPage() {
  return <AdminDashboard />;
}
