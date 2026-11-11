import type { Port } from "@/lib/ports/schema";

export const smash4Pc: Port = {
  "schema": "port",
  "id": "smash-4-pc",
  "title": "Smash 4 PC",
  "game": "Super Smash Bros. for Wii U",
  "developers": [
    "josiahg2502-glitch"
  ],
  "publisher": "Nintendo",
  "originalYear": 2014,
  "portType": "recompilation",
  "genre": "fighting",
  "openSource": true,
  "originalGameLicense": "proprietary",
  "platforms": [
    "windows"
  ],
  "status": "beta",
  "release": {
    "version": "0.1.2",
    "date": "2026-11-04"
  },
  "sources": [
    "https://github.com/josiahg2502-glitch/Smash4PC"
  ],
  "license": {
    "spdx": "MIT"
  },
  "verified": false,
  "sourceVerified": true,
  "addedAt": "2026-11-06",
  "originalSystems": [
    "Wii U"
  ],
  "summary": "Super Smash Bros. for Wii U is a 2014 platform fighting game developed by Bandai Namco Studios and Sora Ltd. and published by Nintendo. It brings together Nintendo characters and third-party guests in four-player battles.",
  "summaryEs": "Super Smash Bros. for Wii U es un juego de lucha de plataformas de 2014 desarrollado por Bandai Namco Studios y Sora Ltd. y publicado por Nintendo. Reúne personajes de Nintendo e invitados de terceros en combates de hasta cuatro jugadores.",
  "notes": "Super Smash Bros. for Wii U running natively on Windows through a static recompilation. Bring your own game; no game data is included. Latest release: v0.1.2.",
  "notesEs": "Super Smash Bros. for Wii U ejecutándose de forma nativa en Windows mediante recompilación estática. Aporta tu propio juego; no incluye datos del juego. Última release: v0.1.2.",
  "features": [
    "Native Windows build.",
    "Static recompilation of the Wii U game.",
    "Requires your own game files."
  ],
  "featuresEs": [
    "Build nativa para Windows.",
    "Recompilación estática del juego de Wii U.",
    "Necesita tus propios archivos del juego."
  ],
  "downloads": [
    {
      "label": "Windows",
      "url": "https://github.com/josiahg2502-glitch/Smash4PC/releases/download/v0.1.2/Smash4PC-v0.1.2-Windows.zip",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/boxart/smash-4-pc.png",
    alt: "Super Smash Bros. for Wii U (Wii U box art)",
    credit: "Box art",
  },
};
