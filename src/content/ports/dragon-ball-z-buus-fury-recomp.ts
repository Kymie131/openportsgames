import type { Port } from "@/lib/ports/schema";

export const dragonBallZBuusFuryRecomp: Port = {
  schema: "port",
  id: "dragon-ball-z-buus-fury-recomp",
  title: "Dragon Ball Z: Buu's Fury",
  game: "Dragon Ball Z: Buu's Fury",
  developers: ["mstan"],
  publisher: "Atari",
  originalYear: 2004,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/DragonBallZBuusFuryRecomp"],
  license: { spdx: "PolyForm-Noncommercial-1.0.0", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystem: "Game Boy Advance",
  notes:
    "Static recompilation of Dragon Ball Z: Buu's Fury (GBA) with the gbarecomp framework. It requires your own copy of the game.",
  notesEs:
    "Recompilación estática de Dragon Ball Z: Buu's Fury (GBA) con el framework gbarecomp. Requiere tu propia copia del juego.",
};
