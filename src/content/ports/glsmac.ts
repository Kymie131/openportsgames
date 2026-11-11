import type { Port } from "@/lib/ports/schema";

export const Glsmac: Port = {
  schema: "port",
  id: "glsmac",
  title: "GLSMAC",  game: "Sid Meier's Alpha Centauri",
  developers: ["afwbkbc"],  publisher: "Electronic Arts",  originalYear: 1999,
  portType: "reimplementation",  genre: "strategy",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "0.3-db4dbc9", date: "2026-05-31" },
  sources: ["https://github.com/afwbkbc/glsmac"],
  license: { spdx: "AGPL-3.0" },
  verified: false,
  sourceVerified: true,  originalSystems: ["Windows", "Macintosh"],  summary: "Sid Meier's Alpha Centauri is a 1999 turn-based strategy game developed by Firaxis Games and published by Electronic Arts. Humanity colonises a planet orbiting Alpha Centauri and splits into ideological factions that compete through diplomacy, research and war.",  summaryEs: "Sid Meier's Alpha Centauri es un juego de estrategia por turnos de 1999 desarrollado por Firaxis Games y publicado por Electronic Arts. La humanidad coloniza un planeta en Alpha Centauri y se divide en facciones ideológicas que compiten mediante diplomacia, investigación y guerra.",  downloads: [
    {
      label: "macOS",
      url: "https://github.com/afwbkbc/glsmac/releases/download/v0.3-db4dbc9/glsmac-ubuntu64-v0.3-db4dbc9.tar.gz",
      size: "3.7 MB",
    },
    {
      label: "macOS",
      url: "https://github.com/afwbkbc/glsmac/releases/download/v0.3-db4dbc9/glsmac-win64-v0.3-db4dbc9.zip",
      size: "3.5 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/glsmac.svg",
    alt: "GLSMAC (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "Unofficial open-source OpenGL/SDL2 reimplementation of Sid Meier's Alpha Centauri ( + Alien Crossfire ).",
  notesEs:
    "Reimplementación no oficial de código abierto (OpenGL/SDL2) de Sid Meier's Alpha Centauri (+ Alien Crossfire).",
};
