import type { Port } from "@/lib/ports/schema";

export const mlss: Port = {
  schema: "port",
  id: "mlss",
  title: "Mario & Luigi: Superstar Saga Decompilation",
  game: "Mario & Luigi: Superstar Saga",
  developers: ["jellees"],
  publisher: "Nintendo",
  originalYear: 2003,
  portType: "decompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/jellees/mlss"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Game Boy Advance",
  notes:
    "Decompilation of Mario & Luigi: Superstar Saga. A research codebase; it requires game files from a copy you own.",
  notesEs:
    "Decompilación de Mario & Luigi: Superstar Saga. Código de investigación; requiere archivos del juego de una copia que poseas.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/6/63/MarioAndLuigiSuperstarSagaGBACoverArtUS.jpg",
    alt: "Mario & Luigi: Superstar Saga (cover)",
    credit: "Wikipedia",
  },
};
