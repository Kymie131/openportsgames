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
  release: { version: "0.1.0", date: "2026-09-26" },
  sources: ["https://github.com/Asphaltian/pmd-green"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Game Boy Advance"],
  summary: "Pokémon Mystery Dungeon: Blue Rescue Team and Pokémon Mystery Dungeon: Red Rescue Team are a matched pair of Pokémon video games for the Nintendo DS and Game Boy Advance, respectively. The games were developed by Chunsoft and published by The Pokémon Company and Nintendo. Red Rescue Team was the last Pokémon game released for the Game Boy Advance. The two versions are mostly identical, with Blue Rescue Team taking advantage of the dual-screen features and increased graphical and sound capabilities of the Nintendo DS. The game has six Pokémon exclusive to each version.",
  summaryEs: "Pokémon Mystery Dungeon: Red Rescue Team es un videojuego de rol.",
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
