import type { Port } from "@/lib/ports/schema";

export const PermafrostEngine: Port = {
  schema: "port",
  id: "permafrost-engine",
  title: "Permafrost-engine",
  kind: "tool",
  game: "Permafrost Engine",
  developers: ["eduard-permyakov"],
  publisher: "Eduard Permyakov",
  originalYear: 2017,
  portType: "source-port",
  genre: "strategy",
  openSource: true,
  originalGameLicense: "open",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/eduard-permyakov/permafrost-engine"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Windows"],
  summary:
    "Permafrost Engine is an open-source OpenGL 3.3 real-time strategy engine written in C. It is the technology behind EVERGLORY and is designed in the spirit of classic RTS games.",
  summaryEs:
    "Permafrost Engine es un motor de estrategia en tiempo real con OpenGL 3.3, de código abierto y escrito en C. Es la tecnología detrás de EVERGLORY y está diseñado al estilo de los RTS clásicos.",
  cover: {
    src: "https://openportsgames.com/covers/generated/permafrost-engine.svg",
    alt: "Permafrost Engine (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "An OpenGL RTS game engine written in C.",
  notesEs: "Motor de juego RTS con OpenGL escrito en C.",
};
