import type { Port } from "@/lib/ports/schema";

export const TwistedMetalBlack: Port = {
  schema: "port",
  id: "twisted-metal-black",
  title: "Twisted Metal: Black",
  game: "Twisted Metal: Black",
  developers: ["abelbriggs1"],
  publisher: "Sony Interactive Entertainment",
  originalYear: 2001,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/abelbriggs1/tmb_decomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation 2"],
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation%202/Named_Boxarts/Twisted%20Metal%20-%20Black%20(Europe)%20(En,Fr,De,Es,It).png",
    alt: "Twisted Metal: Black (box art)",
    credit: "Box art",
  },
  summary: "Twisted Metal: Black is a 2001 vehicular combat game developed by Incog Inc. Entertainment and published by Sony Computer Entertainment for the PlayStation 2. The fifth title of the Twisted Metal series following Twisted Metal 4 (1999), it serves as a reboot of the franchise. It is the first game to be developed by Incog Inc., formed by alumni of SingleTrac—the developers of Twisted Metal (1995) and Twisted Metal 2 (1996). An online enabled multiplayer-only variant, Twisted Metal: Black Online, was released later as a free send-away.",
  summaryEs: "Twisted Metal: Black es un videojuego de combate en vehículos de 2001 desarrollado por Incog Inc. Entertainment y publicado por Sony Computer Entertainment para PlayStation 2. Es el primer juego desarrollado por Incog Inc. Entertainment, fundada por exalumnos de SingleTrac. El quinto título de la serie Twisted Metal tras Twisted Metal 4 (1999) supone un reinicio de la franquicia. Posteriormente, se lanzó una variante multijugador online, Twisted Metal: Black Online, como regalo gratuito. El juego recibió elogios de la crítica y fue nominado a varios premios de videojuegos.",
  notes: "[WIP] Matching decompilation of Twisted Metal: Black (2001) for the Playstation 2.",
  notesEs:
    "Decompilación que coincide de Twisted Metal: Black (2001) para PlayStation 2, en desarrollo.",
};
