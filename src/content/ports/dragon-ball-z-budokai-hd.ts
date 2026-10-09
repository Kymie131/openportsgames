import type { Port } from "@/lib/ports/schema";

export const dragonBallZBudokaiHd: Port = {
  schema: "port",
  id: "dragon-ball-z-budokai-hd",
  title: "Dragon Ball Z: Budokai HD",
  game: "Dragon Ball Z: Budokai HD Collection",
  developers: ["WistfulHopes"],
  publisher: "Bandai Namco",
  originalYear: 2012,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/WistfulHopes/DBZ1"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Xbox 360",
  notes:
    "Static recompilation of Dragon Ball Z: Budokai HD Collection (Xbox 360) with ReXGlue. It requires your own copy of the game.",
  notesEs:
    "Recompilación estática de Dragon Ball Z: Budokai HD Collection (Xbox 360) con ReXGlue. Requiere tu propia copia del juego.",
};
