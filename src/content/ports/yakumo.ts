import type { Port } from "@/lib/ports/schema";

export const yakumo: Port = {
  schema: "port",
  id: "yakumo",
  title: "Yakumo (Monster Hunter Portable 3rd HD)",
  game: "Monster Hunter Portable 3rd HD",
  developers: ["TeamGDB"],
  publisher: "Capcom",
  originalYear: 2010,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos", "android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/TeamGDB/Yakumo"],
  license: { spdx: "MIT" },
  verified: false,
  originalSystem: "PlayStation Portable",
  notes:
    "Static recompilation of Monster Hunter Portable 3rd HD (PSP) into a native executable, using Vulkan and SDL3. It builds for desktop and Android and requires a copy of the game.",
  notesEs:
    "Recompilación estática de Monster Hunter Portable 3rd HD (PSP) a un ejecutable nativo, con Vulkan y SDL3. Compila para escritorio y Android y requiere una copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation%20Portable/Named_Boxarts/Monster%20Hunter%20Portable%203rd%20(Japan,%20Korea).png",
    alt: "Monster Hunter Portable 3rd HD (cover)",
    credit: "Box art",
  },
};
