import type { Port } from "@/lib/ports/schema";

export const doaxbvRe: Port = {
  schema: "port",
  id: "doaxbv-re",
  title: "Dead or Alive Xtreme Beach Volleyball",
  game: "Dead or Alive Xtreme Beach Volleyball",
  developers: ["NoRain211"],
  publisher: "Tecmo",
  originalYear: 2003,
  portType: "recompilation",
  genre: "sports",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "macos", "linux"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/NoRain211/doaxvb-re"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Xbox"],
  related: ["doa3-re"],
  notes:
    "Native PC port of Dead or Alive Xtreme Beach Volleyball (Xbox, 2003) built by static recompilation with a hand-written runtime. Requires your own copy of the game. Latest release: v0.5.3.",
  notesEs:
    "Port nativo a PC de Dead or Alive Xtreme Beach Volleyball (Xbox, 2003) mediante recompilación estática con un runtime propio. Requiere tu propia copia del juego. Última release: v0.5.3.",
  cover: {
    src: "https://thumbnails.libretro.com/Microsoft%20-%20Xbox/Named_Boxarts/Dead%20or%20Alive%20Xtreme%20Beach%20Volleyball%20(Japan)%20(En,Ja).png",
    alt: "Dead or Alive Xtreme Beach Volleyball (box art)",
    credit: "Box art",
  },
};
