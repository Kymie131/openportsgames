import type { Port } from "@/lib/ports/schema";

export const gen1recomp: Port = {
  schema: "port",
  id: "gen1recomp",
  title: "Gen1Recomp (Pokémon Red)",
  game: "Pokémon Red",
  developers: ["bryanthaboi"],
  publisher: "Nintendo",
  originalYear: 1996,
  portType: "reimplementation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos", "android", "ios"],
  status: "beta",
  release: { version: "0.4.2", date: "2026-11-08" },
  sources: ["https://github.com/bryanthaboi/gen1recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Game Boy"],
  summary: "Pokémon Red Version and Pokémon Blue Version are 1996 role-playing video games (RPGs) developed by Game Freak and published by Nintendo for the Game Boy. They are the first installments of the Pokémon video game series and were first released in Japan as Pocket Monsters Red and Pocket Monsters Green, followed by the special edition Pocket Monsters Blue later that year.",
  summaryEs: "Pokémon Red es un videojuego de rol publicado por Nintendo en 1996.",
  notes:
    "Native Lua/LÖVE2D recreation of the first-generation Pokémon games, also covering later generations. It builds for desktop and mobile and uses your own game data.",
  notesEs:
    "Recreación nativa en Lua/LÖVE2D de los Pokémon de primera generación, que también cubre generaciones posteriores. Compila para escritorio y móvil y usa tus propios datos del juego.",
  downloads: [
    {
      label: "macOS",
      url: "https://github.com/bryanthaboi/gen1recomp/releases/download/v0.4.2/gen1recomp-0.4.2-ps4.pkg",
      size: "84.8 MB",
    },
    {
      label: "Linux arm64",
      url: "https://github.com/bryanthaboi/gen1recomp/releases/download/v0.4.2/gen1recomp-0.4.2-linux-arm64.AppImage",
      size: "59.9 MB",
    },
    {
      label: "macOS",
      url: "https://github.com/bryanthaboi/gen1recomp/releases/download/v0.4.2/gen1recomp-0.4.2-macos.zip",
      size: "47.4 MB",
    },
    {
      label: "Android",
      url: "https://github.com/bryanthaboi/gen1recomp/releases/download/v0.4.2/gen1recomp-0.4.2-android.apk",
      size: "44.4 MB",
    },
    {
      label: "iOS",
      url: "https://github.com/bryanthaboi/gen1recomp/releases/download/v0.4.2/gen1recomp%2B%2B-0.4.2-ios.ipa",
      size: "42.7 MB",
    },
    {
      label: "Linux x64",
      url: "https://github.com/bryanthaboi/gen1recomp/releases/download/v0.4.2/gen1recomp-0.4.2-linux-x86_64.AppImage",
      size: "37.6 MB",
    },
  ],
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy/Named_Boxarts/Pokemon%20-%20Red%20Version%20(USA,%20Europe)%20(SGB%20Enhanced).png",
    alt: "Pokémon Red (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy/Named_Snaps/Pokemon%20-%20Red%20Version%20(USA,%20Europe)%20(SGB%20Enhanced).png",
      alt: "Pokémon Red (screenshot)",
      credit: "Libretro",
    },
  ],
};
