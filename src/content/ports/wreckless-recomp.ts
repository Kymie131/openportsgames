import type { Port } from "@/lib/ports/schema";

export const wrecklessRecomp: Port = {
  schema: "port",
  id: "wreckless-recomp",
  title: "Wreckless: The Yakuza Missions",
  game: "Wreckless: The Yakuza Missions",
  developers: ["sp00nznet"],
  publisher: "Activision",
  originalYear: 2002,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/sp00nznet/wreckless"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Xbox",
  notes:
    "Static recompilation of Wreckless: The Yakuza Missions (Xbox) with ReXGlue. It requires your own copy of the game.",
  notesEs:
    "Recompilación estática de Wreckless: The Yakuza Missions (Xbox) con ReXGlue. Requiere tu propia copia del juego.",
};
