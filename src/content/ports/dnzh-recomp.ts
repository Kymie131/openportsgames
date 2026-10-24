import type { Port } from "@/lib/ports/schema";

export const dnzhRecomp: Port = {
  schema: "port",
  id: "dnzh-recomp",
  title: "DNZH Recomp",
  game: "Duke Nukem: Zero Hour",
  developers: ["sonicdcer"],
  publisher: "GT Interactive",
  originalYear: 1999,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/sonicdcer/DNZHRecomp"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  originalSystems: ["Nintendo 64"],
  summary: "Duke Nukem: Zero Hour is a 1999 third-person shooter game in the Duke Nukem series, developed by Eurocom and published by GT Interactive for the Nintendo 64. The game uses a relatively large 32 megabyte cartridge and can also use the Expansion Pak to improve graphics, though this slows down the frame rate. It features a 4-player split-screen multiplayer mode that uses a first-person view.",
  summaryEs: "Duke Nukem Zero Hour es un videojuego de acción-aventura en tercera persona para la consola Nintendo 64 de la saga Duke Nukem.",
  notes:
    "Native recompilation of Duke Nukem: Zero Hour (Nintendo 64). The player supplies their own legally obtained ROM; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Duke Nukem: Zero Hour (Nintendo 64). El jugador aporta su propio material obtenido legalmente (ROM); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Duke%20Nukem%20-%20Zero%20Hour%20(USA).png",
    alt: "Duke Nukem: Zero Hour (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Snaps/Duke%20Nukem%20-%20Zero%20Hour%20(USA).png",
      alt: "Duke Nukem: Zero Hour (screenshot)",
      credit: "Libretro",
    },
  ],
};
