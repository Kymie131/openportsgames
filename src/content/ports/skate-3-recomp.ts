import type { Port } from "@/lib/ports/schema";

export const skate3Recomp: Port = {
  schema: "port",
  id: "skate-3-recomp",
  title: "Skate 3 Recompiled",
  game: "Skate 3",
  developers: ["mchughalex"],
  publisher: "Electronic Arts",
  originalYear: 2010,
  portType: "recompilation",
  genre: "sports",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/mchughalex/skate3recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Xbox 360"],
  summary: "Skate 3 is a 2010 skateboarding video game, the third installment in the Skate series and the sequel to 2009's Skate 2, developed by EA Black Box and published by Electronic Arts. It was released worldwide in May 2010 for PlayStation 3 and Xbox 360. The game takes place in the fictional city of Port Carverton, which embraces skateboarding, unlike considering it a crime in the second game. The player character goes by the alias \"The Legend\". After failing to \"Jump The Shark\", their goal becomes creating a successful skateboarding team.",
  summaryEs: "Skate 3 es la tercera entrega de la serie de videojuegos Skate, desarrollado por EA Black Box y distribuido por Electronic Arts. Publicado el 11 de mayo de 2010, es la secuela del juego del 2009, Skate 2.",
  notes:
    "Native recompilation of Skate 3 (Xbox 360) with a custom ReXGlue SDK fork. A native renderer on Direct3D 12 and Vulkan (more than double the frame rate at a fraction of the GPU cost) and builds for Windows, Linux and macOS.",
  notesEs:
    "Recompilación nativa de Skate 3 (Xbox 360) con un fork propio del SDK ReXGlue. Renderizador nativo sobre Direct3D 12 y Vulkan (más del doble de FPS con una fracción del uso de GPU) y builds para Windows, Linux y macOS.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/8/84/Skate-3-Boxart.jpg",
    alt: "Skate 3 (box art)",
    credit: "Wikipedia",
  },
};
