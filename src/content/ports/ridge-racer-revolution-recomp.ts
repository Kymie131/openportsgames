import type { Port } from "@/lib/ports/schema";

export const ridgeRacerRevolutionRecomp: Port = {
  schema: "port",
  id: "ridge-racer-revolution-recomp",
  title: "Ridge Racer Revolution PS1 Recomp",
  game: "Ridge Racer Revolution",
  developers: ["RobGreenUK"],
  publisher: "Namco",
  originalYear: 1995,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/RobGreenUK/Ridge-Racer-Revolution-PS1-Recomp"],
  license: { spdx: "MIT" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Native recompilation of Ridge Racer Revolution (PlayStation). The player supplies their own legally obtained disc image; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Ridge Racer Revolution (PlayStation). El jugador aporta su propio material obtenido legalmente (imagen de disco); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Ridge%20Racer%20Revolution%20(USA).png",
    alt: "Ridge Racer Revolution (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Ridge%20Racer%20Revolution%20(USA).png",
      alt: "Ridge Racer Revolution (screenshot)",
      credit: "Libretro",
    },
  ],
};
