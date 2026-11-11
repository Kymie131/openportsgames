import type { Port } from "@/lib/ports/schema";

export const baroqueRecomp: Port = {
  "schema": "port",
  "id": "baroque-recomp",
  "title": "Baroque Recomp",
  "game": "Baroque",
  "developers": [
    "Arch61s"
  ],
  "publisher": "Sting",
  "originalYear": 1998,
  "portType": "decompilation",
  "genre": "rpg",
  "openSource": true,
  "originalGameLicense": "proprietary",
  "platforms": [
    "windows"
  ],
  "status": "alpha",
  "release": {
    "version": "0.3.3",
    "date": "2026-11-08"
  },
  "sources": [
    "https://github.com/Arch61s/Baroque-Decomp"
  ],
  "license": {
    "spdx": "NOASSERTION",
    "note": "no SPDX license in the repository"
  },
  "verified": false,
  "sourceVerified": true,
  "addedAt": "2026-11-09",
  "originalSystems": [
    "Sega Saturn"
  ],
  "summary": "Baroque is a 1998 action role-playing game developed and published by Sting for the Sega Saturn. It is set in a post-apocalyptic world with roguelike dungeon crawling.",
  "summaryEs": "Baroque es un videojuego de rol y acción de 1998 desarrollado y publicado por Sting para Sega Saturn. Transcurre en un mundo post-apocalíptico con mazmorras roguelike.",
  "notes": "Native decompilation port of Baroque for Windows. Bring your own game files; no game data is included. Latest release: v0.3.3.",
  "notesEs": "Port de descompilación nativa de Baroque para Windows. Aporta tus propios archivos; no incluye datos del juego. Última release: v0.3.3.",
  "features": [
    "Native Windows build.",
    "Decompilation port.",
    "Requires your own game files."
  ],
  "featuresEs": [
    "Build nativa para Windows.",
    "Port de descompilación.",
    "Necesita tus propios archivos del juego."
  ],
  "downloads": [
    {
      "label": "Windows",
      "url": "https://github.com/Arch61s/Baroque-Decomp/releases/download/v0.3.3/Baroque-0.3.3-win64.zip",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/boxart/baroque-recomp.png",
    alt: "Baroque (Sega Saturn box art)",
    credit: "Box art",
  },
};
