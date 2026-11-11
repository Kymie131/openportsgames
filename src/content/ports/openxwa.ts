import type { Port } from "@/lib/ports/schema";

export const Openxwa: Port = {
  schema: "port",
  id: "openxwa",
  title: "OpenXWA",  game: "Star Wars: X-Wing Alliance",
  developers: ["elyosh"],  publisher: "LucasArts",  originalYear: 1999,
  portType: "source-port",  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "0.0.17", date: "2026-08-31" },
  sources: ["https://github.com/elyosh/OpenXWA"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,  originalSystems: ["Windows"],  summary: "Star Wars: X-Wing Alliance is a 1999 space combat simulator developed by Totally Games and published by LucasArts. The Azzameen family is caught between the Empire and the Rebel Alliance, building up to the Battle of Endor.",  summaryEs: "Star Wars: X-Wing Alliance es un simulador de combate espacial de 1999 desarrollado por Totally Games y publicado por LucasArts. La familia Azzameen queda atrapada entre el Imperio y la Alianza Rebelde, en una trama que culmina en la batalla de Endor.",  downloads: [
    {
      label: "Windows",
      url: "https://github.com/elyosh/OpenXWA/releases/download/v0.0.17/openxwa-0.0.17-windows-x86_64-release.zip",
      size: "14.2 MB",
    },
    {
      label: "macOS",
      url: "https://github.com/elyosh/OpenXWA/releases/download/v0.0.17/openxwa-0.0.17-macos-arm64-release.dmg",
      size: "6.1 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/elyosh/OpenXWA/releases/download/v0.0.17/openxwa-0.0.17-linux-x86_64-release.tar.xz",
      size: "4.4 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/openxwa.svg",
    alt: "OpenXWA (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "Source port of OpenXWA (Other).",
  notesEs: "Port del código fuente de OpenXWA (Other).",
};
