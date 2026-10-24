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
  summary: "Crash: Mind over Mutant is a 2008 platform game developed by Radical Entertainment for the PlayStation 2, PlayStation Portable, Wii and Xbox 360. It was released in North America on October 7, 2008, and was later released in Europe and Australia on October 30 and October 31, respectively. A separate version for the Nintendo DS was developed by Tose.",
  summaryEs: "Crash: Mind Over Mutant es un videojuego de plataformas desarrollado por Radical Entertainment y publicado por Activision. Salió a la venta el 14 de octubre de 2008 en Latinoamérica y el 31 de octubre del mismo año en España. Es el segundo videojuego de Crash que no sale en Japón. Este recibió críticas positivas en las versiones de PlayStation 2 y Wii, críticas mixtas en la versión de Xbox 360 y negativas en la versión de Nintendo DS.",
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
