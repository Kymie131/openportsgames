import type { Port } from "@/lib/ports/schema";

export const superMarioBrosNesRecomp: Port = {
  schema: "port",
  id: "super-mario-bros-nes-recomp",
  title: "SuperMarioBrosRecomp",
  game: "Super Mario Bros.",
  developers: ["mstan"],
  publisher: "Nintendo",
  originalYear: 1985,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/SuperMarioBrosNESRecomp"],
  license: { spdx: "PolyForm-Noncommercial-1.0.0", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystem: "Nintendo Entertainment System",
  notes:
    "Native recompilation of Super Mario Bros. (NES). The player supplies their own legally obtained ROM; the repository ships no game content. An earlier fork by TechnicallyComputers exists; this is the repository listed here.",
  notesEs:
    "Recompilación nativa de Super Mario Bros. (NES). El jugador aporta su propia ROM obtenida legalmente; el repositorio no incluye contenido del juego. Existe un fork anterior de TechnicallyComputers; este es el repositorio listado aquí.",
};
