import type { Port } from "@/lib/ports/schema";

export const pokemonEmeraldRecomp: Port = {
  schema: "port",
  id: "pokemon-emerald-recomp",
  title: "Pokémon Emerald Recompiled",
  game: "Pokémon Emerald",
  developers: ["mstan"],
  publisher: "Nintendo",
  originalYear: 2004,
  portType: "recompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/EmeraldRecomp"],
  license: { spdx: "PolyForm-Noncommercial-1.0.0", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystem: "Game Boy Advance",
  notes:
    "Static recompilation of Pokémon Emerald (GBA) with the gbarecomp framework. It requires your own game files.",
  notesEs:
    "Recompilación estática de Pokémon Emerald (GBA) con el framework gbarecomp. Requiere tus propios archivos del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Advance/Named_Boxarts/Pokemon%20-%20Emerald%20Version%20(USA,%20Europe).png",
    alt: "Pokémon Emerald (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Advance/Named_Snaps/Pokemon%20-%20Emerald%20Version%20(USA,%20Europe).png",
      alt: "Pokémon Emerald (screenshot)",
      credit: "Libretro",
    },
  ],
};
