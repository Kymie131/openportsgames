import type { Port } from "@/lib/ports/schema";

export const fZeroXRecomp: Port = {
  schema: "port",
  id: "f-zero-x-recomp",
  title: "F-Zero X",
  game: "F-Zero X",
  developers: ["Zorkats"],
  publisher: "Nintendo",
  originalYear: 1998,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos", "android"],
  status: "beta",
  release: { version: "1.2.2", date: "2026-11-03" },
  sources: ["https://github.com/Zorkats/G-Diffuser"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Nintendo 64"],
  summary:
    "F-Zero X is a 1998 racing game developed and published by Nintendo for the Nintendo 64. It is the sequel to the original F-Zero (1990), and the first F-Zero game with 3D graphics. It has a steep learning curve and its gameplay experience is similar to that of the original. The F-Zero X Expansion Kit, an expansion pack for the 64DD featuring 12 more tracks and track and vehicle editors, was released in Japan in 2000.",
  summaryEs:
    "F-Zero X es un videojuego de carreras futurista desarrollado y distribuido por Nintendo en 1998 para la videoconsola Nintendo 64. Es la continuación de F-Zero de Super Nintendo, y el segundo videojuego de la serie del mismo nombre.",
  notes:
    "G-Diffuser is a native port of F-Zero X built on the inspectredc matching decompilation and the libultraship runtime. Version 1.2.2 ships Windows, Linux, macOS and Android builds and adds support for the Japan-only 64DD Expansion Kit, plus widescreen, an in-game enhancements menu, post-process shaders, mod packs, shareable tracks and machines, and ROM hack support. Requires your own F-Zero X ROM and, for the expansion content, your own 64DD disk dump. No game files are included.",
  notesEs:
    "G-Diffuser es un port nativo de F-Zero X basado en la decompilación matching de inspectredc y el runtime libultraship. La versión 1.2.2 incluye builds para Windows, Linux, macOS y Android y añade compatibilidad con el Expansion Kit de 64DD exclusivo de Japón, además de pantalla panorámica, menú de mejoras, shaders de postprocesado, packs de mods, pistas y máquinas compartibles y soporte de ROM hacks. Requiere tu propia ROM de F-Zero X y, para el contenido de la expansión, tu propio volcado del disco de 64DD. No incluye archivos del juego.",
  downloads: [
    {
      label: "Android",
      url: "https://github.com/Zorkats/G-Diffuser/releases/download/v1.2.3/G-Diffuser-v1.2.3-android-arm64.apk",
      size: "25.0 MB",
    },
    {
      label: "Linux x64",
      url: "https://github.com/Zorkats/G-Diffuser/releases/download/v1.2.3/G-Diffuser-v1.2.3-linux-x64.tar.gz",
      size: "10.7 MB",
    },
    {
      label: "Linux arm64",
      url: "https://github.com/Zorkats/G-Diffuser/releases/download/v1.2.3/G-Diffuser-v1.2.3-linux-arm64.tar.gz",
      size: "10.2 MB",
    },
    {
      label: "macOS",
      url: "https://github.com/Zorkats/G-Diffuser/releases/download/v1.2.3/G-Diffuser-v1.2.3-macos-arm64.tar.gz",
      size: "8.0 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/Zorkats/G-Diffuser/releases/download/v1.2.3/G-Diffuser-v1.2.3-windows-x64.zip",
      size: "7.8 MB",
    },
  ],
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/F-Zero%20X%20(Europe).png",
    alt: "F-Zero X (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Snaps/F-Zero%20X%20(Europe).png",
      alt: "F-Zero X (screenshot)",
      credit: "Libretro",
    },
  ],
};
