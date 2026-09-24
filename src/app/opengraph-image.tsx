import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "OpenPortsGames — a curated catalog of native game ports";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 24,
        backgroundColor: "#0b0f0d",
        color: "#dfe9e1",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <span
          style={{
            display: "flex",
            width: 28,
            height: 28,
            borderRadius: 6,
            backgroundColor: "#3fde8d",
          }}
        />
        <span style={{ fontSize: 64, fontWeight: 700, letterSpacing: "-0.02em" }}>
          OpenPortsGames
        </span>
      </div>
      <span style={{ fontSize: 26, color: "#93a89b" }}>{alt}</span>
    </div>,
    size,
  );
}
