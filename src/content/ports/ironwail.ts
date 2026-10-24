import type { Port } from "@/lib/ports/schema";

export const ironwail: Port = {
  schema: "port",
  id: "ironwail",
  title: "IronWail",
  game: "Quake",
  developers: ["Andrei Drexler"],
  publisher: "id Software",
  originalYear: 1996,
  genre: "shooter",
  openSource: true,
  portType: "source-port",
  platforms: ["windows", "linux"],
  status: "stable",
  release: { version: "0.8.2", date: "2026-08-11" },
  sources: ["https://github.com/andrei-drexler/ironwail"],
  license: { spdx: "GPL-2.0" },
  verified: true,
  verifiedAt: "2026-10-01",
  originalSystems: ["MS-DOS"],
  features: [
    "SDL2 backends for video and input",
    "Quakespasm base with extended limits",
    "16-bit texture and sprite support",
  ],
  featuresEs: [
    "Backends SDL2 para video y entrada",
    "Base Quakespasm con límites ampliados",
    "Soporte de texturas y sprites de 16 bits",
  ],
  summary: "Quake is a 1996 first-person shooter video game developed by id Software and published by GT Interactive. The first game in the Quake series, it was originally released for MS-DOS and Windows, followed by Mac OS, Linux, and Saturn in 1997 and Nintendo 64 in 1998. The game's plot is centered around teleportation experiments, dubbed slipgates, which have resulted in an unforeseen invasion of Earth by a hostile force codenamed Quake, which commands a vast army of monsters.",
  summaryEs: "Quake es un videojuego de disparos en primera persona publicado por id Software el 22 de junio de 1996. Introdujo algunos de los mayores avances en el género de los videojuegos en 3D: utiliza modelos tridimensionales para los jugadores y los monstruos en vez de sprites bidimensionales; y el mundo donde el juego tiene lugar está creado como un verdadero espacio tridimensional, en vez de ser un mapa bidimensional con información sobre la altura representada en tres dimensiones.",
  notes:
    "Quake source port built on the Quakespasm codebase. The project requires OpenGL 4.3, so macOS builds are not provided.",
  notesEs:
    "Port de código fuente de Quake construido sobre el código de Quakespasm. El proyecto requiere OpenGL 4.3, por lo que no se ofrecen builds para macOS.",
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
