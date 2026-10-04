import type { Port } from "@/lib/ports/schema";

export const tomba2Recomp: Port = {
  schema: "port",
  id: "tomba2-recomp",
  title: "Tomba2Recomp",
  game: "Tomba! 2: The Evil Swine Return",
  developers: ["mstan"],
  publisher: "Sony Computer Entertainment",
  originalYear: 1999,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/Tomba2Recomp"],
  license: { spdx: "PolyForm-Noncommercial-1.0.0", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Native recompilation of Tomba! 2 (PlayStation). The player supplies their own legally obtained disc image; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Tomba! 2 (PlayStation). El jugador aporta su propia imagen de disco obtenida legalmente; el repositorio no incluye contenido del juego.",
};
