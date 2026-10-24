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
  release: { version: null, date: null },
  sources: ["https://github.com/PolyhedronStudio/Q2RTXPerimental"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  summary: "Q2RTXPerimental is a shooter game, released in 2000.",
  summaryEs: "Q2RTXPerimental es un videojuego de disparos, lanzado en 2000.",
  summaryGenerated: true,
  cover: {
    src: "https://openportsgames.com/covers/generated/q2rtxperimental.svg",
    alt: "Q2RTXPerimental (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "My 'Experimental' fork of NVIDIA’s implementation of RTX ray-tracing in Quake II.",
  notesEs:
    "Mi bifurcación experimental de la implementación de ray tracing RTX de NVIDIA en Quake II.",
};
