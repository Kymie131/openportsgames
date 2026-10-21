import type { Port } from "@/lib/ports/schema";

export const openq4: Port = {
  schema: "port",
  id: "openq4",
  title: "openQ4",
  game: "Quake 4",
  developers: ["themuffinator"],
  publisher: "Activision",
  originalYear: 2005,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/themuffinator/openQ4"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Windows"],
  notes:
    "Modern source port of Quake 4 based on the released id Tech 4 code. It needs your own copy of the game.",
  notesEs:
    "Port de código fuente moderno de Quake 4 basado en el código de id Tech 4 publicado. Necesita tu propia copia del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/6/6c/Quake4box.jpg",
    alt: "Quake 4 (cover)",
    credit: "Wikipedia",
  },
};
