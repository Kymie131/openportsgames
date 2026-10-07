import type { Port } from "@/lib/ports/schema";

export const wcwNwoRevengeRecomp: Port = {
  schema: "port",
  id: "wcw-nwo-revenge-recomp",
  title: "WCW/nWo Revenge: Recompiled",
  game: "WCW/nWo Revenge",
  developers: ["jessetbh"],
  publisher: "THQ",
  originalYear: 1998,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/jessetbh/WCWnWoRevengeRecomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Nintendo 64",
  notes:
    "Native recompilation of WCW/nWo Revenge (Nintendo 64). The player supplies their own legally obtained ROM; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de WCW/nWo Revenge (Nintendo 64). El jugador aporta su propio material obtenido legalmente (ROM); el repositorio no incluye contenido del juego.",
};
