import type { Port } from "@/lib/ports/schema";

export const theOraclesProject: Port = {
  schema: "port",
  id: "the-oracles-project",
  title: "The Oracles Project",
  game: "The Legend of Zelda: Oracle of Ages",
  developers: ["thibautbus"],
  publisher: "Nintendo",
  originalYear: 2001,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: "1.4.0", date: "2026-11-05" },
  sources: ["https://github.com/thibautbus/top"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Game Boy Color"],
  summary: "The Legend of Zelda: Oracle of Seasons and The Legend of Zelda: Oracle of Ages are 2001 action-adventure games developed by Flagship and published by Nintendo for the Game Boy Color. They are the seventh and eighth installments in the Legend of Zelda series.",
  summaryEs: "The Legend of Zelda: Oracle of Seasons y The Legend of Zelda: Oracle of Ages, conocidos en Japón como Zelda no Densetsu: Fushigi no Ki no Mi Daichi no Shō y Zelda no Densetsu: Fushigi no Ki no Mi Jikū no Shō , son dos juegos de acción-aventura desarrollados por Flagship y publicados por Nintendo, así como los títulos séptimo y octavo de la serie de videojuegos The Legend of Zelda. Fueron lanzados el 27 de febrero de 2001 en Japón; el 13 de mayo de 2001 en Norteamérica; y el 5 de octubre de 2001 en Europa y Australia para la videoconsola portátil Nintendo Game Boy Color.",
  downloads: [
    {
      label: "Android APK",
      url: "https://github.com/thibautbus/top/releases/download/v1.4.0/the-oracles-project-1.4.0-android.apk",
      size: "12.5 MB",
    },
    {
      label: "Linux AppImage",
      url: "https://github.com/thibautbus/top/releases/download/v1.4.0/the-oracles-project-1.4.0-linux-arm64.AppImage",
      size: "4.1 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/thibautbus/top/releases/download/v1.4.0/the-oracles-project-1.4.0-linux-arm64.tar.gz",
      size: "3.4 MB",
    },
    {
      label: "Linux AppImage",
      url: "https://github.com/thibautbus/top/releases/download/v1.4.0/the-oracles-project-1.4.0-linux-x86_64.AppImage",
      size: "4.2 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/thibautbus/top/releases/download/v1.4.0/the-oracles-project-1.4.0-linux-x86_64.tar.gz",
      size: "3.5 MB",
    },
    {
      label: "Macos",
      url: "https://github.com/thibautbus/top/releases/download/v1.4.0/the-oracles-project-1.4.0-macos.zip",
      size: "6.0 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/the-legend-of-zelda-oracle-of-ages.svg",
    alt: "The Legend of Zelda: Oracle of Ages (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "The Legend of Zelda: Oracle of Ages (Nintendo, 2001) for Android (source port). Latest release: v1.2.0. Needs your own copy of the game.",
  notesEs: "The Legend of Zelda: Oracle of Ages (Nintendo, 2001) para Android (port de código). Última release: v1.2.0. Necesita tu propia copia del juego.",
};
