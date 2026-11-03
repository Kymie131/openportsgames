import type { Port } from "@/lib/ports/schema";

export const ratchetToolsOfDestructionPc: Port = {
  schema: "port",
  id: "ratchet-tools-of-destruction-pc",
  title: "Ratchet & Clank: Tools of Destruction Recompiled",
  game: "Ratchet & Clank Future: Tools of Destruction",
  developers: ["Re-TeRo17"],
  publisher: "Sony Computer Entertainment",
  originalYear: 2007,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: "1.0", date: "2026-11-02" },
  sources: ["https://github.com/Re-TeRo17/ratchet-tod-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-02",
  originalSystems: ["PlayStation 3"],
  summary:
    "Ratchet & Clank Future: Tools of Destruction is a 2007 platformer developed by Insomniac Games and published by Sony Computer Entertainment for the PlayStation 3. It is the first game in the Future saga and follows Ratchet and Clank as they search for the Lombax race.",
  summaryEs:
    "Ratchet & Clank Future: Tools of Destruction es un juego de plataformas de 2007 desarrollado por Insomniac Games y publicado por Sony Computer Entertainment para PlayStation 3. Es el primer título de la saga Future y sigue a Ratchet y Clank en su búsqueda del pueblo lombax.",
  notes:
    "Static recompilation of the PlayStation 3 game for Windows. Version 1.0 runs on Direct3D 12 at up to 4K and 60 fps, targets the European release (BCES00052), and is playable from the first planet onwards, though the port is not finished and has a known-issues list. The installer builds the game from your own disc. No game files are included.",
  notesEs:
    "Recompilación estática del juego de PlayStation 3 para Windows. La versión 1.0 usa Direct3D 12 hasta 4K y 60 fps, está pensada para la versión europea (BCES00052) y es jugable desde el primer planeta, aunque el port no está terminado y tiene una lista de problemas conocidos. El instalador compila el juego a partir de tu propio disco. No incluye archivos del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/9/92/Ratchet_%26_Clank_Future_Tools_of_Destruction_North_American_cover.png",
    alt: "Ratchet & Clank Future: Tools of Destruction (box art)",
    credit: "Wikipedia",
  },
};
