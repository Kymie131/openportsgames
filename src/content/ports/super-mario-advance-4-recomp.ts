import type { Port } from "@/lib/ports/schema";

export const superMarioAdvance4Recomp: Port = {
  schema: "port",
  id: "super-mario-advance-4-recomp",
  title: "Super Mario Advance 4",
  game: "Super Mario Advance 4: Super Mario Bros. 3",
  developers: ["mstan"],
  publisher: "Nintendo",
  originalYear: 2003,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/SuperMarioAdvance4Recomp"],
  license: { spdx: "PolyForm-Noncommercial-1.0.0", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystem: "Game Boy Advance",
  notes:
    "Static recompilation of Super Mario Advance 4: Super Mario Bros. 3 (GBA) with the gbarecomp framework. It requires your own copy of the game.",
  notesEs:
    "Recompilación estática de Super Mario Advance 4: Super Mario Bros. 3 (GBA) con el framework gbarecomp. Requiere tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Advance/Named_Boxarts/Super%20Mario%20Advance%204%20-%20Super%20Mario%20Bros.%203%20(Europe)%20(En,Fr,De,Es,It)%20(Rev%201)%20(Virtual%20Console).png",
    alt: "Super Mario Advance 4: Super Mario Bros. 3 (box art)",
    credit: "Box art",
  },
};
