import type { Port } from "@/lib/ports/schema";

export const triAevum: Port = {
  schema: "port",
  id: "triaevum",
  title: "TriAevum",
  game: "The Legend of Zelda: Ocarina of Time 3D",
  developers: ["Grezzo", "Nintendo"],
  publisher: "Nintendo",
  originalYear: 2011,
  genre: "action-adventure",
  openSource: true,
  portType: "recompilation",
  platforms: ["windows", "linux"],
  status: "alpha",
  release: { version: "0.8.0-beta.1.2", date: "2026-10-22" },
  sources: ["https://github.com/coccofresco/TriAevum"],
  license: { spdx: "GPL-3.0-or-later" },
  verified: true,
  verifiedAt: "2026-10-27",
  originalSystems: ["Nintendo 3DS"],
  features: [
    "NRI/Vulkan renderer with cel shading and outlines",
    "60/90 FPS interpolation of the 30 Hz game state",
    "Single-screen Head-Up Display reimplementation",
    "Controller-free setup from a decrypted 3DS ROM",
  ],
  featuresEs: [
    "Renderizador NRI/Vulkan con cel shading y contornos",
    "Interpolación a 60/90 FPS del estado de juego a 30 Hz",
    "Reimplementación del Head-Up Display de pantalla única",
    "Configuración sin mando desde una ROM de 3DS descifrada",
  ],
  screenshots: [
    {
      src: "https://raw.githubusercontent.com/coccofresco/TriAevum/main/docs/images/default-kokiri-forest.png",
      alt: "Kokiri Forest in the default build of TriAevum",
      credit: "TriAevum",
    },
    {
      src: "https://raw.githubusercontent.com/coccofresco/TriAevum/main/docs/images/default-title.png",
      alt: "Title screen of TriAevum",
      credit: "TriAevum",
    },
    {
      src: "https://raw.githubusercontent.com/coccofresco/TriAevum/main/docs/images/alpha2-kokiri.png",
      alt: "Kokiri Forest in the alpha 2 build of TriAevum",
      credit: "TriAevum",
    },
    {
      src: "https://raw.githubusercontent.com/coccofresco/TriAevum/main/docs/images/alpha2-mounted-linux.png",
      alt: "Riding Epona on Linux in the alpha 2 build of TriAevum",
      credit: "TriAevum",
    },
  ],
  summary: "The Legend of Zelda: Ocarina of Time 3D is a 2011 action-adventure game developed by Grezzo and published by Nintendo for the Nintendo 3DS handheld game console. A remake of the original 1998 Nintendo 64 game, it features updated graphics, quality of life changes, stereoscopic 3D effects, and mirrored versions of the rearranged dungeons from Ocarina of Time Master Quest. The game was released in June 2011, with a digital release via the Nintendo eShop arriving in 2012.",
  summaryEs: "The Legend of Zelda: Ocarina of Time 3D es un videojuego de acción y aventura publicado por Nintendo en 2011.",
  notes:
    "Native recompilation of The Legend of Zelda: Ocarina of Time 3D from the Nintendo 3DS version. The README states the project's development is entirely AI-assisted under human direction. The follow-up 0.6.0-alpha.3b release was withdrawn by the author; the catalog lists the last usable release. Requires a decrypted ROM from a copy the player owns.",
  notesEs:
    "Recompilación nativa de The Legend of Zelda: Ocarina of Time 3D a partir de la versión de Nintendo 3DS. El README afirma que el desarrollo del proyecto es totalmente asistido por IA bajo dirección humana. La release posterior 0.6.0-alpha.3b fue retirada por el autor; el catálogo lista la última release utilizable. Requiere una ROM descifrada de una copia que posea el jugador.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/3/30/The_Legend_of_Zelda_Ocarina_of_Time_3D_box_art.png",
    alt: "The Legend of Zelda: Ocarina of Time 3D (box art)",
    credit: "Wikipedia",
  },
};
