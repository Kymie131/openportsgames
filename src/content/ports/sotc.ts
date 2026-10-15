import type { Port } from "@/lib/ports/schema";

export const sotc: Port = {
  schema: "port",
  id: "sotc",
  title: "Shadow of the Colossus Decompilation",
  game: "Shadow of the Colossus",
  developers: ["Fantaskink"],
  publisher: "Sony Computer Entertainment",
  originalYear: 2005,
  portType: "decompilation",
  type: "decomp-in-progress",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Fantaskink/SOTC"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation 2"],
  notes:
    "In-progress decompilation of the preview build of Shadow of the Colossus. A research codebase; it requires game files from a copy you own.",
  notesEs:
    "Decompilación en progreso del build de avance de Shadow of the Colossus. Código de investigación; requiere archivos del juego de una copia que poseas.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/f/f8/Shadow_of_the_Colossus_%282005%29_cover.jpg",
    alt: "Shadow of the Colossus (cover)",
    credit: "Wikipedia",
  },
};
