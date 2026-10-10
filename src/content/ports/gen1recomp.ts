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
  release: { version: null, date: null },
  sources: ["https://github.com/bryanthaboi/gen1recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Game Boy",
  notes:
    "Native Lua/LÖVE2D recreation of the first-generation Pokémon games, also covering later generations. It builds for desktop and mobile and uses your own game data.",
  notesEs:
    "Recreación nativa en Lua/LÖVE2D de los Pokémon de primera generación, que también cubre generaciones posteriores. Compila para escritorio y móvil y usa tus propios datos del juego.",
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
