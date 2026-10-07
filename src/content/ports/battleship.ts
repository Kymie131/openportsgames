import type { Port } from "@/lib/ports/schema";

export const battleship: Port = {
  schema: "port",
  id: "battleship",
  title: "BattleShip",
  game: "Super Smash Bros.",
  developers: ["JRickey"],
  publisher: "Nintendo",
  originalYear: 1999,
  portType: "decompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/JRickey/BattleShip"],
  license: { spdx: "MIT" },
  verified: false,
  originalSystem: "Nintendo 64",
  notes:
    "Decompilation-based native port of Super Smash Bros. (Nintendo 64). The player supplies their own legally obtained ROM; the repository ships no game content.",
  notesEs:
    "Port nativo basado en decompilación de Super Smash Bros. (Nintendo 64). El jugador aporta su propio material obtenido legalmente (ROM); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Super%20Smash%20Bros.%20(USA).png",
    alt: "Super Smash Bros. (box art)",
    credit: "Box art",
  },
};
