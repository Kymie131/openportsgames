import type { Port } from "@/lib/ports/schema";

export const resogunRecomp: Port = {
  "schema": "port",
  "id": "resogun-recomp",
  "title": "Resogun Recomp",
  "game": "Resogun",
  "developers": [
    "rcostanza"
  ],
  "publisher": "Sony Computer Entertainment",
  "originalYear": 2013,
  "portType": "recompilation",
  "genre": "shooter",
  "openSource": true,
  "originalGameLicense": "proprietary",
  "platforms": [
    "windows",
    "linux"
  ],
  "status": "beta",
  "release": {
    "version": "0.6",
    "date": "2026-11-09"
  },
  "sources": [
    "https://github.com/rcostanza/resogun-recomp"
  ],
  "license": {
    "spdx": "GPL-2.0"
  },
  "verified": false,
  "sourceVerified": true,
  "addedAt": "2026-11-09",
  "originalSystems": [
    "PlayStation 4"
  ],
  "summary": "Resogun is a 2013 side-scrolling shoot 'em up developed by Housemarque and published by Sony. Players defend the last humans from waves of enemies in a voxel world.",
  "summaryEs": "Resogun es un shoot 'em up de desplazamiento lateral de 2013 desarrollado por Housemarque y publicado por Sony. Los jugadores defienden a los últimos humanos de oleadas de enemigos en un mundo voxel.",
  "notes": "Native recompilation of Resogun (PS4) for Windows and Linux. Bring your own game files; no game data is included. Latest release: v0.6.",
  "notesEs": "Recompilación nativa de Resogun (PS4) para Windows y Linux. Aporta tus propios archivos; no incluye datos del juego. Última release: v0.6.",
  "features": [
    "Native Windows and Linux builds.",
    "Static recompilation of the PS4 game.",
    "Requires your own PS4 game files."
  ],
  "featuresEs": [
    "Builds nativas para Windows y Linux.",
    "Recompilación estática del juego de PS4.",
    "Necesita tus propios archivos de PS4."
  ],
  "downloads": [
    {
      "label": "Windows x64",
      "url": "https://github.com/rcostanza/resogun-recomp/releases/download/v0.6/resogun-pc-v0.6-2026-11-09.zip",
      "note": "Windows · x64"
    },
    {
      "label": "Linux x64",
      "url": "https://github.com/rcostanza/resogun-recomp/releases/download/v0.6/resogun-pc-v0.6-2026-11-09-linux.tar.gz",
      "note": "Linux · x64"
    }
  ],
  cover: {
    src: "https://openportsgames.com/covers/boxart/resogun-recomp.jpg",
    alt: "Resogun (PlayStation 4 art)",
    credit: "Steam",
  },
};
