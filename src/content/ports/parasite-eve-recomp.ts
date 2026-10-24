import type { Port } from "@/lib/ports/schema";

export const parasiteEveRecomp: Port = {
  schema: "port",
  id: "parasite-eve-recomp",
  title: "Parasite Eve Recompiled",
  game: "Parasite Eve",
  developers: ["alexbeavs"],
  publisher: "Square",
  originalYear: 1998,
  portType: "recompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/parasite-eve-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Parasite Eve is a 1998 role-playing video game developed and published by Square. The game is a sequel to the novel Parasite Eve, written by Hideaki Sena; it is the first game in the Parasite Eve video game series. The story follows New York City police officer Aya Brea over a six-day span in 1997 as she attempts to stop Eve, a woman who plans to destroy the human race through spontaneous human combustion. Players explore levels set in areas of New York while utilizing a pausable real-time combat system along with several role-playing elements.",
  summaryEs: "Parasite Eve es un videojuego de terror de estrategia y acción, con algunos toques de videojuego de rol. Fue desarrollado por la empresa Squaresoft basándose en el libro homónimo de Hideaki Sena. Su banda sonora está compuesta por Yōko Shimomura.",
  notes:
    "Recompilation of Parasite Eve (PS1, USA SLUS-00662 / SLUS-00668) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Parasite Eve (PS1, USA SLUS-00662 / SLUS-00668) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Parasite%20Eve%20(Japan).png",
    alt: "Parasite Eve (box art)",
    credit: "Box art",
  },
};
