import type { Port } from "@/lib/ports/schema";

export const Opensc2k: Port = {
  schema: "port",
  id: "opensc2k",
  title: "OpenSC2K",  game: "SimCity 2000",
  developers: ["nicholas-ochoa"],  publisher: "Maxis",  originalYear: 1993,
  portType: "reimplementation",  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "0.3.0", date: "2026-10-09" },
  sources: ["https://github.com/OpenSC2K/OpenSC2K"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,  originalSystems: ["MS-DOS", "Windows"],  summary: "SimCity 2000 is a 1993 city-building simulation developed and published by Maxis. Players zone land, manage utilities and budgets, and raise a city from a small town to a metropolis with arcologies.",  summaryEs: "SimCity 2000 es un simulador de construcción de ciudades de 1993 desarrollado y publicado por Maxis. El jugador zonifica terreno, gestiona servicios y presupuestos, y hace crecer una ciudad hasta convertirla en una metrópolis con arcologías.",  downloads: [
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
