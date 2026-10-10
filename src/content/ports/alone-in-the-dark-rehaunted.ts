import type { Port } from "@/lib/ports/schema";

export const aloneInTheDarkRehaunted: Port = {
  schema: "port",
  id: "alone-in-the-dark-rehaunted",
  title: "Alone in the Dark ReHaunted",
  game: "Alone in the Dark",
  developers: ["spacefarergames"],
  publisher: "Infogrames",
  originalYear: 1992,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/spacefarergames/AloneInTheDarkReHaunted"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  originalSystem: "MS-DOS",
  notes:
    "Enhanced port and dynamic recompilation of the original Alone in the Dark (1992), with textured models, HD backgrounds, quality-of-life options and controller support. It needs your own copy of the game.",
  notesEs:
    "Port mejorado y recompilación dinámica del Alone in the Dark original (1992), con modelos texturizados, fondos en HD, opciones de comodidad y soporte de mando. Necesita tu propia copia del juego.",
};
