import type { Port } from "@/lib/ports/schema";

export const fistOfTheNorthStarPort: Port = {
  "schema": "port",
  "id": "fist-of-the-north-star-port",
  "title": "Fist of the North Star: Lost Paradise PC",
  "game": "Fist of the North Star: Lost Paradise",
  "developers": [
    "ItalianKuze"
  ],
  "publisher": "Sega",
  "originalYear": 2018,
  "portType": "runtime-port",
  "genre": "action-adventure",
  "openSource": true,
  "originalGameLicense": "proprietary",
  "platforms": [
    "windows",
    "linux"
  ],
  "status": "alpha",
  "release": {
    "version": "0.1.4-alpha",
    "date": "2026-11-09"
  },
  "sources": [
    "https://github.com/ItalianKuze/port-ga-gotoku"
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
  "summary": "Fist of the North Star: Lost Paradise is a 2018 action-adventure game by Ryu ga Gotoku Studio and Sega. Kenshiro fights through a post-apocalyptic wasteland in a Yakuza-style brawler.",
  "summaryEs": "Fist of the North Star: Lost Paradise es un videojuego de acción y aventura de 2018 de Ryu ga Gotoku Studio y Sega. Kenshiro lucha en un páramo post-apocalíptico con combates estilo Yakuza.",
  "notes": "Windows and Linux port of Fist of the North Star: Lost Paradise (PS4) based on bbport. No game files are included; bring your own copy. Latest release: v0.1.4-alpha.",
  "notesEs": "Port para Windows y Linux de Fist of the North Star: Lost Paradise (PS4) basado en bbport. No incluye archivos del juego; aporta tu propia copia. Última release: v0.1.4-alpha.",
  "features": [
    "Native Windows build and Linux AppImage.",
    "Based on the bbport runtime.",
    "Requires your own PS4 game files."
  ],
  "featuresEs": [
    "Build para Windows y AppImage para Linux.",
    "Basado en el runtime bbport.",
    "Necesita tus propios archivos de PS4."
  ],
  "downloads": [
    {
      "label": "Windows x64",
      "url": "https://github.com/ItalianKuze/port-ga-gotoku/releases/download/v0.1.4-alpha/PortGaGotoku-0.1.4-alpha.zip",
      "note": "Windows · x64"
    },
    {
      "label": "Linux AppImage",
      "url": "https://github.com/ItalianKuze/port-ga-gotoku/releases/download/v0.1.4-alpha/PortGaGotoku-0.1.4-alpha-x86_64.AppImage",
      "note": "Linux · AppImage"
    }
  ],
  cover: {
    src: "https://openportsgames.com/covers/boxart/fist-of-the-north-star-port.png",
    alt: "Fist of the North Star: Lost Paradise (PlayStation 4 box art)",
    credit: "Wikipedia",
  },
};
