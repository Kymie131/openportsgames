import type { Port } from "@/lib/ports/schema";

export const rockBand3Recomp: Port = {
  schema: "port",
  id: "rock-band-3-recomp",
  title: "Rock Band 3 Recompiled",
  game: "Rock Band 3",
  developers: ["ihatecompvir"],
  publisher: "MTV Games",
  originalYear: 2010,
  portType: "recompilation",
  genre: "music",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/ihatecompvir/band3_recomp"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Xbox 360"],
  summary: "Rock Band 3 is a 2010 rhythm game developed by Harmonix. The game was initially published and distributed by MTV Games and Electronic Arts, respectively, on October 26, 2010. Mad Catz took over both roles and re-released the title on November 23, 2011. It is the third main installment and the seventh console release in the Rock Band series. As with the previous titles, Rock Band 3 allows players to simulate the playing of rock music and many other subgenres using special instrument controllers mimicking lead and bass guitar, keyboard, drums, and vocals.",
  summaryEs: "Rock Band 3 es un videojuego de música, y el tercer juego principal de la serie Rock Band. Harmonix Music Systems es el principal desarrollador del juego, con contribución adicional por parte de Backbone Entertainment en las versiones del Wii y DS. El juego es publicado y distribuido por MTV Games y Electronic Arts, respectivamente. Como en los otros juegos de la serie, Rock Band 3 permite a los jugadores imitar a una banda de rock y otros géneros usando controles especiales que imitan la guitarra y el bajo eléctrico, la batería y con un micrófono para las voces.",
  notes:
    "Static recompilation of Rock Band 3 (Xbox 360) for Windows. It needs your own copy of the game.",
  notesEs:
    "Recompilación estática de Rock Band 3 (Xbox 360) para Windows. Necesita tu propia copia del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/3/3b/Rock_Band_3_Game_Cover.jpg",
    alt: "Rock Band 3 (cover)",
    credit: "Wikipedia",
  },
};
