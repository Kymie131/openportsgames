import type { Port } from "@/lib/ports/schema";

export const battleblockTheaterSwitch: Port = {
  schema: "port",
  id: "battleblock-theater-switch",
  title: "BattleBlock Theater (Switch)",
  game: "BattleBlock Theater",
  developers: ["andresarevalo1"],
  publisher: "Microsoft Studios",
  originalYear: 2013,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["switch"],
  status: "beta",
  release: { version: "0.2.0", date: "2026-10-22" },
  sources: ["https://github.com/andresarevalo1/BattleBlockRecomp-NX"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-10-25",
  originalSystems: ["Xbox 360"],
  summary:
    "BattleBlock Theater is a 2013 platform game developed by The Behemoth and published by Microsoft Studios for Xbox 360. Players run and jump through trap-filled stages, alone or in co-op, and can build and share their own levels.",
  summaryEs:
    "BattleBlock Theater es un videojuego de plataformas de 2013 desarrollado por The Behemoth y publicado por Microsoft Studios para Xbox 360. Los jugadores recorren niveles llenos de trampas, solos o en cooperativo, y pueden crear y compartir sus propios niveles.",
  downloads: [
    {
      label: "Switch",
      url: "https://github.com/andresarevalo1/BattleBlockRecomp-NX/releases/download/v0.2.0/battleblock_theater.nro",
      size: "39.1 MB",
    },
  ],
  cover: {
    src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/238460/header.jpg?t=1779296698",
    alt: "BattleBlock Theater (Steam header)",
    credit: "Steam",
  },
  notes: "BattleBlock Theater (Switch): native recompilation of BattleBlock Theater for switch. Bring your own copy of the game.",
  notesEs: "BattleBlock Theater (Switch): recompilación nativo de BattleBlock Theater para switch. Aporta tu propia copia del juego.",
};
