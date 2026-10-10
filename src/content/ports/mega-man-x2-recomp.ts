import type { Port } from "@/lib/ports/schema";

export const megaManX2Recomp: Port = {
  schema: "port",
  id: "mega-man-x2-recomp",
  title: "MegaManX2SNESRecomp",
  game: "Mega Man X2",
  developers: ["mstan"],
  publisher: "Capcom",
  originalYear: 1994,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/MegaManX2Recomp"],
  license: { spdx: "PolyForm-Noncommercial-1.0.0", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystem: "Super Nintendo",
  notes:
    "Native recompilation of Mega Man X2 for the Super Nintendo. The player supplies their own legally obtained ROM; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Mega Man X2 para Super Nintendo. El jugador aporta su propia ROM obtenida legalmente; el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Mega%20Man%20X2%20(USA).png",
    alt: "Mega Man X2 (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Snaps/Mega%20Man%20X2%20(USA).png",
      alt: "Mega Man X2 (screenshot)",
      credit: "Libretro",
    },
  ],
};
