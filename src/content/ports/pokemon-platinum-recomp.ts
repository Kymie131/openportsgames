import type { Port } from "@/lib/ports/schema";

export const pokemonPlatinumRecomp: Port = {
  schema: "port",
  id: "pokemon-platinum-recomp",
  title: "Pokémon Platinum Recompiled",
  game: "Pokémon Platinum",
  developers: ["cybervisi0n"],
  publisher: "Nintendo",
  originalYear: 2008,
  portType: "decompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/cybervisi0n/pokeplatinum"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Nintendo DS",
  notes:
    "64-bit PC port of Pokémon Platinum based on the pret decompilation and the libntr suite. It needs your own copy of the game.",
  notesEs:
    "Port para PC de 64 bits de Pokémon Platinum basado en la decompilación de pret y la suite libntr. Necesita tu propia copia del juego.",
};
