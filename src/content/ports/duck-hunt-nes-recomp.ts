import type { Port } from "@/lib/ports/schema";

export const duckHuntNesRecomp: Port = {
  schema: "port",
  id: "duck-hunt-nes-recomp",
  title: "DuckHuntNESRecomp",
  game: "Duck Hunt",
  developers: ["mstan"],
  publisher: "Nintendo",
  originalYear: 1984,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/DuckHuntNESRecomp"],
  license: { spdx: "PolyForm-Noncommercial-1.0.0", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystem: "Nintendo Entertainment System",
  notes:
    "Native recompilation of Duck Hunt (Nintendo Entertainment System). The player supplies their own legally obtained ROM; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Duck Hunt (Nintendo Entertainment System). El jugador aporta su propio material obtenido legalmente (ROM); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%20Entertainment%20System/Named_Boxarts/Duck%20Hunt%20(World).png",
    alt: "Duck Hunt (box art)",
    credit: "Box art",
  },
};
