import type { Port } from "@/lib/ports/schema";

export const IdleOfficeTycoon: Port = {
  schema: "port",
  id: "idle-office-tycoon",
  title: "Idle Office Tycoon",
  game: "Idle Office Tycoon",
  developers: ["Avenze"],
  publisher: "Avenze",
  originalYear: 2020,
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
  originalSystems: ["Other"],
  summary: "Idle Office Tycoon is a mobile idle management game. This entry documents a reverse-engineering and data-extraction project for the Unity build.",
  summaryEs: "Idle Office Tycoon es un juego móvil de gestión idle. Esta ficha documenta un proyecto de ingeniería inversa y extracción de datos de la versión Unity.",
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
