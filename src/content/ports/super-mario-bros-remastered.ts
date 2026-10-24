import type { Port } from "@/lib/ports/schema";

export const superMarioBrosRemastered: Port = {
  schema: "port",
  id: "super-mario-bros-remastered",
  title: "Super Mario Bros. Remastered",
  game: "Super Mario Bros.",
  developers: ["Nintendo R&D4"],
  publisher: "Nintendo",
  originalYear: 1985,
  portType: "reimplementation",
  genre: "platformer",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "1.1.0", date: "2026-09-04" },
  sources: ["https://github.com/JHDev2006/Super-Mario-Bros.-Remastered-Public"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  screenshots: [
    {
      src: "https://github.com/user-attachments/assets/e28afd48-44be-4b8f-8466-7475d0d3d4c8",
      alt: "Side-scrolling gameplay in a custom level of Super Mario Bros. Remastered",
      credit: "Super Mario Bros. Remastered",
    },
  ],
  originalSystems: ["Nintendo Entertainment System"],
  summary: "Super Mario Bros. is a 1985 platform game developed and published by Nintendo for the Nintendo Entertainment System (NES). Directed and produced by Shigeru Miyamoto, it is the successor to the 1983 arcade game Mario Bros. and the first game in the Super Mario series. Players control Mario, or his brother Luigi in the multiplayer mode, to traverse the Mushroom Kingdom to rescue Princess Toadstool from King Koopa. They traverse side-scrolling stages while avoiding hazards such as enemies and pits and collecting power-ups such as the Super Mushroom, Fire Flower, and Starman.",
  summaryEs: "Super Mario Bros. es un videojuego de plataformas desarrollado y publicado por Nintendo para la Nintendo Entertainment System (NES). Dirigido y producido por Shigeru Miyamoto, es la secuela del arcade Mario Bros. de 1983 y el primero de la serie Super Mario. Los jugadores controlan a Mario, o a su hermano Luigi en el modo multijugador, para atravesar el Reino Champiñón y rescatar a la princesa Toadstool del rey Koopa —más tarde llamado Bowser—.",
  notes:
    "Community remake of Super Mario Bros. built from scratch in Godot. The project is a fresh reimplementation rather than a build of the original game code, and it reuses audio and sprite assets from the original release. Distributed as versioned releases, the latest stable being 1.1.0. Because of those Nintendo-owned assets this entry stays unverified.",
  notesEs:
    "Remake comunitario de Super Mario Bros. construido desde cero en Godot. El proyecto es una reimplementación nueva y no una build del código original, y reutiliza recursos de audio y sprites del lanzamiento original. Se distribuye como releases versionadas, siendo 1.1.0 la última estable. Por esos recursos propiedad de Nintendo, esta ficha permanece sin verificar.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Mario%20Bros.%20(Europe).png",
    alt: "Super Mario Bros. (box art)",
    credit: "Box art",
  },
};
