import type { Port } from "@/lib/ports/schema";

export const darkPlaces: Port = {
  schema: "port",
  id: "darkplaces",
  title: "DarkPlaces",
  game: "Quake",
  developers: ["Lord Lam"],
  publisher: "id Software",
  originalYear: 1996,
  genre: "shooter",
  openSource: true,
  portType: "source-port",
  platforms: ["windows"],
  status: "stable",
  release: { version: null, date: null },
  sources: ["https://github.com/DarkPlacesEngine/DarkPlaces"],
  discord: "https://discord.com/invite/ZHT9QeW",
  website: "https://icculus.org/twilight/darkplaces/",
  license: { spdx: "GPL-2.0" },
  verified: false,
  originalSystems: ["MS-DOS"],
  summary: "Quake is a 1996 first-person shooter video game developed by id Software and published by GT Interactive. The first game in the Quake series, it was originally released for MS-DOS and Windows, followed by Mac OS, Linux, and Saturn in 1997 and Nintendo 64 in 1998. The game's plot is centered around teleportation experiments, dubbed slipgates, which have resulted in an unforeseen invasion of Earth by a hostile force codenamed Quake, which commands a vast army of monsters.",
  summaryEs: "Quake es un videojuego de disparos en primera persona publicado por id Software el 22 de junio de 1996. Introdujo algunos de los mayores avances en el género de los videojuegos en 3D: utiliza modelos tridimensionales para los jugadores y los monstruos en vez de sprites bidimensionales; y el mundo donde el juego tiene lugar está creado como un verdadero espacio tridimensional, en vez de ser un mapa bidimensional con información sobre la altura representada en tres dimensiones.",
  notes:
    "Quake engine with client-server multiplayer and a fullscreen console. The newest tag, v20140513, is a dated build stamp rather than a semantic version, so no release version is recorded.",
  notesEs:
    "Motor de Quake con multijugador cliente-servidor y consola a pantalla completa. La etiqueta más reciente, v20140513, es una marca de build fechada y no una versión semántica, así que no se registra versión de release.",
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
