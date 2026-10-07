import type { Port } from "@/lib/ports/schema";

export const faxanaduRecomp: Port = {
  schema: "port",
  id: "faxanadu-recomp",
  title: "FaxanaduRecomp",
  game: "Faxanadu",
  developers: ["mstan"],
  publisher: "Hudson Soft",
  originalYear: 1987,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/FaxanaduRecomp"],
  license: { spdx: "PolyForm-Noncommercial-1.0.0", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystem: "Nintendo Entertainment System",
  notes:
    "Native recompilation of Faxanadu (Nintendo Entertainment System). The player supplies their own legally obtained ROM; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Faxanadu (Nintendo Entertainment System). El jugador aporta su propio material obtenido legalmente (ROM); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%20Entertainment%20System/Named_Boxarts/Faxanadu%20(USA).png",
    alt: "Faxanadu (box art)",
    credit: "Box art",
  },
};
