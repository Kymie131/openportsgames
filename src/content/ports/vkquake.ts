import type { Port } from "@/lib/ports/schema";

export const vkQuake: Port = {
  schema: "port",
  id: "vkquake",
  title: "vkQuake",
  game: "Quake",
  developers: ["id Software"],
  publisher: "GT Interactive",
  originalYear: 1996,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "1.37.0", date: "2026-10-12" },
  sources: ["https://github.com/Novum/vkQuake"],
  license: {
    spdx: "GPL-2.0",
  },
  verified: true,
  verifiedAt: "2026-10-14",
  summary: "Quake is a 1996 first-person shooter video game developed by id Software and published by GT Interactive. The first game in the Quake series, it was originally released for MS-DOS and Windows, followed by Mac OS, Linux, and Saturn in 1997 and Nintendo 64 in 1998. The game's plot is centered around teleportation experiments, dubbed slipgates, which have resulted in an unforeseen invasion of Earth by a hostile force codenamed Quake, which commands a vast army of monsters.",
  summaryEs: "Quake es un videojuego de disparos en primera persona publicado por id Software el 22 de junio de 1996. Introdujo algunos de los mayores avances en el género de los videojuegos en 3D: utiliza modelos tridimensionales para los jugadores y los monstruos en vez de sprites bidimensionales; y el mundo donde el juego tiene lugar está creado como un verdadero espacio tridimensional, en vez de ser un mapa bidimensional con información sobre la altura representada en tres dimensiones.",
  notes:
    "Vulkan port of QuakeSpasm based on id Software's GPL-2.0 Quake source release. Requires Quake gamedata (shareware episode freely available).",
  notesEs:
    "Port Vulkan de QuakeSpasm basado en la publicación del código GPL-2.0 de Quake de id Software. Requiere los datos de Quake (el episodio shareware está disponible gratis).",
  installGuide: {
    steps: [
      "Own a copy of Quake, or download the freely available shareware episode.",
      "Copy the id1 folder (id1/pak0.pak, and pak1.pak for the mission packs) from your Quake install.",
      "Place the id1 folder next to the vkQuake executable.",
      "Launch vkQuake; the Vulkan renderer runs the original datasets.",
    ],
    stepsEs: [
      "Ten una copia de Quake, o descarga el episodio shareware disponible gratuitamente.",
      "Copia la carpeta id1 (id1/pak0.pak, y pak1.pak para los packs de misiones) desde tu instalación de Quake.",
      "Coloca la carpeta id1 junto al ejecutable de vkQuake.",
      "Lanza vkQuake; el renderizador Vulkan ejecuta los datos originales.",
    ],
  },
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/4/4c/Quake1cover.jpg",
    alt: "Quake (box art)",
    credit: "Wikipedia",
  },
  originalSystems: ["MS-DOS"],
};
