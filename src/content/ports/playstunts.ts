import type { Port } from "@/lib/ports/schema";

export const Playstunts: Port = {
  schema: "port",
  kind: "tool",
  id: "playstunts",
  title: "PlayStunts",
  game: "Stunts",
  developers: ["ACatWithEbola"],
  publisher: "Brøderbund",
  originalYear: 1990,
  portType: "reimplementation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/ACatWithEbola/playstunts"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["MS-DOS"],
  summary: "PlayStunts is a browser reconstruction of Stunts (4D Sports Driving), the 1990 racing game published by Brøderbund.",
  summaryEs: "PlayStunts es una reconstrucción para navegador de Stunts (4D Sports Driving), el juego de carreras de 1990 publicado por Brøderbund.",
  cover: {
    src: "https://openportsgames.com/covers/generated/playstunts.svg",
    alt: "PlayStunts (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "Native browser reconstruction of Stunts / 4D Sports Driving, with tools to build from your own original game files.",
  notesEs:
    "Reconstrucción nativa para navegador de Stunts / 4D Sports Driving, con herramientas para compilar desde tus propios archivos originales.",
};
