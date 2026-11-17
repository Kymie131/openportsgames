import type { Port } from "@/lib/ports/schema";

export const platformShooterPsp: Port = {
  schema: "port",
  id: "platform-shooter-psp",
  title: "Platform Shooter (PSP)",
  game: "Platform Shooter",
  developers: ["jmgamer1199"],
  publisher: "jmgamer1199",
  originalYear: 2026,
  portType: "reimplementation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "open",
  category: "homebrew",
  platforms: ["psp"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/jmgamer1199/platform-shooter"],
  license: { spdx: "NOASSERTION", note: "license not declared in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation Portable"],
  summary: "Platform Shooter (PSP) is a 2026 homebrew platform game for the PlayStation Portable, developed by jmgamer1199.",
  summaryEs: "Platform Shooter (PSP) es un juego de plataformas homebrew de 2026 para PlayStation Portable, desarrollado por jmgamer1199.",
  cover: {
    src: "https://openportsgames.com/covers/generated/platform-shooter.svg",
    alt: "Platform Shooter (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "Platform Shooter is a native PSP homebrew platformer with mod packs for textures, sounds, levels and rules. It runs on PSP-1000 to 3000 and in PPSSPP.",
  notesEs:
    "Platform Shooter es un plataformas homebrew nativo para PSP con paquetes de mods de texturas, sonidos, niveles y reglas. Funciona en PSP y PPSSPP.",
};
