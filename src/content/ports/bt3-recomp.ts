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
  originalSystem: "PlayStation 2",
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
};
