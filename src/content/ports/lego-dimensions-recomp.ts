import type { Port } from "@/lib/ports/schema";

export const legoDimensionsRecomp: Port = {
  schema: "port",
  id: "lego-dimensions-recomp",
  title: "LEGO Dimensions Recompiled",
  game: "LEGO Dimensions",
  developers: ["NeverCookFirst"],
  publisher: "Warner Bros. Interactive Entertainment",
  originalYear: 2015,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/NeverCookFirst/DimensionsRecomp"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Xbox 360",
  notes:
    "Native recompilation of LEGO Dimensions (Xbox 360) for Windows. It needs your own copy of the game.",
  notesEs:
    "Recompilación nativa de LEGO Dimensions (Xbox 360) para Windows. Necesita tu propia copia del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/f/ff/Lego_Dimensions_PS4_Box_Cover.jpg",
    alt: "LEGO Dimensions (cover)",
    credit: "Wikipedia",
  },
};
