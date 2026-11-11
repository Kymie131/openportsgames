import type { Port } from "@/lib/ports/schema";

export const finalFantasyNesRecomp: Port = {
  "schema": "port",
  "id": "final-fantasy-nes-recomp",
  "title": "Final Fantasy NES Recomp",
  "game": "Final Fantasy",
  "developers": [
    "bigevilmods"
  ],
  "publisher": "Nintendo",
  "originalYear": 1987,
  "portType": "recompilation",
  "genre": "rpg",
  "openSource": true,
  "originalGameLicense": "proprietary",
  "platforms": [
    "windows"
  ],
  "status": "beta",
  "release": {
    "version": "1.0.0",
    "date": "2026-11-02"
  },
  "sources": [
    "https://github.com/bigevilmods/FInal-Fantasy-NSE-Recomp"
  ],
  "license": {
    "spdx": "NOASSERTION",
    "note": "no SPDX license in the repository"
  },
  "verified": false,
  "sourceVerified": true,
  "addedAt": "2026-11-06",
  "originalSystems": [
    "Nintendo Entertainment System"
  ],
  "summary": "Final Fantasy is a 1987 role-playing game developed by Square and published by Nintendo for the NES. Four Warriors of Light restore the crystals and save the world from Chaos.",
  "summaryEs": "Final Fantasy es un videojuego de rol de 1987 desarrollado por Square y publicado por Nintendo para NES. Cuatro Guerreros de la Luz restauran los cristales y salvan el mundo del Caos.",
  "notes": "Static recompilation of Final Fantasy (NES) for Windows. Bring your own ROM; no game data is included. Latest release: release.",
  "notesEs": "Recompilación estática de Final Fantasy (NES) para Windows. Aporta tu propia ROM; no incluye datos del juego. Última release: release.",
  "features": [
    "Native Windows build.",
    "Static recompilation of the NES game.",
    "Requires your own NES ROM."
  ],
  "featuresEs": [
    "Build nativa para Windows.",
    "Recompilación estática del juego de NES.",
    "Necesita tu propia ROM de NES."
  ],
  "downloads": [
    {
      "label": "Windows",
      "url": "https://github.com/bigevilmods/FInal-Fantasy-NSE-Recomp/releases/download/release/FF-NES-Windows-x64.zip",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/boxart/final-fantasy-nes-recomp.jpg",
    alt: "Final Fantasy (Nintendo Entertainment System box art)",
    credit: "Wikipedia",
  },
};
