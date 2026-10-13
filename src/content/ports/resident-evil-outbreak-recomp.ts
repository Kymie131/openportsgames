import type { Port } from "@/lib/ports/schema";

export const residentEvilOutbreakRecomp: Port = {
  schema: "port",
  id: "resident-evil-outbreak-recomp",
  title: "Resident Evil Outbreak Recompiled",
  game: "Resident Evil Outbreak",
  developers: ["sp00nznet"],
  publisher: "Capcom",
  originalYear: 2003,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/sp00nznet/reo"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystem: "PlayStation 2",
  notes:
    "Static recompilation of Resident Evil Outbreak (PlayStation 2) for Windows. It needs your own copy of the game.",
  notesEs:
    "Recompilación estática de Resident Evil Outbreak (PlayStation 2) para Windows. Necesita tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation%202/Named_Boxarts/Resident%20Evil%20-%20Outbreak%20(USA)%20(v2.00).png",
    alt: "Resident Evil Outbreak (box art)",
    credit: "Box art",
  },
};
