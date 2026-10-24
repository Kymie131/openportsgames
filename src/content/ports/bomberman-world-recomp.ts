import type { Port } from "@/lib/ports/schema";

export const bombermanWorldRecomp: Port = {
  schema: "port",
  id: "bomberman-world-recomp",
  title: "Bomberman World Recompiled",
  game: "Bomberman World",
  developers: ["PortsDR"],
  publisher: "Hudson Soft",
  originalYear: 1998,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: false,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/TechnicallyComputers/Bomberman-World-Recomp"],
  license: { spdx: "NOASSERTION", note: "no public repository or license" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation"],
  summary: "Bomberman World is a maze action video game developed and published by Hudson Soft for the PlayStation. It is part of the Bomberman series. The game was also re-released for PCs in 2002 alongside the TurboGrafx-16 version of Bomberman and Bomberman '93 as part of a compilation disc titled Bomberman Collection.",
  summaryEs: "Bomberman World es un videojuego de acción y laberintos lanzado en 1998 por Hudson Soft para la PlayStation. Es parte de la serie Bomberman. El juego también ha sido relanzado para PC en 2002 junto con la versión de Bomberman de TurboGrafx-16 y Bomberman '93 como parte de un disco recopilatorio titulado Bomberman Collection.",
  notes: "Indexed by PortsDR. No official repository is available, and it needs your own copy.",
  notesEs: "Indexado en PortsDR. No hay repositorio oficial disponible y necesita tu propia copia.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Bomberman%20World%20(Europe,%20Australia)%20(En,Fr,De,Es,It).png",
    alt: "Bomberman World (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Bomberman%20World%20(Europe,%20Australia)%20(En,Fr,De,Es,It).png",
      alt: "Bomberman World (screenshot)",
      credit: "Libretro",
    },
  ],
};
