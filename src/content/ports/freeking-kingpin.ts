import type { Port } from "@/lib/ports/schema";

export const freekingKingpin: Port = {
  schema: "port",
  id: "freeking-kingpin",
  title: "FreeKing (Kingpin)",
  game: "Kingpin: Life of Crime",
  developers: ["ernestbuffington"],
  publisher: "Interplay Entertainment",
  originalYear: 1999,
  portType: "reimplementation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/ernestbuffington/freeking"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  originalSystems: ["Windows"],
  summary: "Kingpin: Life of Crime is a 1999 first-person shooter developed by Xatrix Entertainment and published by Interplay Entertainment. The game begins with the player character wounded and beaten up by associates of the crime boss The Kingpin, and the story follows his thirst for revenge. Released shortly after the Columbine High School massacre, the game attracted controversy due to the overall timing of its release; thus, it was not sold by various retailers in the US, despite receiving generally positive reviews from critics. The game was also ported to Linux.",
  summaryEs: "Kingpin: Life of Crime es un videojuego de disparos publicado por Interplay Entertainment en 1999.",
  notes:
    "Open-source reimplementation of the Kingpin: Life of Crime engine, intended to run with the retail game data. It builds for Windows, Linux and macOS.",
  notesEs:
    "Reimplementación de código abierto del motor de Kingpin: Life of Crime, pensada para funcionar con los datos del juego comercial. Compila para Windows, Linux y macOS.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/5/50/Kingpin_-_Box_Front.jpg",
    alt: "Kingpin: Life of Crime (box art)",
    credit: "Wikipedia",
  },
};
