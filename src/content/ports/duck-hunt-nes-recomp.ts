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
  originalSystem: "Nintendo Entertainment System",
  notes:
    "Static recompilation of Duck Hunt (NES) with the NESRecomp framework. Playable, and the Zapper is driven by the mouse: you aim with the cursor and fire with the left click.",
  notesEs:
    "Recompilación estática de Duck Hunt (NES) con el framework NESRecomp. Jugable, y el Zapper se maneja con el ratón: apuntas con el cursor y disparas con el clic izquierdo.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%20Entertainment%20System/Named_Boxarts/Duck%20Hunt%20(World).png",
    alt: "Duck Hunt (box art)",
    credit: "Box art",
  },
};
