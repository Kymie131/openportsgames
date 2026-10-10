import type { Port } from "@/lib/ports/schema";

export const megaManX6Recomp: Port = {
  schema: "port",
  id: "mega-man-x6-recomp",
  title: "MegaManX6Recomp",
  game: "Mega Man X6",
  developers: ["mstan"],
  publisher: "Capcom",
  originalYear: 2001,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/MegaManX6Recomp"],
  license: { spdx: "PolyForm-Noncommercial-1.0.0", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Native recompilation of Mega Man X6 (PlayStation). The player supplies their own legally obtained disc image; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Mega Man X6 (PlayStation). El jugador aporta su propio material obtenido legalmente (imagen de disco); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Mega%20Man%20X6%20(USA).png",
    alt: "Mega Man X6 (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Mega%20Man%20X6%20(USA).png",
      alt: "Mega Man X6 (screenshot)",
      credit: "Libretro",
    },
  ],
};
