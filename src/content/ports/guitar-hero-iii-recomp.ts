import type { Port } from "@/lib/ports/schema";

export const guitarHeroIiiRecomp: Port = {
  schema: "port",
  id: "guitar-hero-iii-recomp",
  title: "Guitar Hero III: Legends of Rock Recompiled",
  game: "Guitar Hero III: Legends of Rock",
  developers: ["luisxl15"],
  publisher: "Activision",
  originalYear: 2007,
  portType: "recompilation",
  genre: "music",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/luisxl15/Guitar-Hero-3-Recomp-"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Xbox 360"],
  notes:
    "Static recompilation of Guitar Hero III: Legends of Rock (Xbox 360) for Windows. It needs your own copy of the game.",
  notesEs:
    "Recompilación estática de Guitar Hero III: Legends of Rock (Xbox 360) para Windows. Necesita tu propia copia del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/9/93/Guitar-hero-iii-cover-image.jpg",
    alt: "Guitar Hero III: Legends of Rock (cover)",
    credit: "Wikipedia",
  },
};
