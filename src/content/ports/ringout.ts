import type { Port } from "@/lib/ports/schema";

export const ringOut: Port = {
  schema: "port",
  id: "ringout",
  title: "RingOut",
  game: "SoulCalibur II",
  developers: ["jackpoison-prog"],
  publisher: "Namco",
  originalYear: 2002,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/jackpoison-prog/RingOut"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  originalSystems: ["GameCube"],
  summary: "Soulcalibur II is a 2002 fighting game developed and published by Namco. It is the third installment in the Soulcalibur series of weapon-based fighting games as the sequel to Soulcalibur (1998). Originally intended to be released on Sega's NAOMI arcade board, the game was built on the Namco System 246 board before being ported to the PlayStation 2, GameCube, and Xbox home consoles.",
  summaryEs: "Soulcalibur II es un videojuego de lucha lanzado originalmente en el 2002 para sistemas arcade Namco System 246, luego desarrollado para consolas en el año 2003. Es el segundo juego de la saga Soulcalibur realizada por Namco.",
  notes:
    "Static recompilation of SoulCalibur II to a native app. The player supplies their own legally obtained disc image; the repository ships no game content.",
  notesEs:
    "Recompilación estática de SoulCalibur II a una app nativa. El jugador aporta su propia imagen de disco obtenida legalmente; el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20GameCube/Named_Boxarts/SoulCalibur%20II%20(USA).png",
    alt: "SoulCalibur II (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20GameCube/Named_Snaps/SoulCalibur%20II%20(USA).png",
      alt: "SoulCalibur II (screenshot)",
      credit: "Libretro",
    },
  ],
};
