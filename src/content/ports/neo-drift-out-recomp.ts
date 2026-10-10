import type { Port } from "@/lib/ports/schema";

export const neoDriftOutRecomp: Port = {
  schema: "port",
  id: "neo-drift-out-recomp",
  title: "Neo Drift Out Recompiled",
  game: "Neo Drift Out",
  developers: ["sp00nznet"],
  publisher: "Visco",
  originalYear: 1996,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/sp00nznet/neodriftout"],
  license: { spdx: "MIT" },
  verified: false,
  originalSystem: "Neo Geo",
  notes:
    "Native PC port of Neo Drift Out through static recompilation of the original Neo Geo 68000 code. It needs your own copy of the game.",
  notesEs:
    "Port nativo para PC de Neo Drift Out mediante recompilación estática del código 68000 original de Neo Geo. Necesita tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/SNK%20-%20Neo%20Geo/Named_Boxarts/Neo%20Drift%20Out%20-%20New%20Technology.png",
    alt: "Neo Drift Out (box art)",
    credit: "Box art",
  },
};
