import type { Port } from "@/lib/ports/schema";

export const superMarioAllStarsRecomp: Port = {
  schema: "port",
  id: "super-mario-all-stars-recomp",
  title: "Super Mario All-Stars Recompiled",
  game: "Super Mario All-Stars",
  developers: ["PortsDR"],
  publisher: "Nintendo",
  originalYear: 1993,
  portType: "recompilation",
  genre: "platformer",
  openSource: false,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://portsdr.com/"],
  license: { spdx: "NOASSERTION", note: "no public repository or license" },
  verified: false,
  sourceIsIndex: true,
  originalSystems: ["Super Nintendo"],
  summary: "Super Mario All-Stars is a 1993 platform game compilation developed and published by Nintendo for the Super Nintendo Entertainment System (SNES). It contains remakes of four Super Mario games released for the Nintendo Entertainment System (NES) and the Famicom Disk System: Super Mario Bros. (1985), Super Mario Bros.: The Lost Levels, Super Mario Bros. 2 (1988), and Super Mario Bros. 3 (1988). As in the original games, players control the Italian plumber Mario and his brother Luigi through themed worlds, collecting power-ups, avoiding obstacles, and finding secrets.",
  summaryEs: "Super Mario All-Stars es una compilación de videojuegos de plataformas para Super Nintendo Entertainment System (SNES). Contiene remakes de cuatro juegos de Super Mario lanzados por Nintendo para la Nintendo Entertainment System (NES) y Famicom Disk System: Super Mario Bros. (1985), Super Mario Bros.: The Lost Levels (1986), Super Mario Bros. 2 (1988) y Super Mario Bros. 3 (1988). Al igual que en los originales, los usuarios controlan al fontanero italiano Mario y a su hermano Luigi a través de mundos temáticos, recogen potenciadores, evitan obstáculos y descubren secretos.",
  notes: "Indexed by PortsDR. No official repository is available, and it needs your own copy.",
  notesEs: "Indexado en PortsDR. No hay repositorio oficial disponible y necesita tu propia copia.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Mario%20All-Stars%20(Europe).png",
    alt: "Super Mario All-Stars (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Snaps/Super%20Mario%20All-Stars%20(Europe).png",
      alt: "Super Mario All-Stars (screenshot)",
      credit: "Libretro",
    },
  ],
};
