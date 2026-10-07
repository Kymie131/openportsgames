import type { Port } from "@/lib/ports/schema";

export const wetRecomp: Port = {
  schema: "port",
  id: "wet-recomp",
  title: "WetRecomp",
  game: "Wet",
  developers: ["nikolaygorb"],
  publisher: "Bethesda Softworks",
  originalYear: 2009,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/nikolaygorb/WetRecomp"],
  license: { spdx: "MIT" },
  verified: false,
  originalSystem: "Xbox 360",
  notes:
    "Native recompilation of Wet (Xbox 360). The player supplies their own legally obtained disc dump; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Wet (Xbox 360). El jugador aporta su propio material obtenido legalmente (disc dump); el repositorio no incluye contenido del juego.",
};
