import type { Port } from "@/lib/ports/schema";

export const saintsRowRecomp: Port = {
  schema: "port",
  id: "saints-row-recomp",
  title: "Saints Row Recompiled",
  game: "Saints Row",
  developers: ["whompay"],
  publisher: "THQ",
  originalYear: 2006,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/whompay/SaintsReborn"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Xbox 360",
  notes:
    "Static recompilation of Saints Row (Xbox 360) with ReXGlue. It requires your own copy of the game.",
  notesEs:
    "Recompilación estática de Saints Row (Xbox 360) con ReXGlue. Requiere tu propia copia del juego.",
};
