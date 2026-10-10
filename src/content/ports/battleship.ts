import type { Port } from "@/lib/ports/schema";

export const battleship: Port = {
  schema: "port",
  id: "battleship",
  title: "BattleShip",
  game: "Super Smash Bros.",
  developers: ["JRickey"],
  publisher: "Nintendo",
  originalYear: 1999,
  portType: "decompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/JRickey/BattleShip"],
  license: { spdx: "MIT" },
  verified: false,
  originalSystem: "Nintendo 64",
  notes:
    "PC port of Super Smash Bros. (N64) for the USA and Japanese releases, built on the ssb-decomp-re decompilation with libultraship. It runs on Windows, Linux, macOS and Android, and adds widescreen, texture packs, C mods and competitive options.",
  notesEs:
    "Port a PC de Super Smash Bros. (N64) para las versiones USA y japonesa, sobre la decompilación ssb-decomp-re con libultraship. Corre en Windows, Linux, macOS y Android, y añade widescreen, packs de texturas, mods en C y opciones competitivas.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Super%20Smash%20Bros.%20(USA).png",
    alt: "Super Smash Bros. (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Snaps/Super%20Smash%20Bros.%20(USA).png",
      alt: "Super Smash Bros. (screenshot)",
      credit: "Libretro",
    },
  ],
};
