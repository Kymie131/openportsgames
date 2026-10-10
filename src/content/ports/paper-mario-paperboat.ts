import type { Port } from "@/lib/ports/schema";

export const paperMarioPaperboat: Port = {
  schema: "port",
  id: "paper-mario-paperboat",
  title: "PaperBoat",
  game: "Paper Mario",
  developers: ["HarbourMasters"],
  publisher: "Nintendo",
  originalYear: 2000,
  portType: "decompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/HarbourMasters/PaperBoat"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  originalSystem: "Nintendo 64",
  notes:
    "Decompilation-based native port of Paper Mario (Nintendo 64). The player supplies their own legally obtained ROM; the repository ships no game content.",
  notesEs:
    "Port nativo basado en decompilación de Paper Mario (Nintendo 64). El jugador aporta su propio material obtenido legalmente (ROM); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Paper%20Mario%20(USA).png",
    alt: "Paper Mario (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Snaps/Paper%20Mario%20(USA).png",
      alt: "Paper Mario (screenshot)",
      credit: "Libretro",
    },
  ],
};
