import type { Port } from "@/lib/ports/schema";

export const Opentie: Port = {
  schema: "port",
  id: "opentie",
  title: "OpenTIE",  game: "Star Wars: TIE Fighter",
  developers: ["elyosh"],  publisher: "LucasArts",  originalYear: 1994,
  portType: "source-port",  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "0.0.7", date: "2026-10-04" },
  sources: ["https://github.com/elyosh/OpenTIE"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,  originalSystems: ["MS-DOS", "Windows"],  summary: "Star Wars: TIE Fighter is a 1994 space combat simulator developed by Totally Games and published by LucasArts. The player flies for the Galactic Empire across campaigns, protecting the Emperor and hunting rebels.",  summaryEs: "Star Wars: TIE Fighter es un simulador de combate espacial de 1994 desarrollado por Totally Games y publicado por LucasArts. El jugador pilota para el Imperio Galáctico en varias campañas, protegiendo al Emperador y cazando rebeldes.",  downloads: [
    {
      label: "Windows",
      url: "https://github.com/elyosh/OpenTIE/releases/download/v0.0.7/opentie-0.0.7-windows-x86_64-release.zip",
      size: "14.3 MB",
    },
    {
      label: "macOS",
      url: "https://github.com/elyosh/OpenTIE/releases/download/v0.0.7/opentie-0.0.7-macos-arm64-release.dmg",
      size: "6.1 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/elyosh/OpenTIE/releases/download/v0.0.7/opentie-0.0.7-linux-x86_64-release.tar.xz",
      size: "4.4 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/opentie.svg",
    alt: "OpenTIE (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "Source port of OpenTIE (Other).",
  notesEs: "Port del código fuente de OpenTIE (Other).",
};
