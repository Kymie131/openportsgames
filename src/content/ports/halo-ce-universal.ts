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
  platforms: ["windows", "linux", "android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/OpenCommunityEdition/OpenCE"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Xbox"],
  summary: "Halo: Combat Evolved is a 2001 first-person shooter game developed by Bungie and published by Microsoft Game Studios. The game was released on November 15, 2001 for the Xbox, with ports to Microsoft Windows and Mac OS X released in 2003. It is the first installment in the Halo franchise. Set in the 26th century, players assume the role of Master Chief, a cybernetically enhanced supersoldier.",
  summaryEs: "Halo: Combat Evolved, comúnmente conocido como Halo, Halo CE o Halo 1, es un videojuego de disparos en primera persona desarrollado por Bungie Studios y publicado por Microsoft Game Studios el 15 de noviembre de 2001, a manera de título debut de la videoconsola Xbox, y de la cual es considerado como su aplicación asesina. Es el primer juego de la franquicia Halo.",
  notes:
    "Decompilation-based native port of Halo: Combat Evolved (Xbox) for Windows, Linux and Android. The player supplies their own legally obtained Xbox disc image; the repository ships no game content. The Android build targets arm64 with OpenGL ES 3 and SDL3, needs Android 9 or later and plays best with a Bluetooth or USB gamepad; system-link multiplayer works across Windows, Linux and Android.",
  notesEs:
    "Port nativo basado en decompilación de Halo: Combat Evolved (Xbox) para Windows, Linux y Android. El jugador aporta su propia imagen de disco de Xbox obtenida legalmente; el repositorio no incluye contenido del juego. La build de Android es para arm64 con OpenGL ES 3 y SDL3, requiere Android 9 o superior y se juega mejor con un mando Bluetooth o USB; el multijugador por system link funciona entre Windows, Linux y Android.",
  cover: {
    src: "https://thumbnails.libretro.com/Microsoft%20-%20Xbox/Named_Boxarts/Halo%20-%20Combat%20Evolved%20(USA).png",
    alt: "Halo: Combat Evolved (box art)",
    credit: "Box art",
  },
};
