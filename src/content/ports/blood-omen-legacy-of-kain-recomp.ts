import type { Port } from "@/lib/ports/schema";

export const bloodOmenLegacyOfKainRecomp: Port = {
  schema: "port",
  id: "blood-omen-legacy-of-kain-recomp",
  title: "Blood Omen: Legacy of Kain Recompiled",
  game: "Blood Omen: Legacy of Kain",
  developers: ["alexbeavs"],
  publisher: "Crystal Dynamics",
  originalYear: 1996,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/blood-omen-legacy-of-kain-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Blood Omen: Legacy of Kain is a 1996 action-adventure video game developed by Silicon Knights and published by Crystal Dynamics for the PlayStation. A Windows port developed by Semi Logic Entertainments was released by Activision under license from Crystal Dynamics in 1997. It is the first title in the Legacy of Kain series. The game was re-released digitally via GOG.com in 2021.",
  summaryEs: "Blood Omen: Legacy of Kain es un videojuego de acción y aventura desarrollado por Silicon Knights y publicado por Crystal Dynamics, con la participación en la distribución de Activision y BMG Interactive. Fue lanzado para PlayStation en 1996, y una versión para Microsoft Windows fue desarrollada por Semi Logic Entertainments y lanzada conjuntamente por Crystal Dynamics y Activision en 1997, que luego fue relanzada digitalmente a través de GOG.com en 2021. El juego es el primer título de la serie Legacy of Kain.",
  notes:
    "Recompilation of Blood Omen: Legacy of Kain (PS1, USA SLUS-00027) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Blood Omen: Legacy of Kain (PS1, USA SLUS-00027) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Blood%20Omen%20-%20Legacy%20of%20Kain%20(Europe).png",
    alt: "Blood Omen: Legacy of Kain (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Blood%20Omen%20-%20Legacy%20of%20Kain%20(Europe).png",
      alt: "Blood Omen: Legacy of Kain (screenshot)",
      credit: "Libretro",
    },
  ],
};
