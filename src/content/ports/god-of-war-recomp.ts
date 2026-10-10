import type { Port } from "@/lib/ports/schema";

export const godOfWarRecomp: Port = {
  schema: "port",
  id: "god-of-war-recomp",
  title: "God of War Recompiled",
  game: "God of War",
  developers: ["KIexster"],
  publisher: "Sony Computer Entertainment",
  originalYear: 2005,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/KIexster/god-of-war-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation 2",
  notes:
    "Static recompilation of God of War (PlayStation 2) with ReXGlue. It requires your own copy of the game.",
  notesEs:
    "Recompilación estática de God of War (PlayStation 2) con ReXGlue. Requiere tu propia copia del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg",
    alt: "God of War (box art)",
    credit: "Wikipedia",
  },
};
