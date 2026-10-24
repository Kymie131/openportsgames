import type { Port } from "@/lib/ports/schema";

export const touhou6Vita: Port = {
  schema: "port",
  id: "touhou-6-vita",
  title: "Touhou 6 (PS Vita)",
  game: "Touhou 6: The Embodiment of Scarlet Devil",
  developers: ["Wavy667"],
  publisher: "Team Shanghai Alice",
  originalYear: 2002,
  portType: "decompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["psvita"],
  status: "beta",
  release: { version: "0.1", date: "2026-08-12" },
  sources: ["https://github.com/Wavy667/th06-vita"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Windows"],
  related: ["touhou-6-android", "touhou-6-psp-jeong-jimin"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/8/8b/Th06cover.jpg",
    alt: "Touhou 6: The Embodiment of Scarlet Devil (box art)",
    credit: "Wikipedia",
  },
  summary: "Touhou Koumakyou ~ the Embodiment of Scarlet Devil is a 2002 bullet hell video game developed by Team Shanghai Alice. It is the sixth entry in the Touhou Project series, and the first to be released for Microsoft Windows. It follows either the miko Reimu Hakurei or the magician Marisa Kirisame as they battle enemies through the world of Gensokyo to find the cause of a red-colored mist which has covered the sky in the midst of summer.",
  summaryEs: "Touhou Koumakyou ~ the Embodiment of Scarlet Devil. es un videojuego danmaku de desplazamiento vertical y el sexto juego oficial de la serie Touhou Project. Es el primero en ser lanzado específicamente para Microsoft Windows y el primer juego desarrollado por Team Shanghai Alice. Todos los juegos anteriores a Embodiment of Scarlet Devil fueron hechos para la serie de ordenadores PC-98 siendo lanzados por Amusement Makers.",
  notes:
    "Touhou 6: The Embodiment of Scarlet Devil (Team Shanghai Alice, 2002) on PS Vita, based on the portable decompilation. You need the original game files.",
  notesEs:
    "Touhou 6: The Embodiment of Scarlet Devil (Team Shanghai Alice, 2002) en PS Vita, basado en la decompilación portátil. Necesitas los archivos originales.",
};
