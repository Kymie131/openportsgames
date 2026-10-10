import type { Port } from "@/lib/ports/schema";

export const dkc3Recomp: Port = {
  schema: "port",
  id: "dkc3-recomp",
  title: "DKC3Recomp",
  game: "Donkey Kong Country 3: Dixie Kong's Double Trouble",
  developers: ["elliotttate"],
  publisher: "Nintendo",
  originalYear: 1996,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/elliotttate/DKC3Recomp"],
  license: { spdx: "MIT" },
  verified: false,
  originalSystem: "Super Nintendo",
  notes:
    "Static recompilation of Donkey Kong Country 3 (SNES, USA En/Fr) with snesrecomp. It is in bring-up: it covers boot, the launcher, save states and Lakeside Limbo, with verified 16:10, 16:9 and 21:9 widescreen.",
  notesEs:
    "Recompilación estática de Donkey Kong Country 3 (SNES, USA En/Fr) con snesrecomp. Está en fase de puesta en marcha: cubre el arranque, el lanzador, los estados de guardado y Lakeside Limbo, con widescreen de 16:10, 16:9 y 21:9 verificado.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Donkey%20Kong%20Country%203%20-%20Dixie%20Kong's%20Double%20Trouble!%20(USA)%20(En%2CFr).png",
    alt: "Donkey Kong Country 3: Dixie Kong's Double Trouble (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Snaps/Donkey%20Kong%20Country%203%20-%20Dixie%20Kong's%20Double%20Trouble!%20(USA)%20(En,Fr).png",
      alt: "Donkey Kong Country 3: Dixie Kong's Double Trouble (screenshot)",
      credit: "Libretro",
    },
  ],
};
