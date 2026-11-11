import type { Port } from "@/lib/ports/schema";

export const wayOfTheSamurai2Pc: Port = {
  schema: "port",
  id: "way-of-the-samurai-2-pc",
  title: "Way of the Samurai 2 (PC)",
  game: "Way of the Samurai 2",
  developers: ["acklavidian"],
  publisher: "Acquire",
  originalYear: 2003,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["linux"],
  status: "beta",
  release: { version: "0.3.10", date: "2026-10-16" },
  sources: ["https://github.com/acklavidian/decomp_wots2"],
  license: { spdx: "NOASSERTION", note: "license not declared in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation 2"],
  downloads: [
    {
      label: "Linux",
      url: "https://github.com/acklavidian/decomp_wots2/releases/download/v0.3.10/wots2-linux-x86_64.tar.gz",
      size: "1.5 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/acklavidian/decomp_wots2/releases/download/v0.3.10/wots2-windows-x86_64.zip",
      size: "5.8 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/f/f9/Way_of_the_Samurai_2_cover.jpg",
    alt: "Way of the Samurai 2 (box art)",
    credit: "Wikipedia",
  },
  summary: "Way of the Samurai 2 is a PlayStation 2 (PS2) action-adventure game released in 2003. It was re-released on PlayStation Portable in 2009 in Japan.",
  summaryEs: "Way of the Samurai 2 es un videojuego de acción y aventura publicado por Spike en 2003.",
  notes: "Way of the Samurai 2 (Acquire, 2003) running on Linux through decompilation. Latest release: v0.3.10. You need your own copy of the game.",
  notesEs: "Way of the Samurai 2 (Acquire, 2003) en Linux mediante decompilación. Última release: v0.3.10. Necesitas tu propia copia del juego.",
};
