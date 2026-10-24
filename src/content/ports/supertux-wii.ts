import type { Port } from "@/lib/ports/schema";

export const supertuxWii: Port = {
  schema: "port",
  id: "supertux-wii",
  title: "SuperTux (Wii)",
  game: "SuperTux",
  developers: ["DeltaResero"],
  publisher: "SuperTux team",
  originalYear: 2003,
  portType: "source-port",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "open",
  platforms: ["wii"],
  status: "stable",
  release: { version: "0.1.4-wii-d.07", date: "2026-09-25" },
  sources: ["https://github.com/DeltaResero/SuperTux-Wii"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Windows"],
  related: ["supertux-switch", "supertux-ds", "supertux-milestone-2-vita-switch-ps3"],
  cover: {
    src: "https://cdn.cloudflare.steamstatic.com/steam/apps/1572920/header.jpg",
    alt: "SuperTux (cover art)",
    credit: "Steam",
  },
  summary: "Classic 2D jump'n'run sidescroller featuring Tux the penguin. Run and jump through multiple worlds, fighting off enemies by jumping on them, bumping them from below or tossing objects at them, grabbing power-ups and other stuff on the way.",
  summaryEs: "SuperTux es un videojuego de plataformas publicado por The SuperTux Team en 2022.",
  notes:
    "SuperTux Milestone 1 (SuperTux team, 2003) ported to Wii with bug fixes and performance work. The original game is free software, so no copy is needed.",
  notesEs:
    "SuperTux Milestone 1 (SuperTux team, 2003) portado a Wii con correcciones y mejoras de rendimiento. Es software libre, así que no hace falta copia.",
};
