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
  notes:
    "Engine reimplementation for Transport Tycoon Deluxe style gameplay. The original game data is required.",
  screenshots: [
    {
      src: "https://github.com/OpenLoco/OpenLoco/workflows/CI/badge.svg",
      alt: "CI",
      credit: "OpenLoco",
    },
  ],
};
