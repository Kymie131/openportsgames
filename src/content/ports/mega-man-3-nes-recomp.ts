import type { Port } from "@/lib/ports/schema";

export const megaMan3NesRecomp: Port = {
  schema: "port",
  id: "mega-man-3-nes-recomp",
  title: "Megaman3NESRecomp",
  game: "Mega Man 3",
  developers: ["mstan"],
  publisher: "Capcom",
  originalYear: 1990,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/Megaman3NESRecomp"],
  license: { spdx: "PolyForm-Noncommercial-1.0.0", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystem: "Nintendo Entertainment System",
  notes:
    "Native recompilation of Mega Man 3 (Nintendo Entertainment System). The player supplies their own legally obtained ROM; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Mega Man 3 (Nintendo Entertainment System). El jugador aporta su propio material obtenido legalmente (ROM); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%20Entertainment%20System/Named_Boxarts/Mega%20Man%203%20(USA).png",
    alt: "Mega Man 3 (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%20Entertainment%20System/Named_Snaps/Mega%20Man%203%20(USA).png",
      alt: "Mega Man 3 (screenshot)",
      credit: "Libretro",
    },
  ],
};
