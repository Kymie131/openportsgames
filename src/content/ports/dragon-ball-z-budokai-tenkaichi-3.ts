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
  notes:
    "Budokai Tenkaichi 3 running in the browser, compiled to WebAssembly from the game's decompiled code. The player supplies their own legally obtained disc image; the game data is read locally and never uploaded.",
  notesEs:
    "Budokai Tenkaichi 3 corriendo en el navegador, compilado a WebAssembly a partir del código descompilado del juego. El jugador aporta su propia imagen de disco obtenida legalmente; los datos del juego se leen en local y nunca se suben.",
};
