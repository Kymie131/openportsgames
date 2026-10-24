import type { Port } from "@/lib/ports/schema";

export const mkdd: Port = {
  schema: "port",
  id: "mkdd",
  title: "Mario Kart: Double Dash!! Decompilation",
  game: "Mario Kart: Double Dash!!",
  developers: ["doldecomp"],
  publisher: "Nintendo",
  originalYear: 2003,
  portType: "decompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  wip: true,
  release: { version: null, date: null },
  sources: ["https://github.com/doldecomp/mkdd"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["GameCube"],
  summary: "Mario Kart: Double Dash!! is a 2003 kart racing game developed and published by Nintendo for the GameCube. It is the fourth main entry in the Mario Kart series. Similar to previous titles, Double Dash challenges Mario series player characters to race against each other on 16 Mario-themed tracks. The game introduced a number of gameplay features, such as having two riders per kart.",
  summaryEs: "Mario Kart: Double Dash es un videojuego de carreras desarrollado por Nintendo EAD y publicado por Nintendo. El juego salió a la venta para GameCube en noviembre de 2003 en Japón, Europa, Norteamérica y Australia. Es la cuarta entrega de la serie Mario Kart y la primera en la que se puede jugar con dos personajes en un mismo kart. El juego retoma a los personajes principales del universo Super Mario para que compitan en carreras de karts a lo largo de diversos circuitos situados en el Reino Champiñón.",
  notes:
    "Decompilation of Mario Kart: Double Dash!! for the GameCube. A research codebase; it requires game files from a copy you own.",
  notesEs:
    "Decompilación de Mario Kart: Double Dash!! para GameCube. Código de investigación; requiere archivos del juego de una copia que poseas.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20GameCube/Named_Boxarts/Mario%20Kart%20-%20Double%20Dash!!%20(Europe)%20(En%2CFr%2CDe%2CEs%2CIt).png",
    alt: "Mario Kart: Double Dash!! (cover)",
    credit: "libretro",
  },
};
