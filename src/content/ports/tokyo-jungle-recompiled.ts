import type { Port } from "@/lib/ports/schema";

export const tokyoJungleRecompiled: Port = {
  schema: "port",
  id: "tokyo-jungle-recompiled",
  title: "Tokyo Jungle Recompiled",
  game: "Tokyo Jungle",
  developers: ["sp00nznet"],
  publisher: "Sony Computer Entertainment",
  originalYear: 2012,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/sp00nznet/tokyojungle"],
  license: { spdx: "MIT" },
  verified: false,
  originalSystem: "PlayStation 3",
  notes:
    "Static recompilation of Tokyo Jungle (PS3) with the ps3recomp framework. It boots, opens a D3D12 window, initialises audio and loads its data, but does not draw geometry yet.",
  notesEs:
    "Recompilación estática de Tokyo Jungle (PS3) con el framework ps3recomp. Arranca, abre una ventana D3D12, inicializa el audio y carga los datos, pero todavía no dibuja geometría.",
  screenshots: [
    {
      src: "https://raw.githubusercontent.com/sp00nznet/tokyojungle/master/assets/title-screen.gif",
      alt: "Title screen of Tokyo Jungle Recompiled",
      credit: "sp00nznet/tokyojungle",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/8/8b/Tokyo_Jungle_Official_Cover_Art.png",
    alt: "Tokyo Jungle (box art)",
    credit: "Wikipedia",
  },
};
