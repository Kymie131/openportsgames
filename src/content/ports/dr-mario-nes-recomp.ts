import type { Port } from "@/lib/ports/schema";

export const drMarioNesRecomp: Port = {
  schema: "port",
  id: "dr-mario-nes-recomp",
  title: "DrMarioNesRecomp",
  game: "Dr. Mario",
  developers: ["mstan"],
  publisher: "Nintendo",
  originalYear: 1990,
  portType: "recompilation",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/DrMarioNesRecomp"],
  license: { spdx: "PolyForm-Noncommercial-1.0.0", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystem: "Nintendo Entertainment System",
  notes:
    "Native recompilation of Dr. Mario (Nintendo Entertainment System). The player supplies their own legally obtained ROM; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Dr. Mario (Nintendo Entertainment System). El jugador aporta su propio material obtenido legalmente (ROM); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%20Entertainment%20System/Named_Boxarts/Dr.%20Mario%20(USA)%20(Beta).png",
    alt: "Dr. Mario (box art)",
    credit: "Box art",
  },
};
