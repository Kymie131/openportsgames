import type { Port } from "@/lib/ports/schema";

export const metroidNesRecomp: Port = {
  schema: "port",
  id: "metroid-nes-recomp",
  title: "MetroidNESRecomp",
  game: "Metroid",
  developers: ["mstan"],
  publisher: "Nintendo",
  originalYear: 1986,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/MetroidNESRecomp"],
  license: { spdx: "PolyForm-Noncommercial-1.0.0", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystems: ["Nintendo Entertainment System"],
  summary: "Metroid is a 1986 action-adventure game developed and published by Nintendo. The first installment in the Metroid series, it was originally released in Japan for the Family Computer Disk System in August 1986. North America received a release in August 1987 on the Nintendo Entertainment System, with the European release following in January 1988.",
  summaryEs: "Metroid es un videojuego del género acción y aventura y la primera entrega de la serie de videojuegos de Metroid. Desarrollado en cooperación por Nintendo Research & Development 1 e Intelligent Systems, y distribuido internacionalmente por Nintendo, el juego fue lanzado inicialmente en 1986 para la Family Computer Disk System en Japón y para la Nintendo Entertainment System en Norteamérica y Europa en 1987.",
  notes:
    "Static recompilation of Metroid (NES) with the nesrecomp framework: the 6502 code is translated to C and compiled natively. It ships separate USA/NTSC and Europe/PAL builds, each one only with its matching ROM.",
  notesEs:
    "Recompilación estática de Metroid (NES) con el framework nesrecomp: el código 6502 se traduce a C y se compila a nativo. Trae builds separadas para USA/NTSC y Europa/PAL, cada una solo con su ROM correspondiente.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%20Entertainment%20System/Named_Boxarts/Metroid%20(USA).png",
    alt: "Metroid (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%20Entertainment%20System/Named_Snaps/Metroid%20(USA).png",
      alt: "Metroid (screenshot)",
      credit: "Libretro",
    },
  ],
};
