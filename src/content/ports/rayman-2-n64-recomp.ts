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
  originalSystem: "Nintendo 64",
  notes:
    "Static recompilation of Rayman 2: The Great Escape (N64) with N64Recomp and the RT64 renderer. It requires your own game files.",
  notesEs:
    "Recompilación estática de Rayman 2: The Great Escape (N64) con N64Recomp y el renderizador RT64. Requiere tus propios archivos del juego.",
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
