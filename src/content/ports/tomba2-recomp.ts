import type { Port } from "@/lib/ports/schema";

export const tomba2Recomp: Port = {
  schema: "port",
  id: "tomba2-recomp",
  title: "Tomba2Recomp",
  game: "Tomba! 2: The Evil Swine Return",
  developers: ["mstan"],
  publisher: "Sony Computer Entertainment",
  originalYear: 1999,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/Tomba2Recomp"],
  license: { spdx: "PolyForm-Noncommercial-1.0.0", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Tomba! 2: The Evil Swine Return is an action-adventure platform video game developed and published by Whoopee Camp for the PlayStation. The game was released in Japan in 1999 and internationally by Sony Computer Entertainment the following year. The game is a sequel to Tomba! and centers on the exploits of the eponymous feral child as he attempts to rescue his friend Tabby from an evil race of anthropomorphic pigs.",
  summaryEs: "Tombi! 2: Contra los cerdiablos, también conocido en inglés como Tomba! 2: The Evil Swine Return en région NTSC, simplemente Tombi! 2 en la región PAL (europea) o トンバ! ザ・ワイルドアドベンチャー en Japón), es un videojuego de acción y aventuras de plataformas, desarrollado por Whoopee Camp y publicado por Sony Computer Entertainment para la videoconsola PlayStation. Salió a la venta en el año 1999 para Japón y Norteamérica, y en el año 2000 para la región PAL. El juego es una secuela de Tombi!",
  notes:
    "Native recompilation of Tomba! 2 (PlayStation). The player supplies their own legally obtained disc image; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Tomba! 2 (PlayStation). El jugador aporta su propia imagen de disco obtenida legalmente; el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Tomba!%202%20-%20The%20Evil%20Swine%20Return%20(USA).png",
    alt: "Tomba! 2: The Evil Swine Return (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Tomba!%202%20-%20The%20Evil%20Swine%20Return%20(USA).png",
      alt: "Tomba! 2: The Evil Swine Return (screenshot)",
      credit: "Libretro",
    },
  ],
};
