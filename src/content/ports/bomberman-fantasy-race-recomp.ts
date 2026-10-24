import type { Port } from "@/lib/ports/schema";

export const bombermanFantasyRaceRecomp: Port = {
  schema: "port",
  id: "bomberman-fantasy-race-recomp",
  title: "Bomberman Fantasy Race Recompiled",
  game: "Bomberman Fantasy Race",
  developers: ["PortsDR"],
  publisher: "Hudson Soft",
  originalYear: 1998,
  portType: "recompilation",
  genre: "racing",
  openSource: false,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/TechnicallyComputers/Bomberman-Fantasy-Race-Recomp"],
  license: { spdx: "NOASSERTION", note: "no public repository or license" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation"],
  summary: "Bomberman Fantasy Race is a racing video game developed by GraphicResearch Inc., released for PlayStation in Japan by publisher Hudson Soft in 1998, in North America by Atlus USA in 1999, and in Europe by Virgin Interactive in 2000. It is a spin-off of the Bomberman series.",
  summaryEs: "Bomberman Fantasy Race es un videojuego de carreras desarrollado por Graphis Research Inc., lanzado en 6 de agosto de 1998 en Japón para PlayStation por publicador Hudson Soft. Fue lanzado en 31 de marzo de 1999 en Norteamérica por Atlus y en julio de 2000 en Europa por Virgin Interactive. Es un Spin-off de la serie Bomberman.",
  notes: "Tracked by PortsDR. No public repo is linked yet, and you supply the game files.",
  notesEs: "Seguido por PortsDR. Todavía no hay repo público, y tú aportas los archivos del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Bomberman%20Fantasy%20Race%20(Europe)%20(En,Fr,De,Es).png",
    alt: "Bomberman Fantasy Race (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Bomberman%20Fantasy%20Race%20(Europe)%20(En,Fr,De,Es).png",
      alt: "Bomberman Fantasy Race (screenshot)",
      credit: "Libretro",
    },
  ],
};
