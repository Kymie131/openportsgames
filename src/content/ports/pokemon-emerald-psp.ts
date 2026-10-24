import type { Port } from "@/lib/ports/schema";

export const pokemonEmeraldPsp: Port = {
  schema: "port",
  id: "pokemon-emerald-psp",
  title: "Pokemon Emerald (PSP)",
  game: "Pokémon Emerald",
  developers: ["JustKidding23"],
  publisher: "Nintendo",
  originalYear: 2004,
  portType: "decompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["psp"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/JustKidding23/Pokemon-Emerald-PSP"],
  license: { spdx: "NOASSERTION", note: "license not declared in the repository" },
  verified: false,
  sourceVerified: true,
  wip: true,
  aiDisclosure: {
    source: "https://github.com/JustKidding23/Pokemon-Emerald-PSP",
    quote: "Built with the use of AI (Claude).",
  },
  originalSystems: ["Game Boy Advance"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/f/f7/PokemonEmeraldBox.jpg",
    alt: "Pokémon Emerald (box art)",
    credit: "Wikipedia",
  },
  summary: "Pokémon Emerald Version is a 2004 role-playing video game developed by Game Freak and published by The Pokémon Company and Nintendo for the Game Boy Advance. It was first released in Japan in 2004, and was later released internationally in 2005. It is the fifth version, after both Pokémon Ruby and Sapphire and Pokémon FireRed and LeafGreen, and is the final game of the third generation of the Pokémon video game series.",
  summaryEs: "Pokémon Edición Rubí y Pokémon Edición Zafiro, conocidos en Japón como Pocket Monsters Ruby & Sapphire , son dos videojuegos del género RPG pertenecientes a la tercera generación de la saga Pokémon, y los primeros en su tipo lanzados para la consola portátil Game Boy Advance de Nintendo. Ambos, marcan el principio de la tercera generación de la serie, y se ambientan en una nueva región denominada Hoenn.",
  notes:
    "Pokémon Emerald (Nintendo, 2004) running natively on PSP through decompilation, with three save files, a file select and turbo mode. Bring your own game.",
  notesEs:
    "Pokémon Emerald (Nintendo, 2004) en PSP de forma nativa mediante decompilación, con tres partidas, selección de archivo y modo turbo. Aporta tu propio juego.",
};
