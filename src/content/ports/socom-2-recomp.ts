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
  originalSystem: "PlayStation 2",
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
