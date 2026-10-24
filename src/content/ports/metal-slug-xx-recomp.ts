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
  summary: "Metal Slug 7 is a run and gun video game developed by SNK Playmore for the Nintendo DS. It is the seventh and final title in the main Metal Slug series. It marks the first game in the main series that would be released without an arcade version. The game was released in 2008 for Japan on July 22 and North America on November 28 by Ignition Entertainment.",
  summaryEs: "Metal Slug XX es una modificación mejorada de Metal Slug 7, publicado en diciembre de 2009 para la Playstation Portable, Xbox Live Arcade con nuevos contenidos, PlayStation 4 y Microsoft Windows (Steam). Esta versión cuenta con contenido adicional así como un modo multijugador.",
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
