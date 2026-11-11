import type { Port } from "@/lib/ports/schema";

export const virtuaNbaRecomp: Port = {
  "schema": "port",
  "id": "virtua-nba-recomp",
  "title": "Virtua NBA Recomp",
  "game": "Virtua NBA",
  "developers": [
    "PocketLucho"
  ],
  "publisher": "Sega",
  "originalYear": 1999,
  "portType": "recompilation",
  "genre": "sports",
  "openSource": true,
  "originalGameLicense": "proprietary",
  "platforms": [
    "windows",
    "linux"
  ],
  "status": "beta",
  "release": {
    "version": "2026.11.7",
    "date": "2026-11-07"
  },
  "sources": [
    "https://github.com/PocketLucho/Virtua-NBA---Recompilation"
  ],
  "license": {
    "spdx": "NOASSERTION",
    "note": "no SPDX license in the repository"
  },
  "verified": false,
  "sourceVerified": true,
  "addedAt": "2026-11-09",
  "originalSystems": [
    "Arcade"
  ],
  "summary": "Virtua NBA is a 1999 arcade basketball game developed and published by Sega. It brings Sega's arcade sports style to three-on-three basketball.",
  "summaryEs": "Virtua NBA es un juego de baloncesto de arcade de 1999 desarrollado y publicado por Sega. Lleva el estilo deportivo arcade de Sega al baloncesto tres contra tres.",
  "notes": "Native recompilation of Virtua NBA for Windows and Linux. Bring your own arcade game files; no game data is included. Latest release: v2026.11.07.",
  "notesEs": "Recompilación nativa de Virtua NBA para Windows y Linux. Aporta tus propios archivos de arcade; no incluye datos del juego. Última release: v2026.11.07.",
  "features": [
    "Native Windows and Linux builds.",
    "Recompiled arcade game.",
    "Requires your own arcade files."
  ],
  "featuresEs": [
    "Builds nativas para Windows y Linux.",
    "Juego de arcade recompilado.",
    "Necesita tus propios archivos de arcade."
  ],
  "downloads": [
    {
      "label": "Windows",
      "url": "https://github.com/PocketLucho/Virtua-NBA---Recompilation/releases/download/2026.11.07/VirtuaNBA-Recomp-win64.zip",
    },
    {
      "label": "Linux",
      "url": "https://github.com/PocketLucho/Virtua-NBA---Recompilation/releases/download/2026.11.07/VirtuaNBA-Recomp-linux-x64.tar.gz",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/boxart/virtua-nba-recomp.png",
    alt: "Virtua NBA (Arcade box art)",
    credit: "Wikipedia",
  },
};
