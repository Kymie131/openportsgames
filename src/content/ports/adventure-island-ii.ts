import type { Port } from "@/lib/ports/schema";

export const AdventureIslandIi: Port = {
  schema: "port",
  id: "adventure-island-ii",
  title: "Adventure Island II",
  game: "Adventure Island II",
  developers: ["Junior-Jones"],
  publisher: "Hudson Soft",
  originalYear: 1991,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Junior-Jones/Adventure-Island-II-NES-Static-Recomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Nintendo Entertainment System"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/2/2c/Adventure_Island_2_box_art.jpg",
    alt: "Adventure Island II (cover)",
    credit: "Wikipedia",
  },
  summary: "Adventure Island II is a 1991 platform game developed by Now Production and published by Hudson Soft for the Nintendo Entertainment System. It is the sequel to Adventure Island and the second game in the series for the NES. While the first game was an adaptation of Sega's Wonder Boy, Adventure Island II is an original work, as were most of the subsequent Adventure Island games. A portable version was also released for the Game Boy in 1992, titled Takahashi Meijin no Bouken Jima II or Adventure Island outside of Japan.",
  summaryEs: "Adventure Island II es un videojuego hecho por Hudson Soft para la videoconsola NES y para Game Boy. El juego es la secuela de Adventure Island y el segundo juego de la serie. Mientras que el primer juego fue una adaptación del juego de arcade Wonder Boy de Sega, Adventure Island II es una obra original, como lo fueron todos los juegos posteriores de Adventure Island. También se lanzó una versión portátil para Game Boy en 1992 titulada Takahashi Meijin no Bouken Jima II o Adventure Island fuera de Japón.",
  notes:
    "Static recompilation of Adventure Island II (NES) for Windows 10 and 11. ROM not included.",
  notesEs:
    "Recompilación estática de Adventure Island II (NES) para Windows 10 y 11. No incluye la ROM.",
};
