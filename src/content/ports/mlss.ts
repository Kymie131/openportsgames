import type { Port } from "@/lib/ports/schema";

export const mlss: Port = {
  schema: "port",
  id: "mlss",
  title: "Mario & Luigi: Superstar Saga Decompilation",
  game: "Mario & Luigi: Superstar Saga",
  developers: ["jellees"],
  publisher: "Nintendo",
  originalYear: 2003,
  portType: "decompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  wip: true,
  release: { version: null, date: null },
  sources: ["https://github.com/jellees/mlss"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Game Boy Advance"],
  summary: "Mario & Luigi: Superstar Saga is a 2003 role-playing video game developed by AlphaDream and published by Nintendo for the Game Boy Advance. It is the first game in the Mario & Luigi series. The story follows Mario and Luigi as they travel to the Beanbean Kingdom in order to combat Cackletta and Fawful, who stole Princess Peach's voice for the purpose of harnessing the power of a special artifact called the Beanstar.",
  summaryEs: "Mario & Luigi: Superstar Saga, conocido en Japón como Mario & Luigi RPG , es un videojuego de género RPG desarrollado por AlphaDream y publicado por Nintendo para la consola portátil Game Boy Advance. Se trata del tercer RPG de la serie Mario, después de Super Mario RPG: Legend of the Seven Stars para SNES y Paper Mario para Nintendo 64. Superstar Saga fue continuada por cuatro secuelas. Posteriormente fue desarrollada una versión de este mismo juego llamada Mario & Luigi: Superstar Saga para Nintendo 3DS.",
  notes:
    "Decompilation of Mario & Luigi: Superstar Saga. A research codebase; it requires game files from a copy you own.",
  notesEs:
    "Decompilación de Mario & Luigi: Superstar Saga. Código de investigación; requiere archivos del juego de una copia que poseas.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/6/63/MarioAndLuigiSuperstarSagaGBACoverArtUS.jpg",
    alt: "Mario & Luigi: Superstar Saga (cover)",
    credit: "Wikipedia",
  },
};
