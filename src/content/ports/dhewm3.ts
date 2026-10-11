import type { Port } from "@/lib/ports/schema";

export const dhewm3: Port = {
  schema: "port",
  id: "dhewm3",
  title: "dhewm3",
  game: "Doom 3",
  developers: ["id Software"],
  publisher: "Activision",
  originalYear: 2004,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "1.5.5", date: "2026-06-08" },
  sources: ["https://github.com/dhewm/dhewm3"],
  website: "https://dhewm3.org/",
  license: { spdx: "GPL-3.0" },
  verified: true,
  verifiedAt: "2026-09-25",
  screenshots: [
    {
      src: "https://dhewm3.org/dhewm3-1.jpg",
      alt: "Doom 3 rendered in high resolution with widescreen support in dhewm3",
      credit: "dhewm3 project",
    },
  ],
  notes:
    "Source port of Doom 3 that keeps the original gameplay with bugfixes, widescreen support, 64-bit builds, EFX sound, mod-independent settings and gamepad support. Requires the original game data.",
  notesEs:
    "Port de código fuente de Doom 3 que conserva la jugabilidad original con correcciones, soporte panorámico, builds de 64 bits, sonido EFX, ajustes independientes de los mods y soporte de mando. Requiere los datos del juego original.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/4/4e/Doom3box.jpg",
    alt: "Doom 3 (box art)",
    credit: "Wikipedia",
  },
};
