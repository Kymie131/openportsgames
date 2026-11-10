import type { Port } from "@/lib/ports/schema";

export const plarecomp: Port = {
  "schema": "port",
  "id": "plarecomp",
  "title": "PLA Recomp",
  "game": "Pokemon Legends: Arceus",
  "developers": [
    "artesanalintelligence"
  ],
  "publisher": "Nintendo",
  "originalYear": 2022,
  "portType": "recompilation",
  "genre": "rpg",
  "openSource": true,
  "originalGameLicense": "proprietary",
  "platforms": [
    "windows"
  ],
  "status": "alpha",
  "release": {
    "version": "0.1.6",
    "date": "2026-11-09"
  },
  "sources": [
    "https://github.com/artesanalintelligence/PLARecomp"
  ],
  "license": {
    "spdx": "GPL-3.0"
  },
  "verified": false,
  "sourceVerified": true,
  "addedAt": "2026-11-09",
  "originalSystems": [
    "Nintendo Switch"
  ],
  "summary": "Pokemon Legends: Arceus is a 2022 action role-playing game developed by Game Freak and published by Nintendo. Trainers explore the Hisui region and build the first Pokedex.",
  "summaryEs": "Pokemon Legends: Arceus es un videojuego de rol y acción de 2022 desarrollado por Game Freak y publicado por Nintendo. Los entrenadores exploran la región de Hisui y crean la primera Pokédex.",
  "notes": "Static recompilation and native PC port toolkit for Pokemon Legends: Arceus on Windows. Game files are not included; bring your own copy. Latest release: v0.1.6.",
  "notesEs": "Recompilación estática y kit de port nativo para PC de Pokemon Legends: Arceus en Windows. No incluye archivos del juego; aporta tu propia copia. Última release: v0.1.6.",
  "features": [
    "Native Windows setup.",
    "Exporter source included.",
    "Requires your own Switch game files."
  ],
  "featuresEs": [
    "Instalador nativo para Windows.",
    "Incluye el código del exportador.",
    "Necesita tus propios archivos de Switch."
  ],
  "downloads": [
    {
      "label": "Windows installer",
      "url": "https://github.com/artesanalintelligence/PLARecomp/releases/download/v0.1.6/PLARecompSetup.exe",
      "note": "Windows · installer"
    },
    {
      "label": "Exporter source",
      "url": "https://github.com/artesanalintelligence/PLARecomp/releases/download/v0.1.6/plarecomp-exporter-source-0.1.6.tar.xz",
      "note": "Source · exporter"
    }
  ],
  "cover": {
    "src": "https://openportsgames.com/covers/generated/plarecomp.svg",
    "alt": "Pokemon Legends: Arceus (generated cover)",
    "credit": "OpenPortsGames"
  }
};
