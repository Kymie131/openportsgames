import type { Port } from "@/lib/ports/schema";

export const pokemonMysteryDungeonRedRecomp: Port = {
  schema: "port",
  id: "pokemon-mystery-dungeon-red-recomp",
  title: "Pokémon Mystery Dungeon: Red Rescue Team Recompiled",
  game: "Pokémon Mystery Dungeon: Red Rescue Team",
  developers: ["Asphaltian"],
  publisher: "Nintendo",
  originalYear: 2005,
  portType: "recompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Asphaltian/pmd-green"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Game Boy Advance",
  notes:
    "Static recompilation of Pokémon Mystery Dungeon: Red Rescue Team (GBA) with the gbarecomp framework. It requires your own game data.",
  notesEs:
    "Recompilación estática de Pokémon Mystery Dungeon: Red Rescue Team (GBA) con el framework gbarecomp. Requiere tus propios datos del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Advance/Named_Boxarts/Pokemon%20Mystery%20Dungeon%20-%20Red%20Rescue%20Team%20(Europe)%20(En,Fr,De,Es,It).png",
    alt: "Pokémon Mystery Dungeon: Red Rescue Team (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Advance/Named_Snaps/Pokemon%20Mystery%20Dungeon%20-%20Red%20Rescue%20Team%20(Europe)%20(En,Fr,De,Es,It).png",
      alt: "Pokémon Mystery Dungeon: Red Rescue Team (screenshot)",
      credit: "Libretro",
    },
  ],
};
