import type { Port } from "@/lib/ports/schema";

export const rayman2N64Recomp: Port = {
  schema: "port",
  id: "rayman-2-n64-recomp",
  title: "Rayman 2 Recompiled",
  game: "Rayman 2: The Great Escape",
  developers: ["danielgomesvieira2000"],
  publisher: "Ubisoft",
  originalYear: 1999,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/danielgomesvieira2000/rayman-2-the-great-escape-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceDead: true,
  originalSystems: ["Nintendo 64"],
  summary: "Rayman 2: The Great Escape is a 1999 platform game developed by Ubi Pictures and published by Ubi Soft for Windows, the Nintendo 64, Dreamcast and PlayStation. The sequel to the 1995 game. The game centers on the titular character Rayman, who is tasked with saving the fantastical land of the Fairy Glade from an army of robotic pirates led by Admiral Razorbeard.",
  summaryEs: "Rayman 2: The Great Escape es un videojuego de plataformas de 1999, diseñado por Michel Ancel, producido por Ubisoft Montpellier y publicado por Ubisoft. El personaje principal del juego, Rayman, tiene la tarea de salvar a su amigo Globox, y al mismo tiempo a toda la tierra de cuento de hadas llamada el Claro de los Sueños, de un ejército de invasores llamados Piratas-Robot liderados por el almirante Razorbeard.",
  notes:
    "Static recompilation of Rayman 2: The Great Escape (N64) with N64Recomp and the RT64 renderer. It requires your own game files. The upstream repository is no longer available.",
  notesEs:
    "Recompilación estática de Rayman 2: The Great Escape (N64) con N64Recomp y el renderizador RT64. Requiere tus propios archivos del juego. El repositorio original ya no está disponible.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Rayman%202%20-%20The%20Great%20Escape%20(Europe)%20(En,Fr,De,Es,It).png",
    alt: "Rayman 2: The Great Escape (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Snaps/Rayman%202%20-%20The%20Great%20Escape%20(Europe)%20(En,Fr,De,Es,It).png",
      alt: "Rayman 2: The Great Escape (screenshot)",
      credit: "Libretro",
    },
  ],
};
