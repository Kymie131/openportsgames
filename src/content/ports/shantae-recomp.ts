import type { Port } from "@/lib/ports/schema";

export const shantaeRecomp: Port = {
  schema: "port",
  id: "shantae-recomp",
  title: "Shantae Recompiled",
  game: "Shantae",
  developers: ["vibecodekun"],
  publisher: "WayForward",
  originalYear: 2002,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/vibecodekun/shantaerecomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Game Boy Color",
  notes:
    "Static recompilation of Shantae (Game Boy Color) for Windows and Linux, with an expanded view, no slowdown, rewind and shader presets. It needs your own ROM.",
  notesEs:
    "Recompilación estática de Shantae (Game Boy Color) para Windows y Linux, con vista ampliada, sin ralentización, rebobinado y preajustes de shaders. Necesita tu propia ROM.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Shantae%20(USA).png",
    alt: "Shantae (box art)",
    credit: "Box art",
  },
};
