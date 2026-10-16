import type { Port } from "@/lib/ports/schema";

export const superMarioGalaxyAndroid: Port = {
  schema: "port",
  id: "super-mario-galaxy-android",
  title: "Galaxy Android",
  game: "Super Mario Galaxy",
  developers: ["OpenPort-Labs"],
  publisher: "Nintendo",
  originalYear: 2007,
  portType: "decompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/OpenPort-Labs/Galaxy-Android"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Wii"],
  related: ["petari", "super-mario-galaxy-nebula"],
  notes:
    "Native 100% ARM64 Android port of Super Mario Galaxy (Wii, 2007), compiled from reconstructed C++ source (built on the Petari decompilation). Vulkan 1.0 (OpenGL ES 3.2 fallback) and AAudio; it is not an emulator and needs your own game dump. Early version (graphical glitches possible). Latest release: v0.0.1cx.",
  notesEs:
    "Port nativo 100% ARM64 para Android de Super Mario Galaxy (Wii, 2007), compilado desde código C++ reconstruido (sobre la decompilación Petari). Vulkan 1.0 (con OpenGL ES 3.2 alternativo) y AAudio; no es un emulador y necesita tu propio volcado del juego. Versión temprana (posibles fallos gráficos). Última release: v0.0.1cx.",
};
