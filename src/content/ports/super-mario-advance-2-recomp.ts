import type { Port } from "@/lib/ports/schema";

export const superMarioAdvance2Recomp: Port = {
  schema: "port",
  id: "super-mario-advance-2-recomp",
  title: "Super Mario Advance 2",
  game: "Super Mario Advance 2: Super Mario World",
  developers: ["mstan"],
  publisher: "Nintendo",
  originalYear: 2001,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/SuperMarioAdvance2Recomp"],
  license: { spdx: "PolyForm-Noncommercial-1.0.0", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystem: "Game Boy Advance",
  notes:
    "Static recompilation of Super Mario Advance 2: Super Mario World (GBA) with the gbarecomp framework. It requires your own copy of the game.",
  notesEs:
    "Recompilación estática de Super Mario Advance 2: Super Mario World (GBA) con el framework gbarecomp. Requiere tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Advance/Named_Boxarts/Super%20Mario%20Advance%202%20-%20Super%20Mario%20World%20(Europe)%20(En,Fr,De,Es).png",
    alt: "Super Mario Advance 2: Super Mario World (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Advance/Named_Snaps/Super%20Mario%20Advance%202%20-%20Super%20Mario%20World%20(Europe)%20(En,Fr,De,Es).png",
      alt: "Super Mario Advance 2: Super Mario World (screenshot)",
      credit: "Libretro",
    },
  ],
};
