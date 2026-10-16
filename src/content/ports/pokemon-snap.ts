import type { Port } from "@/lib/ports/schema";

export const PokemonSnap: Port = {
  schema: "port",
  id: "pokemon-snap",
  title: "Pokemon Snap",
  game: "Pokemon Snap",
  developers: ["dreamsailing59-ops"],
  publisher: "Unknown",
  originalYear: 1999,
  portType: "recompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/dreamsailing59-ops/Snapshot"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Nintendo 64"],
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Pokemon%20Snap%20(Australia).png",
    alt: "Pokemon Snap (box art)",
    credit: "Box art",
  },
  notes:
    "Static recompilation of Pokémon Snap (N64, 1999) for PC platforms (Windows, Linux, macOS).",
  notesEs: "Recompilación estática de Pokémon Snap (N64, 1999) para PC (Windows, Linux, macOS).",
};
