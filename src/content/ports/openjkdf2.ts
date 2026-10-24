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
  originalSystems: ["Windows"],
  summary: "Star Wars Jedi Knight: Dark Forces II is a 1997 first-person shooter video game developed and published by LucasArts for Windows. It is the sequel to 1995's Star Wars: Dark Forces and the second installment in the Star Wars: Jedi Knight series. The story, set in the Star Wars expanded universe one year after the film Return of the Jedi, follows returning protagonist Kyle Katarn, a mercenary working for the New Republic, who discovers his connection to the Force and \"The Valley of the Jedi\", an ancient source of power.",
  summaryEs: "Star Wars Jedi Knight: Dark Forces II es un videojuego de disparos en primera persona para PC publicado por Lucas Arts en 1997.",
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
