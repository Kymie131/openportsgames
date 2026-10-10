import type { Port } from "@/lib/ports/schema";

export const playstationAllStarsRecomp: Port = {
  schema: "port",
  id: "playstation-all-stars-recomp",
  title: "PlayStation All-Stars Recompiled",
  game: "PlayStation All-Stars Battle Royale",
  developers: ["ColinGamez"],
  publisher: "Sony Computer Entertainment",
  originalYear: 2012,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/ColinGamez/allstars-ps3"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation 3",
  notes:
    "Native PC port of PlayStation All-Stars Battle Royale (PS3) built with ps3recomp, still in active development. It needs a copy of the game.",
  notesEs:
    "Port nativo para PC de PlayStation All-Stars Battle Royale (PS3) construido con ps3recomp, todavía en desarrollo activo. Necesita una copia del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/c/ca/PlayStationAllStars.jpg",
    alt: "PlayStation All-Stars Battle Royale (box art)",
    credit: "Wikipedia",
  },
};
