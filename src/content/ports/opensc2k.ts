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
  release: { version: "0.3.0", date: "2026-10-09" },
  sources: ["https://github.com/OpenSC2K/OpenSC2K"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  summary: "OpenSC2K is a simulation game, released in 2000.",
  summaryEs: "OpenSC2K es un videojuego de simulaci�n, lanzado en 2000.",
  summaryGenerated: true,
  downloads: [
    {
      label: "macOS",
      url: "https://github.com/OpenSC2K/OpenSC2K/releases/download/v0.3.0/OpenSC2K-0.3.0-macos-universal.dmg",
      size: "94.6 MB",
    },
    {
      label: "Linux x64",
      url: "https://github.com/OpenSC2K/OpenSC2K/releases/download/v0.3.0/OpenSC2K-0.3.0-linux-x64.tar.gz",
      size: "54.6 MB",
    },
    {
      label: "Linux arm64",
      url: "https://github.com/OpenSC2K/OpenSC2K/releases/download/v0.3.0/OpenSC2K-0.3.0-linux-arm64.tar.gz",
      size: "53.9 MB",
    },
    {
      label: "Windows x64",
      url: "https://github.com/OpenSC2K/OpenSC2K/releases/download/v0.3.0/OpenSC2K-0.3.0-windows-x64-portable.zip",
      size: "52.7 MB",
    },
    {
      label: "Windows arm64",
      url: "https://github.com/OpenSC2K/OpenSC2K/releases/download/v0.3.0/OpenSC2K-0.3.0-windows-arm64-portable.zip",
      size: "43.3 MB",
    },
    {
      label: "Windows arm64",
      url: "https://github.com/OpenSC2K/OpenSC2K/releases/download/v0.3.0/OpenSC2K-0.3.0-windows-arm64.zip",
      size: "43.3 MB",
    },
  ],
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
