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
  originalSystem: "PlayStation Portable",
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
  notes:
    "Native PC reimplementation of Liberty City Stories, hosted on Gitea rather than GitHub. No tagged releases yet, so the executable has to be built from the lcs branch or taken from the project's own build output.",
  notesEs:
    "Reimplementación nativa para PC de Liberty City Stories, alojada en Gitea en lugar de GitHub. Aún sin releases etiquetadas, así que el ejecutable debe compilarse desde la rama lcs o tomarse de la salida de build del propio proyecto.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation%20Portable/Named_Boxarts/Grand%20Theft%20Auto%20-%20Liberty%20City%20Stories%20(USA)%20(En%2CFr%2CDe%2CEs%2CIt)%20(v1.05).png",
    alt: "Grand Theft Auto: Liberty City Stories (box art)",
    credit: "Box art",
  },
};
