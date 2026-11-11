import type { Port } from "@/lib/ports/schema";

export const princeOfPersia2Windows: Port = {
  schema: "port",
  id: "prince-of-persia-2-windows",
  title: "Prince of Persia 2 (Native)",
  game: "Prince of Persia 2: The Shadow and the Flame",
  developers: ["Supermedo"],
  publisher: "Broderbund",
  originalYear: 1993,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "stable",
  release: { version: "1.0", date: "2026-09-23" },
  sources: ["https://github.com/Supermedo/prince-of-persia-2-windows"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-11",
  originalSystems: ["MS-DOS"],
  summary:
    "Prince of Persia 2: The Shadow and the Flame is a 1993 cinematic platform game by Broderbund. The Prince returns to Persia to reclaim his throne from a false double and the cult of the Shadow and the Flame.",
  summaryEs:
    "Prince of Persia 2: The Shadow and the Flame es un juego de plataformas cinemático de 1993 de Broderbund. El Príncipe regresa a Persia para recuperar su trono de un impostor y del culto de la Sombra y la Llama.",
  notes:
    "Static recompilation of the DOS game into a native Windows executable, including the recompiler and runtime. It needs your own copy of the original game.",
  notesEs:
    "Recompilación estática del juego de DOS en un ejecutable nativo para Windows, con el recompilador y el runtime. Necesita tu propia copia del juego original.",
  downloads: [
    {
      label: "Windows",
      url: "https://github.com/Supermedo/prince-of-persia-2-windows/releases/download/v1.0/PrinceOfPersia2-Windows.zip",
      size: "3.5 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/a/ac/Pop2-saf.JPG",
    alt: "Prince of Persia 2: The Shadow and the Flame (box art)",
    credit: "Wikipedia",
  },
};
