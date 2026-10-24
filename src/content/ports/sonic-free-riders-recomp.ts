import type { Port } from "@/lib/ports/schema";

export const sonicFreeRidersRecomp: Port = {
  schema: "port",
  id: "sonic-free-riders-recomp",
  title: "Free Riders Recompiled",
  game: "Sonic Free Riders",
  developers: ["YuutaTsubasa"],
  publisher: "Sega",
  originalYear: 2010,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/YuutaTsubasa/Free-Riders-Recompiled"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Xbox 360"],
  summary: "Sonic Free Riders is a 2010 racing video game developed by Sonic Team and published by Sega for the Xbox 360. The game requires the use of Microsoft's Kinect peripheral for its motion controls and served as one of its launch titles in November 2010. Sonic Free Riders is the seventh racing game in the Sonic the Hedgehog series, and the third entry in the Sonic Riders trilogy, following Sonic Riders: Zero Gravity. The game's story centers on a World Grand Prix hosted by a disguised Doctor Eggman, who secretly plans to gather data from the competitors to program into his robots.",
  summaryEs: "Sonic Free Riders es un videojuego de carrera de la serie Sonic the Hedgehog. Es el tercer videojuego de la serie de Sonic Riders, después de Sonic Riders: Zero Gravity. Este juego cuenta con modo multijugador en línea de hasta 8 jugadores. Se trataba de un título de lanzamiento Kinect, publicado el 4 de noviembre de 2010 en América del Norte, 10 de noviembre de 2010 en Europa y el 20 de noviembre de 2010 en Japón.",
  notes:
    "Native recompilation of Sonic Free Riders (Xbox 360). The player supplies their own legally obtained disc dump; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Sonic Free Riders (Xbox 360). El jugador aporta su propio material obtenido legalmente (disc dump); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/3/3f/Sonic_Free_Riders_Box_Artwork.jpg",
    alt: "Sonic Free Riders (box art)",
    credit: "Wikipedia",
  },
};
