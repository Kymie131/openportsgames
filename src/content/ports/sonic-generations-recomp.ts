import type { Port } from "@/lib/ports/schema";

export const sonicGenerationsRecomp: Port = {
  schema: "port",
  id: "sonic-generations-recomp",
  title: "Sonic Generations Recompiled",
  game: "Sonic Generations",
  developers: ["Player124413"],
  publisher: "Sega",
  originalYear: 2011,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Player124413/Sonic-Generations-Recomp"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  originalSystem: "Xbox 360",
  notes:
    "Recompilation of Sonic Generations (Xbox 360) built with XenonRecomp and XenosRecomp, with Windows and Android builds. It needs a copy of the game.",
  notesEs:
    "Recompilación de Sonic Generations (Xbox 360) construida con XenonRecomp y XenosRecomp, con builds para Windows y Android. Necesita una copia del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/7/7d/SonicGenerations.jpg",
    alt: "Sonic Generations (box art)",
    credit: "Wikipedia",
  },
};
