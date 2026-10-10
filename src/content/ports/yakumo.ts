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
    "Static recompilation of Monster Hunter Portable 3rd HD (PSP) into a native executable, using Vulkan and SDL3. It builds for desktop and Android and requires your own copy of the game.",
  notesEs:
    "Recompilación estática de Monster Hunter Portable 3rd HD (PSP) a un ejecutable nativo, con Vulkan y SDL3. Compila para escritorio y Android y requiere tu propia copia del juego.",
};
