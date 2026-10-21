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
