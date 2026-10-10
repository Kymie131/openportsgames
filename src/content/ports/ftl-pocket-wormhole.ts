import type { Port } from "@/lib/ports/schema";

export const ftlPocketWormhole: Port = {
  schema: "port",
  id: "ftl-pocket-wormhole",
  title: "Pocket Wormhole (FTL)",
  game: "FTL: Faster Than Light",
  developers: ["adamkulik"],
  publisher: "Subset Games",
  originalYear: 2012,
  portType: "reimplementation",
  genre: "strategy",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/adamkulik/pocket-wormhole"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  originalSystem: "Microsoft Windows",
  notes:
    "Native Android port of Project Wormhole, the open-source FTL engine implementation. It runs FTL: Faster Than Light on Android using your own game files.",
  notesEs:
    "Port nativo para Android de Project Wormhole, la implementación libre del motor de FTL. Ejecuta FTL: Faster Than Light en Android usando tus propios archivos del juego.",
  cover: {
    src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2a/FTL_Faster_Than_Light_Logo.svg/960px-FTL_Faster_Than_Light_Logo.svg.png",
    alt: "FTL: Faster Than Light (box art)",
    credit: "Wikipedia",
  },
};
