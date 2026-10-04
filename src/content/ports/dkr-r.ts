import type { Port } from "@/lib/ports/schema";

export const dkrR: Port = {
  schema: "port",
  id: "dkr-r",
  title: "DKR-R",
  game: "Diddy Kong Racing",
  developers: ["Rare"],
  publisher: "Nintendo",
  originalYear: 1997,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "1.0.4", date: "2026-09-03" },
  sources: ["https://github.com/ThatGuyMcd/DKR-R"],
  license: { spdx: "MIT" },
  verified: true,
  verifiedAt: "2026-09-22",
  screenshots: [
    {
      src: "https://github.com/user-attachments/assets/c913bee2-029c-4e29-9921-0f6abe7a3bf1",
      alt: "Diddy Kong racing through a course in Diddy Kong Racing",
      credit: "DKR-R",
    },
  ],
  originalSystem: "Nintendo 64",
  features: [
    "Online multiplayer with cooperative Adventure mode",
    "Rumble Pak and Memory Pak controls via launcher options",
    "SDL3 audio/input backend with an automatic fallback",
  ],
  featuresEs: [
    "Multijugador en línea con modo Aventura cooperativo",
    "Controles de Rumble Pak y Memory Pak mediante opciones del lanzador",
    "Backend de audio/entrada SDL3 con respaldo automático",
  ],
  notes:
    "Native port of Diddy Kong Racing created through static recompilation of the Nintendo 64 binary, with releases for Windows, Linux and macOS (the macOS build is a community fork linked from each release). Requires the game dump from a cartridge or ROM you own. Version 1.0.4 is the latest tagged release.",
  notesEs:
    "Port nativo de Diddy Kong Racing creado mediante recompilación estática del binario de Nintendo 64, con releases para Windows, Linux y macOS (la build de macOS es un fork comunitario enlazado desde cada release). Requiere el volcado del juego de un cartucho o ROM que poseas. La versión 1.0.4 es la última release etiquetada.",
};
