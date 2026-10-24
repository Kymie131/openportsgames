import type { Port } from "@/lib/ports/schema";

export const jetMotoAnthologyRecomp: Port = {
  schema: "port",
  id: "jet-moto-anthology-recomp",
  title: "Jet Moto Anthology Recompiled",
  game: "Jet Moto",
  developers: ["GTTeancum"],
  publisher: "Sony Computer Entertainment",
  originalYear: 1996,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/GTTeancum/Jet-Moto-Anthology"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Jet Moto is a 1996 racing video game developed by Sony Interactive Studios America and SingleTrac and published by Sony Computer Entertainment for the PlayStation. It was released in North America on October 31, 1996; in 1997 for Europe in February and Japan on August 7. A Windows version was released only in North America on November 13, 1997, by Sony Interactive Studios America. Jet Moto was made available for the PlayStation Portable and PlayStation 3 via the PlayStation Network in February 2007.",
  summaryEs: "Jet Moto es un videojuego de carreras publicado por Sony Interactive Entertainment en 1996.",
  notes:
    "Cumulative recompilation project for the Jet Moto games (PlayStation) with rendering improvements. It needs your own game datas.",
  notesEs:
    "Proyecto de recompilación acumulativo de los juegos Jet Moto (PlayStation) con mejoras de renderizado. Necesita tu propia copia de los juegos.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Jet%20Moto%20(USA).png",
    alt: "Jet Moto (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Jet%20Moto%20(USA).png",
      alt: "Jet Moto (screenshot)",
      credit: "Libretro",
    },
  ],
};
