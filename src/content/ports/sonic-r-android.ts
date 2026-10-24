import type { Port } from "@/lib/ports/schema";

export const sonicRAndroid: Port = {
  schema: "port",
  id: "sonic-r-android",
  title: "Sonic R (Android)",
  game: "Sonic R",
  developers: ["ZinexDa"],
  publisher: "Sega",
  originalYear: 1997,
  portType: "decompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/ZinexDa/sonic-r-android"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Sega Saturn"],
  summary: "Sonic R is a 1997 racing game developed by Traveller's Tales and Sonic Team and published by Sega for the Sega Saturn. It is the third racing game in the Sonic the Hedgehog series, and the first to feature 3D computer graphics. The player races one of ten Sonic characters in various Sonic-themed race tracks as they attempt to stop Doctor Robotnik from stealing the Chaos Emeralds and enslaving the world. Sonic R features single-player and multiplayer game modes, and while similar to kart racing games such as Mario Kart, it places an emphasis on jumping and exploration.",
  summaryEs: "Sonic R es un videojuego de carreras de 1997 desarrollado por Traveller's Tales y Sonic Team para Sega Saturn. Es el tercer juego de carreras de la serie Sonic the Hedgehog y el primero en contar con gráficos de computadora en 3D. El jugador compite con uno de los diez personajes de Sonic en varias pistas de carreras con temática de Sonic mientras intentan evitar que el Dr. Robotnik robe las Chaos Emeralds y esclavice al mundo.",
  notes:
    "Native Android port of the Sonic R PC decompilation, with a GLES2 renderer, 60 FPS and touch controls. It requires your own PC game files and includes no retail assets.",
  notesEs:
    "Port nativo para Android de la decompilación de Sonic R de PC, con renderizador GLES2, 60 FPS y controles táctiles. Requiere tus propios archivos del juego de PC y no incluye recursos comerciales.",
  cover: {
    src: "https://thumbnails.libretro.com/Sega%20-%20Saturn/Named_Boxarts/Sonic%20R%20(Europe).png",
    alt: "Sonic R (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sega%20-%20Saturn/Named_Snaps/Sonic%20R%20(Europe).png",
      alt: "Sonic R (screenshot)",
      credit: "Libretro",
    },
  ],
};
