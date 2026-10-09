import type { Port } from "@/lib/ports/schema";

export const dkc2Recomp: Port = {
  schema: "port",
  id: "dkc2-recomp",
  title: "DKC2Recomp",
  game: "Donkey Kong Country 2: Diddy's Kong Quest",
  developers: ["mstan"],
  publisher: "Nintendo",
  originalYear: 1995,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/elliotttate/DKC2Recomp"],
  license: { spdx: "MIT" },
  verified: false,
  originalSystem: "Super Nintendo",
  notes:
    "Static recompilation of Donkey Kong Country 2 (SNES) with snesrecomp. The original repository is archived; active development moved to elliotttate/DKC2Recomp.",
  notesEs:
    "Recompilación estática de Donkey Kong Country 2 (SNES) con snesrecomp. El repositorio original está archivado; el desarrollo activo pasó a elliotttate/DKC2Recomp.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Donkey%20Kong%20Country%202%20-%20Diddy's%20Kong%20Quest%20(USA)%20(En%2CFr).png",
    alt: "Donkey Kong Country 2: Diddy's Kong Quest (box art)",
    credit: "Box art",
  },
};
