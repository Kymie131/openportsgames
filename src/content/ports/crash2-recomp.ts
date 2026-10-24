import type { Port } from "@/lib/ports/schema";

export const crash2Recomp: Port = {
  schema: "port",
  id: "crash2-recomp",
  title: "Crash Bandicoot 2 Recompiled",
  game: "Crash Bandicoot 2: Cortex Strikes Back",
  developers: ["Zumbo06"],
  publisher: "Sony Computer Entertainment",
  originalYear: 1997,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Zumbo06/Crash2Recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Crash Bandicoot 2: Cortex Strikes Back is a 1997 platform game developed by Naughty Dog and published by Sony Computer Entertainment for the PlayStation. It is a sequel to Crash Bandicoot (1996), and is part of the Crash Bandicoot series. Taking place on a fictional group of islands near Australia, Crash Bandicoot 2 follows the adventures of the anthropomorphic bandicoot named Crash. Crash is abducted by series villain Doctor Neo Cortex, who tricks him into thinking he wants to save the world. Crash is thrust into several parts of N.",
  summaryEs: "Crash Bandicoot 2: Cortex Strikes Back es un videojuego de plataformas desarrollado por Naughty Dog y publicado por Sony Computer Entertainment para PlayStation. Es la secuela de Crash Bandicoot (1996), y forma parte de la serie homónima.",
  notes:
    "Native port of Crash Bandicoot 2: Cortex Strikes Back (PS1, USA, SCUS-94154) with psxrecomp. A launcher builds the game from your own disc image (no BIOS needed, OpenBIOS is included) and it is completable start to finish, still as a preview.",
  notesEs:
    "Port nativo de Crash Bandicoot 2: Cortex Strikes Back (PS1, USA, SCUS-94154) con psxrecomp. Un lanzador compila el juego desde tu propia imagen de disco (no hace falta BIOS, incluye OpenBIOS) y es completable de principio a fin, todavía como preview.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Crash%20Bandicoot%202%20-%20Cortex%20Strikes%20Back%20(USA).png",
    alt: "Crash Bandicoot 2: Cortex Strikes Back (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Crash%20Bandicoot%202%20-%20Cortex%20Strikes%20Back%20(USA).png",
      alt: "Crash Bandicoot 2: Cortex Strikes Back (screenshot)",
      credit: "Libretro",
    },
  ],
};
