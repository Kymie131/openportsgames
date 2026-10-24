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
  originalSystems: ["Nintendo 64"],
  summary: "WCW/nWo Revenge is a professional wrestling video game developed by Asmik Ace Entertainment and AKI Corporation and released by THQ in 1998 for the Nintendo 64 game console. It is the sequel to 1997's WCW vs. nWo: World Tour. Like its predecessor, Revenge features AKI's proprietary grappling system; as well as heavily improved graphics, a championship mode, and a large roster of wrestlers.",
  summaryEs: "WCW/nWo Revenge es un videojuego de lucha publicado por THQ en 1998.",
  notes:
    "Native recompilation of WCW/nWo Revenge (Nintendo 64). The player supplies their own legally obtained ROM; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de WCW/nWo Revenge (Nintendo 64). El jugador aporta su propio material obtenido legalmente (ROM); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/1/1d/WCWnWoRevengebox.jpg",
    alt: "WCW/nWo Revenge (box art)",
    credit: "Wikipedia",
  },
};
