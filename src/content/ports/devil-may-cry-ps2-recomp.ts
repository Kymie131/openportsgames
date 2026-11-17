import type { Port } from "@/lib/ports/schema";

export const devilMayCryPs2Recomp: Port = {
  schema: "port",
  id: "devil-may-cry-ps2-recomp",
  title: "Devil May Cry (PS2)",
  game: "Devil May Cry",
  developers: ["Gui-Tora"],
  publisher: "Capcom",
  originalYear: 2001,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Gui-Tora/dmc-recomp"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-10-25",
  originalSystems: ["PlayStation 2"],
  summary:
    "Devil May Cry is a 2001 action-adventure game developed and published by Capcom. It follows Dante, a demon hunter, as he investigates a castle on Mallet Island and battles the demon emperor Mundus.",
  summaryEs:
    "Devil May Cry es un videojuego de acción y aventura de 2001 desarrollado y publicado por Capcom. Sigue a Dante, un cazador de demonios, mientras investiga un castillo en la isla de Mallet y se enfrenta al emperador demoníaco Mundus.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation%202/Named_Boxarts/Devil%20May%20Cry%20(USA).png",
    alt: "Devil May Cry (box art)",
    credit: "libretro",
  },
  notes: "Devil May Cry (PS2): native recompilation of Devil May Cry for windows. Bring your own copy of the game.",
  notesEs: "Devil May Cry (PS2): recompilación nativo de Devil May Cry para windows. Aporta tu propia copia del juego.",
};
