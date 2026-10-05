import type { Port } from "@/lib/ports/schema";

export const dnzhRecomp: Port = {
  schema: "port",
  id: "dnzh-recomp",
  title: "DNZH Recomp",
  game: "Duke Nukem: Zero Hour",
  developers: ["sonicdcer"],
  publisher: "GT Interactive",
  originalYear: 1999,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/sonicdcer/DNZHRecomp"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  originalSystem: "Nintendo 64",
  notes:
    "Native recompilation of Duke Nukem: Zero Hour (Nintendo 64). The player supplies their own legally obtained ROM; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Duke Nukem: Zero Hour (Nintendo 64). El jugador aporta su propio material obtenido legalmente (ROM); el repositorio no incluye contenido del juego.",
};
