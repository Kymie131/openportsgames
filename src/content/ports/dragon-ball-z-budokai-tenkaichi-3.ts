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
  notes:
    "Budokai Tenkaichi 3 running in the browser, compiled to WebAssembly from the game's decompiled code. The player supplies their own legally obtained disc image; the game data is read locally and never uploaded.",
  notesEs:
    "Budokai Tenkaichi 3 corriendo en el navegador, compilado a WebAssembly a partir del código descompilado del juego. El jugador aporta su propia imagen de disco obtenida legalmente; los datos del juego se leen en local y nunca se suben.",
};
