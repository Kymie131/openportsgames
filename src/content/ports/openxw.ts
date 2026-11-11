import type { Port } from "@/lib/ports/schema";

export const Openxw: Port = {
  schema: "port",
  id: "openxw",
  title: "OpenXW",  game: "Star Wars: X-Wing",
  developers: ["elyosh"],  publisher: "LucasArts",  originalYear: 1993,
  portType: "source-port",  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "0.0.3", date: "2026-09-29" },
  sources: ["https://github.com/elyosh/OpenXW"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,  originalSystems: ["MS-DOS"],  summary: "Star Wars: X-Wing is a 1993 space combat simulator developed by Totally Games and published by LucasArts. Rebel pilots fly X-Wings, Y-Wings and A-Wings through campaigns set around the Galactic Civil War.",  summaryEs: "Star Wars: X-Wing es un simulador de combate espacial de 1993 desarrollado por Totally Games y publicado por LucasArts. Los pilotos rebeldes pilotan X-Wings, Y-Wings y A-Wings en campañas de la Guerra Civil Galáctica.",  downloads: [
    {
      label: "Windows",
      url: "https://github.com/elyosh/OpenXW/releases/download/v0.0.3/openxw-0.0.3-windows-x86_64-release.zip",
      size: "14.8 MB",
    },
    {
      label: "macOS",
      url: "https://github.com/elyosh/OpenXW/releases/download/v0.0.3/openxw-0.0.3-macos-arm64-release.dmg",
      size: "7.2 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/elyosh/OpenXW/releases/download/v0.0.3/openxw-0.0.3-linux-x86_64-release.tar.xz",
      size: "4.6 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/openxw.svg",
    alt: "OpenXW (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "Source port of OpenXW (Other).",
  notesEs: "Port del código fuente de OpenXW (Other).",
};
