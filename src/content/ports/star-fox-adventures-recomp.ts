import type { Port } from "@/lib/ports/schema";

export const starFoxAdventuresRecomp: Port = {
  schema: "port",
  id: "star-fox-adventures-recomp",
  title: "Star Fox Adventures (FoxHollow)",
  game: "Star Fox Adventures",
  developers: ["JackPriceBurns"],
  publisher: "Nintendo",
  originalYear: 2002,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/JackPriceBurns/foxhollow"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "GameCube",
  notes:
    "Static recompilation of Star Fox Adventures (GameCube) with ReXGlue. It requires your own copy of the game.",
  notesEs:
    "Recompilación estática de Star Fox Adventures (GameCube) con ReXGlue. Requiere tu propia copia del juego.",
};
