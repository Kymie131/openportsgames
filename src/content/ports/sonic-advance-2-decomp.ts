import type { Port } from "@/lib/ports/schema";

export const sonicAdvance2Decomp: Port = {
  schema: "port",
  id: "sonic-advance-2-decomp",
  title: "Sonic Advance 2 Decompilation",
  game: "Sonic Advance 2",
  developers: ["SAT-R"],
  publisher: "Sega",
  originalYear: 2002,
  portType: "decompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  wip: true,
  release: { version: null, date: null },
  sources: ["https://github.com/SAT-R/sa2"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Game Boy Advance"],
  summary: "Sonic Advance 2 is a 2002 platform game developed by Dimps and published by Sega for the Game Boy Advance. It is an installment in the Sonic the Hedgehog series and the sequel to 2001's Sonic Advance. The story follows Sonic as he sets out to save his friends and retrieve the seven magical Chaos Emeralds from Dr. Eggman. Gameplay consists of the player completing various levels as one of five characters, each with their own unique attributes. After each zone is completed, the player faces Dr. Eggman in a boss battle.",
  summaryEs: "Sonic Advance 2 es un videojuego desarrollado por SEGA en 2002 para la Game Boy Advance. Este juego es el segundo de la serie Sonic que aparece para una portátil de Nintendo, continuando así la línea marcada por su antecesor, Sonic Advance.",
  notes:
    "Decompilation and port of Sonic Advance 1 and 2. A research codebase; it requires game files from a copy you own.",
  notesEs:
    "Decompilación y port de Sonic Advance 1 y 2. Código de investigación; requiere archivos del juego de una copia que poseas.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/a/a1/Sonic_Advance_2_Coverart.png",
    alt: "Sonic Advance 2 (cover)",
    credit: "Wikipedia",
  },
};
