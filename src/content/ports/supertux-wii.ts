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
  notes:
    "SuperTux Milestone 1 (SuperTux team, 2003) ported to Wii with bug fixes and performance work. The original game is free software, so no copy is needed.",
  notesEs:
    "SuperTux Milestone 1 (SuperTux team, 2003) portado a Wii con correcciones y mejoras de rendimiento. Es software libre, así que no hace falta copia.",
};
