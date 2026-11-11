import type { Port } from "@/lib/ports/schema";

export const incredibleHulkRecompiled: Port = {
  schema: "port",
  id: "incredible-hulk-recompiled",
  title: "The Incredible Hulk Recompiled",
  game: "The Incredible Hulk",
  developers: ["TekRantGaming"],
  publisher: "Sega",
  originalYear: 2008,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "alpha",
  release: { version: "0.0.1", date: "2026-11-02" },
  sources: ["https://github.com/TekRantGaming/incredible-hulk-recompiled"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-11",
  originalSystems: ["Xbox 360"],
  summary:
    "The Incredible Hulk is a 2008 open-world action game developed by Edge of Reality and published by Sega, based on the film. Bruce Banner fights the military and the Enclave across a recreation of Manhattan.",
  summaryEs:
    "The Incredible Hulk es un juego de acción de mundo abierto de 2008 desarrollado por Edge of Reality y publicado por Sega, basado en la película. Bruce Banner lucha contra el ejército y la Enclave en una recreación de Manhattan.",
  notes:
    "Community ReXGlue PC recompilation base for the Xbox 360 game. It is explicitly an untested starting point and the game cannot be finished with it yet.",
  notesEs:
    "Base de recompilación comunitaria para PC con ReXGlue del juego de Xbox 360. Es un punto de partida sin probar y todavía no permite terminar el juego.",
  downloads: [
    {
      label: "Windows (alpha)",
      url: "https://github.com/TekRantGaming/incredible-hulk-recompiled/releases/download/v0.0.1/IncredibleHulk-v0.0.1-windows-x64.zip",
      size: "22.4 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/1/1e/The_Incredible_Hulk_video_game_cover_art.png",
    alt: "The Incredible Hulk (box art)",
    credit: "Wikipedia",
  },
};
