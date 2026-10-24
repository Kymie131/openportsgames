import type { Port } from "@/lib/ports/schema";

export const lsdDecomp: Port = {
  schema: "port",
  id: "lsd-decomp",
  title: "LSD: Dream Emulator Decompilation",
  game: "LSD: Dream Emulator",
  developers: ["brian-oblivion"],
  publisher: "Asmik Ace",
  originalYear: 1998,
  portType: "decompilation",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  wip: true,
  release: { version: null, date: null },
  sources: ["https://github.com/brian-oblivion/lsddecomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation"],
  summary: "LSD: Dream Emulator is a 1998 exploration-adventure game by Asmik Ace Entertainment, released for the PlayStation. In LSD, the player explores surreal environments without any objective. If they touch anything in the environment, such as walls, creatures or objects, they will be warped to another setting. The game was conceived by Japanese artist Osamu Sato, who rejected the idea of games, and wanted to use the PlayStation as a medium for creating contemporary art. The game's concept is based on a dream diary kept by an Asmik Ace employee for over a decade.",
  summaryEs: "El término null, nulo o nil es a menudo utilizado en la computación para hacer referencia a la nada. Su significado y uso varía según el lenguaje de programación.",
  notes:
    "Decompilation of LSD: Dream Emulator for the PlayStation. A research codebase; it requires game files from a copy you own.",
  notesEs:
    "Decompilación de LSD: Dream Emulator para PlayStation. Código de investigación; requiere archivos del juego de una copia que poseas.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/a/a9/LSD_Coverart.png",
    alt: "LSD: Dream Emulator (cover)",
    credit: "Wikipedia",
  },
};
