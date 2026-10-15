import type { Port } from "@/lib/ports/schema";

export const metalSlugXxRecomp: Port = {
  schema: "port",
  id: "metal-slug-xx-recomp",
  title: "Metal Slug XX Recompiled",
  game: "Metal Slug XX",
  developers: ["FluffyQuack"],
  publisher: "SNK",
  originalYear: 2009,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/FluffyQuack/rexglue-MetalSlugXX"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation Portable"],
  notes:
    "Static recompilation of Metal Slug XX (PSP) using the ReXGlue SDK, for Windows. It needs your own copy of the game.",
  notesEs:
    "Recompilación estática de Metal Slug XX (PSP) con el SDK ReXGlue, para Windows. Necesita tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation%20Portable/Named_Boxarts/Metal%20Slug%20XX%20(Europe)%20(En,Fr,De,Es,It).png",
    alt: "Metal Slug XX (box art)",
    credit: "Box art",
  },
};
