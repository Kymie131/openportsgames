import type { Port } from "@/lib/ports/schema";

export const tombaRecomp: Port = {
  schema: "port",
  id: "tomba-recomp",
  title: "TombaRecomp",
  game: "Tomba!",
  developers: ["mstan"],
  publisher: "Sony Computer Entertainment",
  originalYear: 1997,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/TombaRecomp"],
  license: { spdx: "PolyForm-Noncommercial-1.0.0", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Native recompilation of Tomba! (PlayStation). The player supplies their own legally obtained disc image; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Tomba! (PlayStation). El jugador aporta su propia imagen de disco obtenida legalmente; el repositorio no incluye contenido del juego.",
};
