import type { Port } from "@/lib/ports/schema";

export const zeldaAlttpSnesRecomp: Port = {
  schema: "port",
  id: "zelda-alttp-snes-recomp",
  title: "ZeldaAlttPSNESRecomp",
  game: "The Legend of Zelda: A Link to the Past",
  developers: ["mstan"],
  publisher: "Nintendo",
  originalYear: 1991,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/ZeldaAlttPSNESRecomp"],
  license: { spdx: "PolyForm-Noncommercial-1.0.0", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystems: ["Super Nintendo"],
  summary: "The Legend of Zelda: A Link to the Past is a 1991 action-adventure game developed and published by Nintendo for the Super Nintendo Entertainment System (SNES). It is the third game in The Legend of Zelda series, following Zelda II: The Adventure of Link (1987). It was released in Japan in 1991, and in North America and Europe in 1992.",
  summaryEs: "The Legend of Zelda: A Link to the Past, conocido en Japón como Zelda no Densetsu: Kamigami no Triforce , también conocido como Zelda 3 y Zelda III, es un juego de acción y aventuras desarrollado y publicado por Nintendo para la consola Super Nintendo Entertainment System y años después a la Game Boy Advance junto a The Legend of Zelda: Four Swords, siendo lanzado el 3 de diciembre del 2002, siendo la tercera entrega de la saga de videojuegos The Legend of Zelda.",
  notes:
    "Native recompilation of The Legend of Zelda: A Link to the Past (Super Nintendo). The player supplies their own legally obtained ROM; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de The Legend of Zelda: A Link to the Past (Super Nintendo). El jugador aporta su propio material obtenido legalmente (ROM); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Legend%20of%20Zelda%2C%20The%20-%20A%20Link%20to%20the%20Past%20(USA).png",
    alt: "The Legend of Zelda: A Link to the Past (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Snaps/Legend%20of%20Zelda,%20The%20-%20A%20Link%20to%20the%20Past%20(USA).png",
      alt: "The Legend of Zelda: A Link to the Past (screenshot)",
      credit: "Libretro",
    },
  ],
};
