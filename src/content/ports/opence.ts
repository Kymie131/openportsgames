import type { Port } from "@/lib/ports/schema";

export const Opence: Port = {
  schema: "port",
  id: "opence",
  title: "OpenCE (Halo: Combat Evolved)",
  game: "Halo: Combat Evolved",
  developers: ["OpenCommunityEdition"],
  publisher: "Microsoft Game Studios",
  originalYear: 2001,
  portType: "decompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "android", "web"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/OpenCommunityEdition/OpenCE"],
  website: "https://halocombatevolved.com/",
  license: { spdx: "AGPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Xbox"],
  summary:
    "Halo: Combat Evolved is a 2001 first-person shooter game developed by Bungie and published by Microsoft Game Studios. The game was released on November 15, 2001 for the Xbox, with ports to Microsoft Windows and Mac OS X released in 2003. It is the first installment in the Halo franchise. Set in the 26th century, players assume the role of Master Chief, a cybernetically enhanced supersoldier.",
  summaryEs:
    "Halo: Combat Evolved, comúnmente conocido como Halo, Halo CE o Halo 1, es un videojuego de disparos en primera persona desarrollado por Bungie Studios y publicado por Microsoft Game Studios el 15 de noviembre de 2001, a manera de título debut de la videoconsola Xbox, y de la cual es considerado como su aplicación asesina. Es el primer juego de la franquicia Halo.",
  notes:
    "Community-edition port of the Halo: Combat Evolved (Xbox) decompilation to Windows, Linux, Android and the web. Build 337 (1 November) is the current release. Desktop builds are 32-bit x86 with OpenGL 4.5; Android is arm64 with OpenGL ES 3 (Android 9+); the browser build is WebAssembly with WebGL 2 and plays at halocombatevolved.com. Cross-play supports up to 128 players, online campaign co-op, four-player split screen, a server browser, voice chat and Custom Edition maps; a macOS build is in progress. The player supplies their own Xbox disc image; no game data is distributed.",
  notesEs:
    "Port de la edición comunitaria de la decompilación de Halo: Combat Evolved (Xbox) para Windows, Linux, Android y web. La build 337 (1 de noviembre) es la versión actual. Las builds de escritorio son x86 de 32 bits con OpenGL 4.5; Android es arm64 con OpenGL ES 3 (Android 9+); la build de navegador es WebAssembly con WebGL 2 y se juega en halocombatevolved.com. El cross-play admite hasta 128 jugadores, campaña cooperativa online, pantalla dividida para cuatro jugadores, navegador de servidores, chat de voz y mapas de Custom Edition; hay una build de macOS en progreso. El jugador aporta su propia imagen de disco de Xbox; no se distribuye contenido del juego.",
  downloads: [
    {
      label: "Linux",
      url: "https://github.com/OpenCommunityEdition/OpenCE/releases/download/build-343/halo-linux-release.zip",
      size: "23.3 MB",
    },
    {
      label: "Android",
      url: "https://github.com/OpenCommunityEdition/OpenCE/releases/download/build-343/halo-android-release.zip",
      size: "18.6 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/OpenCommunityEdition/OpenCE/releases/download/build-343/halo-windows-release.zip",
      size: "14.5 MB",
    },
  ],
  cover: {
    src: "https://thumbnails.libretro.com/Microsoft%20-%20Xbox/Named_Boxarts/Halo%20-%20Combat%20Evolved%20(USA).png",
    alt: "Halo: Combat Evolved (box art)",
    credit: "Box art",
  },
};
