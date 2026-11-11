import type { Port } from "@/lib/ports/schema";

export const goemon64Recompiled: Port = {
  schema: "port",
  id: "goemon-64-recompiled",
  title: "Goemon 64: Recompiled",
  game: "Mystical Ninja Starring Goemon",
  developers: ["klorfmorf"],
  publisher: "Konami",
  originalYear: 1997,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: "0.2.0-dev", date: "2026-01-31" },
  sources: ["https://github.com/klorfmorf/Goemon64Recomp"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-05",
  originalSystems: ["Nintendo 64"],
  summary: "Mystical Ninja Starring Goemon is a 1997 platform action-adventure game developed by Konami Computer Entertainment Osaka and published by Konami for the Nintendo 64. The second Ganbare Goemon game released in North America and Europe, and the twelfth mainline installment overall, follows The Legend of the Mystical Ninja and features hybrid elements of platform games and action-adventure games.",
  summaryEs: "Mystical Ninja Starring Goemon es un videojuego creado por Konami para Nintendo 64 en 1997. Es uno de los pocos juegos de esta saga que ha logrado salir de Japón, llegando también a Europa y Estados Unidos. Ha logrado estar entre los 35 mejores juegos de Nintendo 64. En Nintendo 64 tiene dos secuelas: Ganbare Goemon: Derodero Dōchū Obake Tenko Mori y Goemon: Mononoke Sugoroku, inédito en occidente.",
  notes:
    "Native recompilation of Mystical Ninja Starring Goemon (Nintendo 64), with Windows, Linux and macOS builds. The player supplies their own legally obtained ROM; the repository ships no game content. Latest release: v0.2.0-dev.",
  notesEs:
    "Recompilación nativa de Mystical Ninja Starring Goemon (Nintendo 64), con builds para Windows, Linux y macOS. El jugador aporta su propio material obtenido legalmente (ROM); el repositorio no incluye contenido del juego. Última release: v0.2.0-dev.",
  features: [
    "Static recompilation of the Nintendo 64 game.",
    "Windows, Linux and macOS builds.",
    "Requires your own N64 ROM.",
  ],
  featuresEs: [
    "Recompilación estática del juego de Nintendo 64.",
    "Builds para Windows, Linux y macOS.",
    "Necesita tu propia ROM de N64.",
  ],
  downloads: [
    {
      label: "Windows",
      url: "https://github.com/klorfmorf/Goemon64Recomp/releases/download/v0.2.0-dev/Goemon64Recompiled-Windows-RelWithDebInfo.zip",
    },
    {
      label: "Linux",
      url: "https://github.com/klorfmorf/Goemon64Recomp/releases/download/v0.2.0-dev/Goemon64Recompiled-Linux-X64-Release.zip",
    },
    {
      label: "macOS",
      url: "https://github.com/klorfmorf/Goemon64Recomp/releases/download/v0.2.0-dev/Goemon64Recompiled-macOS-Release.zip",
    },
  ],
  screenshots: [
    {
      src: "https://raw.githubusercontent.com/klorfmorf/Goemon64Recomp/master/docs/deck_gyro_1.jpg",
      alt: "Goemon 64: Recompiled running on a Steam Deck",
      credit: "klorfmorf/Goemon64Recomp",
    },
  ],
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Mystical%20Ninja%20Starring%20Goemon%20(Europe).png",
    alt: "Mystical Ninja Starring Goemon (box art)",
    credit: "Box art",
  },
};
