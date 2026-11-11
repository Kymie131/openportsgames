import type { Port } from "@/lib/ports/schema";

export const Openciv3: Port = {
  schema: "port",
  id: "openciv3",
  title: "OpenCiv3",
  game: "OpenCiv3",
  developers: ["C7-Game"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "reimplementation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "0.3-dutch-2", date: "2026-10-31" },
  sources: ["https://github.com/C7-Game/OpenCiv3"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  summary: "OpenCiv3 is a platform game, released in 2000.",
  summaryEs: "OpenCiv3 es un videojuego de plataformas, lanzado en 2000.",
  summaryGenerated: true,
  downloads: [
    {
      label: "Linux",
      url: "https://github.com/C7-Game/OpenCiv3/releases/download/v0.3-dutch-2/OpenCiv3_v0.3-Dutch-2-Linux-x86_64.zip",
      size: "154.1 MB",
    },
    {
      label: "macOS",
      url: "https://github.com/C7-Game/OpenCiv3/releases/download/v0.3-dutch-2/OpenCiv3_v0.3-Dutch-2-Mac.zip",
      size: "217.4 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/C7-Game/OpenCiv3/releases/download/v0.3-dutch-2/OpenCiv3_v0.3-Dutch-2-Windows.zip",
      size: "164.2 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/openciv3.svg",
    alt: "OpenCiv3 (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "OpenCiv3 is an open-source, cross-platform, mod-oriented, modernized remake of Civilization III by the fan community built with the Godot Engine and C#, with capabilities inspired by the best of the 4X genre and lessons learned from modding Civ3.",
  notesEs:
    "OpenCiv3 es un remake modernizado, de código abierto, multiplataforma y orientado a mods de Civilization III, hecho por la comunidad de fans con el motor Godot y C#. Sus capacidades se inspiran en lo mejor del género 4X y en las lecciones aprendidas al modear Civ3.",
};
