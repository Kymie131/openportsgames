import type { Port } from "@/lib/ports/schema";

export const Openreliant: Port = {
  schema: "port",
  id: "openreliant",
  title: "OpenReliant",
  game: "OpenReliant",
  developers: ["OpenReliant"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "reimplementation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/OpenReliant/openreliant"],
  license: { spdx: "MPL-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  notes:
    "An open-source reimplementation of StarLancer's engine, in Zig on SDL3. Needs your own copy of the game.",
  notesEs:
    "Reimplementación de código abierto del motor de StarLancer, en Zig sobre SDL3. Necesitas tu propia copia del juego.",
};
