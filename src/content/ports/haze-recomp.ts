import type { Port } from "@/lib/ports/schema";

export const hazeRecomp: Port = {
  "schema": "port",
  "id": "haze-recomp",
  "title": "Haze Recomp",
  "game": "Haze",
  "developers": [
    "zdiemer"
  ],
  "publisher": "Ubisoft",
  "originalYear": 2008,
  "portType": "recompilation",
  "genre": "shooter",
  "openSource": true,
  "originalGameLicense": "proprietary",
  "platforms": [
    "windows"
  ],
  "status": "alpha",
  "release": {
    "version": "0.1.13",
    "date": "2026-10-25"
  },
  "sources": [
    "https://github.com/zdiemer/haze-recomp"
  ],
  "license": {
    "spdx": "MIT"
  },
  "verified": false,
  "sourceVerified": true,
  "addedAt": "2026-11-06",
  "originalSystems": [
    "PlayStation 3"
  ],
  "summary": "Haze is a 2008 first-person shooter developed by Free Radical Design and published by Ubisoft for PlayStation 3. It follows Mantel soldiers fighting a rebellion in a future South America.",
  "summaryEs": "Haze es un shooter en primera persona de 2008 desarrollado por Free Radical Design y publicado por Ubisoft para PlayStation 3. Sigue a los soldados de Mantel que combaten una rebelión en una Sudamérica futura.",
  "notes": "Experimental native Windows port of Haze built with ps3recomp. Game assets are not included; bring your own copy. Latest release: v0.1.13.",
  "notesEs": "Port nativo experimental para Windows de Haze construido con ps3recomp. No incluye recursos del juego; aporta tu propia copia. Última release: v0.1.13.",
  "features": [
    "Experimental native Windows build.",
    "Built with ps3recomp.",
    "Requires your own PS3 game files."
  ],
  "featuresEs": [
    "Build nativa experimental para Windows.",
    "Construido con ps3recomp.",
    "Necesita tus propios archivos de PS3."
  ],
  "downloads": [
    {
      "label": "Windows x64",
      "url": "https://github.com/zdiemer/haze-recomp/releases/download/v0.1.13/HazeRecomp-0.1.13-windows-x64.zip",
      "note": "Windows · x64"
    },
    {
      "label": "Windows installer",
      "url": "https://github.com/zdiemer/haze-recomp/releases/download/v0.1.13/HazeRecomp-0.1.13-Setup.exe",
      "note": "Windows · installer"
    }
  ],
  cover: {
    src: "https://openportsgames.com/covers/boxart/haze-recomp.jpg",
    alt: "Haze (PlayStation 3 box art)",
    credit: "Box art",
  },
};
