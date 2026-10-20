import type { Port } from "@/lib/ports/schema";

export const prototype2Switch: Port = {
  schema: "port",
  id: "prototype-2-switch",
  title: "Prototype 2 (Switch)",
  game: "Prototype 2",
  developers: ["fungalspores"],
  publisher: "Activision",
  originalYear: 2012,
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
  related: ["prototype-switch"],
  notes:
    "Prototype 2 (Activision, 2012) running natively on Nintendo Switch through static recompilation of the Xbox 360 version. It requires your own copy of the game.",
  notesEs:
    "Prototype 2 (Activision, 2012) en Nintendo Switch de forma nativa mediante recompilación estática de la versión de Xbox 360. Requiere tu propia copia del juego.",
};
