import type { Port } from "@/lib/ports/schema";

export const openblack: Port = {
  schema: "port",
  id: "openblack",
  title: "openblack",
  game: "Black & White",
  developers: ["openblack"],
  publisher: "Electronic Arts",
  originalYear: 2001,
  portType: "reimplementation",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/openblack/openblack"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Windows"],
  summary: "Black & White is a god video game developed by Lionhead Studios and published by Electronic Arts for Microsoft Windows in 2001 and by Feral Interactive in 2002 for Mac OS. Black & White combines elements of artificial life and strategy. The player acts as a god whose goal is to defeat Nemesis, another god who wants to take over the world. A primary theme is the concept of good and evil, with the atmosphere being affected by the player's moral choices.",
  summaryEs: "Black & White es un videojuego creado por Lionhead Studios, con Peter Molyneux a la cabeza. Fue lanzado en 2001 para Windows, y distribuido por la compañía Electronic Arts. Inicialmente también iba a tener versión para PlayStation y PlayStation 2, de las que se llegaron a ver vídeos e incluso demos para la prensa. Inexplicablemente, fue cancelado",
  notes:
    "Open-source reimplementation of Black & White that runs the original game assets. It needs your own copy of the game.",
  notesEs:
    "Reimplementación de código abierto de Black & White que ejecuta los recursos del juego original. Necesita tu propia copia del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/7/7b/Black_%26_White_Coverart.png",
    alt: "Black & White (cover)",
    credit: "Wikipedia",
  },
};
