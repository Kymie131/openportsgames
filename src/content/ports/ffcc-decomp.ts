import type { Port } from "@/lib/ports/schema";

export const ffccDecomp: Port = {
  schema: "port",
  id: "ffcc-decomp",
  title: "Final Fantasy Crystal Chronicles Decompilation",
  game: "Final Fantasy Crystal Chronicles",
  developers: ["zcanann"],
  publisher: "Square Enix",
  originalYear: 2003,
  portType: "decompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  wip: true,
  release: { version: null, date: null },
  sources: ["https://github.com/zcanann/FFCC-Decomp"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["GameCube"],
  summary: "Final Fantasy Crystal Chronicles is an action role-playing video game developed by The Game Designers Studio for the GameCube. It was released in 2003 in Japan and 2004 in North America, Europe and Australia. A remastered version for Nintendo Switch, PlayStation 4, Android, and iOS was released in August 2020. A spin-off of the Final Fantasy series and beginning of the series of the same name, Crystal Chronicles was the first title in the franchise to be released for a Nintendo home console since Final Fantasy VI in 1994.",
  summaryEs: "Final Fantasy Crystal Chronicles es un videojuego de rol de acción desarrollado por Squaresoft y publicado por Nintendo para Nintendo GameCube, siendo el primer y único videojuego de la serie Final Fantasy publicado para dicho sistema. Square Enix trabajó en tres secuelas de este título ambientadas en el mismo universo:Final Fantasy Crystal Chronicles: Ring of Fates, para Nintendo DS. Final Fantasy Crystal Chronicles: The Crystal Bearers, para Wii. Final Fantasy Crystal Chronicles: The Little King and the Promised Land, para Wii.",
  notes:
    "Decompilation of Final Fantasy Crystal Chronicles for the GameCube. A research codebase; it requires game files from a copy you own.",
  notesEs:
    "Decompilación de Final Fantasy Crystal Chronicles para GameCube. Código de investigación; requiere archivos del juego de una copia que poseas.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20GameCube/Named_Boxarts/Final%20Fantasy%20Crystal%20Chronicles%20(Europe)%20(En%2CFr%2CDe%2CEs%2CIt).png",
    alt: "Final Fantasy Crystal Chronicles (cover)",
    credit: "libretro",
  },
};
