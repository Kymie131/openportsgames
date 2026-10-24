import type { Port } from "@/lib/ports/schema";

export const megaManX4Recomp: Port = {
  schema: "port",
  id: "mega-man-x4-recomp",
  title: "MegaManX4Recomp",
  game: "Mega Man X4",
  developers: ["mstan"],
  publisher: "Capcom",
  originalYear: 1997,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/MegaManX4Recomp"],
  license: { spdx: "MIT", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Mega Man X4, known in Japan as Rockman X4 (ロックマンX4), is a 1997 platform game developed and published by Capcom. It is the fourth game in the Mega Man X series and the first game in the series to be released on the Sega Saturn and PlayStation. The two versions were released simultaneously in Japan in 1997. A North America release followed sometime thereafter, while Europe received only the PlayStation version in 1997.",
  summaryEs: "Mega Man X4, conocido como Rockman X4 en Japón, es el cuarto juego de la serie Mega Man X. Este juego fue lanzado originalmente el 1 de agosto de 1997 en Japón para las consolas Sega Saturn y PlayStation. Fue lanzado en Norteamérica en septiembre de 1997[cita requerida] para ambas consolas, mientras que en Europa fue lanzado solamente para la PlayStation el 13 de octubre de 1997.[cita requerida] La versión para PC fue publicada el 3 de diciembre de 1998 en Japón y en 1999 en Norteamérica y Europa, y se ejecuta en varios sistemas operativos, entre ellos Windows 95 y sus versiones posteriores.",
  notes:
    "Static recompilation of Mega Man X4 (USA, SLUS-00561) with the PSXRecomp framework. The MIPS code is translated to C and runs on a simulation of PS1 hardware plus a recompiled BIOS.",
  notesEs:
    "Recompilación estática de Mega Man X4 (USA, SLUS-00561) con el framework PSXRecomp. El código MIPS se traduce a C y corre sobre una simulación del hardware de PS1 más una BIOS recompilada.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Mega%20Man%20X4%20(USA).png",
    alt: "Mega Man X4 (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Mega%20Man%20X4%20(USA).png",
      alt: "Mega Man X4 (screenshot)",
      credit: "Libretro",
    },
  ],
};
