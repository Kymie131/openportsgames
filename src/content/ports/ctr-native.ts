import type { Port } from "@/lib/ports/schema";

export const ctrNative: Port = {
  schema: "port",
  id: "ctr-native",
  title: "CTR Native",
  game: "Crash Team Racing",
  developers: ["Naughty Dog"],
  publisher: "Sony Computer Entertainment",
  originalYear: 1999,
  portType: "decompilation",
  genre: "racing",
  openSource: true,
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: "7.1", date: "2026-07-07" },
  sources: ["https://github.com/CTR-tools/ctr-native"],
  discord: "https://discord.gg/WHkuh2n",
  license: { spdx: "GPL-3.0" },
  verified: false,
  originalSystem: "PlayStation",
  features: [
    "Direct NTSC-U retail disc image loading",
    "Retail-parity Adventure, menu, cutscene and audio states",
    "Replay recording for bug reports",
  ],
  featuresEs: [
    "Carga directa de la imagen de disco minorista NTSC-U",
    "Estados de aventura, menús, cinemáticas y audio fieles al minorista",
    "Grabación de repeticiones para reportes de errores",
  ],
  notes:
    "Native port of Crash Team Racing rebuilt from the original PlayStation code, distributed as beta/playtest releases. Requires your own NTSC-U retail disc image (assets/ctr-u.bin) and an OpenGL 3.3 capable GPU.",
  notesEs:
    "Port nativo de Crash Team Racing reconstruido a partir del código original de PlayStation y distribuido como releases beta de prueba. Requiere tu propia imagen de disco minorista NTSC-U (assets/ctr-u.bin) y una GPU compatible con OpenGL 3.3.",
};
