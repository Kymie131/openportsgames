import type { Port } from "@/lib/ports/schema";

export const laserlords: Port = {
  "schema": "port",
  "id": "laserlords",
  "title": "Laser Lords Native",
  "game": "Laser Lords",
  "developers": [
    "RandyVie"
  ],
  "publisher": "Philips Interactive Media",
  "originalYear": 1992,
  "portType": "runtime-port",
  "genre": "action-adventure",
  "openSource": true,
  "originalGameLicense": "proprietary",
  "platforms": [
    "windows",
    "linux",
    "macos",
    "switch"
  ],
  "status": "beta",
  "release": {
    "version": "0.8.1",
    "date": "2026-10-24"
  },
  "sources": [
    "https://github.com/RandyVie/Laserlords"
  ],
  "license": {
    "spdx": "NOASSERTION",
    "note": "no SPDX license in the repository"
  },
  "verified": false,
  "sourceVerified": true,
  "addedAt": "2026-11-06",
  "originalSystems": [
    "CD-i"
  ],
  "summary": "Laser Lords is a 1992 adventure game released for the Philips CD-i. It combines exploration, puzzles and action across a sci-fi setting.",
  "summaryEs": "Laser Lords es un videojuego de aventura de 1992 lanzado para Philips CD-i. Combina exploración, puzles y acción en un entorno de ciencia ficción.",
  "notes": "Laser Lords (Spinnaker/AIM, CD-i, 1992) running natively on Windows, Linux, macOS and Nintendo Switch without a CD-i emulator or BIOS. The original 68000 code runs on an embedded CPU core; you need your own disc image. Latest release: v0.8.1.",
  "notesEs": "Laser Lords (Spinnaker/AIM, CD-i, 1992) ejecutándose de forma nativa en Windows, Linux, macOS y Nintendo Switch sin emulador de CD-i ni BIOS. El código original de 68000 corre sobre un núcleo de CPU embebido; necesitas tu propia imagen de disco. Última release: v0.8.1.",
  "features": [
    "Native Windows, Linux, macOS and Switch builds.",
    "Embedded 68000 CPU core for the original code.",
    "No CD-i emulator or BIOS required.",
    "Requires your own Laser Lords disc image."
  ],
  "featuresEs": [
    "Builds nativas para Windows, Linux, macOS y Switch.",
    "Núcleo de CPU 68000 embebido para el código original.",
    "No requiere emulador de CD-i ni BIOS.",
    "Necesita tu propia imagen de disco de Laser Lords."
  ],
  "downloads": [
    {
      "label": "Windows x64",
      "url": "https://github.com/RandyVie/Laserlords/releases/download/v0.8.1/LaserLords-0.8.1-windows-x64.zip",
      "note": "Windows · x64"
    },
    {
      "label": "Linux x86_64",
      "url": "https://github.com/RandyVie/Laserlords/releases/download/v0.8.1/LaserLords-0.8.1-linux-x86_64.tar.gz",
      "note": "Linux · x64"
    },
    {
      "label": "macOS",
      "url": "https://github.com/RandyVie/Laserlords/releases/download/v0.8.1/LaserLords-0.8.1-macOS.dmg",
      "note": "macOS · Intel and Apple Silicon"
    },
    {
      "label": "Nintendo Switch",
      "url": "https://github.com/RandyVie/Laserlords/releases/download/v0.8.1/LaserLords-0.8.1-switch.zip",
      "note": "Switch · homebrew"
    }
  ],
  cover: {
    src: "https://openportsgames.com/covers/boxart/laserlords.jpg",
    alt: "Laser Lords (Other box art)",
    credit: "Wikipedia",
  },
};
