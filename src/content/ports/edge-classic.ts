import type { Port } from "@/lib/ports/schema";

export const EdgeClassic: Port = {
  schema: "port",
  kind: "tool",
  id: "edge-classic",
  title: "EDGE Classic",
  game: "Doom",
  developers: ["edge-classic"],
  publisher: "id Software",
  originalYear: 1993,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "1.53", date: "2026-07-11" },
  sources: ["https://github.com/edge-classic/EDGE-classic"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["MS-DOS"],
  summary: "EDGE Classic is a cross-platform OpenGL source port of Doom with advanced modding features.",
  summaryEs: "EDGE Classic es un port de código de Doom con OpenGL y multiplataforma, con funciones avanzadas de modding.",  downloads: [
    {
      label: "Linux",
      url: "https://github.com/edge-classic/EDGE-classic/releases/download/1.53/edge-classic-linux.zip",
      size: "16.5 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/edge-classic/EDGE-classic/releases/download/1.53/edge-classic-win64.zip",
      size: "13.7 MB",
    },
    {
      label: "Windows x86",
      url: "https://github.com/edge-classic/EDGE-classic/releases/download/1.53/edge-classic-win32.zip",
      size: "13.0 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/edge-classic.svg",
    alt: "EDGE-classic (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "Cross-Platform OpenGL Doom Source Port with powerful modding features.",
  notesEs:
    "Port de código fuente de Doom con OpenGL y multiplataforma, con potentes funciones de modding.",
};
