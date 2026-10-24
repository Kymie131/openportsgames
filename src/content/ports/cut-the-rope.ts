import type { Port } from "@/lib/ports/schema";

export const CutTheRope: Port = {
  schema: "port",
  id: "cut-the-rope",
  title: "Cut The Rope",
  game: "Cut The Rope",
  developers: ["Bingies24"],
  publisher: "Electronic Arts",
  originalYear: 2011,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Bingies24/cuttherope-dx"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  summary: "Cut the Rope is a 2010 puzzle video game developed by ZeptoLab and published by Chillingo for iOS, Android, Windows Phone, Series 60, Blackberry 10, web browsers, Nintendo DSi, and Nintendo 3DS. Players must guide a piece of candy to Om Nom, a green monster character, using the touchscreen. The game was succeeded by Cut the Rope: Experiments in 2011 while a direct sequel, Cut the Rope 2, was released in 2013.",
  summaryEs: "Cut the Rope es un videojuego de lógica lanzado en el año 2010. El juego y su secuela de 2011 Cut the Rope: Experiments fueron creados por la compañía española de entretenimiento y juegos ZeptoLab y publicados por Chillingo. En 2013 también surge una segunda secuela llamada Cut the Rope: Time Travel.",
  cover: {
    src: "https://openportsgames.com/covers/generated/cut-the-rope.svg",
    alt: "Cut The Rope (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "Fork of a CtRDX developer that may expand beyond 3.X.X. If you want this fork taken down for any reason, please send a message using a contact method on my website.",
  notesEs:
    "Bifurcación de un desarrollador de CtRDX que podría ir más allá de la 3.X.X. Si quieres que se retire por cualquier motivo, envía un mensaje usando un método de contacto de mi web.",
};
