import type { Port } from "@/lib/ports/schema";

export const xenogearsRecomp: Port = {
  schema: "port",
  id: "xenogears-recomp",
  title: "XenogearsRecomp",
  game: "Xenogears",
  developers: ["OpokXeno"],
  publisher: "Square",
  originalYear: 1998,
  portType: "recompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/OpokXeno/xenogears-recomp"],
  license: { spdx: "PolyForm-Noncommercial-1.0.0", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Native recompilation of Xenogears (PlayStation). The player supplies their own legally obtained disc image; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Xenogears (PlayStation). El jugador aporta su propio material obtenido legalmente (disc image); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Xenogears%20(USA).png",
    alt: "Xenogears (box art)",
    credit: "Box art",
  },
};
