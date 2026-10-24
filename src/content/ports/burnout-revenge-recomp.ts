import type { Port } from "@/lib/ports/schema";

export const burnoutRevengeRecomp: Port = {
  schema: "port",
  id: "burnout-revenge-recomp",
  title: "Burnout Revenge Recompiled",
  game: "Burnout Revenge",
  developers: ["shipa-2"],
  publisher: "Electronic Arts",
  originalYear: 2005,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/shipa-2/Xerenge"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Xbox 360"],
  summary: "Burnout Revenge is a 2005 racing video game developed by Criterion Games and published by Electronic Arts for PlayStation 2, Xbox and Xbox 360. The game was also made backwards compatible with the Xbox One in May 2018, and the Xbox Series X/S upon the console's launch.",
  summaryEs: "Burnout Revenge es un videojuego de carreras de la serie Burnout. Fue lanzado para PlayStation 2 y Xbox el 13 de septiembre de 2005 junto al juego para PlayStation Portable Burnout Legends. El 7 de marzo de 2006 fue lanzado también para XBOX 360. Desde del éxito de Burnout 3: Takedown, Revenge alardea de varias mejoras de gráfica, la física del juego, al rival, así como la capacidad de utilizar el tráfico como un arma.",
  notes:
    "Burnout Revenge's (Xbox 360) PowerPC code is translated to C++ ahead of time, with no interpreter or JIT. It needs the retail European dump and a Vulkan GPU.",
  notesEs:
    "El código PowerPC de Burnout Revenge (Xbox 360) se traduce a C++ por adelantado, sin intérprete ni JIT. Necesita el volcado europeo retail y una GPU Vulkan.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/c/cb/Revenge_boxart.jpg",
    alt: "Burnout Revenge (box art)",
    credit: "Wikipedia",
  },
};
