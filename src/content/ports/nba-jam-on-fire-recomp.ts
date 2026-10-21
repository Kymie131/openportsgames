import type { Port } from "@/lib/ports/schema";

export const nbaJamOnFireRecomp: Port = {
  schema: "port",
  id: "nba-jam-on-fire-recomp",
  title: "NBA Jam: On Fire Edition Recompiled",
  game: "NBA Jam: On Fire Edition",
  developers: ["GTTeancum"],
  publisher: "EA Sports",
  originalYear: 2011,
  portType: "recompilation",
  genre: "sports",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/GTTeancum/OpenJam"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Xbox 360"],
  notes:
    "Native PC port of NBA Jam: On Fire Edition (Xbox 360 XBLA). It needs your own copy of the game.",
  notesEs:
    "Port nativo para PC de NBA Jam: On Fire Edition (Xbox 360 XBLA). Necesita tu propia copia del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/8/89/Nba_jam_2010_cover.png",
    alt: "NBA Jam (cover)",
    credit: "Wikipedia",
  },
};
