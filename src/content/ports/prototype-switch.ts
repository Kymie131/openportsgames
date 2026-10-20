import type { Port } from "@/lib/ports/schema";

export const prototypeSwitch: Port = {
  schema: "port",
  id: "prototype-switch",
  title: "Prototype (Switch)",
  game: "Prototype",
  developers: ["fungalspores"],
  publisher: "Activision",
  originalYear: 2009,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["switch"],
  status: "beta",
  release: { version: "1.1.0", date: "2026-10-16" },
  sources: ["https://github.com/fungalspores/prototype-switch"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Xbox 360"],
  related: ["prototype-2-switch"],
  notes:
    "Prototype (Activision, 2009) running natively on Nintendo Switch through static recompilation of the Xbox 360 version. No game files are included.",
  notesEs:
    "Prototype (Activision, 2009) en Nintendo Switch de forma nativa mediante recompilación estática de la versión de Xbox 360. No incluye archivos del juego.",
};
