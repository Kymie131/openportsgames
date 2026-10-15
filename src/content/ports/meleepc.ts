import type { Port } from "@/lib/ports/schema";

export const Meleepc: Port = {
  schema: "port",
  id: "meleepc",
  title: "MeleePC",
  game: "MeleePC",
  developers: ["999sian"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/999sian/melee-pc"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  notes:
    "Native PC port of Super Smash Bros. Melee (NTSC-U 1.02), built from doldecomp/melee on aurora. No game data; bring your own disc.",
  notesEs:
    "Port para PC nativo de Super Smash Bros. Melee (NTSC-U 1.02), hecho desde doldecomp/melee sobre aurora. Sin datos del juego: aporta tu propio disco.",
};
