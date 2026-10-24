import type { Port } from "@/lib/ports/schema";

export const perfectDarkZeroRecomp: Port = {
  schema: "port",
  id: "perfect-dark-zero-recomp",
  title: "Perfect Dark Zero Recompiled",
  game: "Perfect Dark Zero",
  developers: ["nikolaygorb"],
  publisher: "Microsoft Game Studios",
  originalYear: 2005,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/nikolaygorb/PerfectDarkZeroRecomp"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Xbox 360"],
  summary: "Perfect Dark Zero is a first-person shooter developed by Rare and published by Microsoft Game Studios. It was released as a launch title for the Xbox 360 video game console in 2005. The game is part of the Perfect Dark series and a prequel to the original Perfect Dark. The story of the game follows Joanna Dark, a bounty hunter working with her father and a computer hacker, as she joins the Carrington Institute agency to prevent a rival corporation from gaining possession of an ancient artifact which endows individuals with superhuman powers.",
  summaryEs: "Perfect Dark Zero es un videojuego de acción en primera persona desarrollado por Rare y distribuido por Microsoft, exclusivo de la consola de juego Xbox 360. Puesto a la venta como título de lanzamiento en Norteamérica, Europa, Australia y Japón.",
  notes:
    "Static recompilation of Perfect Dark Zero (Xbox 360) for Windows. It needs your own copy of the game.",
  notesEs:
    "Recompilación estática de Perfect Dark Zero (Xbox 360) para Windows. Necesita tu propia copia del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/b/b7/Perfect_Dark_Zero_Coverart.png",
    alt: "Perfect Dark Zero (cover)",
    credit: "Wikipedia",
  },
};
