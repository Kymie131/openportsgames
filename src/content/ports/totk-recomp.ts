import type { Port } from "@/lib/ports/schema";

export const totkRecomp: Port = {
  "schema": "port",
  "id": "totk-recomp",
  "title": "Tears of the Kingdom Recomp",
  "game": "The Legend of Zelda: Tears of the Kingdom",
  "developers": [
    "valentderah"
  ],
  "publisher": "Nintendo",
  "originalYear": 2023,
  "portType": "recompilation",
  "genre": "action-adventure",
  "openSource": true,
  "originalGameLicense": "proprietary",
  "platforms": [
    "windows",
    "linux"
  ],
  "status": "beta",
  "release": {
    "version": "0.3.11",
    "date": "2026-11-05"
  },
  "sources": [
    "https://github.com/valentderah/totk-pc-recomp"
  ],
  "license": {
    "spdx": "MIT"
  },
  "verified": false,
  "sourceVerified": true,
  "addedAt": "2026-11-05",
  "originalSystems": [
    "Nintendo Switch"
  ],
  "summary": "The Legend of Zelda: Tears of the Kingdom is a 2023 action-adventure game developed and published by Nintendo for the Nintendo Switch. It expands Breath of the Wild with sky islands, underground depths, Ultrahand construction and new abilities.",
  "summaryEs": "The Legend of Zelda: Tears of the Kingdom es un videojuego de acción y aventura de 2023 desarrollado y publicado por Nintendo para Nintendo Switch. Amplía Breath of the Wild con islas celestes, profundidades subterráneas, construcción con Ultrahand y nuevas habilidades.",
  "notes": "Static recompilation of Tears of the Kingdom (Switch) to native Windows and Linux x86-64 with a Vulkan renderer. It needs your own copy of the game; no game files are included. Latest release: v0.3.11.",
  "notesEs": "Recompilación estática de Tears of the Kingdom (Switch) a Windows y Linux x86-64 nativos con renderizador Vulkan. Necesita tu propia copia del juego; no incluye archivos del juego. Última release: v0.3.11.",
  "features": [
    "Native Windows and Linux x86-64 builds.",
    "Vulkan renderer.",
    "Requires your own Switch game files."
  ],
  "featuresEs": [
    "Builds nativas para Windows y Linux x86-64.",
    "Renderizador Vulkan.",
    "Necesita tus propios archivos de Switch."
  ],
  "downloads": [
    {
      "label": "Windows",
      "url": "https://github.com/valentderah/totk-pc-recomp/releases/download/v0.3.11/TotK-Setup-0.3.11-windows.zip",
    },
    {
      "label": "Linux",
      "url": "https://github.com/valentderah/totk-pc-recomp/releases/download/v0.3.11/TotK-Setup-x86_64-0.3.11-linux.AppImage",
    },
  ],
  "cover": {
    "src": "https://openportsgames.com/covers/generated/totk-recomp.svg",
    "alt": "The Legend of Zelda: Tears of the Kingdom (generated cover)",
    "credit": "OpenPortsGames"
  }
};
