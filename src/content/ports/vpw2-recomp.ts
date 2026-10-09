import type { Port } from "@/lib/ports/schema";

export const vpw2Recomp: Port = {
  schema: "port",
  id: "vpw2-recomp",
  title: "Virtual Pro Wrestling 2",
  game: "Virtual Pro Wrestling 2",
  developers: ["jessetbh"],
  publisher: "Asmik Ace",
  originalYear: 2000,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/jessetbh/VPW2Recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Nintendo 64",
  notes:
    "Static recompilation of Virtual Pro Wrestling 2 (N64) with N64Recomp and the RT64 renderer. It requires your own copy of the game.",
  notesEs:
    "Recompilación estática de Virtual Pro Wrestling 2 (N64) con N64Recomp y el renderizador RT64. Requiere tu propia copia del juego.",
};
