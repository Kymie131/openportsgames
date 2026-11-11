import type { Port } from "@/lib/ports/schema";

export const Openciv3: Port = {
  schema: "port",
  id: "openciv3",
  title: "OpenCiv3",  game: "Civilization III",
  developers: ["C7-Game"],  publisher: "Infogrames",  originalYear: 2001,
  portType: "reimplementation",  genre: "strategy",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "0.3-dutch-2", date: "2026-10-31" },
  sources: ["https://github.com/C7-Game/OpenCiv3"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,  originalSystems: ["Windows", "Macintosh"],  summary: "Civilization III is a 2001 turn-based strategy game developed by Firaxis Games and published by Infogrames. Players guide a civilization from 4000 BC to the modern era through expansion, diplomacy, culture and war.",  summaryEs: "Civilization III es un juego de estrategia por turnos de 2001 desarrollado por Firaxis Games y publicado por Infogrames. El jugador guía una civilización desde el 4000 a. C. hasta la era moderna mediante expansión, diplomacia, cultura y guerra.",  downloads: [
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
    {
      label: "Linux",
      url: "https://github.com/C7-Game/OpenCiv3/releases/download/v0.3-dutch-2/OpenCiv3_v0.3-Dutch-2-Linux-x86_64.zip",
      size: "154.1 MB",
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
