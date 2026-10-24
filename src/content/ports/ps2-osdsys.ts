import type { Port } from "@/lib/ports/schema";

export const Ps2Osdsys: Port = {
  schema: "port",
  id: "ps2-osdsys",
  title: "PS2 OSDSYS",
  game: "PS2 OSDSYS",
  developers: ["JeanxPereira"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "reimplementation",
  genre: "action-adventure",
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
  summary: "PS2 OSDSYS is a action-adventure game for PlayStation 2, released in 2000.",
  summaryEs: "PS2 OSDSYS es un videojuego de acci�n y aventura para PlayStation 2, lanzado en 2000.",
  summaryGenerated: true,
  notes:
    "The PS2 OSDSYS (Crystal Clock, menus, opening, Browser) reimplemented natively in C++26 and Vulkan, bit-faithful to the console.",
  notesEs:
    "OSDSYS de PS2 (reloj Crystal, menús, apertura, navegador) reimplementado de forma nativa en C++26 y Vulkan, fiel bit a bit a la consola.",
};
