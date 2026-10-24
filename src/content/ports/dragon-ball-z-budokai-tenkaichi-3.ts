import type { Port } from "@/lib/ports/schema";

export const dragonBallZBudokaiTenkaichi3: Port = {
  schema: "port",
  id: "dragon-ball-z-budokai-tenkaichi-3",
  title: "Dragon Ball Z: Budokai Tenkaichi 3 (Web)",
  game: "Dragon Ball Z: Budokai Tenkaichi 3",
  developers: ["z3xox"],
  publisher: "Bandai Namco",
  originalYear: 2007,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["web"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://budokait3.com/"],
  website: "https://budokait3.com/",
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: false,
  originalSystems: ["PlayStation 2"],
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation%202/Named_Boxarts/Dragon%20Ball%20Z%20-%20Budokai%20Tenkaichi%203%20(Europe,%20Australia)%20(En,Fr,De,Es,It).png",
    alt: "Dragon Ball Z: Budokai Tenkaichi 3 (box art)",
    credit: "Box art",
  },
  summary: "Dragon Ball Z: Budokai Tenkaichi 3 is a fighting game published by Bandai Namco Entertainment in 2007.",
  summaryEs: "Dragon Ball Z: Budokai Tenkaichi 3 es un videojuego de acción y lucha en 3D desarrollado por Spike y publicado por Atari en Norteamérica y por Namco Bandai en Europa y Japón para PlayStation 2 y Wii. La versión para PlayStation 2 salió a la venta en Norteamérica y Europa el 9 y el 13 de noviembre de 2007, respectivamente. El lanzamiento de la de Wii tuvo lugar el 3 de diciembre de 2007 en los Estados Unidos y el 15 de febrero de 2008 en el Reino Unido. En Japón, ambas adaptaciones debutaron el 4 de octubre de 2007.",
  notes:
    "Budokai Tenkaichi 3 running in the browser, compiled to WebAssembly from the game's decompiled code. The player supplies their own legally obtained disc image; the game data is read locally and never uploaded.",
  notesEs:
    "Budokai Tenkaichi 3 corriendo en el navegador, compilado a WebAssembly a partir del código descompilado del juego. El jugador aporta su propia imagen de disco obtenida legalmente; los datos del juego se leen en local y nunca se suben.",
};
