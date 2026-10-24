import type { Port } from "@/lib/ports/schema";

export const Jetpac: Port = {
  schema: "port",
  id: "jetpac",
  title: "Jetpac",
  game: "Jetpac",
  developers: ["mrcook"],
  publisher: "Ultimate Play the Game",
  originalYear: 1983,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/mrcook/jetpac-disassembly"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["ZX Spectrum"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/a/ad/Jetpac_Coverart.png",
    alt: "Jetpac (cover)",
    credit: "Wikipedia",
  },
  summary: "Jetpac is a platform video game developed and published by Ultimate Play the Game and released for the ZX Spectrum and VIC-20 in 1983 and the BBC Micro in 1984. It is the first game to be released by Ultimate Play the Game, the company which later became Rare. The game follows Jetman as he must rebuild his rocket using a jet pack in order to explore different planets, while simultaneously defending against hostile aliens. It was written by Ultimate co-founder Chris Stamper with graphics designed by his brother, Tim Stamper.",
  summaryEs: "Jet Pac es un videojuego para ZX Spectrum hecho por la compañía Ultimate Play The Game (Rare), nombre comercial de Ashby Computers&Graphics, en 1983.",
  notes: "JETPAC: fully annotated source code of this classic 8-bit game (1983, ZX Spectrum).",
  notesEs:
    "JETPAC: código fuente totalmente anotado de este clásico de 8 bits (1983, ZX Spectrum).",
};
