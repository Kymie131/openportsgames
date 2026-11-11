import type { Port } from "@/lib/ports/schema";

export const cricket07Browser: Port = {
  schema: "port",
  id: "cricket07-browser",
  title: "Cricket 07 (Browser)",
  game: "EA Sports Cricket 07",
  developers: ["Dhaiwat10"],
  publisher: "EA Sports",
  originalYear: 2006,
  portType: "recompilation",
  genre: "sports",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["web"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Dhaiwat10/cricket07-browser"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-11",
  originalSystems: ["Windows"],
  summary:
    "Cricket 07 is a 2006 cricket simulation game developed by HB Studios and EA Canada and published by EA Sports. It features international teams, licensed stadiums and a variety of match formats.",
  summaryEs:
    "Cricket 07 es un juego de simulación de críquet de 2006 desarrollado por HB Studios y EA Canada y publicado por EA Sports. Incluye selecciones internacionales, estadios con licencia y varios formatos de partido.",
  notes:
    "EA Sports Cricket 07 running in the browser: the x86 code is statically recompiled to C and WebAssembly, with Direct3D 8 rebuilt on WebGPU. You must supply your own copy of the game.",
  notesEs:
    "EA Sports Cricket 07 ejecutándose en el navegador: el código x86 se recompila estáticamente a C y WebAssembly, y Direct3D 8 se reconstruye sobre WebGPU. Debes aportar tu propia copia del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/9/94/Cricket07.png",
    alt: "Cricket 07 (box art)",
    credit: "Wikipedia",
  },
};
