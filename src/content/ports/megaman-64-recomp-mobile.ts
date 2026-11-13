import type { Port } from "@/lib/ports/schema";

export const megaman64RecompMobile: Port = {
  schema: "port",
  id: "megaman-64-recomp-mobile",
  title: "Megaman 64 Recomp Mobile",  game: "Mega Man 64",
  developers: ["DevZer0D4Y"],  publisher: "Capcom",  originalYear: 2000,
  portType: "recompilation",  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: "0.9.1-mobile.1", date: "2026-10-13" },
  sources: ["https://github.com/DevZer0D4Y/MegaMan64Recompiled-Mobile"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,  originalSystems: ["Nintendo 64"],
  downloads: [
    {
      label: "Android",
      url: "https://github.com/DevZer0D4Y/MegaMan64Recompiled-Mobile/releases/download/v0.9.1-mobile.1/MegaMan64-Android-v0.9.1-mobile.1.apk",
      size: "26.5 MB",
    },
  ],
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Mega%20Man%2064%20(USA).png",
    alt: "Mega Man 64 (box art)",
    credit: "Box art",
  },  summary: "Mega Man 64 is the 2000 Nintendo 64 version of Mega Man Legends. Mega Man explores Kattelox Island, exploring ruins and fighting Reaverbots to stop the pirate Bon Bonne.",  summaryEs: "Mega Man 64 es la versión de 2000 para Nintendo 64 de Mega Man Legends. Mega Man explora la isla Kattelox, recorre ruinas y lucha contra los Reaverbots para detener al pirata Bon Bonne.",  notes: "Mega Man 64 (Capcom, 1997) for Android (static recompilation). Latest release: v0.9.1-mobile.1. Needs your own copy of the game.",
  notesEs: "Mega Man 64 (Capcom, 1997) para Android (recompilación estática). Última release: v0.9.1-mobile.1. Necesita tu propia copia del juego.",
};
