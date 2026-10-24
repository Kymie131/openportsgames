import type { Port } from "@/lib/ports/schema";

export const mbhaxe: Port = {
  schema: "port",
  id: "mbhaxe",
  title: "MBHaxe",
  game: "Marble Blast Gold",
  developers: ["RandomityGuy"],
  publisher: "GarageGames",
  originalYear: 2003,
  portType: "source-port",
  genre: "puzzle",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos", "android", "web", "ios"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/RandomityGuy/MBHaxe"],
  license: { spdx: "MIT" },
  verified: false,
  originalSystems: ["Windows"],
  summary: "Marble Blast is a 3D platform game developed by GarageGames and Monster Studios. It was released on December 13, 2002 for Microsoft Windows, and was later made available for Mac OS, various Linux distributions, and Xbox. On June 24, 2003, the game was licensed to eGames to be resold in stores under the name Marble Blaster.",
  summaryEs: "Marble Blast Gold es un videojuego de puzles en 2002.",
  notes:
    "Haxe port of Marble Blast Gold that keeps the original physics, with online multiplayer. It runs in the browser and on Windows, macOS, Linux, iOS and Android, and needs your own game files.",
  notesEs:
    "Port en Haxe de Marble Blast Gold que conserva la física original, con multijugador en línea. Funciona en el navegador y en Windows, macOS, Linux, iOS y Android, y necesita tus propios archivos del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/a/a3/Marble_blast_gold.jpg",
    alt: "Marble Blast Gold (box art)",
    credit: "Wikipedia",
  },
};
