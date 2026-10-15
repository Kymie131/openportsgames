import type { Port } from "@/lib/ports/schema";

export const KkndKrushKillNDestroy: Port = {
  schema: "port",
  id: "kknd-krush-kill-n-destroy",
  title: "KKND: Krush Kill 'n Destroy",
  game: "KKND: Krush Kill 'n Destroy",
  developers: ["Wyrelade"],
  publisher: "Unknown",
  originalYear: 1997,
  portType: "decompilation",
  genre: "action-adventure",
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
  notes:
    "Matching decompilation of KKND: Krush Kill 'n Destroy (DOS, 1997) - Watcom C, byte-identical rebuild.",
  notesEs:
    "Decompilación que coincide de KKND: Krush Kill 'n Destroy (DOS, 1997), en Watcom C, reconstrucción byte a byte.",
};
