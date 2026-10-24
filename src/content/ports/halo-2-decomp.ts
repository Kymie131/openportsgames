import type { Port } from "@/lib/ports/schema";

export const halo2Decomp: Port = {
  schema: "port",
  id: "halo-2-decomp",
  title: "Halo 2 Decompilation",
  game: "Halo 2",
  developers: ["kirklandsig"],
  publisher: "Microsoft Game Studios",
  originalYear: 2004,
  portType: "decompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  wip: true,
  release: { version: null, date: null },
  sources: ["https://github.com/kirklandsig/halo2-decompiled"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Xbox"],
  summary: "Halo 2 is a 2004 first-person shooter game developed by Bungie and published by Microsoft Game Studios for the Xbox. The second installment in the Halo franchise, the campaign follows the supersoldier Master Chief and the disgraced alien commander Arbiter in a 26th-century conflict between the United Nations Space Command, the genocidal Covenant, and the parasitic Flood.",
  summaryEs: "Halo 2 es un videojuego de disparos en primera persona desarrollado por Bungie Studios y lanzado para la consola Xbox en 2004. Es la segunda entrega en la franquicia de Halo y su trama continúa los sucesos relatados en Halo: Combat Evolved.",
  notes:
    "Decompilation of Halo 2 for the original Xbox. A research codebase; it requires game files from a copy you own.",
  notesEs:
    "Decompilación de Halo 2 para la Xbox original. Código de investigación; requiere archivos del juego de una copia que poseas.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/9/92/Halo2-cover.png",
    alt: "Halo 2 (cover)",
    credit: "Wikipedia",
  },
};
