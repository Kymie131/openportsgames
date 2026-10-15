import { ImageResponse } from "next/og";
import { getPort, getPortIdSet, originalSystemOf } from "@/lib/ports";
import { asLocale, locales } from "@/lib/i18n/locales";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export function generateStaticParams() {
  const ids = [...getPortIdSet()];
  return locales.flatMap((lang) => ids.map((slug) => ({ lang, slug })));
}

const STATUS_LABEL: Record<string, { en: string; es: string }> = {
  stable: { en: "Stable", es: "Estable" },
  beta: { en: "Beta", es: "Beta" },
  alpha: { en: "Alpha", es: "Alpha" },
};

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const locale = asLocale(lang);
  const port = getPort(slug);
  const game = port?.game ?? slug;
  const system = port ? (originalSystemOf(port.id) ?? "") : "";
  const status = port ? (STATUS_LABEL[port.status]?.[locale] ?? "") : "";
  const name = port?.title ?? "OpenPortsGames";

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#0b0d10",
        color: "#f5f7fa",
        padding: "64px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", fontSize: 30, letterSpacing: 6, color: "#7dd3fc" }}>
        OPENPORTSGAMES
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 78, fontWeight: 700, lineHeight: 1.05 }}>{game}</div>
        <div style={{ marginTop: 18, fontSize: 40, color: "#cbd5e1" }}>{name}</div>
      </div>
      <div style={{ display: "flex", gap: 16, fontSize: 32, color: "#94a3b8" }}>
        {system && (
          <span
            style={{
              display: "flex",
              padding: "8px 20px",
              borderRadius: 9999,
              border: "2px solid #334155",
            }}
          >
            {system}
          </span>
        )}
        {status && (
          <span
            style={{
              display: "flex",
              padding: "8px 20px",
              borderRadius: 9999,
              border: "2px solid #334155",
            }}
          >
            {status}
          </span>
        )}
      </div>
    </div>,
    { ...size },
  );
}
