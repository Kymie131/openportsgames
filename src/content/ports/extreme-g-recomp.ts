import type { Port } from "@/lib/ports/schema";

export const extremeGRecomp: Port = {
  schema: "port",
  id: "extreme-g-recomp",
  title: "Extreme-G Recompiled",
  game: "Extreme-G",
  developers: ["sp00nznet"],
  publisher: "Acclaim Entertainment",
  originalYear: 1997,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/sp00nznet/extremeg"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Nintendo 64",
  notes:
    "Static recompilation of Extreme-G (Nintendo 64) to a native PC executable. It needs your own copy of the game and ships no assets.",
  notesEs:
    "Recompilación estática de Extreme-G (Nintendo 64) a un ejecutable nativo para PC. Necesita tu propia copia del juego y no incluye recursos.",
};
