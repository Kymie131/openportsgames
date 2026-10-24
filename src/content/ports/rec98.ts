import type { Port } from "@/lib/ports/schema";

export const rec98: Port = {
  schema: "port",
  id: "rec98",
  title: "ReC98",
  game: "Touhou PC-98",
  developers: ["nmlgc"],
  publisher: "ZUN",
  originalYear: 1996,
  portType: "decompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/nmlgc/ReC98"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PC-98"],
  summary: "The PC-9800 series, commonly shortened to PC-98 or simply 98 , is a lineup of Japanese 16-bit and 32-bit personal computers manufactured by NEC from 1982 to 2003. While based on standard x86-16 and x86-32 processors, it uses an in-house architecture making it incompatible with IBM clones; some PC-98 computers used NEC's own V30 processor. The platform established NEC's dominance in the Japanese personal computer market, and, by 1999, more than 18 million units had been sold.",
  summaryEs: "El término null, nulo o nil es a menudo utilizado en la computación para hacer referencia a la nada. Su significado y uso varía según el lenguaje de programación.",
  notes:
    "Reverse-engineering project for the first five Touhou games on PC-98. A research codebase; it requires game files from a copy you own.",
  notesEs:
    "Proyecto de ingeniería inversa de los primeros cinco juegos de Touhou en PC-98. Código de investigación; requiere archivos del juego de una copia que poseas.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/0/0f/TH1to5_covers.jpg",
    alt: "Touhou PC-98 (covers)",
    credit: "Wikipedia",
  },
};
