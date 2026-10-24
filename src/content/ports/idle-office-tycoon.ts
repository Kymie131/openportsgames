import type { Port } from "@/lib/ports/schema";

export const IdleOfficeTycoon: Port = {
  schema: "port",
  id: "idle-office-tycoon",
  title: "Idle Office Tycoon",
  game: "Idle Office Tycoon",
  developers: ["Avenze"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Avenze/ios_reverse_engineering"],
  license: { spdx: "Unlicense" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  summary: "Idle Office Tycoon is a simulation game, released in 2000.",
  summaryEs: "Idle Office Tycoon es un videojuego de simulaci�n, lanzado en 2000.",
  summaryGenerated: true,
  cover: {
    src: "https://openportsgames.com/covers/generated/idle-office-tycoon.svg",
    alt: "Idle Office Tycoon (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "A repository detailing my decompilation and disassembly process of the reverse engineering of the iOS game Idle Office Tycoon.",
  notesEs:
    "Repositorio que detalla mi proceso de decompilación y desensamblado del juego de iOS Idle Office Tycoon.",
};
