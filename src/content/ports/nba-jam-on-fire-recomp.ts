import type { Port } from "@/lib/ports/schema";

export const nbaJamOnFireRecomp: Port = {
  schema: "port",
  id: "nba-jam-on-fire-recomp",
  title: "NBA Jam: On Fire Edition Recompiled",
  game: "NBA Jam: On Fire Edition",
  developers: ["GTTeancum"],
  publisher: "EA Sports",
  originalYear: 2011,
  portType: "recompilation",
  genre: "sports",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/GTTeancum/OpenJam"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Xbox 360"],
  summary: "NBA Jam is a basketball video game series based on the National Basketball Association (NBA). Initially developed as arcade games by Midway, the game found popularity with its photorealistic digitized graphics, over-the-top presentation and exaggerated style of two-on-two basketball play. The successor to Midway's Arch Rivals, the original 1993 NBA Jam allows players to jump many times above their own height, make slam dunks that defy human capabilities, and freely shove or elbow opponents out of the way without consequences.",
  summaryEs: "NBA Jam es un videojuego de baloncesto desarrollado por EA Sports y distribuido por EA Entertainment en 2010. Esta primera versión estaba basada en la Temporada 09-010, teniendo las licencias de algunas de las estrellas de la NBA de la época como LeBron James, Steve Nash, Kobe Bryant, Kevin Garnett, Marc Gasol, Carmelo Anthony, Chris Paul, Derrick Rose, y las leyendas, Julius Erving, Tim Hardaway, Chris Mullin, Larry Bird, Manute Bol, James Worthy, Kenny Anderson, Larry Johnson, Dennis Rodman y Bryant Reeveso Spud Webb.",
  notes:
    "Native PC port of NBA Jam: On Fire Edition (Xbox 360 XBLA). It needs your own copy of the game.",
  notesEs:
    "Port nativo para PC de NBA Jam: On Fire Edition (Xbox 360 XBLA). Necesita tu propia copia del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/8/89/Nba_jam_2010_cover.png",
    alt: "NBA Jam (cover)",
    credit: "Wikipedia",
  },
};
