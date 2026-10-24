import type { Port } from "@/lib/ports/schema";

export const Opensc2k: Port = {
  schema: "port",
  id: "opensc2k",
  title: "OpenSC2K",
  game: "OpenSC2K",
  developers: ["nicholas-ochoa"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "reimplementation",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/OpenSC2K/OpenSC2K"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  summary: "OpenSC2K is a simulation game, released in 2000.",
  summaryEs: "OpenSC2K es un videojuego de simulaci�n, lanzado en 2000.",
  summaryGenerated: true,
  cover: {
    src: "https://openportsgames.com/covers/generated/opensc2k.svg",
    alt: "OpenSC2K (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "OpenSC2K - Open Source remake of Sim City 2000 using rust and godot. Available for macOS, Windows and Linux.",
  notesEs:
    "OpenSC2K: remake de código abierto de SimCity 2000 en Rust y Godot. Disponible para macOS, Windows y Linux.",
};
