import type { Port } from "@/lib/ports/schema";

export const ZeroHourReforged: Port = {
  schema: "port",
  id: "zero-hour-reforged",
  title: "Zero Hour Reforged",
  game: "Zero Hour Reforged",
  developers: ["olcayseygan"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/olcayseygan/CnCGeneralsZH-Reforged"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  summary: "Zero Hour Reforged is a action-adventure game, released in 2000.",
  summaryEs: "Zero Hour Reforged es un videojuego de acci�n y aventura, lanzado en 2000.",
  summaryGenerated: true,
  cover: {
    src: "https://openportsgames.com/covers/generated/zero-hour-reforged.svg",
    alt: "Zero Hour Reforged (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "Zero Hour rebuilt from EA's source: x64, Direct3D 11, VS2022/CMake, ~60 original bugs fixed, an AI that builds a base. Bring your own game.",
  notesEs:
    "Zero Hour reconstruido desde el código de EA: x64, Direct3D 11, VS2022/CMake, ~60 errores corregidos y una IA que construye base. Aporta tu propio juego.",
};
