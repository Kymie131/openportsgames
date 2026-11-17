import type { Port } from "@/lib/ports/schema";

export const Ps2Osdsys: Port = {
  schema: "port",
  kind: "system",
  id: "ps2-osdsys",
  title: "PS2 OSDSYS",
  game: "PlayStation 2 OSDSYS",
  developers: ["JeanxPereira"],
  publisher: "Sony Computer Entertainment",
  originalYear: 2000,
  portType: "reimplementation",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/JeanxPereira/CrystalOSD"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation 2"],
  summary: "PS2 OSDSYS is a native C++ and Vulkan reimplementation of the PlayStation 2 system menu, clock and browser. It is system software, not a game.",
  summaryEs: "PS2 OSDSYS es una reimplementación nativa en C++ y Vulkan del menú de sistema, reloj y navegador de PlayStation 2. Es software de sistema, no un juego.",
  cover: {
    src: "https://openportsgames.com/covers/generated/ps2-osdsys.svg",
    alt: "PS2 OSDSYS (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "The PS2 OSDSYS (Crystal Clock, menus, opening, Browser) reimplemented natively in C++26 and Vulkan, bit-faithful to the console.",
  notesEs:
    "OSDSYS de PS2 (reloj Crystal, menús, apertura, navegador) reimplementado de forma nativa en C++26 y Vulkan, fiel bit a bit a la consola.",
};
