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
    "Native recompilation of Donkey Kong Country 3 for the Super Nintendo. The player supplies their own legally obtained ROM; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Donkey Kong Country 3 para Super Nintendo. El jugador aporta su propia ROM obtenida legalmente; el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Donkey%20Kong%20Country%203%20-%20Dixie%20Kong's%20Double%20Trouble!%20(USA)%20(En%2CFr).png",
    alt: "Donkey Kong Country 3: Dixie Kong's Double Trouble (box art)",
    credit: "Box art",
  },
};
