import type { Port } from "@/lib/ports/schema";

export const guiltyGearRecomp: Port = {
  schema: "port",
  id: "guilty-gear-recomp",
  title: "Guilty Gear Recompiled",
  game: "Guilty Gear",
  developers: ["omegakatana92"],
  publisher: "Arc System Works",
  originalYear: 1998,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: "1.0.0", date: "2026-09-03" },
  sources: ["https://github.com/omegakatana92/GuiltyGearRecomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Guilty Gear: The Missing Link is a 1998 fighting game developed and published by Arc System Works for the PlayStation. It is the first installment in the Guilty Gear series. Set in a world destroyed by a war between humans and bio-organic weapons called Gears, it follows ten fighters as they enter a tournament held to prevent the resurrection of the Gears' leader. Its gameplay consists of one-on-one fights, a four-button attack configuration featuring special moves and instant kill techniques, as well as three different playable modes.",
  summaryEs: "Guilty Gear, subtitulado como The Missing Link en Japón, es la primera parte de la serie de Guilty Gear, este título fue desarrollado por Neo Neo Blood, un grupo de producción de Arc System Works dirigido por Daisuke Ishiwatari, y publicado por Arc System Works únicamente para la consola PlayStation.",
  notes:
    "Recompilation of Guilty Gear (PS1) under development with PSXRecomp. It ships a Windows launcher where you pick your own .cue and use either the bundled OpenBIOS or your own BIOS; the project is still a work in progress and not considered finished.",
  notesEs:
    "Recompilación en desarrollo de Guilty Gear (PS1) con PSXRecomp. Trae un lanzador para Windows donde eliges tu propio .cue y usas el OpenBIOS incluido o tu propia BIOS; el proyecto sigue en progreso y no se considera terminado.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Guilty%20Gear%20(Europe).png",
    alt: "Guilty Gear (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Guilty%20Gear%20(Europe).png",
      alt: "Guilty Gear (screenshot)",
      credit: "Libretro",
    },
  ],
};
