import type { Port } from "@/lib/ports/schema";

export const rollAwayPc: Port = {
  "schema": "port",
  "id": "roll-away-pc",
  "title": "Roll Away PC",
  "game": "Roll Away",
  "developers": [
    "Bitsandbreakpoints"
  ],
  "publisher": "Psygnosis",
  "originalYear": 1998,
  "portType": "recompilation",
  "genre": "puzzle",
  "openSource": true,
  "originalGameLicense": "proprietary",
  "platforms": [
    "windows"
  ],
  "status": "beta",
  "release": {
    "version": "2.7.0",
    "date": "2026-10-30"
  },
  "sources": [
    "https://github.com/Bitsandbreakpoints/roll-away-psx-pc-recomp"
  ],
  "license": {
    "spdx": "MIT"
  },
  "verified": false,
  "sourceVerified": true,
  "addedAt": "2026-11-06",
  "originalSystems": [
    "PlayStation"
  ],
  "summary": "Roll Away is a 1998 puzzle-platform game developed by Game Design Sweden and published by Psygnosis for the PlayStation. Players roll a ball through maze-like levels collecting keys and avoiding hazards.",
  "summaryEs": "Roll Away es un videojuego de puzles y plataformas de 1998 desarrollado por Game Design Sweden y publicado por Psygnosis para PlayStation. El jugador controla una bola por niveles laberínticos recogiendo llaves y evitando peligros.",
  "notes": "Native Windows port of the PlayStation game Roll Away. Bring your own disc; no game files are included. Latest release: v2.7.0.",
  "notesEs": "Port nativo para Windows del juego de PlayStation Roll Away. Aporta tu propio disco; no incluye archivos del juego. Última release: v2.7.0.",
  "features": [
    "Native Windows build.",
    "Rebuilt from the PlayStation game.",
    "Requires your own PS1 disc."
  ],
  "featuresEs": [
    "Build nativa para Windows.",
    "Reconstruido desde el juego de PlayStation.",
    "Necesita tu propio disco de PS1."
  ],
  "downloads": [
    {
      "label": "Windows",
      "url": "https://github.com/Bitsandbreakpoints/roll-away-psx-pc-recomp/releases/download/v2.7.0/roll-away-pc.zip",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/boxart/roll-away-pc.png",
    alt: "Roll Away (PlayStation box art)",
    credit: "Wikipedia",
  },
};
