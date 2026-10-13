import type { Port } from "@/lib/ports/schema";

export const openblack: Port = {
  schema: "port",
  id: "openblack",
  title: "openblack",
  game: "Black & White",
  developers: ["openblack"],
  publisher: "Electronic Arts",
  originalYear: 2001,
  portType: "reimplementation",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/openblack/openblack"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Microsoft Windows",
  notes:
    "Open-source reimplementation of Black & White that runs the original game assets. It needs your own copy of the game.",
  notesEs:
    "Reimplementación de código abierto de Black & White que ejecuta los recursos del juego original. Necesita tu propia copia del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/7/7b/Black_%26_White_Coverart.png",
    alt: "Black & White (cover)",
    credit: "Wikipedia",
  },
};
