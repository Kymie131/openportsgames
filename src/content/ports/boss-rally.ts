import type { Port } from "@/lib/ports/schema";

export const BossRally: Port = {
  schema: "port",
  id: "boss-rally",
  title: "Boss Rally",
  game: "Boss Rally",
  developers: ["jeff-strutb"],
  publisher: "SouthPeak Games",
  originalYear: 1999,
  portType: "decompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "0.991", date: "2026-11-05" },
  sources: ["https://github.com/jeff-strutb/brally"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Nintendo 64"],
  downloads: [
    {
      label: "Linux AppImage",
      url: "https://github.com/jeff-strutb/brally/releases/download/v0.991/RallyBuilder-0.991-Linux-x86_64.AppImage",
      size: "18.3 MB",
    },
    {
      label: "macOS",
      url: "https://github.com/jeff-strutb/brally/releases/download/v0.991/RallyBuilder-0.991-macOS.zip",
      size: "10.7 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/jeff-strutb/brally/releases/download/v0.991/RallyBuilder-0.991-Windows.zip",
      size: "14.6 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/e/e6/Boss_Rally_PC_Cover.jpeg",
    alt: "Boss Rally (box art)",
    credit: "Wikipedia",
  },
  summary: "Boss Rally is a 1999 racing game developed by Boss Game Studios and published by SouthPeak Interactive for Microsoft Windows. It is essentially a port of the Nintendo 64 game Top Gear Rally, with extra features such as more cars and tracks and a multiplayer mode that supports up to eight players.",
  summaryEs: "Boss Rally es un videojuego de carreras de 1999 desarrollado por Boss Game Studios y publicado por SouthPeak Interactive para Microsoft Windows. Es esencialmente un port del juego Top Gear Rally de Nintendo 64, con características adicionales como más autos y pistas y un modo multijugador que admite hasta ocho jugadores.",
  notes: "A decompilation project of the Boss Rally / Top Gear Rally video game.",
  notesEs: "Proyecto de decompilación del videojuego Boss Rally / Top Gear Rally.",
};
