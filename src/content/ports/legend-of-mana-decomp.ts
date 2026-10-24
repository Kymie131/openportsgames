import type { Port } from "@/lib/ports/schema";

export const legendOfManaDecomp: Port = {
  schema: "port",
  id: "legend-of-mana-decomp",
  title: "Legend of Mana Decompilation",
  game: "Legend of Mana",
  developers: ["celophi"],
  publisher: "Square Enix",
  originalYear: 1999,
  portType: "decompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  wip: true,
  release: { version: null, date: null },
  sources: ["https://github.com/celophi/lom-decomp"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation"],
  summary: "Legend of Mana is a 1999 action role-playing game developed and published by Square for the PlayStation. It is a spin-off of the Mana series. Set in a high fantasy universe, the game follows an unnamed hero as they restore the land of Fa'Diel by creating the world around them and completing a number of interrelated quests in order to restore the Tree of Mana.",
  summaryEs: "Legend of Mana, conocido en Japón como Seiken Densetsu: Legend of Mana es la cuarta entrega de la serie Mana. El juego se lanzó para PlayStation en Japón el quince de julio de 1999 y en Estados Unidos el 7 de junio del año siguiente, con cierta demora en Canadá con respecto a Estados Unidos. La desarrolladora y distribuidora del videojuego fue Squaresoft, aunque la labor de distribución fue llevada en Norteamérica por su filial Square Electronic Arts. En España, no vio la luz hasta el 1 de abril de 2000.",
  notes:
    "Matching decompilation of Legend of Mana (PlayStation). A research codebase; it requires game files from a copy you own.",
  notesEs:
    "Decompilación matching de Legend of Mana (PlayStation). Código de investigación; requiere archivos del juego de una copia que poseas.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Legend%20of%20Mana%20(USA).png",
    alt: "Legend of Mana (box art)",
    credit: "Box art",
  },
};
