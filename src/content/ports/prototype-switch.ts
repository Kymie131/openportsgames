import type { Port } from "@/lib/ports/schema";

export const prototypeSwitch: Port = {
  schema: "port",
  id: "prototype-switch",
  title: "Prototype (Switch)",
  game: "Prototype",
  developers: ["fungalspores"],
  publisher: "Activision",
  originalYear: 2009,
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
  related: ["prototype-2-switch"],
  cover: {
    src: "https://cdn.cloudflare.steamstatic.com/steam/apps/10150/header.jpg",
    alt: "Prototype (cover art)",
    credit: "Steam",
  },
  summary: "Prototype is a 2009 action-adventure video game developed by Radical Entertainment and published by Activision. It was released in June 2009 for the PlayStation 3, Xbox 360, and Microsoft Windows. In July 2015, the game was re-released alongside its sequel as the Prototype Biohazard Bundle for the PlayStation 4 and Xbox One. Separate versions of the two games became available in August 2015.",
  summaryEs: "Prototype es un videojuego de acción-aventura de mundo abierto desarrollado por Radical Entertainment y publicado por Activision. Fue lanzado en junio de 2009 para PlayStation 3, Xbox 360 y Microsoft Windows. En julio de 2015, el juego fue relanzado junto con su secuela como el Prototype Biohazard Bundle para PlayStation 4 y Xbox One. Las versiones separadas de los dos juegos estuvieron disponibles en agosto de 2015.",
  notes:
    "Prototype (Activision, 2009) running natively on Nintendo Switch through static recompilation of the Xbox 360 version. No game files are included.",
  notesEs:
    "Prototype (Activision, 2009) en Nintendo Switch de forma nativa mediante recompilación estática de la versión de Xbox 360. No incluye archivos del juego.",
};
