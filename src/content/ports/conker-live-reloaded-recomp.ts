import type { Port } from "@/lib/ports/schema";

export const conkerLiveReloadedRecomp: Port = {
  schema: "port",
  id: "conker-live-reloaded-recomp",
  title: "Conker: Recomped & Reloaded",
  game: "Conker: Live & Reloaded",
  developers: ["Mabec Games"],
  publisher: "Microsoft Game Studios",
  originalYear: 2005,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: "1.4", date: "2026-11-03" },
  sources: ["https://github.com/Mabec-games/Conker-Recomped-and-Reloaded"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-02",
  originalSystems: ["Xbox"],
  summary:
    "Conker: Live & Reloaded is a 2005 platformer developed by Rare and published by Microsoft Game Studios for the original Xbox. A remake of Conker's Bad Fur Day, it follows the squirrel Conker through a crude, film-parody adventure and adds an online multiplayer mode.",
  summaryEs:
    "Conker: Live & Reloaded es un juego de plataformas de 2005 desarrollado por Rare y publicado por Microsoft Game Studios para la Xbox original. Es un remake de Conker's Bad Fur Day que sigue a la ardilla Conker por una aventura grosera y paródica del cine, y añade un modo multijugador online.",
  notes:
    "Launcher and enhanced build of Live & Recompiled, the native recompilation of the original Xbox game by giacomozama and TGP482. Version 1.4 extracts and compiles the game from your own disc image on first run. It adds aspect ratios up to 32:9, render scale up to 400%, 60 to 240 fps or the original 30 with frame interpolation, MSAA, SMAA, ambient occlusion, per-pixel lighting, softer fur, extended grass and water effects, and skippable cutscenes. Supports four-player split screen and online rooms with six-word codes. No part of the game is included.",
  notesEs:
    "Lanzador y build mejorada de Live & Recompiled, la recompilación nativa del juego de Xbox original de giacomozama y TGP482. La versión 1.4 extrae y compila el juego desde tu propia imagen de disco en el primer arranque. Añade relaciones de aspecto hasta 32:9, escala de renderizado hasta 400%, 60 a 240 fps o los 30 originales con interpolación de fotogramas, MSAA, SMAA, oclusión ambiental, iluminación por píxel, pelaje más suave, hierba y agua ampliadas, y cinemáticas omitibles. Admite pantalla dividida para cuatro jugadores y salas online con códigos de seis palabras. No incluye ninguna parte del juego.",
  downloads: [
    {
      label: "Windows",
      url: "https://github.com/Mabec-games/Conker-Recomped-and-Reloaded/releases/download/v1.4.2/ConkerRecompedReloaded-windows-x64.zip",
      size: "132.6 MB",
    },
    {
      label: "Linux AppImage",
      url: "https://github.com/Mabec-games/Conker-Recomped-and-Reloaded/releases/download/v1.4.2/ConkerRecompedReloaded-x86_64.AppImage",
      size: "127.1 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/3/3f/Conker_-_Live_%26_Reloaded_Coverart.png",
    alt: "Conker: Live & Reloaded (box art)",
    credit: "Wikipedia",
  },
};
