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
  originalSystem: "MS-DOS",
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
