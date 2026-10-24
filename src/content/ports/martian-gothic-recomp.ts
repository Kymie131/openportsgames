import type { Port } from "@/lib/ports/schema";

export const martianGothicRecomp: Port = {
  schema: "port",
  id: "martian-gothic-recomp",
  title: "Martian Gothic: Unification Recompiled",
  game: "Martian Gothic: Unification",
  developers: ["alexbeavs"],
  publisher: "TalonSoft",
  originalYear: 2000,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/martian-gothic-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Martian Gothic: Unification is a 2000 survival horror video game developed by Creative Reality for Microsoft Windows and Coyote Developments for the PlayStation and published by TalonSoft for Microsoft Windows and Take-Two Interactive for the PlayStation. It takes place on a Martian base in the year 2019, where a crew of three have been tasked to investigate 10 months of radio silence. They soon find that the crew members of the base have been killed, and now become re-animated bloodthirsty zombies.",
  summaryEs: "Martian Gothic: Unification es un videojuego de acción y aventura publicado por TalonSoft en 2000.",
  notes:
    "Bare recompilation of Martian Gothic: Unification (PlayStation) built with the PSXRecomp toolkit and recomp-ui. It ships no game content and needs your own disc plus a BIOS.",
  notesEs:
    "Recompilación básica de Martian Gothic: Unification (PlayStation) construida con el kit PSXRecomp y recomp-ui. No incluye contenido del juego y necesita tu propio disco y una BIOS.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Martian%20Gothic%20-%20Unification%20(Europe)%20(En,Fr,Es,It).png",
    alt: "Martian Gothic: Unification (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Martian%20Gothic%20-%20Unification%20(Europe)%20(En,Fr,Es,It).png",
      alt: "Martian Gothic: Unification (screenshot)",
      credit: "Libretro",
    },
  ],
};
