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
  release: { version: "3.0.2025.0616", date: "2025-06-15" },
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
  downloads: [
    {
      label: "Linux AppImage",
      url: "https://github.com/sdlpal/sdlpal/releases/download/v3.0.2025.0616/SDLPal-366bc36-x86_64.AppImage",
      size: "10.4 MB",
    },
    {
      label: "sdlpal-emscripten",
      url: "https://github.com/sdlpal/sdlpal/releases/download/v3.0.2025.0616/sdlpal-emscripten.zip",
      size: "2.8 MB",
    },
    {
      label: "macOS DMG",
      url: "https://github.com/sdlpal/sdlpal/releases/download/v3.0.2025.0616/sdlpal-macos.dmg",
      size: "7.5 MB",
    },
    {
      label: "iOS IPA",
      url: "https://github.com/sdlpal/sdlpal/releases/download/v3.0.2025.0616/sdlpal-unsigned.ipa",
      size: "5.0 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/sdlpal/sdlpal/releases/download/v3.0.2025.0616/sdlpal-win32-mingw.zip",
      size: "2.6 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/sdlpal/sdlpal/releases/download/v3.0.2025.0616/sdlpal-win32-msvc.zip",
      size: "2.8 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/d/de/LSF_cover.jpg",
    alt: "The Legend of Sword and Fairy (box art)",
    credit: "Wikipedia",
  },
};
