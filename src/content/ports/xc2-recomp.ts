import type { Port } from "@/lib/ports/schema";

export const xc2Recomp: Port = {
  "schema": "port",
  "id": "xc2-recomp",
  "title": "XC2 Recomp",
  "game": "Xenoblade Chronicles 2",
  "developers": [
    "AksharDP"
  ],
  "publisher": "Nintendo",
  "originalYear": 2017,
  "portType": "recompilation",
  "genre": "rpg",
  "openSource": true,
  "originalGameLicense": "proprietary",
  "platforms": [
    "windows",
    "linux"
  ],
  "status": "beta",
  "release": {
    "version": "0.1.12",
    "date": "2026-11-09"
  },
  "sources": [
    "https://github.com/AksharDP/xc2-recomp"
  ],
  "license": {
    "spdx": "MIT"
  },
  "verified": false,
  "sourceVerified": true,
  "addedAt": "2026-11-09",
  "originalSystems": [
    "Nintendo Switch"
  ],
  "summary": "Xenoblade Chronicles 2 is a 2017 role-playing game developed by Monolith Soft and published by Nintendo. Rex and Pyra journey across Alrest to reach Elysium.",
  "summaryEs": "Xenoblade Chronicles 2 es un videojuego de rol de 2017 desarrollado por Monolith Soft y publicado por Nintendo. Rex y Pyra recorren Alrest para llegar al Elysium.",
  "notes": "Static recompilation of Xenoblade Chronicles 2 to native Windows x86-64 and Linux, with a Vulkan renderer. Game files are not included; bring your own copy. Latest release: v0.1.12.",
  "notesEs": "Recompilación estática de Xenoblade Chronicles 2 a Windows x86-64 y Linux nativo, con renderizador Vulkan. No incluye archivos del juego; aporta tu propia copia. Última release: v0.1.12.",
  "features": [
    "Native Windows and Linux builds.",
    "Vulkan renderer.",
    "Requires your own Switch game files."
  ],
  "featuresEs": [
    "Builds nativas para Windows y Linux.",
    "Renderizador Vulkan.",
    "Necesita tus propios archivos de Switch."
  ],
  "downloads": [
    {
      "label": "Windows",
      "url": "https://github.com/AksharDP/xc2-recomp/releases/download/v0.1.12/XC2-Setup-0.1.12-windows.zip",
    },
    {
      "label": "Linux",
      "url": "https://github.com/AksharDP/xc2-recomp/releases/download/v0.1.12/XC2-Setup-0.1.12-linux.AppImage",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/boxart/xc2-recomp.jpg",
    alt: "Xenoblade Chronicles 2 (Nintendo Switch box art)",
    credit: "Box art",
  },
};
