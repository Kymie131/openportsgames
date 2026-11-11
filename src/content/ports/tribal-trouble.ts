import type { Port } from "@/lib/ports/schema";

export const TribalTrouble: Port = {
  schema: "port",
  id: "tribal-trouble",
  title: "Tribal Trouble",
  game: "Tribal Trouble",
  developers: ["Tribal-Trouble"],
  publisher: "GarageGames",
  originalYear: 2005,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "2.2.207-103.1010", date: "2026-10-31" },
  sources: ["https://github.com/Tribal-Trouble/tribaltrouble"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  summary: "Tribal Trouble is a real-time strategy video game for PC. The game pits natives of tropical islands against invading Vikings. The game was originally developed by independent studio Oddlabs. The game was well received by the press and has won several awards.",
  summaryEs: "Tribal Trouble es un videojuego de acción y aventura publicado por GarageGames en 2005.",
  downloads: [
    {
      label: "tribal-trouble-bugserver_v2.2.207-103.1010",
      url: "https://github.com/Tribal-Trouble/tribaltrouble/releases/download/v2.2.207-103.1010/tribal-trouble-bugserver_v2.2.207-103.1010.zip",
      size: "4.6 MB",
    },
    {
      label: "Linux AppImage",
      url: "https://github.com/Tribal-Trouble/tribaltrouble/releases/download/v2.2.207-103.1010/tribal-trouble-linux-appimage_v2.2.207-103.1010.AppImage",
      size: "156.7 MB",
    },
    {
      label: "macOS DMG",
      url: "https://github.com/Tribal-Trouble/tribaltrouble/releases/download/v2.2.207-103.1010/tribal-trouble-mac-arm64_v2.2.207-103.1010.dmg",
      size: "180.8 MB",
    },
    {
      label: "macOS DMG",
      url: "https://github.com/Tribal-Trouble/tribaltrouble/releases/download/v2.2.207-103.1010/tribal-trouble-mac-x86_v2.2.207-103.1010.dmg",
      size: "182.5 MB",
    },
    {
      label: "tribal-trouble-server_v2.2.207-103.1010",
      url: "https://github.com/Tribal-Trouble/tribaltrouble/releases/download/v2.2.207-103.1010/tribal-trouble-server_v2.2.207-103.1010.zip",
      size: "41.3 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/Tribal-Trouble/tribaltrouble/releases/download/v2.2.207-103.1010/tribal-trouble-windows_v2.2.207-103.1010.zip",
      size: "171.7 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/tribal-trouble.svg",
    alt: "Tribal Trouble (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "Source port of Tribal Trouble (Other).",
  notesEs: "Port del código fuente de Tribal Trouble (Other).",
};
