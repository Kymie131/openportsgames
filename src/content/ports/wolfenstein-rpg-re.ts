import type { Port } from "@/lib/ports/schema";

export const wolfensteinRpgRe: Port = {
  schema: "port",
  id: "wolfenstein-rpg-re",
  title: "Wolfenstein RPG (Reverse Engineered)",
  game: "Wolfenstein RPG",
  developers: ["Erick194"],
  publisher: "id Software",
  originalYear: 2009,
  portType: "reimplementation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: "0.1", date: "2025-02-23" },
  sources: ["https://github.com/Erick194/WolfensteinRPG-RE"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Mobile"],
  summary: "Wolfenstein RPG is a 2008 role-playing video game developed by id Software and Fountainhead Entertainment and published by EA Mobile. It was initially released for Java ME and BREW, before being ported to iOS the following year.",
  summaryEs: "Wolfenstein RPG es un videojuego para teléfonos móviles y iOS creado en 2010 por la empresa id Software.",
  notes:
    "Reverse-engineering of Wolfenstein RPG (mobile, 2009) by [GEC], reconstructing the original engine. Needs the original game data.",
  notesEs:
    "Ingeniería inversa de Wolfenstein RPG (móvil, 2009) por [GEC], que reconstruye el motor original. Necesita los datos del juego original.",
  downloads: [
    {
      label: "Linux AppImage",
      url: "https://github.com/Erick194/WolfensteinRPG-RE/releases/download/WolfensteinRPG-v.0.1/WolfensteinRPG-x86_64.AppImage",
      size: "5.1 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/Erick194/WolfensteinRPG-RE/releases/download/WolfensteinRPG-v.0.1/WolfensteinRPG.v0.1.zip",
      size: "1.1 MB",
    },
  ],
  cover: {
    src: "https://raw.githubusercontent.com/Erick194/WolfensteinRPG-RE/refs/heads/main/src/appicon.ico",
    alt: "Wolfenstein RPG (cover)",
    credit: "SteamGridDB",
  },
};
