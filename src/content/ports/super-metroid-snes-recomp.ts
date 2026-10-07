import type { Port } from "@/lib/ports/schema";

export const superMetroidSnesRecomp: Port = {
  schema: "port",
  id: "super-metroid-snes-recomp",
  title: "SuperMetroidRecomp",
  game: "Super Metroid",
  developers: ["mstan"],
  publisher: "Nintendo",
  originalYear: 1994,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/SuperMetroidRecomp"],
  license: { spdx: "PolyForm-Noncommercial-1.0.0", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystem: "Super Nintendo",
  notes:
    "Native recompilation of Super Metroid (Super Nintendo). The player supplies their own legally obtained ROM; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Super Metroid (Super Nintendo). El jugador aporta su propio material obtenido legalmente (ROM); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Metroid%20-%20Redux%20(USA).png",
    alt: "Super Metroid (box art)",
    credit: "Box art",
  },
};
