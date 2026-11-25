import type { Port } from "@/lib/ports/schema";

export const RatchetAndClankGoingCommandoUsaV101: Port = {
  schema: "port",
  id: "ratchet-and-clank-going-commando-usa-v1-01",
  title: "Ratchet & Clank: Going Commando (USA v1.01)",
  game: "Ratchet & Clank: Going Commando",
  developers: ["OpenRAC"],
  publisher: "Sony Computer Entertainment",
  originalYear: 2003,
  portType: "decompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/OpenRAC/rac2-gc-decomp"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation 2"],
  summary: "Ratchet & Clank: Going Commando is a 2003 platform game developed by Insomniac Games and published by Sony Computer Entertainment for the PlayStation 2.",
  summaryEs: "Ratchet & Clank: Going Commando es un juego de plataformas de 2003 desarrollado por Insomniac Games y publicado por Sony Computer Entertainment para PlayStation 2.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/a/a4/Ratchet_and_clank_gc_image.jpg",
    alt: "Ratchet & Clank: Going Commando (box art)",
    credit: "Wikipedia",
  },
  notes:
    "Going Commando USA v1.01: byte-exact reconstruction tools and native-port research. No game assets.",
  notesEs:
    "Going Commando USA v1.01: herramientas de reconstrucción byte a byte e investigación de port nativo. Sin recursos del juego.",
};
