import type { Port } from "@/lib/ports/schema";

export const metroidPrimePort: Port = {
  schema: "port",
  id: "metroid-prime-port",
  title: "Metroid Prime Native Port",
  game: "Metroid Prime",
  developers: ["Odrannnn"],
  publisher: "Nintendo",
  originalYear: 2002,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "0.45.0", date: "2026-11-10" },
  sources: ["https://github.com/Odrannnn/MetroidPrimePort"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["GameCube"],
  summary: "Metroid Prime is a 2002 action-adventure game developed by Retro Studios and published by Nintendo for the GameCube. It is the fifth main Metroid game, and the first to use 3D computer graphics and a first-person perspective. It was released in North America in November 2002 and in Japan and Europe the following year. Along with the Game Boy Advance game Metroid Fusion, released simultaneously in North America, Prime marked the return of the Metroid series after an eight-year hiatus following Super Metroid (1994).",
  summaryEs: "Metroid Prime es un videojuego de acción-aventura en primera persona con componentes de disparos y plataformas, desarrollado por Retro Studios y distribuido por Nintendo para la consola Nintendo GameCube, fue lanzado el 19 de noviembre de 2002 en América, el 28 de febrero de 2003 en Japón y el 21 de marzo de 2003 en Europa. Es el primero de la serie Metroid en ser tridimensional y usar la vista en primera persona, también fue el primer videojuego de la serie Metroid en no haber sido desarrollado en Japón.",
  notes:
    "Decompilation-based native port of Metroid Prime (GameCube). The player supplies their own legally obtained disc image; the repository ships no game content.",
  notesEs:
    "Port nativo basado en decompilación de Metroid Prime (GameCube). El jugador aporta su propio material obtenido legalmente (disc image); el repositorio no incluye contenido del juego.",
  downloads: [
    {
      label: "Windows x64",
      url: "https://github.com/Odrannnn/MetroidPrimePort/releases/download/v0.45.0/metroid-prime-port-0.45.0-windows-x86_64.zip",
      size: "72.9 MB",
    },
    {
      label: "Windows arm64",
      url: "https://github.com/Odrannnn/MetroidPrimePort/releases/download/v0.45.0/metroid-prime-port-0.45.0-windows-arm64.zip",
      size: "70.8 MB",
    },
    {
      label: "Linux x64",
      url: "https://github.com/Odrannnn/MetroidPrimePort/releases/download/v0.45.0/metroid-prime-port-0.45.0-linux-x86_64.tar.gz",
      size: "18.5 MB",
    },
    {
      label: "macOS",
      url: "https://github.com/Odrannnn/MetroidPrimePort/releases/download/v0.45.0/metroid-prime-port-0.45.0-macos-arm64.zip",
      size: "18.3 MB",
    },
    {
      label: "Linux arm64",
      url: "https://github.com/Odrannnn/MetroidPrimePort/releases/download/v0.45.0/metroid-prime-port-0.45.0-linux-aarch64.tar.gz",
      size: "17.6 MB",
    },
  ],
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20GameCube/Named_Boxarts/Metroid%20Prime%20(USA).png",
    alt: "Metroid Prime (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20GameCube/Named_Snaps/Metroid%20Prime%20(USA).png",
      alt: "Metroid Prime (screenshot)",
      credit: "Libretro",
    },
  ],
};
