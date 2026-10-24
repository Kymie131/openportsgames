import type { Port } from "@/lib/ports/schema";

export const gears1: Port = {
  schema: "port",
  title: "gears1",
  id: "gears1",
  game: "Gears of War",
  developers: ["SomeoneIsWorking"],
  publisher: "Microsoft Game Studios",
  originalYear: 2006,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/SomeoneIsWorking/gears1"],
  license: { spdx: "MIT" },
  verified: false,
  originalSystems: ["Xbox 360"],
  summary: "Gears of War is a 2006 third-person shooter video game developed by Epic Games and published by Microsoft Game Studios. It is the first installment of the Gears of War series, and was initially released as an exclusive title for the Xbox 360 in November 2006. A Microsoft Windows version, developed in conjunction with People Can Fly, was released in November 2007.",
  summaryEs: "Gears of War es un videojuego de disparos en tercera persona desarrollado por Epic Games utilizando el motor de videojuego Unreal Engine 3. Gears of War fue publicado por Microsoft Game Studios para la consola Xbox 360 el 1 de noviembre de 2006 en América del Norte, el 5 de noviembre en Europa, el 6 de noviembre en Australia y el 10 de enero de 2009 en Japón.",
  notes:
    "Early PC-native port of Gears of War (Xbox 360) via static recompilation. The port code is public (MIT), but the game is proprietary: you must supply your own copy, and the project ships no game content. It is an alpha: it recompiles, but it does not run yet, as its own README states.",
  notesEs:
    "Port nativo temprano para PC de Gears of War (Xbox 360) mediante recompilación estática. El código del port es público (MIT), pero el juego es propietario: debes aportar tu propia copia, y el proyecto no incluye contenido del juego. Es una alfa: recompila, pero todavía no corre, como indica su propio README.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/8/82/Gears_of_war_cover_art.jpg",
    alt: "Gears of War (box art)",
    credit: "Wikipedia",
  },
};
