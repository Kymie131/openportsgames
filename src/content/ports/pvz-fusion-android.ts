import type { Port } from "@/lib/ports/schema";

export const pvzFusionAndroid: Port = {
  schema: "port",
  id: "pvz-fusion-android",
  title: "Plants vs. Zombies Fusion (Android)",
  game: "Plants vs. Zombies",
  developers: ["Teyliu"],
  publisher: "PopCap Games",
  originalYear: 2009,
  portType: "runtime-port",
  genre: "puzzle",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Teyliu/PVZF-Translation"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Windows"],
  summary: "Plants vs. Zombies is a 2009 tower defense video game developed and published by PopCap Games. First released for Windows and macOS, the game has since been ported to consoles, handhelds, and mobile devices. The player takes the role of a homeowner amid a zombie apocalypse. As a horde of zombies approaches along several parallel lanes, the player must defend their home by placing plants or fungi, which fire projectiles at the zombies, or otherwise detrimentally affect them, or aid the player. The player collects a resource called \"sun\" to place plants.",
  summaryEs: "Plantas contra Zombis es un videojuego de defensa de torres desarrollado y publicado por PopCap Games. Lanzado inicialmente para Windows y Mac OS X, se ha adaptado desde entonces a consolas, videoconsolas portátiles y dispositivos móviles. El jugador asume el papel de un propietario en medio de una epidemia de muertos vivientes. A medida que una horda de zombis se acerca por varias vías paralelas, debe defender su casa al colocar plantas u hongos que disparan proyectiles, les causan algún otro tipo de daño o ayudan. Se recoge un recurso llamado «sol» para poner mantas.",
  notes:
    "Android version of Plants vs. Zombies Fusion, a fan mod of the original Plants vs. Zombies. It needs the original game files.",
  notesEs:
    "Versión para Android de Plants vs. Zombies Fusion, un mod hecho por fans del Plants vs. Zombies original. Necesita los archivos del juego original.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/9/9c/PlantsvsZombiesCoverArt.jpg",
    alt: "Plants vs. Zombies (box art)",
    credit: "Wikipedia",
  },
};
