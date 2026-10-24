import type { Port } from "@/lib/ports/schema";

export const windowSmash: Port = {
  schema: "port",
  id: "window-smash",
  title: "WindowSmash",
  game: "Super Smash Bros. Ultimate",
  developers: ["SNO2207"],
  publisher: "Nintendo",
  originalYear: 2018,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/SNO2207/WindowSmash"],
  license: { spdx: "NOASSERTION", note: "license not declared in the repository" },
  verified: false,
  sourceVerified: true,
  wip: true,
  originalSystems: ["Nintendo Switch"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/5/50/Super_Smash_Bros._Ultimate.jpg",
    alt: "Super Smash Bros. Ultimate (box art)",
    credit: "Wikipedia",
  },
  summary: "Super Smash Bros. Ultimate is a 2018 crossover fighting game developed by Bandai Namco Studios and Sora Ltd. and published by Nintendo for the Nintendo Switch. It is the fifth installment in the Super Smash Bros. series, succeeding Super Smash Bros. for Nintendo 3DS and Wii U (2014). The game follows the series' traditional style of gameplay, in which players control one of the various characters and use attacks to weaken their opponents and knock them out of an arena. It features a wide variety of game modes, including a single-player campaign and multiplayer versus modes.",
  summaryEs: "Super Smash Bros. Ultimate es un videojuego de lucha desarrollado por Sora Ltd. y Bandai Namco Entertainment y distribuido por Nintendo para la consola Nintendo Switch. Fue lanzado a nivel mundial el 7 de diciembre de 2018 y se trata del quinto título de la serie Super Smash Bros.",
  notes:
    "Super Smash Bros. Ultimate (Nintendo, 2018) running natively on Windows, Linux and macOS through static recompilation. You need your own copy.",
  notesEs:
    "Super Smash Bros. Ultimate (Nintendo, 2018) en Windows, Linux y macOS de forma nativa mediante recompilación estática. Necesitas tu propia copia.",
};
