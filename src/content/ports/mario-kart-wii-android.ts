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
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/d/d6/Mario_Kart_Wii.png",
    alt: "Mario Kart Wii (box art)",
    credit: "Wikipedia",
  },
  summary: "Mario Kart Wii is a 2008 kart racing game developed and published by Nintendo for the Wii. It is the sixth installment in the Mario Kart series, and was released worldwide in April 2008. In Mario Kart Wii, the player takes control of one of 24 Mario series characters, who participate in races on 32 race tracks based on locations from the series while using specialized items to hinder their opponents or to gain advantages.",
  summaryEs: "Mario Kart Wii es un videojuego de carreras de karts desarrollado y distribuido por Nintendo para la Nintendo Wii. Es la sexta entrega de la serie Mario Kart y se lanzó en abril de 2008. Al igual que sus entregas anteriores, Mario Kart Wii incorpora personajes jugables de la serie Mario, que participan en carreras en 32 pistas diferentes utilizando elementos especializados para obstaculizar a los oponentes u obtener ventajas. El juego presenta múltiples modos de juego para un jugador y multijugador, incluida la pantalla dividida de dos a cuatro personas.",
  notes:
    "Native Android port of Mario Kart Wii (built on WiiCompiled, a static recompilation), adding touch controls, motion steering, a mobile settings sidebar, a launcher and an in-app way to build an install from your own game disc. No emulator, interpreter or JIT: the game runs as native ARM64 code. No Nintendo code or assets included. Latest release: v1.3.0.",
  notesEs:
    "Port nativo para Android de Mario Kart Wii (sobre WiiCompiled, una recompilación estática), con controles táctiles, dirección por movimiento, panel de ajustes móvil, lanzador y una forma en la app de crear una instalación desde tu propio disco. Sin emulador, intérprete ni JIT: corre como código ARM64 nativo. Sin código ni assets de Nintendo. Última release: v1.3.0.",
};
