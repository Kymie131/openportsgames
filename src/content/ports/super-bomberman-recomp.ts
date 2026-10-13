import type { Port } from "@/lib/ports/schema";

export const superBombermanRecomp: Port = {
  schema: "port",
  id: "super-bomberman-recomp",
  title: "Super Bomberman Recompiled",
  game: "Super Bomberman",
  developers: ["elliotttate"],
  publisher: "Hudson Soft",
  originalYear: 1993,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/elliotttate/BombermanRecomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Super Nintendo",
  notes:
    "Native recompilation of Super Bomberman (SNES) for Windows. It needs your own copy of the game.",
  notesEs:
    "Recompilación nativa de Super Bomberman (SNES) para Windows. Necesita tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Bomberman%20(USA).png",
    alt: "Super Bomberman (box art)",
    credit: "Box art",
  },
};
