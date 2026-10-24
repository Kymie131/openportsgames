import type { Port } from "@/lib/ports/schema";

export const slyCooperRecomp: Port = {
  schema: "port",
  id: "sly-cooper-recomp",
  title: "Sly Cooper Recompiled",
  game: "Sly Cooper and the Thievius Raccoonus",
  developers: ["PortsDR"],
  publisher: "Sony Computer Entertainment",
  originalYear: 2002,
  portType: "recompilation",
  genre: "platformer",
  openSource: false,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/theclub654/ProjectCane"],
  license: { spdx: "NOASSERTION", note: "no public repository or license" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation 2"],
  summary: "Sly Cooper and the Thievius Raccoonus is a 2002 stealth platform video game developed by Sucker Punch Productions and published by Sony Computer Entertainment for the PlayStation 2. It is the first installment in the Sly Cooper series. The game follows the titular Sly Cooper and his gang, Bentley the Turtle and Murray the Hippo, on their mission to recover the lost pages of the \"Thievius Raccoonus\" from a rival gang known as the Fiendish Five.",
  summaryEs: "Sly Cooper and the Thievius Raccoonus es un videojuego de plataformas y sigilo de 2002 desarrollado por Sucker Punch Productions y publicado por Sony Computer Entertainment para la PlayStation 2. Es la primera entrada de la serie Sly Cooper. El juego sigue al titular Sly Cooper y su pandilla, Bentley la Tortuga y Murray el Hipopótamo, en su misión de recuperar las páginas perdidas del \"Thievius Raccoonus\" de una banda rival conocida como los Cinco Demonios.",
  notes: "PortsDR lists this recompilation without a public repository. Own the game to play it.",
  notesEs:
    "PortsDR lista esta recompilación sin repositorio público. Necesitas el juego para jugarla.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/8/8e/SlyCooper2002cover.jpg",
    alt: "Sly Cooper and the Thievius Raccoonus (box art)",
    credit: "Wikipedia",
  },
};
