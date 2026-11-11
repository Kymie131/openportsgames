import type { Port } from "@/lib/ports/schema";

export const Barrett: Port = {
  schema: "port",
  id: "barrett",
  title: "Barrett",
  game: "Barrett",
  developers: ["lunarmeadow"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "1.3-beta", date: "2026-06-14" },
  sources: ["https://github.com/lunarmeadow/barrett"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  summary: "Barrett is a action-adventure game, released in 2000.",
  summaryEs: "Barrett es un videojuego de acci�n y aventura, lanzado en 2000.",
  summaryGenerated: true,
  downloads: [
    {
      label: "macOS",
      url: "https://github.com/lunarmeadow/barrett/releases/download/v1.3-beta/barrett-macOS.zip",
      size: "906 KB",
    },
    {
      label: "Linux",
      url: "https://github.com/lunarmeadow/barrett/releases/download/v1.3-beta/barrett-linux.zip",
      size: "901 KB",
    },
    {
      label: "Windows",
      url: "https://github.com/lunarmeadow/barrett/releases/download/v1.3-beta/barrett-win64.zip",
      size: "1.9 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/barrett.svg",
    alt: "Barrett (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "Advanced and featureful Rise of the Triad source port for modern systems.",
  notesEs:
    "Port avanzado y completo del código fuente de Rise of the Triad para sistemas modernos.",
};
