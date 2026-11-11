import type { Port } from "@/lib/ports/schema";

export const feAwakeningRecomp: Port = {
  "schema": "port",
  "id": "fe-awakening-recomp",
  "title": "Fire Emblem Awakening Recomp",
  "game": "Fire Emblem: Awakening",
  "developers": [
    "Zelkin1"
  ],
  "publisher": "Nintendo",
  "originalYear": 2012,
  "portType": "recompilation",
  "genre": "strategy",
  "openSource": true,
  "originalGameLicense": "proprietary",
  "platforms": [
    "windows"
  ],
  "status": "beta",
  "release": {
    "version": "1.0.10",
    "date": "2026-11-09"
  },
  "sources": [
    "https://github.com/Zelkin1/fe-awakening-recomp"
  ],
  "license": {
    "spdx": "MIT"
  },
  "verified": false,
  "sourceVerified": true,
  "addedAt": "2026-11-09",
  "originalSystems": [
    "Nintendo 3DS"
  ],
  "summary": "Fire Emblem: Awakening is a 2012 tactical role-playing game developed by Intelligent Systems and published by Nintendo for the Nintendo 3DS. Chrom and Robin lead Ylisse against Valm.",
  "summaryEs": "Fire Emblem: Awakening es un videojuego de rol táctico de 2012 desarrollado por Intelligent Systems y publicado por Nintendo para Nintendo 3DS. Chrom y Robin lideran Ylisse contra Valm.",
  "notes": "Static recompilation of Fire Emblem: Awakening for Windows, with a launcher. Bring your own game files; no game data is included. Latest release: v1.0.10.",
  "notesEs": "Recompilación estática de Fire Emblem: Awakening para Windows, con lanzador. Aporta tus propios archivos del juego; no incluye datos del juego. Última release: v1.0.10.",
  "features": [
    "Native Windows build.",
    "Launcher included.",
    "Requires your own 3DS game files."
  ],
  "featuresEs": [
    "Build nativa para Windows.",
    "Incluye lanzador.",
    "Necesita tus propios archivos de 3DS."
  ],
  "downloads": [
    {
      "label": "Windows",
      "url": "https://github.com/Zelkin1/fe-awakening-recomp/releases/download/v1.0.10/fe-awakening-launcher-v1.0.10-windows-x64.zip",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/boxart/fe-awakening-recomp.png",
    alt: "Fire Emblem: Awakening (Nintendo 3DS box art)",
    credit: "Box art",
  },
};
