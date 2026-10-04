import type { Port } from "@/lib/ports/schema";

export const zelda64Recomp: Port = {
  schema: "port",
  id: "zelda64-recomp",
  title: "Zelda 64: Recompiled",
  game: "The Legend of Zelda: Majora's Mask",
  developers: ["Zelda64Recomp contributors"],
  publisher: "Nintendo",
  originalYear: 2000,
  genre: "action-adventure",
  openSource: true,
  portType: "recompilation",
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "1.2.2", date: "2025-08-27" },
  sources: ["https://github.com/Zelda64Recomp/Zelda64Recomp"],
  discord: "https://discord.gg/AWZThJ4dPf",
  license: { spdx: "GPL-3.0" },
  verified: true,
  verifiedAt: "2026-10-01",
  originalSystem: "Nintendo 64",
  features: [
    "Static recompilation of the original game code into a native port",
    "Widescreen and ultrawide support",
    "High framerate support",
    "Mod support",
    "Gyro aim",
    "Autosaving",
    "Instant load times",
    "Linux and Steam Deck builds, plus a Flatpak",
  ],
  featuresEs: [
    "Recompilación estática del código del juego original a un port nativo",
    "Soporte panorámico y ultrapanorámico",
    "Soporte de framerate alto",
    "Soporte de mods",
    "Apuntado con giroscopio",
    "Guardado automático",
    "Tiempos de carga instantáneos",
    "Builds para Linux y Steam Deck, más un Flatpak",
  ],
  requirements: {
    minimum:
      "A GPU supporting Direct3D 12.0 (Shader Model 6), Vulkan 1.2, or Metal Argument Buffers Tier 2",
  },
  notes:
    "Built with N64: Recompiled and rendered through RT64. The releases ship no game assets: a legally obtained copy of Majora's Mask is required to build or run it.",
  notesEs:
    "Construido con N64: Recompiled y renderizado mediante RT64. Las releases no incluyen recursos del juego: se requiere una copia de Majora's Mask obtenida legalmente para compilarlo o ejecutarlo.",
};
