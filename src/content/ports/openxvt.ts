import type { Port } from "@/lib/ports/schema";

export const Openxvt: Port = {
  schema: "port",
  id: "openxvt",
  title: "OpenXvT",  game: "Star Wars: X-Wing vs. TIE Fighter",
  developers: ["elyosh"],  publisher: "LucasArts",  originalYear: 1997,
  portType: "source-port",  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "0.0.5", date: "2026-10-10" },
  sources: ["https://github.com/elyosh/OpenXvT"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,  originalSystems: ["Windows"],  summary: "Star Wars: X-Wing vs. TIE Fighter is a 1997 space combat simulator developed by Totally Games and published by LucasArts. It focuses on multiplayer battles between Rebel and Imperial squadrons, with a separate Balance of Power campaign.",  summaryEs: "Star Wars: X-Wing vs. TIE Fighter es un simulador de combate espacial de 1997 desarrollado por Totally Games y publicado por LucasArts. Se centra en batallas multijugador entre escuadrones rebeldes e imperiales, con la campaña Balance of Power.",  downloads: [
    {
      label: "Windows",
      url: "https://github.com/elyosh/OpenXvT/releases/download/v0.0.5/openxvt-0.0.5-windows-x86_64-release.zip",
      size: "8.0 MB",
    },
    {
      label: "macOS",
      url: "https://github.com/elyosh/OpenXvT/releases/download/v0.0.5/openxvt-0.0.5-macos-arm64-release.dmg",
      size: "6.7 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/elyosh/OpenXvT/releases/download/v0.0.5/openxvt-0.0.5-linux-x86_64-release.tar.xz",
      size: "4.3 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/openxvt.svg",
    alt: "OpenXvT (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "Source port of OpenXvT (Other).",
  notesEs: "Port del código fuente de OpenXvT (Other).",
};
