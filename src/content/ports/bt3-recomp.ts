import type { Port } from "@/lib/ports/schema";

export const bt3Recomp: Port = {
  schema: "port",
  id: "bt3-recomp",
  title: "Dragon Ball Z: Budokai Tenkaichi 3 Recompiled",
  game: "Dragon Ball Z: Budokai Tenkaichi 3",
  developers: ["z3xox"],
  publisher: "Bandai Namco",
  originalYear: 2007,
  genre: "fighting",
  openSource: true,
  portType: "recompilation",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/z3xox/BT3-Recomp"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  originalSystems: ["PlayStation 2"],
  features: [
    "Static recompilation of the PS2 executable to C++ at build time",
    "OpenGL renderer",
    "ImGui front-end on SDL2 with gamepad support",
    "Bring your own disc image: no game code or assets shipped",
  ],
  featuresEs: [
    "Recompilación estática del ejecutable de PS2 a C++ en tiempo de compilación",
    "Renderizador OpenGL",
    "Interfaz ImGui sobre SDL2 con soporte de mando",
    "Trae tu propia imagen de disco: no se incluye código ni recursos del juego",
  ],
  summary: "Dragon Ball Z: Budokai Tenkaichi 3 is a fighting game published by Bandai Namco Entertainment in 2007.",
  summaryEs: "Dragon Ball Z: Budokai Tenkaichi 3 es un videojuego de acción y lucha en 3D desarrollado por Spike y publicado por Atari en Norteamérica y por Namco Bandai en Europa y Japón para PlayStation 2 y Wii. La versión para PlayStation 2 salió a la venta en Norteamérica y Europa el 9 y el 13 de noviembre de 2007, respectivamente. El lanzamiento de la de Wii tuvo lugar el 3 de diciembre de 2007 en los Estados Unidos y el 15 de febrero de 2008 en el Reino Unido. En Japón, ambas adaptaciones debutaron el 4 de octubre de 2007.",
  notes:
    "Static recompilation of Dragon Ball Z: Budokai Tenkaichi 3 (PS2, USA, SLUS-21678) with PS2Recomp. It translates the MIPS code to C++ from your own disc image and ships its own front-end; playable, with widescreen and texture-pack and mod support.",
  notesEs:
    "Recompilación estática de Dragon Ball Z: Budokai Tenkaichi 3 (PS2, USA, SLUS-21678) con PS2Recomp. Traduce el código MIPS a C++ desde tu propia imagen de disco y trae un front-end propio; jugable, con widescreen y soporte de texture packs y mods.",
  screenshots: [
    {
      src: "https://github.com/z3xox/BT3-Recomp/raw/main/ps2xRuntime/assets/background.png",
      alt: "Dragon Ball Z Budokai Tenkaichi 3 recompilation banner",
      credit: "z3xox",
    },
  ],
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation%202/Named_Boxarts/Dragon%20Ball%20Z%20-%20Budokai%20Tenkaichi%203%20(Europe,%20Australia)%20(En,Fr,De,Es,It).png",
    alt: "Dragon Ball Z: Budokai Tenkaichi 3 (box art)",
    credit: "Box art",
  },
};
