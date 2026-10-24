import type { Port } from "@/lib/ports/schema";

export const xenogearsRecomp: Port = {
  schema: "port",
  id: "xenogears-recomp",
  title: "XenogearsRecomp",
  game: "Xenogears",
  developers: ["OpokXeno"],
  publisher: "Square",
  originalYear: 1998,
  portType: "recompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/OpokXeno/xenogears-recomp"],
  license: { spdx: "PolyForm-Noncommercial-1.0.0", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Xenogears is a 1998 role-playing video game developed and published by Square for the PlayStation. It is the debut entry in the larger Xeno franchise. The gameplay of Xenogears revolves around navigating 3D environments both on-foot and using humanoid mecha dubbed \"Gears\". Combat is governed by a version of the \"Active Time Battle\" system. The story follows protagonist Fei Fong Wong and several others as they journey across the world to overthrow the all-powerful rule of Solaris and uncover mysteries concerning their world.",
  summaryEs: "Xenogears es un videojuego de ciencia ficción de rol desarrollado y publicado por Square para la PlayStation de Sony. Fue lanzado el 11 de febrero de 1998 en Japón y el 20 de octubre de 1998 en EE. UU. El juego nunca fue lanzado en territorios PAL. Fue reeditado por SQUARE ENIX como un título Greatest Hits en 2003, y en la PlayStation Network el 25 de junio de 2008 en Japón y el 22 de febrero de 2011 en EE. UU.",
  notes:
    "Native recompilation of Xenogears (PlayStation). The player supplies their own legally obtained disc image; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Xenogears (PlayStation). El jugador aporta su propio material obtenido legalmente (disc image); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Xenogears%20(USA).png",
    alt: "Xenogears (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Xenogears%20(USA).png",
      alt: "Xenogears (screenshot)",
      credit: "Libretro",
    },
  ],
};
