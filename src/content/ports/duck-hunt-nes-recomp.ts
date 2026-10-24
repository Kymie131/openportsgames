import type { Port } from "@/lib/ports/schema";

export const duckHuntNesRecomp: Port = {
  schema: "port",
  id: "duck-hunt-nes-recomp",
  title: "DuckHuntNESRecomp",
  game: "Duck Hunt",
  developers: ["mstan"],
  publisher: "Nintendo",
  originalYear: 1984,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/DuckHuntNESRecomp"],
  license: { spdx: "PolyForm-Noncommercial-1.0.0", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystems: ["Nintendo Entertainment System"],
  summary: "Duck Hunt is a 1984 light gun shooter video game developed and published by Nintendo for the Nintendo Entertainment System (NES). The game was first released in April 1984 in Japan for the Family Computer (Famicom) console and in North America as an arcade game for the Nintendo VS. System. It became a launch game for the NES in North America in October 1985, and was re-released in Europe two years later. Players fire the NES Zapper at a CRT television, with three attempts per round to shoot ducks and clay pigeons.",
  summaryEs: "Duck Hunt es un videojuego creado y desarrollado por Nintendo para la Nintendo Entertainment System (NES). También fue publicado en los arcades en el año 1984 bajo el nombre Vs. Duck Hunt. El título fue uno de los dos juegos incluidos con el primer lanzamiento de la consola.",
  notes:
    "Static recompilation of Duck Hunt (NES) with the NESRecomp framework. Playable, and the Zapper is driven by the mouse: you aim with the cursor and fire with the left click.",
  notesEs:
    "Recompilación estática de Duck Hunt (NES) con el framework NESRecomp. Jugable, y el Zapper se maneja con el ratón: apuntas con el cursor y disparas con el clic izquierdo.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%20Entertainment%20System/Named_Boxarts/Duck%20Hunt%20(World).png",
    alt: "Duck Hunt (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%20Entertainment%20System/Named_Snaps/Duck%20Hunt%20(World).png",
      alt: "Duck Hunt (screenshot)",
      credit: "Libretro",
    },
  ],
};
