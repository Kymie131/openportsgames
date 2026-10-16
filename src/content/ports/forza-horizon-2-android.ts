import type { Port } from "@/lib/ports/schema";

export const forzaHorizon2Android: Port = {
  schema: "port",
  id: "forza-horizon-2-android",
  title: "FH2 Recompiled",
  game: "Forza Horizon 2",
  developers: ["Gabrick75"],
  publisher: "Xbox Game Studios",
  originalYear: 2014,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android", "linux"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Gabrick75/fh2-recompiled"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Xbox 360"],
  related: ["forza-horizon-2-recomp"],
  notes:
    "Unofficial static recompilation of Forza Horizon 2 (Xbox 360, 2014) for Android and Linux. It ships no game files and does nothing without files extracted from your own legally obtained copy. Non-commercial fan project, not affiliated with Microsoft/Xbox Game Studios/Playground Games/Turn 10.",
  notesEs:
    "Recompilación estática no oficial de Forza Horizon 2 (Xbox 360, 2014) para Android y Linux. No incluye archivos del juego y no sirve sin los archivos extraídos de tu propia copia legal. Proyecto fan no comercial, sin afiliación con Microsoft/Xbox Game Studios/Playground Games/Turn 10.",
};
