import type { Port } from "@/lib/ports/schema";

export const metroidDreadRecomp: Port = {
  "schema": "port",
  "id": "metroid-dread-recomp",
  "title": "Metroid Dread Recomp",
  "game": "Metroid Dread",
  "developers": [
    "yozander2009-stack"
  ],
  "publisher": "Nintendo",
  "originalYear": 2021,
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
    "version": "0.5.0",
    "date": "2026-10-30"
  },
  "sources": [
    "https://github.com/yozander2009-stack/Metroid-Dread-Recomp"
  ],
  "license": {
    "spdx": "Apache-2.0"
  },
  "verified": false,
  "sourceVerified": true,
  "addedAt": "2026-11-05",
  "originalSystems": [
    "Nintendo Switch"
  ],
  "summary": "Metroid Dread is a 2021 action-adventure game developed by MercurySteam and Nintendo EPD and published by Nintendo for the Nintendo Switch. Samus Aran explores the planet ZDR while being hunted by E.M.M.I. robots.",
  "summaryEs": "Metroid Dread es un videojuego de acción y aventura de 2021 desarrollado por MercurySteam y Nintendo EPD y publicado por Nintendo para Nintendo Switch. Samus Aran explora el planeta ZDR mientras es perseguida por los robots E.M.M.I.",
  "notes": "Static recompilation of Metroid Dread (Switch) for Windows and Linux, with a Windows package and a Linux AppImage. It needs your own dumped game files; no game files are included. Latest release: v0.5.0.",
  "notesEs": "Recompilación estática de Metroid Dread (Switch) para Windows y Linux, con paquete para Windows y AppImage para Linux. Necesita tus propios archivos del juego; no incluye archivos del juego. Última release: v0.5.0.",
  "features": [
    "Native Windows and Linux builds.",
    "Static recompilation of the Switch game.",
    "Requires your own game dump; no game files included."
  ],
  "featuresEs": [
    "Builds nativas para Windows y Linux.",
    "Recompilación estática del juego de Switch.",
    "Necesita tu propio volcado; no incluye archivos del juego."
  ],
  "downloads": [
    {
      "label": "Windows",
      "url": "https://github.com/yozander2009-stack/Metroid-Dread-Recomp/releases/download/v0.5.0/MetroidDread-PC-v0.5.0.zip",
    },
    {
      "label": "Linux",
      "url": "https://github.com/yozander2009-stack/Metroid-Dread-Recomp/releases/download/v0.5.0/Metroid_Dread-x86_64.AppImage",
    },
  ],
  "cover": {
    "src": "https://openportsgames.com/covers/generated/metroid-dread-recomp.svg",
    "alt": "Metroid Dread (generated cover)",
    "credit": "OpenPortsGames"
  }
};
