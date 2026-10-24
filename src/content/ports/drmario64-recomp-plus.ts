import type { Port } from "@/lib/ports/schema";

export const drMario64RecompPlus: Port = {
  schema: "port",
  id: "drmario64-recomp-plus",
  title: "Dr. Mario 64 Recomp",
  game: "Dr. Mario 64",
  developers: ["theboy181"],
  publisher: "Nintendo",
  originalYear: 2001,
  portType: "recompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/theboy181/drmario64_recomp_plus"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Nintendo 64"],
  summary: "Dr. Mario 64 is a 2001 tile-matching action puzzle game developed and published by Nintendo for the Nintendo 64. The game is an enhanced remake of Dr. Mario, which was originally released for the NES and Game Boy consoles in 1990, and is based around characters from the 2000 Game Boy Color game Wario Land 3. The game's soundtrack was composed by Seiichi Tokunaga, featuring arrangements of classic Dr. Mario tunes and new compositions. The game was released in North America on April 9, 2001.",
  summaryEs: "Dr. Mario 64 es un videojuego de lógica basado en el juego Dr. Mario. Fue desarrollado por la compañía Newcome y distribuido por Nintendo, publicado para la Nintendo 64 en 2001, y es la continuación del citado Dr Mario, que apareció en 1990 para las consolas NES y Game Boy.",
  notes:
    "Native recompilation of Dr. Mario 64 with extra quality-of-life additions. The player supplies their own legally obtained ROM; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Dr. Mario 64 con mejoras de calidad de vida. El jugador aporta su propia ROM obtenida legalmente; el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Dr.%20Mario%2064%20(USA).png",
    alt: "Dr. Mario 64 (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Snaps/Dr.%20Mario%2064%20(USA).png",
      alt: "Dr. Mario 64 (screenshot)",
      credit: "Libretro",
    },
  ],
};
