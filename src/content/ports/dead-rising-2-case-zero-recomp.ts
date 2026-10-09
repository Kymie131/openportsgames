import type { Port } from "@/lib/ports/schema";

export const deadRising2CaseZeroRecomp: Port = {
  schema: "port",
  id: "dead-rising-2-case-zero-recomp",
  title: "Dead Rising 2: Case Zero",
  game: "Dead Rising 2: Case Zero",
  developers: ["wivi514"],
  publisher: "Capcom",
  originalYear: 2010,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/wivi514/Dead_Rising_2_Case_Zero_Xenon_Recomp"],
  license: { spdx: "PolyForm-Noncommercial-1.0.0", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystem: "Xbox 360",
  notes:
    "Native recompilation of Dead Rising 2: Case Zero (Xbox 360). The player supplies their own legally obtained disc dump; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Dead Rising 2: Case Zero (Xbox 360). El jugador aporta su propio material obtenido legalmente (disc dump); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/7/77/Dead_Rising_2_cover.jpg",
    alt: "Dead Rising 2: Case Zero (box art)",
    credit: "Wikipedia",
  },
};
