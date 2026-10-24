import type { Port } from "@/lib/ports/schema";

export const quakeSpasm: Port = {
  schema: "port",
  id: "quakespasm",
  title: "QuakeSpasm",
  game: "Quake",
  developers: ["Forest"],
  publisher: "id Software",
  originalYear: 1996,
  genre: "shooter",
  openSource: true,
  portType: "source-port",
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: null, date: null },
  sources: ["https://github.com/sezero/quakespasm"],
  website: "https://sourceforge.net/projects/quakespasm/",
  license: { spdx: "GPL-2.0" },
  verified: false,
  originalSystems: ["MS-DOS"],
  features: ["SDL2 backends", "16-bit textures and sprites", "Quake expansion support"],
  featuresEs: ["Backends SDL2", "Texturas y sprites de 16 bits", "Soporte de expansiones de Quake"],
  summary: "Quake is a 1996 first-person shooter video game developed by id Software and published by GT Interactive. The first game in the Quake series, it was originally released for MS-DOS and Windows, followed by Mac OS, Linux, and Saturn in 1997 and Nintendo 64 in 1998. The game's plot is centered around teleportation experiments, dubbed slipgates, which have resulted in an unforeseen invasion of Earth by a hostile force codenamed Quake, which commands a vast army of monsters.",
  summaryEs: "Quake es un videojuego de disparos en primera persona publicado por id Software el 22 de junio de 1996. Introdujo algunos de los mayores avances en el género de los videojuegos en 3D: utiliza modelos tridimensionales para los jugadores y los monstruos en vez de sprites bidimensionales; y el mundo donde el juego tiene lugar está creado como un verdadero espacio tridimensional, en vez de ser un mapa bidimensional con información sobre la altura representada en tres dimensiones.",
  notes:
    "Minimal Quake source port closely matching the original software renderer. No releases are published on GitHub; builds are distributed elsewhere.",
  notesEs:
    "Port de código fuente minimalista de Quake, muy cercano al renderizador por software original. No se publican releases en GitHub; las builds se distribuyen en otro sitio.",
  cover: {
    src: "https://thumbnails.libretro.com/DOS/Named_Boxarts/Quake%20(1996).png",
    alt: "Quake (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/DOS/Named_Snaps/Quake%20(1996).png",
      alt: "Quake (screenshot)",
      credit: "Libretro",
    },
  ],
};
