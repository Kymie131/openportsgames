import type { Port } from "@/lib/ports/schema";

export const openjkdf2: Port = {
  schema: "port",
  id: "openjkdf2",
  title: "OpenJKDF2",
  game: "Star Wars Jedi Knight: Dark Forces II",
  developers: ["shinyquagsire23"],
  publisher: "LucasArts",
  originalYear: 1997,
  portType: "reimplementation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos", "android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/shinyquagsire23/OpenJKDF2"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Microsoft Windows",
  notes:
    "Function-by-function reimplementation of Star Wars Jedi Knight: Dark Forces II in C, with 64-bit builds for Windows, macOS and Linux. It ships no game assets and requires a valid copy of the original.",
  notesEs:
    "Reimplementación función a función de Star Wars Jedi Knight: Dark Forces II en C, con builds de 64 bits para Windows, macOS y Linux. No incluye recursos del juego y requiere una copia válida del original.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/2/2f/JediKnight-cover.jpg",
    alt: "Star Wars Jedi Knight: Dark Forces II (box art)",
    credit: "Wikipedia",
  },
};
