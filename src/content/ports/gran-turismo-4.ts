import type { Port } from "@/lib/ports/schema";

export const GranTurismo4: Port = {
  schema: "port",
  id: "gran-turismo-4",
  title: "Gran Turismo 4",
  game: "Gran Turismo 4",
  developers: ["gustavocanepa"],
  publisher: "Sony Interactive Entertainment",
  originalYear: 2004,
  portType: "decompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/gustavocanepa/gt4-decomp"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation 2"],
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation%202/Named_Boxarts/Gran%20Turismo%204%20(Asia).png",
    alt: "Gran Turismo 4 (box art)",
    credit: "Box art",
  },
  summary: "Gran Turismo 4 is a 2004 sim racing video game developed by Polyphony Digital and published by Sony Computer Entertainment for the PlayStation 2. It is the fourth main installment and the sixth overall in the Gran Turismo series. It was released on December 28, 2004, in Japan and Hong Kong, February 22, 2005, in North America, and March 9, 2005, in Europe, and has since been re-issued under Sony's Greatest Hits brand.",
  summaryEs: "Gran Turismo 4 es un videojuego para la consola PlayStation 2. Fue comercializado el 7 de septiembre de 2004 en Japón y Hong Kong (NTSC-J), el 20 de octubre de 2004 en los Estados Unidos (NTSC-U/C) y el 9 de junio de 2005 en Europa (PAL). Después de haber retrasado su lanzamiento un año y medio y haber quitado su modo en línea, Gran Turismo 4 fue uno de los juegos más esperados del 2005, y vendió un millón de copias en su primera semana de ventas en Japón.",
  notes:
    "Matching decompilation of the Gran Turismo 4 (PS2) engine, AI-assisted. No game data included.",
  notesEs:
    "Decompilación que coincide del motor de Gran Turismo 4 (PS2), asistida por IA. No incluye datos del juego.",
};
