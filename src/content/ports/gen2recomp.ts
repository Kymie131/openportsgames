import type { Port } from "@/lib/ports/schema";

export const gen2recomp: Port = {
  schema: "port",
  id: "gen2recomp",
  title: "Gen2Recomp (Pokémon Gold)",
  game: "Pokémon Gold",
  developers: ["UNDERdecoded"],
  publisher: "Nintendo",
  originalYear: 1999,
  portType: "reimplementation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos", "android", "ios"],
  status: "beta",
  release: { version: "0.8.57", date: "2026-11-09" },
  sources: ["https://github.com/UNDERdecoded/Gen2Recomped"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Game Boy","Game Boy Color"],
  summary: "Pokémon Gold Version and Pokémon Silver Version are 1999 role-playing video games developed by Game Freak and published by Nintendo for the Game Boy Color. They are the first installments in the second generation of the Pokémon video game series. They were released in Japan on November 21st, 1999, Australia and North America on October 15th, 2000, and Europe on April 6th, 2001.",
  summaryEs: "Pokémon Gold es un videojuego de rol publicado por Nintendo en 1999.",
  notes:
    "Recompilation project for the second-generation Pokémon games, forked from Gen1Recomp. It runs on desktop and Android with your own game data.",
  notesEs:
    "Proyecto de recompilación de los Pokémon de segunda generación, derivado de Gen1Recomp. Funciona en escritorio y Android con tus propios datos del juego.",
  downloads: [
    {
      label: "Android APK",
      url: "https://github.com/UNDERdecoded/Gen2Recomped/releases/download/v0.8.57/Gen2Recomped-0.8.57-android.apk",
      size: "127.8 MB",
    },
    {
      label: "iOS IPA",
      url: "https://github.com/UNDERdecoded/Gen2Recomped/releases/download/v0.8.57/Gen2Recomped-0.8.57-ios.ipa",
      size: "33.1 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/UNDERdecoded/Gen2Recomped/releases/download/v0.8.57/Gen2Recomped-0.8.57-linux.zip",
      size: "94.4 MB",
    },
    {
      label: "Macos",
      url: "https://github.com/UNDERdecoded/Gen2Recomped/releases/download/v0.8.57/Gen2Recomped-0.8.57-macos.zip",
      size: "53.3 MB",
    },
    {
      label: "Gen2Recomped-0.8.57-rg34xxsp-stockos64-mod",
      url: "https://github.com/UNDERdecoded/Gen2Recomped/releases/download/v0.8.57/Gen2Recomped-0.8.57-rg34xxsp-stockos64-mod.zip",
      size: "68.1 MB",
    },
    {
      label: "Switch",
      url: "https://github.com/UNDERdecoded/Gen2Recomped/releases/download/v0.8.57/Gen2Recomped-0.8.57-switch.zip",
      size: "32.2 MB",
    },
  ],
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Pokemon%20-%20Gold%20Version%20(USA,%20Europe)%20(SGB%20Enhanced)%20(GB%20Compatible).png",
    alt: "Pokémon Gold (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Snaps/Pokemon%20-%20Gold%20Version%20(USA,%20Europe)%20(SGB%20Enhanced)%20(GB%20Compatible).png",
      alt: "Pokémon Gold (screenshot)",
      credit: "Libretro",
    },
  ],
};
