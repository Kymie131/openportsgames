import type { Port } from "@/lib/ports/schema";

export const superRobotWars64Recomp: Port = {
  schema: "port",
  id: "super-robot-wars-64-recomp",
  title: "Super Robot Wars 64",
  game: "Super Robot Wars 64",
  developers: ["dyzz"],
  publisher: "Banpresto",
  originalYear: 1999,
  portType: "recompilation",
  genre: "strategy",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/dyzz/srw64-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Nintendo 64",
  notes:
    "Static recompilation of Super Robot Wars 64 (N64) with N64Recomp and the RT64 renderer. It requires your own copy of the game.",
  notesEs:
    "Recompilación estática de Super Robot Wars 64 (N64) con N64Recomp y el renderizador RT64. Requiere tu propia copia del juego.",
};
