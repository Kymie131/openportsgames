import type { Port } from "@/lib/ports/schema";

export const starship: Port = {
  schema: "port",
  id: "starship",
  title: "Starship",
  game: "Star Fox 64",
  developers: ["Nintendo EAD"],
  publisher: "Nintendo",
  originalYear: 1997,
  genre: "shooter",
  openSource: true,
  portType: "decompilation",
  platforms: ["windows", "linux"],
  status: "alpha",
  release: { version: "2.0.0", date: "2025-05-25" },
  sources: ["https://github.com/HarbourMasters/Starship"],
  license: { spdx: "CC0-1.0" },
  verified: true,
  verifiedAt: "2026-09-22",
  originalSystem: "Nintendo 64",
  features: [
    "Built-in asset generation from US, JP and EU ROMs",
    "Event hook system for modding plus cheats",
    "5.1 surround sound support",
  ],
  featuresEs: [
    "Generación integrada de recursos desde ROM de EE. UU., JP y EU",
    "Sistema de hooks de eventos para modding y trucos",
    "Soporte de sonido envolvente 5.1",
  ],
  screenshots: [
    {
      src: "https://github.com/user-attachments/assets/196ce4ed-9277-4c7e-8f9b-414184cdfcd2",
      alt: "First-person cockpit view during flight in the Starship port of Star Fox 64",
      credit: "HarbourMasters",
    },
  ],
  notes:
    "Native PC port of Star Fox 64 from the decompilation, by the HarbourMasters team. Uses the game's data from a legally obtained North American, Japanese or European ROM; the launcher extracts the required assets from the user's own copy.",
  notesEs:
    "Port nativo para PC de Star Fox 64 a partir de la decompilación, del equipo HarbourMasters. Usa los datos del juego de una ROM norteamericana, japonesa o europea obtenida legalmente; el lanzador extrae los recursos necesarios de la copia del propio usuario.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Star%20Fox%2064%20(Japan).png",
    alt: "Star Fox 64 (box art)",
    credit: "Box art",
  },
};
