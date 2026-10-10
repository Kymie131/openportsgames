import type { Port } from "@/lib/ports/schema";

export const regaidenRecomp: Port = {
  schema: "port",
  id: "regaiden-recomp",
  title: "Resident Evil Gaiden (Android)",
  game: "Resident Evil Gaiden",
  developers: ["sergiomanzur"],
  publisher: "Capcom",
  originalYear: 2001,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/sergiomanzur/regaiden-recomp"],
  license: { spdx: "MIT" },
  verified: false,
  originalSystem: "Game Boy / Game Boy Color",
  notes:
    "Static recompilation of Resident Evil Gaiden (Game Boy Color) to native C/C++, with widescreen, dynamic 2D lighting and HD texture support. It needs your own copy of the game.",
  notesEs:
    "Recompilación estática de Resident Evil Gaiden (Game Boy Color) a C/C++ nativo, con widescreen, iluminación 2D dinámica y soporte de texturas HD. Necesita tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Resident%20Evil%20Gaiden%20(Europe)%20(En,Fr,De,Es,It).png",
    alt: "Resident Evil Gaiden (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Snaps/Resident%20Evil%20Gaiden%20(Europe)%20(En,Fr,De,Es,It).png",
      alt: "Resident Evil Gaiden (screenshot)",
      credit: "Libretro",
    },
  ],
};
