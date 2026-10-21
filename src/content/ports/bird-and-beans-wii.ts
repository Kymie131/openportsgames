import type { Port } from "@/lib/ports/schema";

export const birdAndBeansWii: Port = {
  schema: "port",
  id: "bird-and-beans-wii",
  title: "Bird & Beans (Wii)",
  game: "Bird & Beans",
  developers: ["cmyksoda"],
  publisher: "Nintendo",
  originalYear: 2008,
  portType: "source-port",
  genre: "puzzle",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["wii"],
  status: "beta",
  release: { version: "1.0.4", date: "2026-10-07" },
  sources: ["https://github.com/cmyksoda/Bird-and-Beans-GX"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Nintendo DS"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/6/62/Bird_%26_Beans_Cover.png",
    alt: "Bird & Beans (box art)",
    credit: "Wikipedia",
  },
  notes:
    "Bird & Beans / Pyoro (Nintendo, 2008) ported to Wii with both games, the original gameplay code and new menus. You need your own DSiWare ROM.",
  notesEs:
    "Bird & Beans / Pyoro (Nintendo, 2008) portado a Wii con ambos juegos, el código de juego original y menús nuevos. Necesitas tu propia ROM de DSiWare.",
};
