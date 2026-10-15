import type { Port } from "@/lib/ports/schema";

export const Tombi: Port = {
  schema: "port",
  id: "tombi",
  title: "Tombi!",
  game: "Tombi!",
  developers: ["afsenovilla"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/afsenovilla/Tombi-Decomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "PlayStation",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/7/75/Tomba%21_NTSC.png",
    alt: "Tombi! (box art)",
    credit: "Wikipedia",
  },
  notes:
    "A work-in-progress matching decompilation of Tombi! (known as Tomba! in North America and Ore! Tomba in Japan) for the original PlayStation. The goal is C source code that compiles, with the game's original toolchain, into byte-identical machine code.",
  notesEs:
    "Decompilación que coincide de Tombi! (Tomba! en Norteamérica y Ore! Tomba en Japón) para el PlayStation original, en desarrollo. El objetivo es código C que compile, con las herramientas originales del juego, a código máquina idéntico byte a byte.",
};
