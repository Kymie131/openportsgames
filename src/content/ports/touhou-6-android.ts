import type { Port } from "@/lib/ports/schema";

export const touhou6Android: Port = {
  schema: "port",
  id: "touhou-6-android",
  title: "Touhou 6 (Android)",
  game: "Touhou 6: The Embodiment of Scarlet Devil",
  developers: ["cardanawandra"],
  publisher: "Team Shanghai Alice",
  originalYear: 2002,
  portType: "decompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/cardanawandra/th06"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  originalSystem: "Microsoft Windows",
  notes:
    "Android port based on the decompilation of Touhou 6: The Embodiment of Scarlet Devil (version 1.02h). It needs the original game files.",
  notesEs:
    "Port a Android basado en la decompilación de Touhou 6: The Embodiment of Scarlet Devil (versión 1.02h). Necesita los archivos del juego original.",
};
