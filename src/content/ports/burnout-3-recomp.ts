import type { Port } from "@/lib/ports/schema";

export const burnout3Recomp: Port = {
  schema: "port",
  id: "burnout-3-recomp",
  title: "Burnout 3: Takedown",
  game: "Burnout 3: Takedown",
  developers: ["sp00nznet"],
  publisher: "Electronic Arts",
  originalYear: 2004,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/sp00nznet/burnout3"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Xbox"],
  summary: "Burnout 3: Takedown is a 2004 racing video game developed by Criterion Games and published by Electronic Arts. It is the third instalment in the Burnout series, which is characterised by fast-paced arcade racing. A staple of the series is the use of boost, earned through risky driving, to rapidly increase a car's speed. The central mechanic introduced in Burnout 3 is Takedowns, which allow players to slam their opponents until they crash. Takedowns work in conjunction with the boost system by filling up and extending the boost meter.",
  summaryEs: "Burnout 3: Takedown es un videojuego de carreras desarrollado por Criterion Studios y distribuido por Electronic Arts que salió a la venta el 18 de septiembre de 2004 para las plataformas Xbox y PlayStation 2. Es la tercera entrega de la saga Burnout, y la primera en ser distribuida por EA Games tras el cierre de Acclaim, estando este más cuidado en cuanto a gráficos y sonido. La secuela de este juego es Burnout Revenge.",
  notes:
    "Static recompilation of Burnout 3: Takedown (Xbox) with ReXGlue. It requires a copy of the game.",
  notesEs:
    "Recompilación estática de Burnout 3: Takedown (Xbox) con ReXGlue. Requiere una copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Microsoft%20-%20Xbox/Named_Boxarts/Burnout%203%20-%20Takedown%20(USA).png",
    alt: "Burnout 3: Takedown (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Microsoft%20-%20Xbox/Named_Snaps/Burnout%203%20-%20Takedown%20(USA).png",
      alt: "Burnout 3: Takedown (screenshot)",
      credit: "Libretro",
    },
  ],
};
