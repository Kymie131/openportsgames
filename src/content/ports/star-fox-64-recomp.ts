import type { Port } from "@/lib/ports/schema";

export const starFox64Recomp: Port = {
  schema: "port",
  id: "star-fox-64-recomp",
  title: "Starfox 64: Recompiled",
  game: "Star Fox 64",
  developers: ["sonicdcer"],
  publisher: "Nintendo",
  originalYear: 1997,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/sonicdcer/Starfox64Recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Nintendo 64",
  notes:
    "Native recompilation of Star Fox 64 (Nintendo 64). The player supplies their own legally obtained ROM; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Star Fox 64 (Nintendo 64). El jugador aporta su propio material obtenido legalmente (ROM); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Star%20Fox%2064%20(USA).png",
    alt: "Star Fox 64 (box art)",
    credit: "Box art",
  },
};
