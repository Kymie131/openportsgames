import type { Port } from "@/lib/ports/schema";

export const Wild9: Port = {
  schema: "port",
  id: "wild-9",
  title: "Wild 9",
  game: "Wild 9",
  developers: ["plinkr"],
  publisher: "Interplay Entertainment",
  originalYear: 1998,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/plinkr/Wild9-Decompilation"],
  license: { spdx: "AGPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/a/a4/Wild_9_Coverart.png",
    alt: "Wild 9 (box art)",
    credit: "Wikipedia",
  },
  summary: "Wild 9 is a 2.5D platform video game for the PlayStation. The game was designed by David Perry, developed by Shiny Entertainment, and published by Interplay Productions, all of whom were involved in Earthworm Jim series of video games. The game was released in North America and Europe in September 1998.",
  summaryEs: "Wild 9 es un videojuego de acción y aventura publicado por Interplay Entertainment en 1998.",
  notes:
    "Matching decompilation of `Wild 9` for the Sony PlayStation 1, targeting the NTSC-U SLUS_004.25 executable, built with a reproducible GCC 2.8.0 PSX and GNU binutils 2.42 toolchain.",
  notesEs:
    "Decompilación que coincide de Wild 9 para Sony PlayStation 1, apuntando al ejecutable NTSC-U SLUS_004.25 y compilada con una cadena reproducible de GCC 2.8.0 PSX y GNU binutils.",
};
