import type { Port } from "@/lib/ports/schema";

export const dkc2Recomp: Port = {
  schema: "port",
  id: "dkc2-recomp",
  title: "DKC2Recomp",
  game: "Donkey Kong Country 2: Diddy's Kong Quest",
  developers: ["mstan"],
  publisher: "Nintendo",
  originalYear: 1995,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/DKC2Recomp"],
  license: { spdx: "MIT" },
  verified: false,
  originalSystem: "Super Nintendo",
  notes:
    "Native recompilation of Donkey Kong Country 2 for the Super Nintendo. The player supplies their own legally obtained ROM; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Donkey Kong Country 2 para Super Nintendo. El jugador aporta su propia ROM obtenida legalmente; el repositorio no incluye contenido del juego.",
};
