import type { Port } from "@/lib/ports/schema";

export const pikmin3Recomp: Port = {
  schema: "port",
  id: "pikmin-3-recomp",
  title: "Pikmin 3 (Native Port)",
  game: "Pikmin 3",
  developers: ["CrOwOleyy"],
  publisher: "Nintendo",
  originalYear: 2013,
  portType: "recompilation",
  genre: "strategy",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/CrOwOleyy/pikmin3"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-05",
  originalSystems: ["Wii U"],
  summary:
    "Pikmin 3 is a 2013 real-time strategy and puzzle video game developed and published by Nintendo for the Wii U. It is the sequel to Pikmin (2001) and Pikmin 2 (2004), and adds more player characters, Pikmin types and Off-TV Play.",
  summaryEs:
    "Pikmin 3 es un videojuego de estrategia en tiempo real y puzles de 2013 desarrollado y publicado por Nintendo para Wii U. Es la secuela de Pikmin (2001) y Pikmin 2 (2004), y añade más personajes, tipos de Pikmin y Off-TV Play.",
  notes:
    "Static recompilation of the Wii U game to native Windows x86-64 with Vulkan. The game is playable from the beginning (3D rendering, TV and GamePad screens, sound, touch, keyboard/controller and saving), but cutscene videos are skipped and it has not been played through to the end. Only the European base game with update v96 is supported. setup.bat builds everything from your own decrypted dump; no game files are included.",
  notesEs:
    "Recompilación estática del juego de Wii U a Windows x86-64 nativo con Vulkan. Se puede jugar desde el principio (render 3D, pantallas de TV y GamePad, sonido, táctil, teclado/mando y guardado), pero los vídeos de las cinemáticas se omiten y no se ha jugado hasta el final. Solo se admite la versión europea con la actualización v96. setup.bat compila todo a partir de tu propio volcado descifrado; no incluye archivos del juego.",
  requirements: {
    minimum:
      "Windows 10/11 64-bit, a Vulkan 1.1 GPU, Visual Studio 2022, the Vulkan SDK, Python 3.9+ and about 15 GB free",
  },
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/5/53/Pikmin_3_box_artwork.png",
    alt: "Pikmin 3 (box art)",
    credit: "Wikipedia",
  },
};
