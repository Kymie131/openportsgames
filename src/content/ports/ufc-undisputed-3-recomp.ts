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
    "Static recompilation of UFC Undisputed 3 (Xbox 360) with ReXGlue. It requires your own copy of the game.",
  notesEs:
    "Recompilación estática de UFC Undisputed 3 (Xbox 360) con ReXGlue. Requiere tu propia copia del juego.",
};
