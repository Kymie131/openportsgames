import type { Port } from "@/lib/ports/schema";

export const voyagerEliteForceHolomatch: Port = {
  schema: "port",
  id: "voyager-elite-force-holomatch",
  title: "Star Trek: Voyager - Elite Force Holomatch",
  game: "Star Trek: Voyager - Elite Force",
  developers: ["imjustadudegamer"],
  publisher: "Activision",
  originalYear: 2000,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/imjustadudegamer/VoyagerHM-Android"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  originalSystems: ["Windows"],
  summary: "Star Trek: Voyager – Elite Force is a first-person shooter video game developed by Raven Software and published by Activision. The game was originally released on September 15, 2000 for Windows and Mac OS. A port for Mac OS developed by Westlake Interactive and published by Aspyr Media was released on November 20, 2002. Elite Force was ported to the PlayStation 2 by Pipe Dream Interactive and published by Majesco on December 11, 2001.",
  summaryEs: "Star Trek: Voyager - Elite Force es un videojuego de disparos en 2000.",
  notes:
    "Android port of the Holomatch multiplayer of Star Trek: Voyager - Elite Force, with Vulkan, touch controls and gamepad support. It needs the original game files.",
  notesEs:
    "Port a Android del multijugador Holomatch de Star Trek: Voyager - Elite Force, con Vulkan, controles táctiles y mando. Necesita los archivos del juego original.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/4/48/Star_Trek_Voyager_Elite_Force.jpg",
    alt: "Star Trek: Voyager - Elite Force (box art)",
    credit: "Wikipedia",
  },
};
