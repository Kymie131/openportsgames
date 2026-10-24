import type { Port } from "@/lib/ports/schema";

export const toyStory2Recomp: Port = {
  schema: "port",
  id: "toy-story-2-recomp",
  title: "Toy Story 2 Recompiled",
  game: "Toy Story 2: Buzz Lightyear to the Rescue",
  developers: ["PeriBluGaming"],
  publisher: "Activision",
  originalYear: 1999,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/PeriBluGaming/ToyStory2Recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Toy Story 2: Buzz Lightyear to the Rescue is a 1999 platform game developed by Traveller's Tales and published by Activision and Disney Interactive. Based on Disney and Pixar's computer-animated film Toy Story 2, it was released for Nintendo 64, PlayStation, Microsoft Windows, and Macintosh in late 1999, while a Dreamcast version followed in 2000. The computer versions were released under the title Disney/Pixar's Action Game, Toy Story 2. A different version, a side-scrolling platform game titled Toy Story 2, was also released in 1999 for the Game Boy Color.",
  summaryEs: "Toy Story 2: ¡Buzz Lightyear al rescate! es un videojuego de plataformas desarrollado por Traveller's Tales y publicado por Activision y Disney Interactive. Basado en la película animada por computadora Toy Story 2 de Disney/Pixar, salió a la venta para Nintendo 64, PlayStation, Microsoft Windows y Macintosh a finales de 1999, mientras que la versión de Dreamcast lo hizo en el año 2000. Las adaptaciones para computadora se lanzaron bajo el título Disney/Pixar's Action Game, Toy Story 2.",
  notes:
    "Static recompilation of Toy Story 2: Buzz Lightyear to the Rescue (PlayStation) using PSXRecomp. It needs your own game files.",
  notesEs:
    "Recompilación estática de Toy Story 2: Buzz Lightyear to the Rescue (PlayStation) con PSXRecomp. Necesita tus propios archivos del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/2/21/Buzz_Lightyear_to_the_Rescue_art.png",
    alt: "Toy Story 2: Buzz Lightyear to the Rescue (box art)",
    credit: "Wikipedia",
  },
};
