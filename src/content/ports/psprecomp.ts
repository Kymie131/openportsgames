import type { Port } from "@/lib/ports/schema";

export const pspRecomp: Port = {
  schema: "port",
  id: "psprecomp",
  title: "PSPRecomp",
  game: "Grand Theft Auto: Vice City Stories",
  developers: ["Rockstar North"],
  publisher: "Rockstar Games",
  originalYear: 2007,
  portType: "recompilation",
  genre: "open-world",
  openSource: true,
  platforms: ["windows"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/jessicanataliagta/PSPRecomp"],
  license: { spdx: "MIT" },
  verified: false,
  originalSystems: ["PlayStation Portable"],
  features: [
    "Static recompiler that turns Allegrex code into C++ translation units",
    "Vice City Stories is the first working profile",
    "No PSP interpreter or JIT in the host runtime",
  ],
  featuresEs: [
    "Recompilador estático que convierte código Allegrex en unidades de traducción C++",
    "Vice City Stories es el primer perfil funcional",
    "Sin intérprete ni JIT de PSP en el runtime anfitrión",
  ],
  summary: "Grand Theft Auto: Vice City Stories is a 2006 action-adventure game developed by Rockstar Leeds and Rockstar North, and published by Rockstar Games. The tenth entry in the Grand Theft Auto series, the game was initially released as a PlayStation Portable exclusive in October 2006. A PlayStation 2 port was released in March 2007. Set within the fictional Vice City in 1984, the game is a prequel to 2002's Grand Theft Auto: Vice City and follows the exploits of ex-soldier Victor \"Vic\" Vance, a minor character originally featured in said game.",
  summaryEs: "Grand Theft Auto: Vice City Stories es el décimo videojuego desarrollado por Rockstar Leeds y Rockstar North, y publicado por Rockstar Games. La décima entrada de la serie Grand Theft Auto, el juego fue lanzado inicialmente como una exclusiva de PlayStation Portable en octubre de 2006. En marzo de 2007 se lanzó un puerto PlayStation 2. Ambientado dentro de la ficticia Vice City en 1984, el juego es una precuela de Grand Theft Auto: Vice City, y sigue las hazañas del ex soldado Victor \"Vic\" Vance, un personaje menor que apareció originalmente en dicho juego.",
  notes:
    "Static recompilation framework for PSP software with a Vice City Stories profile. No tagged releases yet, so builds come from the repository. Needs the data from a copy of the game.",
  notesEs:
    "Marco de recompilación estática para software de PSP con un perfil de Vice City Stories. Aún sin releases etiquetadas, así que las builds salen del repositorio. Necesita los datos de una copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation%20Portable/Named_Boxarts/Grand%20Theft%20Auto%20-%20Vice%20City%20Stories%20(USA).png",
    alt: "Grand Theft Auto: Vice City Stories (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation%20Portable/Named_Snaps/Grand%20Theft%20Auto%20-%20Vice%20City%20Stories%20(USA).png",
      alt: "Grand Theft Auto: Vice City Stories (screenshot)",
      credit: "Libretro",
    },
  ],
};
