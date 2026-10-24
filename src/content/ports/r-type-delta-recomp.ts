import type { Port } from "@/lib/ports/schema";

export const rTypeDeltaRecomp: Port = {
  schema: "port",
  id: "r-type-delta-recomp",
  title: "R-Type Delta Recompiled",
  game: "R-Type Delta",
  developers: ["alexbeavs"],
  publisher: "Irem",
  originalYear: 1998,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/r-type-delta-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "R-Type Delta is a 1998 shoot 'em up video game developed and published by Irem for the PlayStation. It is the fourth game in the R-Type series and the first to feature 3D graphics. The game received generally positive reviews from critics.",
  summaryEs: "R-Type Delta es un videojuego del género matamarcianos desarrollado por Irem y publicado por Sony Computer Entertainment. Salió a la venta de manera exclusiva en la consola PlayStation y es el cuarto videojuego de la serie R-Type, y también fue el primer juego que permite seleccionar diferentes naves de combate, con diferentes unidades \"Force\" y varios cañones \"Wave Cannon\" para cada una. Ambientado en el año 2164, R-Type Delta fue también el primer juego de la serie R-Type con gráficos totalmente en 3D.",
  notes:
    "Bare recompilation of R-Type Delta (PlayStation) from the PSXRecomp toolkit. It builds for Windows, Linux and macOS and needs your own disc plus a BIOS.",
  notesEs:
    "Recompilación básica de R-Type Delta (PlayStation) con el kit PSXRecomp. Compila para Windows, Linux y macOS y necesita tu propio disco y una BIOS.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/R-Type%20Delta%20(Europe).png",
    alt: "R-Type Delta (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/R-Type%20Delta%20(Europe).png",
      alt: "R-Type Delta (screenshot)",
      credit: "Libretro",
    },
  ],
};
