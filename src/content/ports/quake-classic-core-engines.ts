import type { Port } from "@/lib/ports/schema";

export const quakeClassicCoreEngines: Port = {
  schema: "port",
  id: "quake-classic-core-engines",
  title: "Quake (Classic Core Engines)",
  game: "Quake",
  developers: ["sandstranger"],
  publisher: "id Software",
  originalYear: 1996,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: "3.6.0", date: "2026-11-11" },
  sources: ["https://github.com/sandstranger/com.mobilerpgpack.phone"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["MS-DOS"],
  downloads: [
    {
      label: "Android arm64",
      url: "https://github.com/sandstranger/com.mobilerpgpack.phone/releases/download/3.6.0/Classic_Core_fdroid_release_arm64-v8a_v3.6.0_b142_2026_11_11_15_18.apk",
      size: "152.0 MB",
    },
    {
      label: "Android armv7",
      url: "https://github.com/sandstranger/com.mobilerpgpack.phone/releases/download/3.6.0/Classic_Core_fdroid_release_armeabi-v7a_v3.6.0_b142_2026_11_11_15_18.apk",
      size: "151.4 MB",
    },
  ],
  cover: {
    src: "https://thumbnails.libretro.com/DOS/Named_Boxarts/Quake%20(1996).png",
    alt: "Quake (box art)",
    credit: "Box art",
  },
  summary: "Quake is a 1996 first-person shooter video game developed by id Software and published by GT Interactive. The first game in the Quake series, it was originally released for MS-DOS and Windows, followed by Mac OS, Linux, and Saturn in 1997 and Nintendo 64 in 1998. The game's plot is centered around teleportation experiments, dubbed slipgates, which have resulted in an unforeseen invasion of Earth by a hostile force codenamed Quake, which commands a vast army of monsters.",
  summaryEs: "Quake es un videojuego de disparos en primera persona publicado por id Software el 22 de junio de 1996. Introdujo algunos de los mayores avances en el género de los videojuegos en 3D: utiliza modelos tridimensionales para los jugadores y los monstruos en vez de sprites bidimensionales; y el mundo donde el juego tiene lugar está creado como un verdadero espacio tridimensional, en vez de ser un mapa bidimensional con información sobre la altura representada en tres dimensiones.",
  notes: "Quake (id Software, 1996) for Android (source port). Latest release: 3.5.0. Needs your own copy of the game (id1 folder by pabwrld).",
  notesEs: "Quake (id Software, 1996) para Android (port de código). Última release: 3.5.0. Necesita tu propia copia del juego.",
};
