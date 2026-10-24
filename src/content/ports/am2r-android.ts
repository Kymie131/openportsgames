import type { Port } from "@/lib/ports/schema";

export const am2rAndroid: Port = {
  schema: "port",
  id: "am2r-android",
  title: "AM2R (Android)",
  game: "Another Metroid 2 Remake",
  developers: ["am2r-android"],
  publisher: "Nintendo",
  originalYear: 1991,
  portType: "source-port",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/am2r-android/AM2R-Autopatcher-Android"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Game Boy"],
  summary: "Metroid is an action-adventure game franchise created by Nintendo. The player controls the bounty hunter Samus Aran, who protects the galaxy from Space Pirates and their attempts to harness the power of the parasitic Metroid creatures. Metroid combines the platforming of Super Mario Bros. and the exploration of The Legend of Zelda with a science fiction setting and an emphasis on nonlinear gameplay. Metroid games are mostly presented as either side-scrolling or from a first-person perspective.",
  summaryEs: "El término null, nulo o nil es a menudo utilizado en la computación para hacer referencia a la nada. Su significado y uso varía según el lenguaje de programación.",
  notes:
    "Android tool that patches the fan remake AM2R 1.1 into a modern Android build. It works with your own copy of the AM2R files.",
  notesEs:
    "Herramienta para Android que aplica un parche al remake AM2R 1.1 para convertirlo en una build moderna. Funciona con tu propia copia de los archivos de AM2R.",
  cover: {
    src: "https://randovania.org/assets/games/am2r.png",
    alt: "Another Metroid 2 Remake (cover)",
    credit: "Randovania",
  },
};
