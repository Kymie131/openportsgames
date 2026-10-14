import type { Port } from "@/lib/ports/schema";

export const haloCeWeb: Port = {
  schema: "port",
  id: "halo-ce-web",
  title: "Halo CE Web",
  game: "Halo: Combat Evolved",
  developers: ["fqlx"],
  publisher: "Microsoft Game Studios",
  originalYear: 2001,
  portType: "decompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["web"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/fqlx/halo-ce-universal"],
  website: "https://fqlx.github.io/halo-ce-universal/",
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Xbox",
  notes:
    "The Halo: Combat Evolved (Xbox) decompilation compiled to WebAssembly and drawn with WebGL 2, playable in the browser. The menu and the 13 multiplayer maps are rebuilt through a clean-room pipeline that regenerates or replaces textures, sounds and fonts, so no retail data is distributed. The campaign and multiplayer maps can be loaded from your own legally obtained Xbox disc image, and multiplayer works over invite links.",
  notesEs:
    "La decompilación de Halo: Combat Evolved (Xbox) compilada a WebAssembly y dibujada con WebGL 2, jugable en el navegador. El menú y los 13 mapas multijugador se reconstruyen con un proceso de sala limpia que regenera o reemplaza texturas, sonidos y fuentes, por lo que no se distribuye material del juego original. La campaña y los mapas se pueden cargar desde tu propia imagen de disco de Xbox obtenida legalmente, y el multijugador funciona con enlaces de invitación.",
  requirements: {
    minimum:
      "Desktop Chrome or Edge with WebAssembly threads, WebGL 2 and cross-origin isolation (SharedArrayBuffer).",
  },
  cover: {
    src: "https://thumbnails.libretro.com/Microsoft%20-%20Xbox/Named_Boxarts/Halo%20-%20Combat%20Evolved%20(USA).png",
    alt: "Halo: Combat Evolved (box art)",
    credit: "Box art",
  },
};
