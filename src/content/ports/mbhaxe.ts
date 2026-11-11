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
  release: { version: "1.3.2-mbu", date: "2026-10-18" },
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
  downloads: [
    {
      label: "macOS",
      url: "https://github.com/RandomityGuy/MBHaxe/releases/download/1.3.2-mbu/MBHaxe-Ultra-Mac.dmg",
      size: "63.8 MB",
    },
    {
      label: "Android",
      url: "https://github.com/RandomityGuy/MBHaxe/releases/download/1.3.2-mbu/MBHaxe-Ultra.apk",
      size: "63.3 MB",
    },
    {
      label: "iOS",
      url: "https://github.com/RandomityGuy/MBHaxe/releases/download/1.3.2-mbu/MBHaxe-Ultra-iOS.ipa",
      size: "56.9 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/RandomityGuy/MBHaxe/releases/download/1.3.2-mbu/MBHaxe-Ultra-Linux.tar.gz",
      size: "55.2 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/RandomityGuy/MBHaxe/releases/download/1.3.2-mbu/MBHaxe-Ultra-Win.zip",
      size: "54.1 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/a/a3/Marble_blast_gold.jpg",
    alt: "Marble Blast Gold (box art)",
    credit: "Wikipedia",
  },
};
