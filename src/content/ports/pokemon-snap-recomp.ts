import type { Port } from "@/lib/ports/schema";

export const pokemonSnapRecomp: Port = {
  schema: "port",
  id: "pokemon-snap-recomp",
  title: "Pokémon Snap Recompiled",
  game: "Pokémon Snap",
  developers: ["HAL Laboratory"],
  publisher: "Nintendo",
  originalYear: 1999,
  genre: "shooter",
  openSource: true,
  portType: "recompilation",
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "1.1.4", date: "2026-10-11" },
  sources: ["https://github.com/JackandBeans/Snap64Recomp"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  originalSystems: ["Nintendo 64"],
  features: [
    "Widescreen and higher frame rates, disabled by default to match the cartridge",
    "Mouse and gyro aiming, button rebinding and fast forward",
    "Photo export of the in-game camera shots",
    "Anti-aliasing up to 8x with cached shader programs",
  ],
  featuresEs: [
    "Panorámico y framerates más altos, desactivados por defecto para igualar el cartucho",
    "Apuntado con ratón y giroscopio, reasignación de botones y avance rápido",
    "Exportación de las fotos de la cámara del juego",
    "Antialiasing de hasta 8x con programas de shader en caché",
  ],
  summary: "Pokémon Snap is a 1999 photography video game developed by HAL Laboratory and published by Nintendo for the Nintendo 64. It was first released in Japan in March 1999 and was later released in July 1999 in North America and in September 2000 for PAL regions. It is a spin-off game in the Pokémon series, being one of the first console-based games for it, and featuring many Pokémon rendered for the first time in real-time 3D. The game was re-released for the Wii's Virtual Console in December 2007, for the Wii U's Virtual Console in 2016, and for the Nintendo Classics service in June 2022.",
  summaryEs: "Pokémon Snap es un videojuego creado por HAL Laboratory y Pax Softnica para la consola Nintendo 64, y posteriormente publicado para la Consola Virtual de la consola Wii de Nintendo en diciembre de 2007. A diferencia de otros juegos sobre Pokémon, que suelen ser sobre luchas entre Pokémon, el protagonista de éste es un fotógrafo que desde una plataforma móvil se desplaza a lo largo de todo un escenario consiguiendo fotos de todas las especies que es posible encontrar.",
  notes:
    "Static recompilation of Pokémon Snap; the player supplies their own legally obtained game.",
  notesEs:
    "Recompilación estática de Pokémon Snap; el jugador aporta su propio juego obtenido legalmente.",
  screenshots: [
    {
      src: "https://raw.githubusercontent.com/JackandBeans/Snap64Recomp/main/docs/screenshots/01k-title-110.png",
      alt: "Title screen of Pokemon Snap Recompiled",
      credit: "Snap64Recomp",
    },
    {
      src: "https://raw.githubusercontent.com/JackandBeans/Snap64Recomp/main/docs/screenshots/03-course-select.png",
      alt: "Course select in Pokemon Snap Recompiled",
      credit: "Snap64Recomp",
    },
    {
      src: "https://raw.githubusercontent.com/JackandBeans/Snap64Recomp/main/docs/screenshots/04-beach.png",
      alt: "Beach course in Pokemon Snap Recompiled",
      credit: "Snap64Recomp",
    },
    {
      src: "https://raw.githubusercontent.com/JackandBeans/Snap64Recomp/main/docs/screenshots/06-volcano.png",
      alt: "Volcano course in Pokemon Snap Recompiled",
      credit: "Snap64Recomp",
    },
  ],
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Pokemon%20Snap%20(Europe).png",
    alt: "Pokémon Snap (box art)",
    credit: "Box art",
  },
};
