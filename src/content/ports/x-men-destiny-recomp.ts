import type { Port } from "@/lib/ports/schema";

export const xMenDestinyRecomp: Port = {
  schema: "port",
  id: "x-men-destiny-recomp",
  title: "X-Men Destiny Recompiled",
  game: "X-Men Destiny",
  developers: ["florinp93"],
  publisher: "Activision",
  originalYear: 2011,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/florinp93/xmd-recompiled"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Xbox 360"],
  summary: "X-Men: Destiny is an action role-playing video game based on the X-Men comic book series. It was developed by Silicon Knights. Written by Mike Carey, the writer of the X-Men: Legacy comic book series, it was published and released by Activision for the Nintendo DS, PlayStation 3, Wii, and Xbox 360 consoles.",
  summaryEs: "X-Men Destiny es un videojuego basado en los cómics de Marvel los X-Men. El juégo fue desarrollado por Silicon Knights y publicado por Activision. El juego fue lanzado el 27 de septiembre de 2011 en Norteamérica para las plataformas de Xbox 360, PlayStation 3, Nintendo DS y Wii.",
  notes:
    "Static recompilation of X-Men Destiny (Xbox 360) with the ReXGlue SDK, rendering through Direct3D 12 on Windows and Vulkan on Linux. It ships no game content and includes a launcher for graphics and controls.",
  notesEs:
    "Recompilación estática de X-Men Destiny (Xbox 360) con el SDK ReXGlue, que usa Direct3D 12 en Windows y Vulkan en Linux. No incluye contenido del juego y trae un lanzador para gráficos y controles.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/1/14/X-men-destiny-cover-890x1024.jpg",
    alt: "X-Men Destiny (box art)",
    credit: "Wikipedia",
  },
};
