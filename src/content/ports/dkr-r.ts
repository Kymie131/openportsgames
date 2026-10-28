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
  release: { version: "1.0.12", date: "2026-10-27" },
  sources: ["https://github.com/ThatGuyMcd/DKR-R"],
  license: { spdx: "MIT" },
  verified: true,
  verifiedAt: "2026-10-27",
  screenshots: [
    {
      src: "https://github.com/user-attachments/assets/c913bee2-029c-4e29-9921-0f6abe7a3bf1",
      alt: "Diddy Kong racing through a course in Diddy Kong Racing",
      credit: "DKR-R",
    },
  ],
  originalSystems: ["Nintendo 64"],
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
  summary: "Diddy Kong Racing is a 1997 kart racing game developed and published by Rare for the Nintendo 64. The game revolves around Diddy Kong and his friends' attempt to defeat the intergalactic antagonist, a wizard pig named Wizpig, through winning a series of races. The player takes control of any of the featured characters throughout the game. Diddy Kong Racing features five worlds with four racetracks each, and the ability to drive a car, hovercraft, or pilot an aeroplane.",
  summaryEs: "Diddy Kong Racing es un videojuego de carreras para Nintendo 64 desarrollado por Rare. Fue lanzado al mercado en noviembre de 1997. Se vendieron 800.000 copias en las 2 semanas anteriores a la Navidad de 1997, convirtiéndose así en juego más rápidamente vendido por aquel entonces según el Libro Guinness de los récords.",
  notes:
    "Native port of Diddy Kong Racing created through static recompilation of the Nintendo 64 binary, with releases for Windows, Linux and macOS (the macOS build is a community fork linked from each release). Requires the game dump from a cartridge or ROM you own. Version 1.0.4 is the latest tagged release.",
  notesEs:
    "Port nativo de Diddy Kong Racing creado mediante recompilación estática del binario de Nintendo 64, con releases para Windows, Linux y macOS (la build de macOS es un fork comunitario enlazado desde cada release). Requiere el volcado del juego de un cartucho o ROM que poseas. La versión 1.0.4 es la última release etiquetada.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Diddy%20Kong%20Racing%20(Europe)%20(En,Fr,De)%20(Rev%201).png",
    alt: "Diddy Kong Racing (box art)",
    credit: "Box art",
  },
};
