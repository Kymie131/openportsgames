import type { Port } from "@/lib/ports/schema";

export const goldenEye64Recompiled: Port = {
  schema: "port",
  id: "goldeneye-64-recompiled",
  title: "GoldenEye 007 Recompiled",
  game: "GoldenEye 007",
  developers: ["Rare"],
  publisher: "Nintendo",
  originalYear: 1997,
  genre: "shooter",
  openSource: true,
  portType: "recompilation",
  platforms: ["macos", "linux"],
  status: "beta",
  release: { version: "1.0.0", date: "2026-08-20" },
  sources: ["https://github.com/cblock85/GoldenEye64Recomp"],
  license: { spdx: "GPL-3.0" },
  verified: true,
  verifiedAt: "2026-09-22",
  originalSystems: ["Nintendo 64"],
  features: [
    "Native macOS and Linux builds via N64Recomp and RT64",
    "Metal (macOS) and Vulkan (Linux) rendering",
    "Widescreen support and frame interpolation",
    "Full campaign, menus and audio playable without an emulator",
  ],
  featuresEs: [
    "Builds nativas para macOS y Linux con N64Recomp y RT64",
    "Renderizado Metal (macOS) y Vulkan (Linux)",
    "Soporte panorámico e interpolación de frames",
    "Campaña completa, menús y audio jugables sin emulador",
  ],
  summary: "GoldenEye 007 is a 2010 first-person shooter video game developed by Eurocom and published by Activision for the Wii, with a handheld version for Nintendo DS developed by n-Space. It is a modern reimagining of the 1995 James Bond film GoldenEye as well as a remake of the 1997 Nintendo 64 game of the same name. The game was officially announced by Nintendo at their E3 2010 conference presentation. It was released in November 2010 in tandem with another James Bond game, Blood Stone. It was the fifth James Bond game developed by Eurocom and their second under Activision.",
  summaryEs: "GoldenEye 007 es un videojuego de disparos en primera persona desarrollado por Eurocom y distribuido por Activision y MGM Interactive. Es el remake del videojuego del mismo nombre desarrollado por Rare y publicado por Nintendo en 1997 para la consola Nintendo 64 y una reinterpretación de la película de James Bond de 1995, GoldenEye.",
  notes:
    "Native port of GoldenEye 007 produced by statically recompiling the Nintendo 64 code with N64Recomp and rendering with RT64. The clean build ships no game code: the launcher recompiles roughly three thousand functions from the player's own legally dumped ROM at startup.",
  notesEs:
    "Port nativo de GoldenEye 007 producido recompilando estáticamente el código de Nintendo 64 con N64Recomp y renderizando con RT64. La build limpia no incluye código del juego: el lanzador recompila unas tres mil funciones de la ROM volcada legalmente por el jugador al iniciar.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/GoldenEye%20007%20(USA).png",
    alt: "GoldenEye 007 (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Snaps/GoldenEye%20007%20(USA).png",
      alt: "GoldenEye 007 (screenshot)",
      credit: "Libretro",
    },
  ],
};
