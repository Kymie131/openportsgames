import type { Port } from "@/lib/ports/schema";

export const finalFantasyVSnesRecomp: Port = {
  schema: "port",
  id: "final-fantasy-v-snes-recomp",
  title: "Final Fantasy V Recompiled",
  game: "Final Fantasy V",
  developers: ["brainWave4"],
  publisher: "Square",
  originalYear: 1992,
  portType: "recompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/brainWave4/FinalFantasyVSNESRecomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Super Nintendo",
  notes:
    "Static recompilation of Final Fantasy V (Super Nintendo) to a native executable. It requires your own ROM and ships no game data.",
  notesEs:
    "Recompilación estática de Final Fantasy V (Super Nintendo) a un ejecutable nativo. Requiere tu propia ROM y no incluye datos del juego.",
};
