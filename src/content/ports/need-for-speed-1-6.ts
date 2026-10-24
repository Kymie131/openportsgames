import type { Port } from "@/lib/ports/schema";

export const NeedForSpeed16: Port = {
  schema: "port",
  id: "need-for-speed-1-6",
  title: "Need For Speed 1-6",
  game: "Need For Speed 1-6",
  developers: ["OpenNFS"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "source-port",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/OpenNFS/OpenNFS"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  summary: "Need For Speed 1-6 is a racing game, released in 2000.",
  summaryEs: "Need For Speed 1-6 es un videojuego de carreras, lanzado en 2000.",
  summaryGenerated: true,
  notes:
    "An attempt to recreate the classic Need for Speed Games (1-6), unpacking their original data files into a modern, scratch built engine.",
  notesEs:
    "Intento de recrear los clásicos Need for Speed (1-6), extrayendo sus datos originales a un motor nuevo.",
};
