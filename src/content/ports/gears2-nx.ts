import type { Port } from "@/lib/ports/schema";

export const gears2Nx: Port = {
  schema: "port",
  id: "gears2-nx",
  title: "Gears of War 2 (Switch)",
  game: "Gears of War 2",
  developers: ["VasilkovND"],
  publisher: "Microsoft Game Studios",
  originalYear: 2008,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["switch"],
  status: "beta",
  release: { version: "1.1.0", date: "2026-11-07" },
  sources: ["https://github.com/VasilkovND/gears2-nx"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-11",
  originalSystems: ["Xbox 360"],
  summary:
    "Gears of War 2 is a 2008 third-person shooter developed by Epic Games and published by Microsoft Game Studios. Delta Squad fights the Locust Horde across a devastated planet Sera.",
  summaryEs:
    "Gears of War 2 es un shooter en tercera persona de 2008 desarrollado por Epic Games y publicado por Microsoft Game Studios. El Escuadrón Delta combate a la Horda Locust en un planeta Sera devastado.",
  notes:
    "Native Nintendo Switch port of the Xbox 360 game. The release ships the build tools only; it compiles the game from your own copy and includes no game data.",
  notesEs:
    "Port nativo para Nintendo Switch del juego de Xbox 360. La release solo incluye las herramientas de compilación; compila el juego desde tu propia copia y no incluye datos del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/e/e0/Gears_of_War_2_Game_Cover.jpg",
    alt: "Gears of War 2 (box art)",
    credit: "Wikipedia",
  },
};
