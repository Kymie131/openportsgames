import type { Port } from "@/lib/ports/schema";

export const pgr4Recomp: Port = {
  schema: "port",
  id: "pgr4-recomp",
  title: "Project Gotham Racing 4 Recompiled",
  game: "Project Gotham Racing 4",
  developers: ["beatrixzy"],
  publisher: "Microsoft Game Studios",
  originalYear: 2007,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/beatrixzy/PGR4-Recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Xbox 360",
  notes:
    "Static recompilation of Project Gotham Racing 4 (Xbox 360) with ReXGlue. It requires your own copy of the game.",
  notesEs:
    "Recompilación estática de Project Gotham Racing 4 (Xbox 360) con ReXGlue. Requiere tu propia copia del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/8/88/PGR4boxart.jpg",
    alt: "Project Gotham Racing 4 (box art)",
    credit: "Wikipedia",
  },
};
