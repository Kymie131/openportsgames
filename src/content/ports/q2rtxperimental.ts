import type { Port } from "@/lib/ports/schema";

export const Q2rtxperimental: Port = {
  schema: "port",
  kind: "tool",
  id: "q2rtxperimental",
  title: "Q2RTXPerimental",
  game: "Quake II",
  developers: ["PolyhedronStudio"],
  publisher: "id Software",
  originalYear: 1997,
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
  originalSystems: ["Windows"],
  summary: "Q2RTXPerimental is an experimental fork of NVIDIA's RTX ray-tracing implementation for Quake II, the 1997 shooter by id Software.",
  summaryEs: "Q2RTXPerimental es un fork experimental de la implementación de ray tracing RTX de NVIDIA para Quake II, el shooter de 1997 de id Software.",  downloads: [
    {
      label: "Windows",
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
