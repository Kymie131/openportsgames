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
  originalSystem: "MS-DOS",
  notes:
    "SDL-based reimplementation of the Chinese RPG PAL (The Legend of Sword and Fairy). It runs the original data files on modern systems, with builds for Windows, Linux, macOS and Android.",
  notesEs:
    "Reimplementación basada en SDL del RPG chino PAL (The Legend of Sword and Fairy). Ejecuta los archivos de datos originales en sistemas modernos, con builds para Windows, Linux, macOS y Android.",
};
