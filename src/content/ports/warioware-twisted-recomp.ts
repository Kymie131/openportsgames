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
  originalSystems: ["Game Boy Advance"],
  summary: "WarioWare: Twisted! is an action video game developed by Nintendo and Intelligent Systems and published by Nintendo for the Game Boy Advance. It was released on October 14, 2004 in Japan; May 19, 2005 in Australia; and May 23, 2005 in North America. The third game in the WarioWare series and the seventh in the Wario series overall, Twisted! was the last Wario game to be released on a Game Boy family system, having been released after the launch of the Nintendo DS outside of Japan.",
  summaryEs: "Wario Ware Twisted!, conocido en Japón como Mawaru Made In Wario, es un videojuego desarrollado por Intelligent Systems para Game Boy Advance, perteneciente a la serie de WarioWare. Es el tercer juego de la saga y el segundo en salir en Game Boy Advance. Llegó al mercado en octubre de 2004 en Japón y en mayo de 2005 en Australia y Estados Unidos, no habiendo llegado al mercado en Europa.",
  notes:
    "Static recompilation of WarioWare: Twisted! (GBA) with the gbarecomp framework. It requires your own game files.",
  notesEs:
    "Recompilación estática de WarioWare: Twisted! (GBA) con el framework gbarecomp. Requiere tus propios archivos del juego.",
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
