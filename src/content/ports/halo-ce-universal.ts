import type { Port } from "@/lib/ports/schema";

export const haloCeUniversal: Port = {
  schema: "port",
  id: "halo-ce-universal",
  title: "Halo: Combat Evolved Universal",
  game: "Halo: Combat Evolved",
  developers: ["cybersecurity"],
  publisher: "Microsoft Game Studios",
  originalYear: 2001,
  portType: "decompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/cybersecurity/halo-ce-universal"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Xbox",
  notes:
    "Decompilation-based native port of Halo: Combat Evolved (Xbox). The player supplies their own legally obtained disc image; the repository ships no game content.",
  notesEs:
    "Port nativo basado en decompilación de Halo: Combat Evolved (Xbox). El jugador aporta su propio material obtenido legalmente (disc image); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Microsoft%20-%20Xbox/Named_Boxarts/Halo%20-%20Combat%20Evolved%20(USA).png",
    alt: "Halo: Combat Evolved (box art)",
    credit: "Box art",
  },
};
