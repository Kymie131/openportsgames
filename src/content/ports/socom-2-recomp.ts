import type { Port } from "@/lib/ports/schema";

export const socom2Recomp: Port = {
  schema: "port",
  id: "socom-2-recomp",
  title: "SOCOM II Recompiled",
  game: "SOCOM II: U.S. Navy SEALs",
  developers: ["Scotho"],
  publisher: "Sony Computer Entertainment",
  originalYear: 2003,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Scotho/socom-unzipped"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  originalSystems: ["PlayStation 2"],
  summary: "SOCOM II U.S. Navy SEALs is a 2003 tactical third-person shooter video game developed by Zipper Interactive and published by Sony Computer Entertainment for the PlayStation 2. It is the sequel to SOCOM U.S. Navy SEALs.",
  summaryEs: "SOCOM II: U.S. Navy Seals es un videojuego de acción táctica en tercera persona para PlayStation 2, secuela de SOCOM: U.S. Navy SEALs. El videojuego fue desarrollado por Zipper Interactive en colaboración con la Armada de los Estados Unidos y publicado por Sony Computer Entertainment. Salió a la venta en Estados Unidos el 4 de noviembre de 2003 y en Europa el 5 de marzo de 2004.",
  notes:
    "Static recompilation of SOCOM II: U.S. Navy SEALs (PlayStation 2) to PC, with self-hosted online play. It requires the game itself.",
  notesEs:
    "Recompilación estática de SOCOM II: U.S. Navy SEALs (PlayStation 2) para PC, con juego en línea autoalojado. Requiere el propio juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/d/d0/Socom_2_Box_Art.jpg",
    alt: "SOCOM II: U.S. Navy SEALs (box art)",
    credit: "Wikipedia",
  },
};
