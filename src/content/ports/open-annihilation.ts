import type { Port } from "@/lib/ports/schema";

export const OpenAnnihilation: Port = {
  schema: "port",
  id: "open-annihilation",
  title: "Open Annihilation",  game: "Total Annihilation",
  developers: ["open-annihilation"],  publisher: "GT Interactive",  originalYear: 1997,
  portType: "source-port",  genre: "strategy",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "0.9.0", date: "2026-11-06" },
  sources: ["https://github.com/open-annihilation/open-annihilation"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,  originalSystems: ["Windows"],  summary: "Total Annihilation is a 1997 real-time strategy game developed by Cavedog Entertainment and published by GT Interactive. The Core and the Arm fight a galaxy-spanning war with hundreds of units and a physics-driven projectile system.",  summaryEs: "Total Annihilation es un juego de estrategia en tiempo real de 1997 desarrollado por Cavedog Entertainment y publicado por GT Interactive. Core y Arm libran una guerra galáctica con cientos de unidades y proyectiles con físicas.",  downloads: [
    {
      label: "macOS",
      url: "https://github.com/open-annihilation/open-annihilation/releases/download/v0.9.0/open-annihilation-v0.9.0-macos-universal.zip",
      size: "37.2 MB",
    },
    {
      label: "macOS",
      url: "https://github.com/open-annihilation/open-annihilation/releases/download/v0.9.0/open-annihilation-v0.9.0-macos-universal.pkg",
      size: "37.1 MB",
    },
    {
      label: "Linux x64",
      url: "https://github.com/open-annihilation/open-annihilation/releases/download/v0.9.0/open-annihilation-v0.9.0-linux-x86_64.zip",
      size: "26.2 MB",
    },
    {
      label: "Linux arm64",
      url: "https://github.com/open-annihilation/open-annihilation/releases/download/v0.9.0/open-annihilation-v0.9.0-linux-arm64.zip",
      size: "25.3 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/open-annihilation/open-annihilation/releases/download/v0.9.0/open-annihilation-v0.9.0-linux-armhf.zip",
      size: "22.2 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/open-annihilation.svg",
    alt: "Open Annihilation (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "Open Source port of the Total Annihilation & TA: Kingdoms engines.",
  notesEs: "Port de código abierto de los motores de Total Annihilation y TA: Kingdoms.",
};
