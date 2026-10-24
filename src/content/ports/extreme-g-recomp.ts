import type { Port } from "@/lib/ports/schema";

export const extremeGRecomp: Port = {
  schema: "port",
  id: "extreme-g-recomp",
  title: "Extreme-G Recompiled",
  game: "Extreme-G",
  developers: ["sp00nznet"],
  publisher: "Acclaim Entertainment",
  originalYear: 1997,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/sp00nznet/extremeg"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Nintendo 64"],
  summary: "Extreme-G is a futuristic racing video game developed by Probe Entertainment and published by Acclaim Entertainment, featuring an original trance soundtrack. It was released for the Nintendo 64 in 1997, with a Japan release on May 29, 1998. Despite the competitive landscape of Nintendo 64 racing games, Extreme-G received moderately positive reviews and achieved commercial success. A sequel, Extreme-G 2, was launched in 1998, followed by two additional titles: Extreme-G 3 (2001) and XGRA: Extreme-G Racing Association (2003).",
  summaryEs: "Extreme-G es un videojuego de carreras futurista desarrollado por Probe Entertainment y publicado por Acclaim Entertainment, con una banda sonora de trance original. Fue lanzado para Nintendo 64 en 1997, y fue lanzado en Japón el 29 de mayo de 1998. A pesar del abarrotado campo de juegos de carreras de Nintendo 64, Extreme-G recibió críticas moderadamente positivas y fue un éxito comercial. En 1998 se lanzó una secuela, Extreme-G 2, seguida de dos juegos adicionales: Extreme-G 3 y XGRA: Extreme G Racing Association.",
  notes:
    "Static recompilation of Extreme-G (Nintendo 64) to a native PC executable. It needs the original game and ships no assets.",
  notesEs:
    "Recompilación estática de Extreme-G (Nintendo 64) a un ejecutable nativo para PC. Necesita el juego original y no incluye recursos.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Extreme-G%20(Europe)%20(En,Fr,De,Es,It).png",
    alt: "Extreme-G (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Snaps/Extreme-G%20(Europe)%20(En,Fr,De,Es,It).png",
      alt: "Extreme-G (screenshot)",
      credit: "Libretro",
    },
  ],
};
