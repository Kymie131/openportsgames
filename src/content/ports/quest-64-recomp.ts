import type { Port } from "@/lib/ports/schema";

export const quest64Recomp: Port = {
  schema: "port",
  id: "quest-64-recomp",
  title: "Quest 64 Recompiled",
  game: "Quest 64",
  developers: ["Nintendo"],
  publisher: "Nintendo",
  originalYear: 1998,
  genre: "action-adventure",
  openSource: true,
  portType: "recompilation",
  platforms: ["windows"],
  status: "alpha",
  release: { version: "0.1", date: "2026-01-11" },
  sources: ["https://github.com/Rainchus/Quest64-Recomp"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  originalSystem: "Nintendo 64",
  features: ["Widescreen and ultrawide support", "Mod support"],
  featuresEs: ["Soporte panorámico y ultrapanorámico", "Soporte de mods"],
  requirements: {
    minimum: "x86-64 CPU with SSE4.1, such as an Intel Core 2 Penryn or newer",
  },
  notes:
    "Recompilation of Quest 64 that requires the 1.0 North American release of the game. Only a Windows executable is published so far, with other systems announced. Very wide aspect ratios can show animation artifacts at the screen edges.",
  notesEs:
    "Recompilación de Quest 64 que requiere la versión 1.0 norteamericana del juego. Por ahora solo se publica un ejecutable para Windows, con otros sistemas anunciados. Las relaciones de aspecto muy anchas pueden mostrar artefactos de animación en los bordes de la pantalla.",
};
