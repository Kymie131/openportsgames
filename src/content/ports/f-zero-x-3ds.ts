import type { Port } from "@/lib/ports/schema";

export const fZeroX3ds: Port = {
  schema: "port",
  id: "f-zero-x-3ds",
  title: "F-Zero X (3DS)",
  game: "F-Zero X",
  developers: ["cruxxxxxx"],
  publisher: "Nintendo",
  originalYear: 1998,
  portType: "decompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["3ds"],
  status: "beta",
  release: { version: "1.2.0", date: "2026-11-04" },
  sources: ["https://github.com/cruxxxxxx/gdx-3ds"],
  license: { spdx: "NOASSERTION", note: "license not declared in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Nintendo 64"],
  downloads: [
    {
      label: "3ds",
      url: "https://github.com/cruxxxxxx/gdx-3ds/releases/download/v1.2.0/G-Diffuser-3DS-N3DS-EK-v1.2.0.zip",
      size: "5.3 MB",
    },
    {
      label: "3ds",
      url: "https://github.com/cruxxxxxx/gdx-3ds/releases/download/v1.2.0/G-Diffuser-3DS-O3DS-EK-v1.2.0.zip",
      size: "5.3 MB",
    },
    {
      label: "3ds",
      url: "https://github.com/cruxxxxxx/gdx-3ds/releases/download/v1.2.0/G-Diffuser-3DS-N3DS-v1.2.0.zip",
      size: "4.7 MB",
    },
    {
      label: "3ds",
      url: "https://github.com/cruxxxxxx/gdx-3ds/releases/download/v1.2.0/G-Diffuser-3DS-O3DS-v1.2.0.zip",
      size: "4.7 MB",
    },
    {
      label: "macOS",
      url: "https://github.com/cruxxxxxx/gdx-3ds/releases/download/v1.2.0/gdx-extract-macos-universal.zip",
      size: "3.8 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/cruxxxxxx/gdx-3ds/releases/download/v1.2.0/gdx-extract-linux-x64.zip",
      size: "2.4 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/2/21/F-Zero_X_box_art.jpg",
    alt: "F-Zero X (box art)",
    credit: "Wikipedia",
  },
  summary: "F-Zero X is a 1998 racing game developed and published by Nintendo for the Nintendo 64. It is the sequel to the original F-Zero (1990), and the first F-Zero game with 3D graphics. It has a steep learning curve and its gameplay experience is similar to that of the original. The F-Zero X Expansion Kit, an expansion pack for the 64DD featuring 12 more tracks and track and vehicle editors, was released in Japan in 2000.",
  summaryEs: "F-Zero X es un videojuego de carreras futurista desarrollado y distribuido por Nintendo en 1998 para la videoconsola Nintendo 64. Es la continuación de F-Zero de Super Nintendo, y el segundo videojuego de la serie del mismo nombre.",
  notes: "F-Zero X (Nintendo, 1998) running on Nintendo 3DS through decompilation. Latest release: v0.9.0. You need your own copy of the game.",
  notesEs: "F-Zero X (Nintendo, 1998) en Nintendo 3DS mediante decompilación. Última release: v0.9.0. Necesitas tu propia copia del juego.",
};
