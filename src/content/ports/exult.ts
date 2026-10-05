import type { Port } from "@/lib/ports/schema";

export const exultPort: Port = {
  schema: "port",
  id: "exult",
  title: "Exult",
  game: "Ultima VII",
  developers: ["Exult Team"],
  publisher: "Origin Systems",
  originalYear: 1992,
  genre: "rpg",
  openSource: true,
  portType: "source-port",
  platforms: ["windows", "linux", "android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/exult/exult"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  originalSystem: "MS-DOS",
  features: [
    "Supports both Ultima VII and Ultima VIII data sets",
    "Android build available",
    "Scripting support for new content",
  ],
  featuresEs: [
    "Compatible con los conjuntos de datos de Ultima VII y Ultima VIII",
    "Build disponible para Android",
    "Soporte de scripting para contenido nuevo",
  ],
  notes:
    "Open source engine for the Ultima VII and VIII games. Published GitHub releases are prereleases only, so no stable version is recorded.",
  notesEs:
    "Motor de código abierto para los juegos Ultima VII y VIII. Las releases de GitHub publicadas son solo versiones preliminares, así que no se registra una versión estable.",
  cover: {
    src: "https://thumbnails.libretro.com/DOS/Named_Boxarts/Ultima%20VIII%20-%20Pagan.png",
    alt: "Ultima VII (box art)",
    credit: "Box art",
  },
};
