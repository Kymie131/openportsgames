import type { Port } from "@/lib/ports/schema";

export const openLoco: Port = {
  schema: "port",
  id: "openloco",
  title: "OpenLoco",
  game: "Chris Sawyer's Locomotion",
  developers: ["OpenLoco Team"],
  publisher: "Chris Sawyer",
  originalYear: 2004,
  genre: "simulation",
  openSource: true,
  portType: "reimplementation",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: "26.09", date: "2026-09-18" },
  sources: ["https://github.com/OpenLoco/OpenLoco"],
  discord: "https://discord.gg/vEuNRHD",
  website: "https://openloco.io/",
  license: { spdx: "MIT" },
  verified: true,
  verifiedAt: "2026-11-01",
  originalSystems: ["Windows"],
  features: [
    "Cross-platform desktop builds",
    "Scenario and multiplayer support",
    "OpenGL and DirectX rendering backends",
  ],
  featuresEs: [
    "Builds de escritorio multiplataforma",
    "Soporte de escenarios y multijugador",
    "Backends de renderizado OpenGL y DirectX",
  ],
  summary:
    "Chris Sawyer's Locomotion is a business simulation game developed and published by Chris Sawyer in 2004. Players build and manage a transport empire across maps inspired by Great Britain and the United States.",
  summaryEs:
    "Chris Sawyer's Locomotion es un juego de simulación empresarial desarrollado y publicado por Chris Sawyer en 2004. El jugador construye y gestiona un imperio de transporte en mapas inspirados en Gran Bretaña y Estados Unidos.",
  downloads: [
    {
      label: "Linux AppImage",
      url: "https://github.com/OpenLoco/OpenLoco/releases/download/v26.09/OpenLoco-v26.09-linux-x64.AppImage",
      size: "16.9 MB",
    },
    {
      label: "Macos",
      url: "https://github.com/OpenLoco/OpenLoco/releases/download/v26.09/OpenLoco-v26.09-macos-arm64.zip",
      size: "16.7 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/OpenLoco/OpenLoco/releases/download/v26.09/OpenLoco-v26.09-windows-portable-win32.zip",
      size: "14.8 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/OpenLoco/OpenLoco/releases/download/v26.09/OpenLoco-v26.09-windows-portable-x64.zip",
      size: "15.3 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/openloco.svg",
    alt: "Chris Sawyer's Locomotion (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "OpenLoco is an open-source reimplementation of Chris Sawyer's Locomotion. It requires the original game data.",
  notesEs:
    "OpenLoco es una reimplementación de código abierto de Chris Sawyer's Locomotion. Requiere los datos originales del juego.",
  screenshots: [
    {
      src: "https://user-images.githubusercontent.com/604665/55420349-1a2aea00-5577-11e9-87da-78fe5cdb09e1.png",
      alt: "OpenLoco running a scenario",
      credit: "OpenLoco",
    },
  ],
};
