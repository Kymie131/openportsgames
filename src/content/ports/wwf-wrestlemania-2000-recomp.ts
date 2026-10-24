import type { Port } from "@/lib/ports/schema";

export const wwfWrestlemania2000Recomp: Port = {
  schema: "port",
  id: "wwf-wrestlemania-2000-recomp",
  title: "WWF WrestleMania 2000",
  game: "WWF WrestleMania 2000",
  developers: ["jessetbh"],
  publisher: "THQ",
  originalYear: 1999,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/jessetbh/WWFWrestleMania2000Recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Nintendo 64"],
  summary: "WWF WrestleMania 2000 is a professional wrestling video game released in 1999 on the Nintendo 64 (N64) console. It was based on the World Wrestling Federation's annual pay-per-view, WrestleMania. Despite the fact that this game is based upon WrestleMania 2000, the game was released five months prior to the actual PPV itself, therefore resulting in the game using the stage design from the 1999 event, WrestleMania XV, instead. Released at the height of the WWF's Attitude Era, WrestleMania 2000 was the first WWF game released by THQ.",
  summaryEs: "WWF WrestleMania 2000 es un videojuego de lucha libre profesional lanzado en 1999 en la Consola de videojuegos Nintendo 64 (N64). Se basó en el pago por evento anual de la Federación Mundial de Lucha Libre, WrestleMania. A pesar de que este juego está basado en WrestleMania 2000, fue lanzado cinco meses antes del PPV real, por lo que el juego utilizó el diseño de escenario del evento de 1999, WrestleMania XV, en su lugar. Lanzado en el apogeo de la Attitude Era de la WWF, WrestleMania 2000 fue el primer juego de la WWF lanzado por THQ.",
  notes:
    "Static recompilation of WWF WrestleMania 2000 (N64) with N64Recomp and the RT64 renderer. It requires your own game files.",
  notesEs:
    "Recompilación estática de WWF WrestleMania 2000 (N64) con N64Recomp y el renderizador RT64. Requiere tus propios archivos del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/WWF%20WrestleMania%202000%20(Europe).png",
    alt: "WWF WrestleMania 2000 (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Snaps/WWF%20WrestleMania%202000%20(Europe).png",
      alt: "WWF WrestleMania 2000 (screenshot)",
      credit: "Libretro",
    },
  ],
};
