import type { Port } from "@/lib/ports/schema";

export const reLcs: Port = {
  schema: "port",
  id: "re-lcs",
  title: "reLCS",
  game: "Grand Theft Auto: Liberty City Stories",
  developers: ["Rockstar North"],
  publisher: "Rockstar Games",
  originalYear: 2005,
  portType: "reimplementation",
  genre: "open-world",
  openSource: true,
  platforms: ["windows", "linux"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://gitea.com/initdream/relcs"],
  license: {
    spdx: "NOASSERTION",
    note: "no license file published with the project",
  },
  verified: false,
  originalSystems: ["PlayStation Portable"],
  features: [
    "Vendored librw with an OpenGL 3 backend, no external library needed",
    "SDL2 and OpenGL ES build for handhelds and other embedded devices",
    "Optional game files in the gamefiles folder enable extra features",
  ],
  featuresEs: [
    "librw integrado con backend OpenGL 3, sin necesidad de librería externa",
    "Build con SDL2 y OpenGL ES para consolas portátiles y otros dispositivos embebidos",
    "Archivos de juego opcionales en la carpeta gamefiles que habilitan funciones extra",
  ],
  requirements: {
    minimum: "Your own copy of Grand Theft Auto: Liberty City Stories",
  },
  summary: "Grand Theft Auto: Liberty City Stories is a 2005 action-adventure game developed in a collaboration between Rockstar Leeds and Rockstar North, and published by Rockstar Games. The ninth installment in the Grand Theft Auto series, it was initially released as a PlayStation Portable exclusive in October 2005. A port for the PlayStation 2 was later released in June 2006. At the time of release, the recommended retail price of the PS2 port was around half the price of the PSP version, because the PS2 version does not feature the custom soundtrack ripping capability of the PSP version.",
  summaryEs: "Grand Theft Auto: Liberty City Stories es el decimoprimer juego de la serie Grand Theft Auto, desarrollado por Rockstar North en colaboración con Rockstar Leeds y distribuido por Rockstar Games. El juego se creó principalmente para el sistema PlayStation Portable (PSP), PlayStation 2 (PS2) lanzada en 2006. Por las grandes ventas del mismo también se lanzó para dispositivos iOS, Android y Fire OS el 17 de diciembre de 2015, 11 de febrero de 2016 y 11 de marzo de 2016, respectivamente.",
  notes:
    "Native PC reimplementation of Liberty City Stories, hosted on Gitea rather than GitHub. No tagged releases yet, so the executable has to be built from the lcs branch or taken from the project's own build output.",
  notesEs:
    "Reimplementación nativa para PC de Liberty City Stories, alojada en Gitea en lugar de GitHub. Aún sin releases etiquetadas, así que el ejecutable debe compilarse desde la rama lcs o tomarse de la salida de build del propio proyecto.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation%20Portable/Named_Boxarts/Grand%20Theft%20Auto%20-%20Liberty%20City%20Stories%20(USA)%20(En%2CFr%2CDe%2CEs%2CIt)%20(v1.05).png",
    alt: "Grand Theft Auto: Liberty City Stories (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation%20Portable/Named_Snaps/Grand%20Theft%20Auto%20-%20Liberty%20City%20Stories%20(USA)%20(En,Fr,De,Es,It)%20(v1.05).png",
      alt: "Grand Theft Auto: Liberty City Stories (screenshot)",
      credit: "Libretro",
    },
  ],
};
