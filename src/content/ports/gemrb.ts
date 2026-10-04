import type { Port } from "@/lib/ports/schema";

export const gemrb: Port = {
  schema: "port",
  id: "gemrb",
  title: "GemRB",
  game: "Baldur's Gate",
  developers: ["BioWare"],
  publisher: "Black Isle Studios",
  originalYear: 1998,
  portType: "reimplementation",
  genre: "rpg",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "0.9.5", date: "2026-03-23" },
  sources: ["https://github.com/gemrb/gemrb"],
  website: "https://www.gemrb.org/",
  license: {
    spdx: "GPL-2.0",
  },
  verified: true,
  verifiedAt: "2026-09-19",
  screenshots: [
    {
      src: "https://gemrb.github.io/assets/img/screenshots/bg2.jpg",
      alt: "Baldur's Gate II gameplay running inside GemRB",
      credit: "GemRB",
    },
  ],
  notes:
    "Portable reimplementation of BioWare's Infinity Engine, running Baldur's Gate I & II, Icewind Dale and Planescape: Torment. Requires the original game data.",
  notesEs:
    "Reimplementación portátil del Infinity Engine de BioWare, que ejecuta Baldur's Gate I y II, Icewind Dale y Planescape: Torment. Requiere los datos del juego original.",
};
