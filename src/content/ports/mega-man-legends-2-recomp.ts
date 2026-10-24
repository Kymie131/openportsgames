import type { Port } from "@/lib/ports/schema";

export const megaManLegends2Recomp: Port = {
  schema: "port",
  id: "mega-man-legends-2-recomp",
  title: "Mega Man Legends 2 Recompiled",
  game: "Mega Man Legends 2",
  developers: ["alexbeavs"],
  publisher: "Capcom",
  originalYear: 2000,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/mega-man-legends-2-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Mega Man Legends 2 is a 2000 action-adventure game released by Capcom, acting as the sequel to Mega Man Legends. It was released for the PlayStation in 2000 for Japan and North America, and 2001 in Europe. Unchanged Japanese ports of the game were also released for the PC in Japan and parts of Asia in 2003 and for the PlayStation Portable in 2005. The game features Mega Man Volnutt's quest to find four keys hidden in the planet in order to aid in the search of the Mother Lode, a legendary treasure thought to be an infinite energy source.",
  summaryEs: "Megaman Legends 2 es un videojuego de rol desarrollado por la compañía japonesa Capcom en el año 2000. Supuso la continuación del medianamente exitoso Megaman Legends -Que fue el salto a los gráficos 3D del mítico personaje azul-. La versión de Nintendo 64 ha sido cancelada, y posteriormente un mes después la versión para Windows, terminando únicamente para PlayStation de Sony.",
  notes:
    "Recompilation of Mega Man Legends 2 (PS1, Europe SLES-03556) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Mega Man Legends 2 (PS1, Europe SLES-03556) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Mega%20Man%20Legends%202%20(Europe).png",
    alt: "Mega Man Legends 2 (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Mega%20Man%20Legends%202%20(Europe).png",
      alt: "Mega Man Legends 2 (screenshot)",
      credit: "Libretro",
    },
  ],
};
