import type { Port } from "@/lib/ports/schema";

export const pacManNesRecomp: Port = {
  schema: "port",
  id: "pac-man-nes-recomp",
  title: "PacManRecomp",
  game: "Pac-Man",
  developers: ["Mr-Shizzy"],
  publisher: "Namco",
  originalYear: 1984,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Mr-Shizzy/PacManRecomp"],
  license: { spdx: "MIT" },
  verified: false,
  originalSystem: "Nintendo Entertainment System",
  notes:
    "Native recompilation of Pac-Man (Nintendo Entertainment System). The player supplies their own legally obtained ROM; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Pac-Man (Nintendo Entertainment System). El jugador aporta su propio material obtenido legalmente (ROM); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%20Entertainment%20System/Named_Boxarts/Pac-Man%20(USA)%20(Namco).png",
    alt: "Pac-Man (box art)",
    credit: "Box art",
  },
};
