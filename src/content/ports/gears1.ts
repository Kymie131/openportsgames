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
  originalSystem: "Xbox 360",
  notes:
    "Early PC-native port of Gears of War (Xbox 360) via static recompilation. The port code is public (MIT), but the game is proprietary: you must supply your own copy, and the project ships no game content. It is an alpha: it recompiles, but it does not run yet, as its own README states.",
  notesEs:
    "Port nativo temprano para PC de Gears of War (Xbox 360) mediante recompilación estática. El código del port es público (MIT), pero el juego es propietario: debes aportar tu propia copia, y el proyecto no incluye contenido del juego. Es una alfa: recompila, pero todavía no corre, como indica su propio README.",
};
