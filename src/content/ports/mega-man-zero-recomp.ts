import type { Port } from "@/lib/ports/schema";

export const megaManZeroRecomp: Port = {
  schema: "port",
  id: "mega-man-zero-recomp",
  title: "Mega Man Zero Recompiled",
  game: "Mega Man Zero",
  developers: ["mstan"],
  publisher: "Capcom",
  originalYear: 2002,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/MegaManZeroRecomp"],
  license: { spdx: "PolyForm-Noncommercial-1.0.0", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystem: "Game Boy Advance",
  notes:
    "Static recompilation of Mega Man Zero (GBA) with the gbarecomp framework. It requires your own copy of the game.",
  notesEs:
    "Recompilación estática de Mega Man Zero (GBA) con el framework gbarecomp. Requiere tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Advance/Named_Boxarts/Mega%20Man%20Zero%20(USA)%20(Virtual%20Console).png",
    alt: "Mega Man Zero (box art)",
    credit: "Box art",
  },
};
