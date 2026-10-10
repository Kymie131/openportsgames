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
  release: { version: "1.1.0", date: "2026-09-27" },
  sources: ["https://github.com/JackandBeans/Snap64Recomp"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  originalSystem: "Nintendo 64",
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
