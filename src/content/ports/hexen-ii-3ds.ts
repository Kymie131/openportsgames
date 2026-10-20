import type { Port } from "@/lib/ports/schema";

export const hexenIi3ds: Port = {
  schema: "port",
  id: "hexen-ii-3ds",
  title: "Hexen II (3DS)",
  game: "Hexen II",
  developers: ["Rinnegatamante"],
  publisher: "id Software",
  originalYear: 1997,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["3ds"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Rinnegatamante/ctrHexenII"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Windows"],
  related: ["hexen-ii-classic-core-engines"],
  notes:
    "Hexen II (id Software, 1997) ported natively to Nintendo 3DS from the original source code. You need the game data files to play.",
  notesEs:
    "Hexen II (id Software, 1997) portado de forma nativa a Nintendo 3DS desde el código fuente original. Necesitas los archivos de datos del juego para jugar.",
};
