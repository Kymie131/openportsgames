import type { Port } from "@/lib/ports/schema";

export const marioKartWiiAndroid: Port = {
  schema: "port",
  id: "mario-kart-wii-android",
  title: "DriftDroid",
  game: "Mario Kart Wii",
  developers: ["dorPXP"],
  publisher: "Nintendo",
  originalYear: 2008,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/dorPXP/driftdroid"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Wii"],
  related: ["wiicompiled"],
  notes:
    "Native Android port of Mario Kart Wii (built on WiiCompiled, a static recompilation), adding touch controls, motion steering, a mobile settings sidebar, a launcher and an in-app way to build an install from your own game disc. No emulator, interpreter or JIT: the game runs as native ARM64 code. No Nintendo code or assets included. Latest release: v1.3.0.",
  notesEs:
    "Port nativo para Android de Mario Kart Wii (sobre WiiCompiled, una recompilación estática), con controles táctiles, dirección por movimiento, panel de ajustes móvil, lanzador y una forma en la app de crear una instalación desde tu propio disco. Sin emulador, intérprete ni JIT: corre como código ARM64 nativo. Sin código ni assets de Nintendo. Última release: v1.3.0.",
};
