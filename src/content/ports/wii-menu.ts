import type { Port } from "@/lib/ports/schema";

export const wiiMenu: Port = {
  schema: "port",
  id: "wii-menu",
  title: "Wii Menu",
  game: "Wii Menu",
  developers: ["koopthekoopa"],
  publisher: "Nintendo",
  originalYear: 2006,
  portType: "decompilation",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/koopthekoopa/wii-ipl"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Wii",
  notes:
    "Fan decompilation of the Wii Menu. It is system software, not a game. A research codebase; it requires files from a console you own.",
  notesEs:
    "Decompilación hecha por fans del menú de Wii. Es software de sistema, no un juego. Código de investigación; requiere archivos de una consola que poseas.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/d/da/Wiimen.png",
    alt: "Wii Menu (box art)",
    credit: "Wikipedia",
  },
};
