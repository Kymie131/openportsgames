import type { Port } from "@/lib/ports/schema";

export const namcoSystem22RaveRacer: Port = {
  schema: "port",
  id: "namco-system-22-rave-racer",
  title: "Rave Racer (Namco System 22)",
  game: "Rave Racer",
  developers: ["Namco"],
  publisher: "Namco",
  originalYear: 1995,
  portType: "decompilation",
  genre: "racing",
  openSource: true,
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: "0.8.1", date: "2026-10-14" },
  sources: ["https://github.com/spacestate1/namco22-decompile"],
  license: { spdx: "MIT" },
  verified: true,
  verifiedAt: "2026-10-14",
  originalSystems: ["Namco System 22"],
  features: [
    "Playable races with sound",
    "Windows and Linux packages on the releases page, no building needed",
    "Widescreen rendering on top of the original Mode 22 output",
  ],
  featuresEs: [
    "Carreras jugables con sonido",
    "Paquetes para Windows y Linux en la página de releases, sin necesidad de compilar",
    "Renderizado panorámico sobre la salida Mode 22 original",
  ],
  requirements: {
    minimum: "Your own Rave Racer ROM set from MAME 0.271 or later (raverace.zip, namcoc74.zip)",
  },
  screenshots: [
    {
      src: "https://raw.githubusercontent.com/spacestate1/namco22-decompile/main/docs/images/raverace-widescreen.png",
      alt: "Rave Racer running in widescreen on PC",
      credit: "spacestate1/namco22-decompile",
    },
  ],
  summary: "Rave Racer is a 1995 racing video game developed and published by Namco for arcades. It is the third title in the Ridge Racer series and the follow-up to Ridge Racer and Ridge Racer 2. Rave Racer runs on Namco System 22 hardware, and could be played by two people per cabinet for up to eight players total when up to four of them were linked together. Compared to Ridge Racer 2, Rave Racer adds two new tracks as well as the ability to play the original two, various handling changes, force feedback steering, and improved car and racetrack graphics.",
  summaryEs: "Rave Racer es un videojuego de carreras arcade que fue lanzado por Namco en 1995. Se ejecuta en el hardware Namco System 22, y podría ser jugado por dos personas por gabinete para hasta ocho jugadores en total cuando hasta cuatro de ellos estaban vinculados entre sí. Es el tercer título arcade de la serie Ridge Racer y la continuación de Ridge Racer y Ridge Racer 2.",
  notes:
    "Decompilation of the 1995 Namco arcade racer for PC. This one also needs the separate sound board ROM set (namcoc74.zip) alongside the game ROM.",
  notesEs:
    "Decompilación del arcade de carreras de Namco de 1995 para PC. Este además necesita el set de ROM de la placa de sonido (namcoc74.zip) junto con la ROM del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/3/3c/Rave_Racer_Flyer.png",
    alt: "Rave Racer (box art)",
    credit: "Wikipedia",
  },
};
