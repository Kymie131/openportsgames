import type { Port } from "@/lib/ports/schema";

export const crashOfTheTitansRecomp: Port = {
  schema: "port",
  id: "crash-of-the-titans-recomp",
  title: "Crash of the Titans Recompiled",
  game: "Crash of the Titans",
  developers: ["OAleex"],
  publisher: "Sierra Entertainment",
  originalYear: 2007,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/OAleex/MojoRecomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Xbox 360"],
  summary: "Crash of the Titans is a 2007 platform game developed by Radical Entertainment and published by Vivendi Games for the PlayStation 2, PlayStation Portable, Wii and Xbox 360. The sixth mainline game in the Crash Bandicoot series, it was the last to be published by Vivendi Games before Activision merged with the company the following year. Amaze Entertainment developed two separate versions of the game: one for the Nintendo DS and one for the Game Boy Advance. The game is the fourteenth installment in the Crash Bandicoot video game series, and the sixth game in the main franchise.",
  summaryEs: "Crash of the Titans es un videojuego de aventura, lucha y plataformas publicado por Sierra Entertainment y desarrollado por Radical Entertainment lanzado en el año 2007; perteneciente a la saga Crash Bandicoot. Este es el primer videojuego de Crash que no es publicado en Japón.",
  notes:
    "Recompilation of Crash of the Titans (Xbox 360) for Windows, still in an early state. It requires your own game files.",
  notesEs:
    "Recompilación de Crash of the Titans (Xbox 360) para Windows, todavía en un estado temprano. Requiere tus propios archivos del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/9/98/Crash_of_the_Titans_cover.jpg",
    alt: "Crash of the Titans (box art)",
    credit: "Wikipedia",
  },
};
