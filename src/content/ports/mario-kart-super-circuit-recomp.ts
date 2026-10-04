import type { Port } from "@/lib/ports/schema";

export const marioKartSuperCircuitRecomp: Port = {
  schema: "port",
  id: "mario-kart-super-circuit-recomp",
  title: "Mario Kart: Super Circuit Recomp",
  game: "Mario Kart: Super Circuit",
  developers: ["mstan"],
  publisher: "Nintendo",
  originalYear: 2001,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/MarioKartSuperCircuitRecomp"],
  license: { spdx: "PolyForm-Noncommercial-1.0.0", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystem: "Game Boy Advance",
  notes:
    "Native recompilation of Mario Kart: Super Circuit (Game Boy Advance). The player supplies their own legally obtained ROM; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Mario Kart: Super Circuit (Game Boy Advance). El jugador aporta su propia ROM obtenida legalmente; el repositorio no incluye contenido del juego.",
};
