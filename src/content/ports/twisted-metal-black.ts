import type { Port } from "@/lib/ports/schema";

export const TwistedMetalBlack: Port = {
  schema: "port",
  id: "twisted-metal-black",
  title: "Twisted Metal: Black",
  game: "Twisted Metal: Black",
  developers: ["abelbriggs1"],
  publisher: "Unknown",
  originalYear: 2001,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/abelbriggs1/tmb_decomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation 2"],
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation%202/Named_Boxarts/Twisted%20Metal%20-%20Black%20(Europe)%20(En,Fr,De,Es,It).png",
    alt: "Twisted Metal: Black (box art)",
    credit: "Box art",
  },
  notes: "[WIP] Matching decompilation of Twisted Metal: Black (2001) for the Playstation 2.",
  notesEs:
    "Decompilación que coincide de Twisted Metal: Black (2001) para PlayStation 2, en desarrollo.",
};
