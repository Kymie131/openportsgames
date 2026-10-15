import type { Port } from "@/lib/ports/schema";

export const crashMindOverMutantRecomp: Port = {
  schema: "port",
  id: "crash-mind-over-mutant-recomp",
  title: "Crash: Mind over Mutant Recompiled",
  game: "Crash: Mind over Mutant",
  developers: ["Maxilure"],
  publisher: "Activision",
  originalYear: 2008,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Maxilure/MindOver-Recomp"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Xbox 360"],
  notes:
    "Static recompilation of Crash: Mind over Mutant (Xbox 360) for Windows. It needs your own copy of the game.",
  notesEs:
    "Recompilación estática de Crash: Mind over Mutant (Xbox 360) para Windows. Necesita tu propia copia del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/b/b2/Crash_-_Mind_over_Mutant_Coverart.png",
    alt: "Crash: Mind over Mutant (cover)",
    credit: "Wikipedia",
  },
};
