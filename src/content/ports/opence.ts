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
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Xbox"],
  notes:
    "Community-edition port of the Halo: Combat Evolved (Xbox) decompilation to Windows, Linux, Android and the web. Desktop builds are 32-bit x86 with OpenGL 4.5; Android is arm64 with OpenGL ES 3 (Android 9+); the browser build is WebAssembly with WebGL 2 and plays at halocombatevolved.com. The player supplies their own Xbox disc image; no game data is distributed. System-link multiplayer supports up to 128 players across Windows, Linux, Android and browsers.",
  notesEs:
    "Port de la edición comunitaria de la decompilación de Halo: Combat Evolved (Xbox) para Windows, Linux, Android y web. Las builds de escritorio son x86 de 32 bits con OpenGL 4.5; Android es arm64 con OpenGL ES 3 (Android 9+); la build de navegador es WebAssembly con WebGL 2 y se juega en halocombatevolved.com. El jugador aporta su propia imagen de disco de Xbox; no se distribuye contenido del juego. El multijugador por system link admite hasta 128 jugadores entre Windows, Linux, Android y navegadores.",
  cover: {
    src: "https://thumbnails.libretro.com/Microsoft%20-%20Xbox/Named_Boxarts/Halo%20-%20Combat%20Evolved%20(USA).png",
    alt: "Halo: Combat Evolved (box art)",
    credit: "Box art",
  },
};
