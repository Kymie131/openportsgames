import type { Port } from "@/lib/ports/schema";

export const touhou6Vita: Port = {
  schema: "port",
  id: "touhou-6-vita",
  title: "Touhou 6 (PS Vita)",
  game: "Touhou 6: The Embodiment of Scarlet Devil",
  developers: ["Wavy667"],
  publisher: "Team Shanghai Alice",
  originalYear: 2002,
  portType: "decompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["psvita"],
  status: "beta",
  release: { version: "0.1", date: "2026-08-12" },
  sources: ["https://github.com/Wavy667/th06-vita"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Windows"],
  related: ["touhou-6-android", "touhou-6-psp-jeong-jimin"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/8/8b/Th06cover.jpg",
    alt: "Touhou 6: The Embodiment of Scarlet Devil (box art)",
    credit: "Wikipedia",
  },
  notes:
    "Touhou 6: The Embodiment of Scarlet Devil (Team Shanghai Alice, 2002) on PS Vita, based on the portable decompilation. You need the original game files.",
  notesEs:
    "Touhou 6: The Embodiment of Scarlet Devil (Team Shanghai Alice, 2002) en PS Vita, basado en la decompilación portátil. Necesitas los archivos originales.",
};
