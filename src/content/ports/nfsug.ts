import type { Port } from "@/lib/ports/schema";

export const nfsug: Port = {
  schema: "port",
  id: "nfsug",
  title: "Need for Speed: Underground Decompilation",
  game: "Need for Speed: Underground",
  developers: ["dbalatoni13"],
  publisher: "Electronic Arts",
  originalYear: 2003,
  portType: "decompilation",
  type: "decomp-in-progress",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/dbalatoni13/nfsug"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "PlayStation 2",
  notes:
    "Decompilation of Need for Speed: Underground. A research codebase; it requires game files from a copy you own.",
  notesEs:
    "Decompilación de Need for Speed: Underground. Código de investigación; requiere archivos del juego de una copia que poseas.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/5/52/Need_for_Speed_Underground_cover.jpg",
    alt: "Need for Speed: Underground (cover)",
    credit: "Wikipedia",
  },
};
