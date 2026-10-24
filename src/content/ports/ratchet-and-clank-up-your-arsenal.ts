import type { Port } from "@/lib/ports/schema";

export const RatchetAndClankUpYourArsenal: Port = {
  schema: "port",
  id: "ratchet-and-clank-up-your-arsenal",
  title: "Ratchet & Clank: Up Your Arsenal",
  game: "Ratchet & Clank: Up Your Arsenal",
  developers: ["OpenRAC"],
  publisher: "Sony Interactive Entertainment",
  originalYear: 2004,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/OpenRAC/rac3-uya-decomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation 2"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/7/73/Ratchetandclank3box.jpg",
    alt: "Ratchet & Clank: Up Your Arsenal (box art)",
    credit: "Wikipedia",
  },
  summary: "Ratchet & Clank: Up Your Arsenal is a 2004 third-person shooter platform video game developed by Insomniac Games and published by Sony Computer Entertainment for the PlayStation 2. It is the third installment in the Ratchet & Clank series.",
  summaryEs: "Ratchet & Clank: Up Your Arsenal es un videojuego de plataformas de disparos en tercera persona de 2004 desarrollado por Insomniac Games y publicado por Sony Computer Entertainment para la PlayStation 2. Es la tercera entrega de la serie Ratchet & Clank.",
  notes: "Ratchet & Clank 3: Up Your Arsenal PS2 C Source Code Decompilation Project.",
  notesEs:
    "Proyecto de decompilación a código C del PlayStation 2 de Ratchet & Clank 3: Up Your Arsenal.",
};
