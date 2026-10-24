import type { Port } from "@/lib/ports/schema";

export const openRw: Port = {
  schema: "port",
  id: "open-rw",
  title: "OpenRW",
  game: "Grand Theft Auto III",
  developers: ["OpenRW contributors"],
  publisher: "Rockstar Games",
  originalYear: 2001,
  genre: "open-world",
  openSource: true,
  portType: "reimplementation",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/rwengine/openrw"],
  website: "https://openrw.org",
  license: { spdx: "GPL-3.0" },
  verified: false,
  originalSystems: ["Windows"],
  summary: "Grand Theft Auto III is a 2001 action-adventure game developed by DMA Design and published by Rockstar Games. It is the first 3D game in the Grand Theft Auto series. Set in Liberty City, loosely based on New York City, the game follows Claude, a silent protagonist who becomes entangled in a world of crime, drugs, gang warfare, and corruption while pursuing revenge against his ex-girlfriend. The game is played from a third-person perspective and its world is navigated on foot or by vehicle. Its open world design lets the player freely roam Liberty City, which consists of three islands.",
  summaryEs: "Grand Theft Auto III es un videojuego de acción y aventura de mundo abierto de disparos en tercera persona de 2001 desarrollado por DMA Design y publicado por Rockstar Games. Es la tercera entrada principal de la serie Grand Theft Auto, después de Grand Theft Auto 2 de 1999, y la quinta instalación en general.",
  notes:
    "Unofficial open source recreation of the original game executable. No tagged releases are published, so builds track the repository. A legitimate PC copy of Grand Theft Auto III is required to play.",
  notesEs:
    "Recreación no oficial de código abierto del ejecutable del juego original. No se publican releases etiquetadas, así que las builds siguen el repositorio. Se necesita una copia legítima de Grand Theft Auto III para PC.",
  screenshots: [
    {
      src: "https://user-images.githubusercontent.com/418211/48028326-21260b80-e143-11e8-9a7e-53c073c39cc6.png",
      alt: "Liberty City rendered by OpenRW",
      credit: "OpenRW",
    },
    {
      src: "https://user-images.githubusercontent.com/418211/48028321-208d7500-e143-11e8-981f-70e47f5d1c50.png",
      alt: "Street view in OpenRW",
      credit: "OpenRW",
    },
    {
      src: "https://user-images.githubusercontent.com/418211/48028322-208d7500-e143-11e8-8759-ccb440f4ebf3.png",
      alt: "Vehicle in OpenRW",
      credit: "OpenRW",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/b/be/GTA3boxcover.jpg",
    alt: "Grand Theft Auto III (box art)",
    credit: "Wikipedia",
  },
};
