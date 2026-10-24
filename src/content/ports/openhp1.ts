import type { Port } from "@/lib/ports/schema";

export const openhp1: Port = {
  schema: "port",
  id: "openhp1",
  title: "OpenHP1 (Harry Potter)",
  game: "Harry Potter and the Philosopher's Stone",
  developers: ["SplittyDev"],
  publisher: "Electronic Arts",
  originalYear: 2001,
  portType: "reimplementation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/SplittyDev/openhp1"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Windows"],
  summary: "Harry Potter and the Philosopher's Stone, released in the United States as Harry Potter and the Sorcerer's Stone, is a 2001 video game developed by KnowWonder and published by Electronic Arts for Windows. A version for Mac OS was developed by Westlake Interactive and published by Aspyr the following year. Based on the 1997 novel of the same name, the player controls Harry Potter, who must navigate his first year in the Hogwarts School of Witchcraft and Wizardry and eventually confront the villainous Lord Voldemort.",
  summaryEs: "Harry Potter and the Philosopher's Stone es un videojuego de acción y aventura de 2001 desarrollado por KnowWonder y publicado por Electronic Arts para Windows. Al año siguiente, Westlake Interactive desarrolló una versión para Mac OS, que fue publicada por Aspyr. Basado en la novela homónima de 1997, el jugador controla a Harry Potter, quien debe superar su primer año en el Colegio Hogwarts de Magia y Hechicería y, finalmente, enfrentarse al malvado Lord Voldemort.",
  notes:
    "Open reimplementation of the PC version of Harry Potter and the Philosopher's Stone. It requires the original game files to run.",
  notesEs:
    "Reimplementación libre de la versión de PC de Harry Potter y la piedra filosofal. Requiere los archivos del juego original para funcionar.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/5/55/HarryPotterPhilosophersStoneGameEuroArtwork.jpg",
    alt: "Harry Potter and the Philosopher's Stone (box art)",
    credit: "Wikipedia",
  },
};
