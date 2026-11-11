import type { Port } from "@/lib/ports/schema";

export const dinoTale: Port = {
  schema: "port",
  id: "dinotale",
  title: "DinoTale",
  game: "Yoshi's Story",
  developers: ["wootbeer"],
  publisher: "Nintendo",
  originalYear: 1997,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: "0.1.8", date: "2026-11-10" },
  sources: ["https://github.com/wootbeer/dinotale"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Nintendo 64"],
  summary: "Yoshi's Story is a 1997 platform game published and developed by Nintendo for the Nintendo 64. Following the Super NES game Yoshi's Island (1995), it is the second main installment in the Yoshi series. It was released in Japan in December 1997, and worldwide the following year. The game has been subsequently re-released on the Wii, Wii U, and Nintendo Switch.",
  summaryEs: "Yoshi's Story es un videojuego de plataformas desarrollado y públicado por nintendo exclusivamente para la Nintendo 64 secuela del famoso juego para Super Nintendo, Super Mario World 2: Yoshi's Island. Se lanzó por primera vez en Japón en diciembre de 1997 y en todo el mundo el año siguiente es 1998. Fue relanzado en el servicio de Consola Virtual de Wii a finales de 2007,para la Consola Virtual de Wii U a principios de 2016 y en Nintendo Switch Online en octubre de 2021.",
  notes:
    "Native recompilation of Yoshi's Story (Nintendo 64) built with N64Recomp and rendered with RT64, for Windows and Linux including the Steam Deck. The player supplies their own legally obtained ROM; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Yoshi's Story (Nintendo 64) creada con N64Recomp y renderizada con RT64, para Windows y Linux, incluida Steam Deck. El jugador aporta su ROM obtenida legalmente; el repositorio no incluye contenido del juego.",
  downloads: [
    {
      label: "Linux",
      url: "https://github.com/wootbeer/dinotale/releases/download/0.1.8/DinoTale-0.1.8-linux.tar.gz",
      size: "7.6 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/wootbeer/dinotale/releases/download/0.1.8/DinoTale-0.1.8-windows.zip",
      size: "17.3 MB",
    },
  ],
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Yoshi%27s%20Story%20(USA)%20(En,Ja).png",
    alt: "Yoshi's Story (box art)",
    credit: "Box art",
  },
};
