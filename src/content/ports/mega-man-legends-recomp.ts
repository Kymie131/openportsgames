import type { Port } from "@/lib/ports/schema";

export const megaManLegendsRecomp: Port = {
  schema: "port",
  id: "mega-man-legends-recomp",
  title: "Mega Man Legends Recompiled",
  game: "Mega Man Legends",
  developers: ["alexbeavs"],
  publisher: "Capcom",
  originalYear: 1997,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/mega-man-legends-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Mega Man Legends is a 1997 video game released by Capcom. It is the first game in the Mega Man Legends sub-series of Mega Man games from Capcom, and the second major 3D polygonal Mega Man title in the franchise, following Mega Man: Battle & Chase. It was released for the PlayStation in 1997 in Japan, and in 1998 in North America. A Nintendo 64 port was released in 2000 with the same title, but it was renamed Mega Man 64 for the North American release in 2001. It was also ported to Windows in 2001, and to the PlayStation Portable in 2005, the latter only in Japan.",
  summaryEs: "Mega Man Legends, también conocido como Rockman DASH en Japón, es un videojuego de rol de acción puesto a la venta en 1997 por Capcom. Es el primer título de la exitosa franquicia de videojuegos Mega Man en tener gráficos completamente en 3D. Además la historia y el modo de juego cambian mucho con respecto a las demás sagas, ya que aquí Mega Man es un excavador que busca un tesoro de proporciones gigantescas conocido como la Mother Load.",
  notes:
    "Recompilation of Mega Man Legends (PS1, Europe SLES-01485) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Mega Man Legends (PS1, Europe SLES-01485) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Mega%20Man%20Legends%20(Europe).png",
    alt: "Mega Man Legends (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Mega%20Man%20Legends%20(Europe).png",
      alt: "Mega Man Legends (screenshot)",
      credit: "Libretro",
    },
  ],
};
