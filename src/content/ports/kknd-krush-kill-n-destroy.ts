import type { Port } from "@/lib/ports/schema";

export const KkndKrushKillNDestroy: Port = {
  schema: "port",
  id: "kknd-krush-kill-n-destroy",
  title: "KKND: Krush Kill 'n Destroy",
  game: "KKND: Krush Kill 'n Destroy",
  developers: ["Wyrelade"],
  publisher: "Electronic Arts",
  originalYear: 1997,
  portType: "decompilation",
  genre: "strategy",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Wyrelade/KKND-Decomp"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["MS-DOS"],
  cover: {
    src: "https://thumbnails.libretro.com/DOS/Named_Boxarts/KKND%20-%20Krush,%20Kill%20'N'%20Destroy%20(1997).png",
    alt: "KKND: Krush Kill 'n Destroy (box art)",
    credit: "Box art",
  },
  summary: "KKND: Krush Kill 'n Destroy is a 1997 real-time strategy game developed by Beam Software and published by Electronic Arts. Two survivor factions fight over a post-apocalyptic wasteland using tanks, infantry and base building.",
  summaryEs: "KKND: Krush Kill 'n Destroy es un videojuego de estrategia en tiempo real de 1997 desarrollado por Beam Software y publicado por Electronic Arts. Dos facciones supervivientes se disputan un páramo postapocalíptico con tanques, infantería y construcción de bases.",
  notes:
    "Matching decompilation of KKND: Krush Kill 'n Destroy (DOS, 1997) - Watcom C, byte-identical rebuild.",
  notesEs:
    "Decompilación que coincide de KKND: Krush Kill 'n Destroy (DOS, 1997), en Watcom C, reconstrucción byte a byte.",
};
