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
  originalSystem: "PlayStation",
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
