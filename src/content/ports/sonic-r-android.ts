import type { Port } from "@/lib/ports/schema";

export const sonicRAndroid: Port = {
  schema: "port",
  id: "sonic-r-android",
  title: "Sonic R (Android)",
  game: "Sonic R",
  developers: ["ZinexDa"],
  publisher: "Sega",
  originalYear: 1997,
  portType: "decompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/ZinexDa/sonic-r-android"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Sega Saturn",
  notes:
    "Native Android port of the Sonic R PC decompilation, with a GLES2 renderer, 60 FPS and touch controls. It requires your own PC game files and includes no retail assets.",
  notesEs:
    "Port nativo para Android de la decompilación de Sonic R de PC, con renderizador GLES2, 60 FPS y controles táctiles. Requiere tus propios archivos del juego de PC y no incluye recursos comerciales.",
  cover: {
    src: "https://thumbnails.libretro.com/Sega%20-%20Saturn/Named_Boxarts/Sonic%20R%20(Europe).png",
    alt: "Sonic R (box art)",
    credit: "Box art",
  },
};
