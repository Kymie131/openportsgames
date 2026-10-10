import type { Port } from "@/lib/ports/schema";

export const ufcUndisputed3Recomp: Port = {
  schema: "port",
  id: "ufc-undisputed-3-recomp",
  title: "UFC Undisputed 3 Recompiled",
  game: "UFC Undisputed 3",
  developers: ["paulogaab21"],
  publisher: "THQ",
  originalYear: 2012,
  portType: "recompilation",
  genre: "sports",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/paulogaab21/ufc3recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Xbox 360",
  notes:
    "Native PC recompilation of UFC Undisputed 3 (Xbox 360) with ReXGlue. The game is not included.",
  notesEs:
    "Recompilación nativa para PC de UFC Undisputed 3 (Xbox 360) con ReXGlue. El juego no se incluye.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/d/d0/UFC_Undisputed_3_cover.png",
    alt: "UFC Undisputed 3 (box art)",
    credit: "Wikipedia",
  },
};
