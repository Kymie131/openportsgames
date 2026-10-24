import type { Port } from "@/lib/ports/schema";

export const prototype2Switch: Port = {
  schema: "port",
  id: "prototype-2-switch",
  title: "Prototype 2 (Switch)",
  game: "Prototype 2",
  developers: ["fungalspores"],
  publisher: "Activision",
  originalYear: 2012,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["switch"],
  status: "beta",
  release: { version: "1.1.0", date: "2026-10-16" },
  sources: ["https://github.com/fungalspores/prototype-switch"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Xbox 360"],
  related: ["prototype-switch"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/f/fb/Prototype_2_game.jpg",
    alt: "Prototype 2 (box art)",
    credit: "Wikipedia",
  },
  summary: "Prototype 2 is a 2012 action-adventure video game developed by Radical Entertainment and published by Activision, and the sequel to 2009's Prototype. First announced at the 2010 Spike VGA Awards, it was released in April 2012 for the PlayStation 3 and Xbox 360, and in July 2012 for Microsoft Windows. In July 2015, the game was re-released alongside its predecessor as the Prototype Biohazard Bundle for the PlayStation 4 and Xbox One. Separate versions of the two games became available in August 2015.",
  summaryEs: "Prototype 2 es un videojuego de acción-aventura de mundo abierto desarrollado por Radical Entertainment y publicado por Activision, y es la secuela de Prototype de 2009. Anunciado por primera vez en los Premios Spike VGA 2010, fue lanzado en abril de 2012 para PlayStation 3 y Xbox 360, y en julio de 2012 para Microsoft Windows. En julio de 2015, el juego fue relanzado junto con su predecesor como el Prototype Biohazard Bundle para PlayStation 4 y Xbox One. Las versiones separadas de los dos juegos estuvieron disponibles en agosto de 2015.",
  notes:
    "Prototype 2 (Activision, 2012) running natively on Nintendo Switch through static recompilation of the Xbox 360 version. It requires your own copy of the game.",
  notesEs:
    "Prototype 2 (Activision, 2012) en Nintendo Switch de forma nativa mediante recompilación estática de la versión de Xbox 360. Requiere tu propia copia del juego.",
};
