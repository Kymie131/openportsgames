import type { Port } from "@/lib/ports/schema";

export const ghostInTheShellRecomp: Port = {
  schema: "port",
  id: "ghost-in-the-shell-recomp",
  title: "Ghost in the Shell Recompiled",
  game: "Ghost in the Shell",
  developers: ["alexbeavs"],
  publisher: "Sony Computer Entertainment",
  originalYear: 1997,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/ghost-in-the-shell-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Ghost in the Shell is a Japanese cyberpunk military science fiction media franchise that began with the eponymous manga series, written and illustrated by Masamune Shirow. The manga, first serialized from 1989 to 1991, is set in the mid-21st-century and follows the fictional counter-cyberterrorist organization Public Security Section 9, led by protagonist Major Motoko Kusanagi.",
  summaryEs: "Ghost in the Shell es un manga de ciencia ficción creado por Masamune Shirow, que progresó en dos mangas más titulados Ghost in the Shell 2: Man/Machine Interface y Ghost in the Shell 1.5: Human-Error Processor, dos películas animadas dirigidas por Mamoru Oshii: Ghost in the Shell y Ghost in the Shell 2: Innocence, una serie de televisión con dos temporadas denominadas: Ghost in the Shell: Stand Alone Complex y Ghost in the Shell: S.A.C.",
  notes:
    "Recompilation of Ghost in the Shell (PS1, Europe SCES-01050) with PSXRecomp and the recomp-ui launcher. It requires your own disc and a European SCPH-5502/5552 BIOS; the game is compiled on your machine. Release candidate 0.1.0, still without gameplay acceptance.",
  notesEs:
    "Recompilación de Ghost in the Shell (PS1, Europa SCES-01050) con PSXRecomp y el lanzador recomp-ui. Requiere tu propio disco y una BIOS europea SCPH-5502/5552; el juego se compila en tu máquina. Candidata 0.1.0, todavía sin aceptación de gameplay.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Ghost%20in%20the%20Shell%20(Europe).png",
    alt: "Ghost in the Shell (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Ghost%20in%20the%20Shell%20(Europe).png",
      alt: "Ghost in the Shell (screenshot)",
      credit: "Libretro",
    },
  ],
};
