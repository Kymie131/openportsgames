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
  originalSystem: "Microsoft Windows",
  notes:
    "Haxe port of Marble Blast Gold that keeps the original physics, with online multiplayer. It runs in the browser and on Windows, macOS, Linux, iOS and Android, and needs your own game files.",
  notesEs:
    "Port en Haxe de Marble Blast Gold que conserva la física original, con multijugador en línea. Funciona en el navegador y en Windows, macOS, Linux, iOS y Android, y necesita tus propios archivos del juego.",
};
