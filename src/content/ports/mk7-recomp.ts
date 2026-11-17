import type { Port } from "@/lib/ports/schema";

export const mk7Recomp: Port = {
  schema: "port",
  id: "mk7-recomp",
  title: "Mario Kart 7 Recompiled",
  game: "Mario Kart 7",
  developers: ["nvd123-YT"],
  publisher: "Nintendo",
  originalYear: 2011,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: "1.0.2", date: "2026-11-16" },
  sources: ["https://github.com/nvd123-YT/MK7Recomp"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-16",
  originalSystems: ["Nintendo 3DS"],
  summary:
    "Mario Kart 7 is a 2011 kart racing game developed by Retro Studios and Nintendo EAD and published by Nintendo for the Nintendo 3DS. It introduced karts that transform into gliders and submarines, along with vehicle customization and online racing.",
  summaryEs:
    "Mario Kart 7 es un videojuego de carreras de karts de 2011 desarrollado por Retro Studios y Nintendo EAD y publicado por Nintendo para Nintendo 3DS. Introdujo karts que se transforman en planeadores y submarinos, además de la personalización de vehículos y las carreras en línea.",
  notes:
    "Static recompilation of Mario Kart 7 with mod support. Compatibility with CTGP-7 is not confirmed. No game files are included.",
  notesEs:
    "Recompilación estática de Mario Kart 7 con soporte de mods. La compatibilidad con CTGP-7 no está confirmada. No incluye archivos del juego.",
  cover: {
    src: "https://openportsgames.com/covers/generated/mario-kart-7.svg",
    alt: "Mario Kart 7 (generated cover)",
    credit: "OpenPortsGames",
  },
};
