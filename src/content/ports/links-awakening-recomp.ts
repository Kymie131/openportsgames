import type { Port } from "@/lib/ports/schema";

export const linksAwakeningRecomp: Port = {
  schema: "port",
  id: "links-awakening-recomp",
  title: "Link's Awakening DX - Static Recompilation",
  game: "The Legend of Zelda: Link's Awakening DX",
  developers: ["sp00nznet"],
  publisher: "Nintendo",
  originalYear: 1998,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/sp00nznet/LinksAwakening"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Game Boy / Game Boy Color",
  notes:
    "Static recompilation of The Legend of Zelda: Link's Awakening DX to a native app, with portable builds for PS4, PS3 and 3DS alongside Windows. The player supplies their own legally obtained ROM; the repository ships no game content.",
  notesEs:
    "Recompilación estática de The Legend of Zelda: Link's Awakening DX a una app nativa, con builds portátiles para PS4, PS3 y 3DS junto a Windows. El jugador aporta su propia ROM obtenida legalmente; el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Legend%20of%20Zelda%2C%20The%20-%20Link's%20Awakening%20DX%20-%20Redux%20(USA).png",
    alt: "The Legend of Zelda: Link's Awakening DX (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://raw.githubusercontent.com/sp00nznet/LinksAwakening/main/screenshots/title_screen.png",
      alt: "Title screen of Link's Awakening DX static recompilation",
      credit: "sp00nznet/LinksAwakening",
    },
    {
      src: "https://raw.githubusercontent.com/sp00nznet/LinksAwakening/main/screenshots/forest.png",
      alt: "Forest area in Link's Awakening DX static recompilation",
      credit: "sp00nznet/LinksAwakening",
    },
    {
      src: "https://raw.githubusercontent.com/sp00nznet/LinksAwakening/main/screenshots/tail_cave.png",
      alt: "Tail Cave dungeon in Link's Awakening DX static recompilation",
      credit: "sp00nznet/LinksAwakening",
    },
    {
      src: "https://raw.githubusercontent.com/sp00nznet/LinksAwakening/main/screenshots/file_select.png",
      alt: "File select in Link's Awakening DX static recompilation",
      credit: "sp00nznet/LinksAwakening",
    },
  ],
};
