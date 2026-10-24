import type { Port } from "@/lib/ports/schema";

export const srb2Android: Port = {
  schema: "port",
  id: "srb2-android",
  title: "Sonic Robo Blast 2 (Android)",
  game: "Sonic Robo Blast 2",
  developers: ["bitten2up"],
  publisher: "Sonic Team Jr.",
  originalYear: 1998,
  portType: "source-port",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "freeware",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/bitten2up/SRB2-Android"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  originalSystems: ["Windows"],
  summary: "Sonic Robo Blast 2 is a platform game made within a modified version of id Software's Doom engine. It is a free Sonic the Hedgehog fan game inspired by the original Sega Genesis games that \"attempts to recreate their design in 3D\", and was the first fan-made 3D Sonic game created. The game has received consistent support throughout its development of over 25 years, which has been attributed to a large modding community.",
  summaryEs: "Sonic Robo Blast 2, abreviado como SRB2, es un fangame de PC, basado en la franquicia de Sonic the Hedgehog. Es un juego de plataformas en 3D desarrollado por un grupo de fans llamado Sonic Team Junior, usando una versión modificada del motor Doom Legacy. Está estrechamente inspirado en los juegos originales de Sonic en 2D para el Sega Genesis e intenta recrear este estilo en 3D. También incluye diversos desbloqueables basados en otros juegos clásicos, como un nivel basado en Super Mario Bros. u otro basado en NiGHTS Into Dreams.",
  notes:
    "Android build of Sonic Robo Blast 2, the free 3D Sonic fangame based on a modified Doom Legacy engine. It is a standalone game and needs no original assets.",
  notesEs:
    "Build para Android de Sonic Robo Blast 2, el fangame 3D gratuito de Sonic basado en una versión modificada del motor Doom Legacy. Es un juego independiente y no necesita recursos originales.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/6/6d/Srb2_22_title.png",
    alt: "Sonic Robo Blast 2 (box art)",
    credit: "Wikipedia",
  },
};
