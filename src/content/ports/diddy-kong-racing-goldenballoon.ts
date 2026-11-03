import type { Port } from "@/lib/ports/schema";

export const diddyKongRacingGoldenballoon: Port = {
  schema: "port",
  id: "diddy-kong-racing-goldenballoon",
  title: "Golden Balloon (Diddy Kong Racing)",
  game: "Diddy Kong Racing",
  developers: ["akratch"],
  publisher: "Nintendo",
  originalYear: 1997,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos", "web"],
  status: "beta",
  release: { version: "1.8.0", date: "2026-10-13" },
  sources: ["https://github.com/akratch/goldenballoon"],
  license: { spdx: "NOASSERTION", note: "license not declared in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Nintendo 64"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/7/72/Diddy_Kong_Racing_Cover_Art.png",
    alt: "Diddy Kong Racing (box art)",
    credit: "Wikipedia",
  },
  summary:
    "Diddy Kong Racing is a 1997 kart racing game developed and published by Rare for the Nintendo 64. The game revolves around Diddy Kong and his friends' attempt to defeat the intergalactic antagonist, a wizard pig named Wizpig, through winning a series of races. The player takes control of any of the featured characters throughout the game. Diddy Kong Racing features five worlds with four racetracks each, and the ability to drive a car, hovercraft, or pilot an aeroplane.",
  summaryEs:
    "Diddy Kong Racing es un videojuego de carreras para Nintendo 64 desarrollado por Rare. Fue lanzado al mercado en noviembre de 1997. Se vendieron 800.000 copias en las 2 semanas anteriores a la Navidad de 1997, convirtiéndose así en juego más rápidamente vendido por aquel entonces según el Libro Guinness de los récords.",
  notes:
    "Source port of Diddy Kong Racing (Nintendo 64, 1997) built on the community decompilation. Version 1.8.0 ships native Windows, Linux and macOS builds plus a browser version that needs WebGPU and reads your ROM locally without uploading it. Requires a US 1.1 or European 1.1 ROM in .z64, .v64 or .n64 format, and the desktop apps are unsigned. No game assets are included.",
  notesEs:
    "Port del código fuente de Diddy Kong Racing (Nintendo 64, 1997) basado en la decompilación comunitaria. La versión 1.8.0 incluye builds nativas para Windows, Linux y macOS, además de una versión de navegador que necesita WebGPU y lee tu ROM localmente sin subirla. Requiere una ROM estadounidense 1.1 o europea 1.1 en formato .z64, .v64 o .n64; las aplicaciones de escritorio no están firmadas. No incluye recursos del juego.",
};
