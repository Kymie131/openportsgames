import type { Port } from "@/lib/ports/schema";

export const ecWolf: Port = {
  schema: "port",
  id: "ecwolf",
  title: "ECWolf",
  game: "Wolfenstein 3D",
  developers: ["id Software"],
  publisher: "Apogee Software",
  originalYear: 1992,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "1.4.2", date: "2025-09-14" },
  sources: ["https://github.com/ECWolfEngine/ECWolf"],
  website: "https://maniacsvault.net/ecwolf/",
  license: {
    spdx: "NOASSERTION",
    note: "no license file in the repository; GPL-2.0-or-later per downstream packaging",
  },
  verified: false,
  originalSystems: ["MS-DOS"],
  features: [
    "ZDoom-style editing workflow for Wolfenstein 3D content",
    "Mods packaged as a single file instead of whole data sets",
    "Blake Stone and Super 3D Noah's Ark support in development",
  ],
  featuresEs: [
    "Flujo de edición tipo ZDoom para contenido de Wolfenstein 3D",
    "Mods empaquetados como un solo archivo en vez de conjuntos de datos completos",
    "Soporte de Blake Stone y Super 3D Noah's Ark en desarrollo",
  ],
  summary: "Wolfenstein 3D is a 1992 first-person shooter game developed by id Software and published by Apogee Software and FormGen for MS-DOS. It was inspired by the 1981 Muse Software video game Castle Wolfenstein, and is the third installment in the Wolfenstein series. In Wolfenstein 3D, the player assumes the role of Allied spy William \"B.J.\" Blazkowicz during World War II as he escapes from the Nazi German prison Castle Wolfenstein and carries out a series of crucial missions against the Nazis.",
  summaryEs: "Wolfenstein 3D es un videojuego de disparos en primera persona que popularizó el género para PC. Fue creado por ID Software y distribuido por Apogee Software en mayo de 1992. Este juego fue pionero en su género y le siguieron otros tan importantes como Doom y Quake. El juego ha sido llevado a otros sistemas como 3DO, SNES, Gameboy Advance, Spectrum e incluso iOS, Android o Motorola Z6. También se lanzó este juego para Wii y PSP, pero en forma de homebrew.",
  notes:
    "Wolf4SDL-based source port with ZDoom editing tools pulled across, maintained by Blzut3. Distributed from the project site rather than from GitHub releases. Needs Wolfenstein 3D data or the shareware files.",
  notesEs:
    "Port de código fuente basado en Wolf4SDL con herramientas de edición tipo ZDoom portadas, mantenido por Blzut3. Se distribuye desde el sitio del proyecto y no desde las releases de GitHub. Necesita los datos de Wolfenstein 3D o los archivos shareware.",
  cover: {
    src: "https://thumbnails.libretro.com/DOS/Named_Boxarts/Wolfenstein%203D.png",
    alt: "Wolfenstein 3D (box art)",
    credit: "Box art",
  },
};
