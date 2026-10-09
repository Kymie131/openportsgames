import type { Port } from "@/lib/ports/schema";

export const dragonBallZLegacyOfGoku2Recomp: Port = {
  schema: "port",
  id: "dragon-ball-z-legacy-of-goku-2-recomp",
  title: "Dragon Ball Z: The Legacy of Goku II",
  game: "Dragon Ball Z: The Legacy of Goku II",
  developers: ["mstan"],
  publisher: "Atari",
  originalYear: 2003,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/DragonBallZLegacyofGokuIIRecomp"],
  license: { spdx: "PolyForm-Noncommercial-1.0.0", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystem: "Game Boy Advance",
  notes:
    "Static recompilation of Dragon Ball Z: The Legacy of Goku II (GBA) with the gbarecomp framework. It requires your own copy of the game.",
  notesEs:
    "Recompilación estática de Dragon Ball Z: The Legacy of Goku II (GBA) con el framework gbarecomp. Requiere tu propia copia del juego.",
};
