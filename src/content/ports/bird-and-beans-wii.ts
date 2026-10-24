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
  summary: "Bird & Beans, known in PAL territories as Pyoro, is an action game developed and published by Nintendo for the Nintendo DSi's DSiWare service. It is a spin-off of the WarioWare series, featuring enhanced versions of the mini games Pyoro and Pyoro 2 from WarioWare, Inc.: Mega Microgames!. It was released in December 24, 2008 in Japan and April 2009 internationally for 200 DSi Points.",
  summaryEs: "El término null, nulo o nil es a menudo utilizado en la computación para hacer referencia a la nada. Su significado y uso varía según el lenguaje de programación.",
  notes:
    "Bird & Beans / Pyoro (Nintendo, 2008) ported to Wii with both games, the original gameplay code and new menus. You need your own DSiWare ROM.",
  notesEs:
    "Bird & Beans / Pyoro (Nintendo, 2008) portado a Wii con ambos juegos, el código de juego original y menús nuevos. Necesitas tu propia ROM de DSiWare.",
};
