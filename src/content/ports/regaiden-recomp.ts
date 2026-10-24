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
  originalSystems: ["Game Boy","Game Boy Color"],
  summary: "Resident Evil Gaiden is a 2001 action-adventure game developed by M4 for the Game Boy Color. It was published by Capcom in Japan and North America, and by Virgin Interactive in Europe. Receiving generally mixed reviews by critics, the game marks a departure from other entries in the series, insofar as areas are explored with the playable character seen from a top-down perspective and with battles fought in first-person view. The story revolves around a viral outbreak on a passenger ship and has Leon S. Kennedy and Barry Burton return as protagonists.",
  summaryEs: "Resident Evil Gaiden es un videojuego de terror de acción y aventura de la saga Resident Evil para Game Boy Color que tiene como protagonista a Leon S. Kennedy y a Barry Burton. Desarrollado por M4 y publicado por Capcom en Japón y América del Norte, y por Virgin Interactive en Europa para Game Boy Color. Recibiendo críticas generalmente mixtas por parte de los críticos, el juego marca una desviación de otras entradas de la serie, en la medida en que las aéreas se exploran con el personaje jugable visto desde una perspectiva de arriba hacia abajo y con batallas libradas en primera persona.",
  notes:
    "Static recompilation of Resident Evil Gaiden (Game Boy Color) to native C/C++, with widescreen, dynamic 2D lighting and HD texture support. It needs your own game data.",
  notesEs:
    "Recompilación estática de Resident Evil Gaiden (Game Boy Color) a C/C++ nativo, con widescreen, iluminación 2D dinámica y soporte de texturas HD. Necesita tus propios datos del juego.",
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
