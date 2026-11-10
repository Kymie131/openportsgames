import type { Port } from "@/lib/ports/schema";

export const kirbyRecomp: Port = {
  "schema": "port",
  "id": "kirby-recomp",
  "title": "KirbyRecomp (Super Kirby Clash)",
  "game": "Super Kirby Clash",
  "developers": [
    "xtamqispeak"
  ],
  "publisher": "Nintendo",
  "originalYear": 2019,
  "portType": "recompilation",
  "genre": "action-adventure",
  "openSource": true,
  "originalGameLicense": "proprietary",
  "platforms": [
    "windows"
  ],
  "status": "alpha",
  "release": {
    "version": "0.3.0-alpha",
    "date": "2026-10-28"
  },
  "sources": [
    "https://github.com/xtamqispeak/KirbyRecomp"
  ],
  "license": {
    "spdx": "NOASSERTION",
    "note": "no SPDX license in the repository"
  },
  "verified": false,
  "sourceVerified": true,
  "addedAt": "2026-11-06",
  "originalSystems": [
    "Nintendo Switch"
  ],
  "summary": "Super Kirby Clash is a 2019 action role-playing game developed by HAL Laboratory and published by Nintendo for Nintendo Switch. Teams of Kirby heroes take on bosses in quests.",
  "summaryEs": "Super Kirby Clash es un videojuego de rol y acción de 2019 desarrollado por HAL Laboratory y publicado por Nintendo para Nintendo Switch. Equipos de héroes Kirby se enfrentan a jefes en misiones.",
  "notes": "Experimental Super Kirby Clash static recompilation for Windows. Build locally from your own dumped ExeFS and RomFS; no game data is included. Latest release: v0.3.0-alpha.",
  "notesEs": "Recompilación estática experimental de Super Kirby Clash para Windows. Compila localmente desde tu propio ExeFS y RomFS volcados; no incluye datos del juego. Última release: v0.3.0-alpha.",
  "features": [
    "Experimental Windows build.",
    "Setup and source kit releases.",
    "Requires your own dumped ExeFS and RomFS."
  ],
  "featuresEs": [
    "Build experimental para Windows.",
    "Releases con instalador y kit de código.",
    "Necesita tu propio ExeFS y RomFS volcados."
  ],
  "downloads": [
    {
      "label": "Windows installer",
      "url": "https://github.com/xtamqispeak/KirbyRecomp/releases/download/v0.3.0-alpha/KirbyRecompSetup-v0.3.0-alpha.exe",
      "note": "Windows · installer"
    },
    {
      "label": "Source kit",
      "url": "https://github.com/xtamqispeak/KirbyRecomp/releases/download/v0.3.0-alpha/KirbyRecomp-v0.3.0-alpha-source-kit.zip",
      "note": "Source kit · build it yourself"
    }
  ],
  cover: {
    src: "https://openportsgames.com/covers/boxart/kirby-recomp.jpg",
    alt: "Super Kirby Clash (Nintendo Switch box art)",
    credit: "Wikipedia",
  },
};
