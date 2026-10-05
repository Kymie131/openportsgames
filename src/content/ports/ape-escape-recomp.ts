import type { Port } from "@/lib/ports/schema";

export const apeEscapeRecomp: Port = {
  schema: "port",
  id: "ape-escape-recomp",
  title: "ApeEscapeRecomp",
  game: "Ape Escape",
  developers: ["mstan"],
  publisher: "Sony Computer Entertainment",
  originalYear: 1999,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/ApeEscapeRecomp"],
  license: { spdx: "PolyForm-Noncommercial-1.0.0", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Native recompilation of Ape Escape (PlayStation). The player supplies their own legally obtained disc image; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Ape Escape (PlayStation). El jugador aporta su propia imagen de disco obtenida legalmente; el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Ape%20Escape%20(USA).png",
    alt: "Ape Escape (box art)",
    credit: "Box art",
  },
};
