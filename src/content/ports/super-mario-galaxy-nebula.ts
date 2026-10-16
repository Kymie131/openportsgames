import type { Port } from "@/lib/ports/schema";

export const superMarioGalaxyNebula: Port = {
  schema: "port",
  id: "super-mario-galaxy-nebula",
  title: "Nebula",
  game: "Super Mario Galaxy",
  developers: ["keepvaibin"],
  publisher: "Nintendo",
  originalYear: 2007,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/keepvaibin/nebula"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Wii"],
  aiDisclosure: {
    source: "https://github.com/keepvaibin/nebula",
    quote: "Nebula was built with AI coding agents (Anthropic's Claude).",
  },
  notes:
    "Static recompilation of Super Mario Galaxy for Windows: the PowerPC code is translated to C++ ahead of time and run on a native Direct3D 12 runtime. Work in progress (some areas below 60 FPS, lighting/bloom differences and bugs); it needs your own copy of the game. Latest release: v1.0.0. Built with AI coding agents (the game's own logic is the original code, not AI-written). NOT affiliated with Nintendo.",
  notesEs:
    "Recompilación estática de Super Mario Galaxy para Windows: el código PowerPC se traduce a C++ por adelantado y corre en un runtime nativo con Direct3D 12. En desarrollo (algunas zonas por debajo de 60 FPS, diferencias de iluminación/bloom y fallos); necesita tu propia copia del juego. Última release: v1.0.0. Hecho con agentes de IA (la lógica del juego es el código original, no escrita por IA). NO afiliado a Nintendo.",
};
