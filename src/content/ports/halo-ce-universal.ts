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
  sources: ["https://github.com/cybersecurity/halo-ce-universal"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Xbox"],
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
