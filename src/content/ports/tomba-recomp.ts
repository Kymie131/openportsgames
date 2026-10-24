import type { Port } from "@/lib/ports/schema";

export const tombaRecomp: Port = {
  schema: "port",
  id: "tomba-recomp",
  title: "TombaRecomp",
  game: "Tomba!",
  developers: ["mstan"],
  publisher: "Sony Computer Entertainment",
  originalYear: 1997,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/TombaRecomp"],
  license: { spdx: "PolyForm-Noncommercial-1.0.0", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Tomba!, known as Tombi! in Europe, is a 1997 platform-adventure game developed and published by Whoopee Camp for the PlayStation. It was released in Japan in 1997 and internationally by Sony Computer Entertainment the following year. The game centers on the eponymous feral child as he attempts to recover his grandfather's bracelet from an evil race of anthropomorphic pigs.",
  summaryEs: "Tomba! es un videojuego de plataformas, acción y aventura creado por Whoopee Camp Co. Ltd. y publicado por Sony Computer Entertainment para la consola de videojuego PlayStation. Fue lanzado en 1997 para Japón y en 1998 para Norteamérica y la región PAL. Tombi! también contó con una secuela titulada Tombi! 2: The Evil Swine Return en 1999. También ha sido lanzado en PlayStation Network por MonkeyPaw Games. La saga es fue idea del creador de juegosTokuro Fujiwara, quien creó los videojuegos Ghosts'n Goblins y Mega Man.",
  notes:
    "Static recompilation of Tomba! (USA, SCUS-94236) with PSXRecomp. It includes the Seamless Loading mod, which swaps asset-loading routines for native equivalents.",
  notesEs:
    "Recompilación estática de Tomba! (USA, SCUS-94236) con PSXRecomp. Incluye el mod Seamless Loading, que cambia rutinas de carga de recursos por equivalentes nativos.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Tomba!%20(USA).png",
    alt: "Tomba! (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Tomba!%20(USA).png",
      alt: "Tomba! (screenshot)",
      credit: "Libretro",
    },
  ],
};
