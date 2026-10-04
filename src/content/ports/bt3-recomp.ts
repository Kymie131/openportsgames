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
    "PS2Recomp fork targeting the USA SLUS-21678 build. The player supplies their own legally obtained disc image; the repository contains no game content.",
  notesEs:
    "Fork de PS2Recomp orientado a la build USA SLUS-21678. El jugador aporta su propia imagen de disco obtenida legalmente; el repositorio no contiene contenido del juego.",
  screenshots: [
    {
      src: "https://github.com/z3xox/BT3-Recomp/raw/main/ps2xRuntime/assets/background.png",
      alt: "Dragon Ball Z Budokai Tenkaichi 3 recompilation banner",
      credit: "z3xox",
    },
  ],
};
