import type { Port } from "@/lib/ports/schema";

export const Terraria: Port = {
  schema: "port",
  id: "terraria",
  title: "Terraria",
  game: "Terraria",
  developers: ["PPrism"],
  publisher: "Unknown",
  originalYear: 2013,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/PPrism/TerrariaOGC"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation 3"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/1/1a/Terraria_Steam_artwork.jpg",
    alt: "Terraria (box art)",
    credit: "Wikipedia",
  },
  notes:
    "A functional decompilation & PC port of the console version of Terraria released on the Xbox 360 & PS3 in 2013.",
  notesEs:
    "Decompilación funcional y port a PC de la versión de consola de Terraria lanzada en Xbox 360 y PS3 en 2013.",
};
