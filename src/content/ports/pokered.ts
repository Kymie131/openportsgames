import type { Port } from "@/lib/ports/schema";

export const pokered: Port = {
  schema: "port",
  id: "pokered",
  title: "Pokémon Red/Blue Disassembly",
  game: "Pokémon Red/Blue",
  developers: ["Game Freak"],
  publisher: "Nintendo",
  originalYear: 1996,
  portType: "decompilation",
  genre: "rpg",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: null, date: null },
  sources: ["https://github.com/pret/pokered"],
  license: {
    spdx: "NOASSERTION",
    note: "no SPDX license in the repository",
  },
  aiDisclosure: false,
  verified: false,
  originalSystem: "Game Boy",
  notes:
    "Fully commented disassembly of the first generation Pokémon games that builds byte-perfect copies via rgbds. Produces the original Game Boy ROM rather than a native modern executable; the pairing projects in the pret organization power many quality-of-life remakes and hacks built from this source.",
};