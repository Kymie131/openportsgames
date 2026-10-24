import type { Port } from "@/lib/ports/schema";

export const breathOfTheWildDecomp: Port = {
  schema: "port",
  id: "breath-of-the-wild-decomp",
  title: "Breath of the Wild Decompilation",
  game: "The Legend of Zelda: Breath of the Wild",
  developers: ["zeldaret"],
  publisher: "Nintendo",
  originalYear: 2017,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/zeldaret/botw"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  wip: true,
  sourceVerified: true,
  originalSystems: ["Wii U"],
  summary: "The Legend of Zelda: Breath of the Wild is a 2017 action-adventure game developed by Nintendo EPD for the Wii U and Nintendo Switch. Set near the end of the Zelda timeline, it follows Link as he sets out to save Princess Zelda and prevent Calamity Ganon from destroying the world. The player explores the open world of Hyrule, collects items, and completes objectives such as puzzles and side quests. Breath of the Wild's world is unstructured and encourages exploration and experimentation; the story can be completed in a nonlinear fashion.",
  summaryEs: "The Legend of Zelda: Breath of the Wild es un videojuego de acción-aventura de 2017 de la serie The Legend of Zelda, desarrollado por la filial Nintendo EPD en colaboración con Monolith Soft y publicado por Nintendo para las consolas Wii U, Nintendo Switch, y Nintendo Switch 2. Es la decimoctava entrega de la serie y la tercera en utilizar gráficos en alta definición. Se lanzó el 3 de marzo de 2017 para Wii U y Nintendo Switch.",
  notes:
    "Work-in-progress decompilation of The Legend of Zelda: Breath of the Wild (Switch 1.5.0). A research codebase with no playable build; it requires game files from a copy you own.",
  notesEs:
    "Decompilación en curso de The Legend of Zelda: Breath of the Wild (Switch 1.5.0). Código de investigación sin build jugable; requiere archivos del juego de una copia que poseas.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg",
    alt: "The Legend of Zelda: Breath of the Wild (cover)",
    credit: "Wikipedia",
  },
};
