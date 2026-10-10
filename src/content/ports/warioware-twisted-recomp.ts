import type { Port } from "@/lib/ports/schema";

export const wariowareTwistedRecomp: Port = {
  schema: "port",
  id: "warioware-twisted-recomp",
  title: "WarioWare: Twisted!",
  game: "WarioWare: Twisted!",
  developers: ["mstan"],
  publisher: "Nintendo",
  originalYear: 2004,
  portType: "recompilation",
  genre: "puzzle",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/WarioWareTwistedRecomp"],
  license: { spdx: "PolyForm-Noncommercial-1.0.0", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystem: "Game Boy Advance",
  notes:
    "Static recompilation of WarioWare: Twisted! (GBA) with the gbarecomp framework. It requires your own copy of the game.",
  notesEs:
    "Recompilación estática de WarioWare: Twisted! (GBA) con el framework gbarecomp. Requiere tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Advance/Named_Boxarts/WarioWare%20-%20Twisted!%20(USA).png",
    alt: "WarioWare: Twisted! (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Advance/Named_Snaps/WarioWare%20-%20Twisted!%20(USA).png",
      alt: "WarioWare: Twisted! (screenshot)",
      credit: "Libretro",
    },
  ],
};
