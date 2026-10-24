import type { Port } from "@/lib/ports/schema";

export const touhou6Android: Port = {
  schema: "port",
  id: "touhou-6-android",
  title: "Touhou 6 (Android)",
  game: "Touhou 6: The Embodiment of Scarlet Devil",
  developers: ["cardanawandra"],
  publisher: "Team Shanghai Alice",
  originalYear: 2002,
  portType: "decompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/cardanawandra/th06"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  originalSystems: ["Windows"],
  summary: "Touhou Koumakyou ~ the Embodiment of Scarlet Devil is a 2002 bullet hell video game developed by Team Shanghai Alice. It is the sixth entry in the Touhou Project series, and the first to be released for Microsoft Windows. It follows either the miko Reimu Hakurei or the magician Marisa Kirisame as they battle enemies through the world of Gensokyo to find the cause of a red-colored mist which has covered the sky in the midst of summer.",
  summaryEs: "Touhou Koumakyou ~ the Embodiment of Scarlet Devil. es un videojuego danmaku de desplazamiento vertical y el sexto juego oficial de la serie Touhou Project. Es el primero en ser lanzado específicamente para Microsoft Windows y el primer juego desarrollado por Team Shanghai Alice. Todos los juegos anteriores a Embodiment of Scarlet Devil fueron hechos para la serie de ordenadores PC-98 siendo lanzados por Amusement Makers.",
  notes:
    "Android port based on the decompilation of Touhou 6: The Embodiment of Scarlet Devil (version 1.02h). It needs the original game files.",
  notesEs:
    "Port a Android basado en la decompilación de Touhou 6: The Embodiment of Scarlet Devil (versión 1.02h). Necesita los archivos del juego original.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/8/8b/Th06cover.jpg",
    alt: "Touhou 6: The Embodiment of Scarlet Devil (cover)",
    credit: "Wikipedia",
  },
};
