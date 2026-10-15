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
  release: { version: null, date: null },
  sources: ["https://github.com/wootbeer/dinotale"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Nintendo 64",
  notes:
    "Native recompilation of Yoshi's Story (Nintendo 64) built with N64Recomp and rendered with RT64, for Windows and Linux including the Steam Deck. The player supplies their own legally obtained ROM; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Yoshi's Story (Nintendo 64) creada con N64Recomp y renderizada con RT64, para Windows y Linux, incluida Steam Deck. El jugador aporta su ROM obtenida legalmente; el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Yoshi%27s%20Story%20(USA)%20(En,Ja).png",
    alt: "Yoshi's Story (box art)",
    credit: "Box art",
  },
};
