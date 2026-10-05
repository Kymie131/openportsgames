import type { Port } from "@/lib/ports/schema";

export const marioKart64Recomp: Port = {
  schema: "port",
  id: "mario-kart-64-recomp",
  title: "MarioKart 64: Recompiled",
  game: "Mario Kart 64",
  developers: ["sonicdcer"],
  publisher: "Nintendo",
  originalYear: 1996,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/sonicdcer/MarioKart64Recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Nintendo 64",
  notes:
    "Native recompilation of Mario Kart 64 (Nintendo 64). The player supplies their own legally obtained ROM; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Mario Kart 64 (Nintendo 64). El jugador aporta su propio material obtenido legalmente (ROM); el repositorio no incluye contenido del juego.",
};
