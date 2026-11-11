import type { Port } from "@/lib/ports/schema";

export const Q2rtxperimental: Port = {
  schema: "port",
  id: "q2rtxperimental",
  title: "Q2RTXPerimental",
  game: "Q2RTXPerimental",
  developers: ["PolyhedronStudio"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "0.0.5", date: "2025-03-15" },
  sources: ["https://github.com/PolyhedronStudio/Q2RTXPerimental"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  summary: "Q2RTXPerimental is a shooter game, released in 2000.",
  summaryEs: "Q2RTXPerimental es un videojuego de disparos, lanzado en 2000.",
  summaryGenerated: true,
  downloads: [
    {
      label: "q2rtxp-v0.0.5",
      url: "https://github.com/PolyhedronStudio/Q2RTXPerimental/releases/download/v0.0.5/q2rtxp-v0.0.5.zip",
      size: "1392.2 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/q2rtxperimental.svg",
    alt: "Q2RTXPerimental (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "My 'Experimental' fork of NVIDIA’s implementation of RTX ray-tracing in Quake II.",
  notesEs:
    "Mi bifurcación experimental de la implementación de ray tracing RTX de NVIDIA en Quake II.",
};
