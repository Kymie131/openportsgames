import type { Port } from "@/lib/ports/schema";

export const b3Express: Port = {
  "schema": "port",
  "id": "b3-express",
  "title": "B3-Express",
  "game": "Bayonetta 3",
  "developers": [
    "LuvAbyss"
  ],
  "publisher": "Nintendo",
  "originalYear": 2022,
  "portType": "recompilation",
  "genre": "action-adventure",
  "openSource": true,
  "originalGameLicense": "proprietary",
  "platforms": [
    "windows"
  ],
  "status": "beta",
  "release": {
    "version": "0.2.5",
    "date": "2026-11-09"
  },
  "sources": [
    "https://github.com/LuvAbyss/B3-Express"
  ],
  "license": {
    "spdx": "GPL-3.0"
  },
  "verified": false,
  "sourceVerified": true,
  "addedAt": "2026-11-09",
  "originalSystems": [
    "Nintendo Switch"
  ],
  "summary": "Bayonetta 3 is a 2022 action game developed by PlatinumGames and published by Nintendo. It follows Bayonetta across parallel worlds in a fight against artificial Homunculi.",
  "summaryEs": "Bayonetta 3 es un videojuego de acción de 2022 desarrollado por PlatinumGames y publicado por Nintendo. Sigue a Bayonetta por mundos paralelos en su lucha contra los Homunculi artificiales.",
  "notes": "Bayonetta 3 v1.2.0 running natively on Windows through ScarletNX static recompilation, with an NVN renderer on Vulkan and a launcher. No game files are included; bring your own dump. Latest release: v0.2.5.",
  "notesEs": "Bayonetta 3 v1.2.0 ejecutándose de forma nativa en Windows mediante recompilación estática con ScarletNX, con renderizador NVN sobre Vulkan y lanzador. No incluye archivos del juego; aporta tu propio volcado. Última release: v0.2.5.",
  "features": [
    "Native Windows build.",
    "ScarletNX static recompilation with Vulkan renderer.",
    "Launcher included.",
    "Requires your own game dump."
  ],
  "featuresEs": [
    "Build nativa para Windows.",
    "Recompilación estática con ScarletNX y renderizador Vulkan.",
    "Incluye lanzador.",
    "Necesita tu propio volcado del juego."
  ],
  "downloads": [
    {
      "label": "Windows",
      "url": "https://github.com/LuvAbyss/B3-Express/releases/download/0.2.5/B3-Express-0.2.5-windows-x64.zip",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/boxart/b3-express.webp",
    alt: "Bayonetta 3 (Nintendo Switch box art)",
    credit: "Box art",
  },
};
