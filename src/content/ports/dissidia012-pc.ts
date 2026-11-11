import type { Port } from "@/lib/ports/schema";

export const dissidia012Pc: Port = {
  "schema": "port",
  "id": "dissidia012-pc",
  "title": "Dissidia 012 PC",
  "game": "Dissidia 012 Final Fantasy",
  "developers": [
    "VCKing101"
  ],
  "publisher": "Square Enix",
  "originalYear": 2011,
  "portType": "recompilation",
  "genre": "fighting",
  "openSource": true,
  "originalGameLicense": "proprietary",
  "platforms": [
    "windows",
    "linux"
  ],
  "status": "beta",
  "release": {
    "version": "0.6.0",
    "date": "2026-11-07"
  },
  "sources": [
    "https://github.com/VCKing101/Dissidia012-pc"
  ],
  "license": {
    "spdx": "MIT"
  },
  "verified": false,
  "sourceVerified": true,
  "addedAt": "2026-11-09",
  "originalSystems": [
    "PlayStation Portable"
  ],
  "summary": "Dissidia 012 Final Fantasy is a 2011 fighting game developed and published by Square Enix for the PlayStation Portable. It brings together heroes and villains from the Final Fantasy series.",
  "summaryEs": "Dissidia 012 Final Fantasy es un juego de lucha de 2011 desarrollado y publicado por Square Enix para PlayStation Portable. Reúne héroes y villanos de la saga Final Fantasy.",
  "notes": "Native PC port of Dissidia 012 Final Fantasy for Windows and Linux. Bring your own PSP game files; no game data is included. Latest release: v0.6.0.",
  "notesEs": "Port nativo para PC de Dissidia 012 Final Fantasy para Windows y Linux. Aporta tus propios archivos de PSP; no incluye datos del juego. Última release: v0.6.0.",
  "features": [
    "Native Windows and Linux builds.",
    "Windows installer and Linux AppImage.",
    "Requires your own PSP game files."
  ],
  "featuresEs": [
    "Builds nativas para Windows y Linux.",
    "Instalador para Windows y AppImage para Linux.",
    "Necesita tus propios archivos de PSP."
  ],
  "downloads": [
    {
      "label": "Windows",
      "url": "https://github.com/VCKing101/Dissidia012-pc/releases/download/v0.6.0/Dissidia012-PC-Setup-0.6.0.exe",
    },
    {
      "label": "Linux",
      "url": "https://github.com/VCKing101/Dissidia012-pc/releases/download/v0.6.0/Dissidia012-Setup-0.6.0-x86_64.AppImage",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/boxart/dissidia012-pc.png",
    alt: "Dissidia 012 Final Fantasy (PlayStation Portable box art)",
    credit: "Box art",
  },
};
