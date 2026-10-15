import type { Port } from "@/lib/ports/schema";

export const parasiteEveIiDecomp: Port = {
  schema: "port",
  id: "parasite-eve-ii-decomp",
  title: "Parasite Eve II Decompilation",
  game: "Parasite Eve II",
  developers: ["GabeRealB"],
  publisher: "Square Enix",
  originalYear: 1999,
  portType: "decompilation",
  type: "decomp-in-progress",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/GabeRealB/parasite-eve-2-decomp"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "PlayStation",
  notes:
    "Completed decompilation of the US release of Parasite Eve II (PlayStation). A research codebase; it requires game files from a copy you own.",
  notesEs:
    "Decompilación completada de la versión USA de Parasite Eve II (PlayStation). Código de investigación; requiere archivos del juego de una copia que poseas.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Parasite%20Eve%20II%20(USA).png",
    alt: "Parasite Eve II (box art)",
    credit: "Box art",
  },
};
