import type { Port } from "@/lib/ports/schema";

export const summonNightSwordcraft3Recomp: Port = {
  schema: "port",
  id: "summon-night-swordcraft-3-recomp",
  title: "Summon Night: Craft Sword Monogatari 3",
  game: "Summon Night: Craft Sword Monogatari - Hajimari no Ishi",
  developers: ["Nicktendonick"],
  publisher: "Banpresto",
  originalYear: 2003,
  portType: "recompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Nicktendonick/SummonNightSwordcraftStory3Recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Game Boy Advance",
  notes:
    "Static recompilation of Summon Night: Craft Sword Monogatari - Hajimari no Ishi (GBA) with the gbarecomp framework. It requires your own copy of the game.",
  notesEs:
    "Recompilación estática de Summon Night: Craft Sword Monogatari - Hajimari no Ishi (GBA) con el framework gbarecomp. Requiere tu propia copia del juego.",
};
