import type { Port } from "@/lib/ports/schema";

export const openLoco: Port = {
  schema: "port",
  id: "openloco",
  title: "OpenLoco",
  game: "Locomotion",
  developers: ["OpenLoco Team"],
  publisher: "Chris Sawyer",
  originalYear: 2004,
  genre: "simulation",
  openSource: true,
  portType: "source-port",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: "26.09", date: "2026-09-18" },
  sources: ["https://github.com/OpenLoco/OpenLoco"],
  discord: "https://discord.gg/vEuNRHD",
  website: "https://openloco.io/",
  license: { spdx: "MIT" },
  verified: true,
  verifiedAt: "2026-10-01",
  originalSystem: "Microsoft Windows",
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
  notes:
    "Engine reimplementation for Transport Tycoon Deluxe style gameplay. The original game data is required.",
  notesEs:
    "Reimplementación del motor para la jugabilidad de Transport Tycoon Deluxe. Se requieren los datos del juego original.",
  screenshots: [
    {
      src: "https://user-images.githubusercontent.com/604665/55420349-1a2aea00-5577-11e9-87da-78fe5cdb09e1.png",
      alt: "OpenLoco running a scenario",
      credit: "OpenLoco",
    },
  ],
};
