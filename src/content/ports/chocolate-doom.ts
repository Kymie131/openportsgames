import type { Port } from "@/lib/ports/schema";

export const chocolateDoom: Port = {
  schema: "port",
  id: "chocolate-doom",
  title: "Chocolate Doom",
  game: "Doom",
  developers: ["id Software"],
  publisher: "id Software",
  originalYear: 1993,
  genre: "shooter",
  openSource: true,
  portType: "source-port",
  platforms: ["windows", "macos"],
  status: "stable",
  release: { version: "3.1.1", date: "2025-08-14" },
  sources: ["https://github.com/chocolate-doom/chocolate-doom"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  originalSystem: "MS-DOS",
  features: [
    "Option to enable or disable smooth pixel scaling",
    "Native OpenGL texture format for better performance",
    "Release bundles sibling ports for Heretic, Hexen and Strife",
    "macOS builds for both Intel and Apple Silicon",
  ],
  featuresEs: [
    "Opción para activar o desactivar el escalado suave de píxeles",
    "Formato de textura OpenGL nativo para mejor rendimiento",
    "Los paquetes de release incluyen ports hermanos para Heretic, Hexen y Strife",
    "Builds de macOS para Intel y Apple Silicon",
  ],
  screenshots: [
    {
      src: "https://www.chocolate-doom.org/wiki/images/thumb/b/b0/Chocolate_Windows_10.png/400px-Chocolate_Windows_10.png",
      alt: "Chocolate Doom running on modern Windows",
      credit: "Chocolate Doom Project",
    },
    {
      src: "https://www.chocolate-doom.org/wiki/images/thumb/a/a0/Chocolate_Doom_MacOSX.png/384px-Chocolate_Doom_MacOSX.png",
      alt: "Chocolate Doom running on macOS",
      credit: "Chocolate Doom Project",
    },
  ],
  notes:
    "Minimalist Doom source port that aims to stay faithful to vanilla Doom while running on modern systems. Published binaries cover Windows and macOS; other systems are built from source.",
  notesEs:
    "Port de código fuente minimalista de Doom que busca mantenerse fiel al Doom original sobre sistemas modernos. Los binarios publicados cubren Windows y macOS; el resto de sistemas se compilan desde el código.",
};
