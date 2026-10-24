import type { Port } from "@/lib/ports/schema";

export const sdlpal: Port = {
  schema: "port",
  id: "sdlpal",
  title: "SDLPAL",
  game: "The Legend of Sword and Fairy",
  developers: ["sdlpal"],
  publisher: "Softstar Entertainment",
  originalYear: 1995,
  portType: "reimplementation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos", "android"],
  status: "stable",
  release: { version: null, date: null },
  sources: ["https://github.com/sdlpal/sdlpal"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  originalSystems: ["MS-DOS"],
  summary: "The Legend of Sword and Fairy, also known colloquially as Sword and Fairy 1 (仙劍一), is a fantasy adventure role-playing video game developed by the Taiwanese game company Softstar Entertainment, incorporating elements of wuxia, shenmo and xianxia and heavy inspirations from traditional Chinese mythology. Initially released in 1995 for the MS-DOS platform, the game was later re-released for Windows 95 in 1997, for Sega Saturn in 1999, and as a re-rendered version for Windows 98/Windows XP in 2001.",
  summaryEs: "The Legend of Sword and Fairy es un videojuego de rol en 1995.",
  notes:
    "SDL-based reimplementation of the Chinese RPG PAL (The Legend of Sword and Fairy). It runs the original data files on modern systems, with builds for Windows, Linux, macOS and Android.",
  notesEs:
    "Reimplementación basada en SDL del RPG chino PAL (The Legend of Sword and Fairy). Ejecuta los archivos de datos originales en sistemas modernos, con builds para Windows, Linux, macOS y Android.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/d/de/LSF_cover.jpg",
    alt: "The Legend of Sword and Fairy (box art)",
    credit: "Wikipedia",
  },
};
