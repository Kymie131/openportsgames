import type { Port } from "@/lib/ports/schema";

export const RatchetAndClankUpYourArsenal: Port = {
  schema: "port",
  id: "ratchet-and-clank-up-your-arsenal",
  title: "Ratchet & Clank: Up Your Arsenal",
  game: "Ratchet & Clank: Up Your Arsenal",
  developers: ["OpenRAC"],
  publisher: "Unknown",
  originalYear: 2000,
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
  notes: "Ratchet & Clank 3: Up Your Arsenal PS2 C Source Code Decompilation Project.",
  notesEs:
    "Proyecto de decompilación a código C del PlayStation 2 de Ratchet & Clank 3: Up Your Arsenal.",
};
