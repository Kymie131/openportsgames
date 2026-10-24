import type { Port } from "@/lib/ports/schema";

export const tekken3Recomp: Port = {
  schema: "port",
  id: "tekken-3-recomp",
  title: "Tekken 3 Recompiled",
  game: "Tekken 3",
  developers: ["fabioap-cpu"],
  publisher: "Namco",
  originalYear: 1998,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/fabioap-cpu/Tekken3Recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Tekken 3 (鉄拳3) is a 1997 fighting game developed and published by Namco. It is the third installment in the Tekken series and the first game built on the Namco System 12 arcade hardware. The game takes place nineteen years after Tekken 2 (1995) and features a largely new cast of characters, including the debut of several staple characters such as Jin Kazama, Ling Xiaoyu and Bryan Fury, and adds a sidestepping ability to every character. Tekken 3 was ported to the PlayStation in 1998 with additional content, including a beat 'em up mode called Tekken Force.",
  summaryEs: "Tekken 3 (鉄拳3) es la tercera entrega de Tekken, la popular serie de juegos de lucha. Fue el primer juego lanzado en el hardware del System 12 de Namco en 1997, aparte de ser la última entrega de Tekken para PlayStation. Fue lanzado para PlayStation en 1998 y en 2005 para PlayStation 2 como parte del Modo Historia del Arcade de Tekken 5.",
  notes:
    "Static recompilation of Tekken 3 (PS1, USA) with PSXRecomp. Playable with memory-card saving and HD scaling; it ships a custom CDDA engine patch that removes the music stutters and shows the game's real internal FPS in the title bar.",
  notesEs:
    "Recompilación estática de Tekken 3 (PS1, USA) con PSXRecomp. Jugable con guardado en tarjeta de memoria y escalado HD; incluye un parche propio al motor de CDDA para eliminar los atascos de música y muestra el FPS real del juego en la barra de título.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Tekken%203%20(Europe)%20(Demo).png",
    alt: "Tekken 3 (box art)",
    credit: "Box art",
  },
};
