import type { Port } from "@/lib/ports/schema";

export const rockBand3Recomp: Port = {
  schema: "port",
  id: "rock-band-3-recomp",
  title: "Rock Band 3 Recompiled",
  game: "Rock Band 3",
  developers: ["ihatecompvir"],
  publisher: "MTV Games",
  originalYear: 2010,
  portType: "recompilation",
  genre: "music",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/ihatecompvir/band3_recomp"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Xbox 360",
  notes:
    "Static recompilation of Rock Band 3 (Xbox 360) for Windows. It needs your own copy of the game.",
  notesEs:
    "Recompilación estática de Rock Band 3 (Xbox 360) para Windows. Necesita tu propia copia del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/3/3b/Rock_Band_3_Game_Cover.jpg",
    alt: "Rock Band 3 (cover)",
    credit: "Wikipedia",
  },
};
