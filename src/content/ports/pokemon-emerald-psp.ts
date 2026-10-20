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
  notes:
    "Pokémon Emerald (Nintendo, 2004) running natively on PSP through decompilation, with three save files, a file select and turbo mode. Bring your own game.",
  notesEs:
    "Pokémon Emerald (Nintendo, 2004) en PSP de forma nativa mediante decompilación, con tres partidas, selección de archivo y modo turbo. Aporta tu propio juego.",
};
