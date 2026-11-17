import type { Port } from "@/lib/ports/schema";

export const Q2tools220: Port = {
  schema: "port",
  id: "q2tools-220",
  title: "Q2tools-220",
  kind: "tool",
  game: "Quake II",
  developers: ["qbism"],
  publisher: "id Software",
  originalYear: 1997,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/qbism/q2tools-220"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Windows"],
  summary:
    "q2tools-220 is a fork of the Quake II map compiler tools with support for the BSP v220 map format, automatic phong shading and soft spotlights. It targets maps for Quake II and its source ports.",
  summaryEs:
    "q2tools-220 es un fork de las herramientas de compilación de mapas de Quake II con soporte para el formato de mapa BSP v220, sombreado phong automático y focos suaves. Está orientado a mapas de Quake II y sus ports de código.",
  downloads: [
    {
      label: "Windows",
      url: "https://github.com/qbism/q2tools-220/releases/download/v05-30-26/Windows-MinGW.7z",
      size: "140 KB",
    },
    {
      label: "Linux",
      url: "https://github.com/qbism/q2tools-220/releases/download/v05-30-26/Linux.7z",
      size: "138 KB",
    },
    {
      label: "macOS",
      url: "https://github.com/qbism/q2tools-220/releases/download/v05-30-26/macOS.7z",
      size: "108 KB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/q2tools-220.svg",
    alt: "q2tools-220 (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "Quake 2 map compiler tools with v220 map support, automatic phong, enhancements, and fixes.",
  notesEs:
    "Herramientas de compilación de mapas de Quake 2 con soporte v220, phong automático, mejoras y correcciones.",
};
