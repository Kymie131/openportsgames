import type { Port } from "@/lib/ports/schema";

export const wwfNoMercyRecomp: Port = {
  schema: "port",
  id: "wwf-no-mercy-recomp",
  title: "WWF No Mercy",
  game: "WWF No Mercy",
  developers: ["jessetbh"],
  publisher: "THQ",
  originalYear: 2000,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/jessetbh/WWFNoMercyRecomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Nintendo 64",
  notes:
    "Static recompilation of WWF No Mercy (N64) with N64Recomp and the RT64 renderer. It requires your own copy of the game.",
  notesEs:
    "Recompilación estática de WWF No Mercy (N64) con N64Recomp y el renderizador RT64. Requiere tu propia copia del juego.",
};
