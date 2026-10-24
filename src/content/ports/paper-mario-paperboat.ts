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
  originalSystems: ["Nintendo 64"],
  summary: "Paper Mario is a 2000 role-playing video game developed by Intelligent Systems and published by Nintendo for the Nintendo 64 home video game console. Paper Mario is the first game in the Paper Mario series. First released in Japan in 2000 and then internationally in 2001, Paper Mario was later re-released for Nintendo's Wii Virtual Console in July 2007, the Wii U Virtual Console in April 2015, and the Nintendo Classics service on December 10, 2021.",
  summaryEs: "Paper Mario es un videojuego de rol desarrollado por Intelligent Systems y publicado por Nintendo para la videoconsola doméstica Nintendo 64. Es el primer videojuego de la serie del mismo nombre. Lanzado por primera vez en Japón en el año 2000 y luego a nivel internacional en 2001, ha sido relanzado más tarde para la Consola Virtual de Wii en julio de 2007, la de Wii U en abril de 2015 y en Nintendo Switch Online + Expansion Pack el 10 de diciembre de 2021.",
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
