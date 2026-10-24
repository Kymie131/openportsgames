import type { Port } from "@/lib/ports/schema";

export const sdlPoP: Port = {
  schema: "port",
  id: "sdlpop",
  title: "SDLPoP",
  game: "Prince of Persia",
  developers: ["Nagy David"],
  publisher: "Brøderbund",
  originalYear: 1989,
  genre: "action-adventure",
  openSource: true,
  portType: "source-port",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/NagyD/SDLPoP"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  originalSystems: ["MS-DOS"],
  features: ["SDL2 backends", "Restored level editor", "Modern display scaling options"],
  featuresEs: [
    "Backends SDL2",
    "Editor de niveles restaurado",
    "Opciones modernas de escalado de pantalla",
  ],
  summary: "Prince of Persia is a 2008 action-adventure game developed by Ubisoft Montreal and published by Ubisoft. It is the seventh main installment in the Prince of Persia franchise, and the second reboot, establishing a new continuity that is separate from other games in the series. It was released in the United States on December 2, 2008, for PlayStation 3 and Xbox 360, and on December 9 for Windows. It was released on March 24, 2009, for Mac OS X via the Cider engine.",
  summaryEs: "Prince of Persia es un videojuego de acción-aventura y plataformas desarrollado por Ubisoft Montreal y publicado por Ubisoft. Fue lanzado el 2 de diciembre de 2008 para PlayStation 3 y Xbox 360, mientras que la versión para Microsoft Windows se estrenó el 9 de diciembre de 2008.",
  notes:
    "Port of the Apple II original of Prince of Persia. No tagged releases are published on GitHub.",
  notesEs:
    "Port del Prince of Persia original de Apple II. No se publican releases etiquetadas en GitHub.",
  cover: {
    src: "https://thumbnails.libretro.com/DOS/Named_Boxarts/Prince%20of%20Persia.png",
    alt: "Prince of Persia (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/DOS/Named_Snaps/Prince%20of%20Persia.png",
      alt: "Prince of Persia (screenshot)",
      credit: "Libretro",
    },
  ],
};
