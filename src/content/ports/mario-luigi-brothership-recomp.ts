import type { Port } from "@/lib/ports/schema";

export const marioLuigiBrothershipRecomp: Port = {
  "schema": "port",
  "id": "mario-luigi-brothership-recomp",
  "title": "Mario & Luigi: Brothership Recomp",
  "game": "Mario & Luigi: Brothership",
  "developers": [
    "Coaltergeist"
  ],
  "publisher": "Nintendo",
  "originalYear": 2024,
  "portType": "recompilation",
  "genre": "rpg",
  "openSource": true,
  "originalGameLicense": "proprietary",
  "platforms": [
    "windows",
    "linux"
  ],
  "status": "alpha",
  "release": {
    "version": "1.4.5-beta",
    "date": "2026-11-06"
  },
  "sources": [
    "https://github.com/Coaltergeist/Brothership-Recomp"
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
  "summary": "Mario & Luigi: Brothership is a 2024 role-playing game developed by Acquire and published by Nintendo. The brothers sail between islands to reconnect the world of Concordia.",
  "summaryEs": "Mario & Luigi: Brothership es un videojuego de rol de 2024 desarrollado por Acquire y publicado por Nintendo. Los hermanos navegan entre islas para reconectar el mundo de Concordia.",
  "notes": "Native recompilation of Mario & Luigi: Brothership (Switch) for Windows and Linux. Bring your own game files; no game data is included. Latest release: Beta1.4.5.",
  "notesEs": "Recompilación nativa de Mario & Luigi: Brothership (Switch) para Windows y Linux. Aporta tus propios archivos; no incluye datos del juego. Última release: Beta1.4.5.",
  "features": [
    "Native Windows and Linux builds.",
    "Static recompilation of the Switch game.",
    "Requires your own game files."
  ],
  "featuresEs": [
    "Builds nativas para Windows y Linux.",
    "Recompilación estática del juego de Switch.",
    "Necesita tus propios archivos del juego."
  ],
  "downloads": [
    {
      "label": "Windows",
      "url": "https://github.com/Coaltergeist/Brothership-Recomp/releases/download/Beta1.4.5/BrothershipRecomp-Windows.zip",
    },
    {
      "label": "Linux",
      "url": "https://github.com/Coaltergeist/Brothership-Recomp/releases/download/Beta1.4.5/BrothershipRecomp-Linux.zip",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/boxart/mario-luigi-brothership-recomp.jpg",
    alt: "Mario & Luigi: Brothership (Nintendo Switch box art)",
    credit: "Wikipedia",
  },
};
