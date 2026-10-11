import type { Port } from "@/lib/ports/schema";

export const spaghettiKart: Port = {
  schema: "port",
  id: "spaghettikart",
  title: "SpaghettiKart",
  game: "Mario Kart 64",
  developers: ["Nintendo EAD"],
  publisher: "Nintendo",
  originalYear: 1996,
  genre: "racing",
  openSource: true,
  portType: "decompilation",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "1.0.0", date: "2026-02-25" },
  sources: ["https://github.com/HarbourMasters/SpaghettiKart"],
  website: "https://harbourmasters.github.io/SpaghettiKart/",
  license: {
    spdx: "NOASSERTION",
    note: "no SPDX license file in the repository",
  },
  verified: true,
  verifiedAt: "2026-09-22",
  originalSystem: "Nintendo 64",
  features: [
    "Custom track system with new render layers and finish lines",
    "Frame interpolation and up to 400% internal resolution",
    "New audio driver and macOS universal builds",
  ],
  featuresEs: [
    "Sistema de pistas personalizadas con nuevas capas de render y líneas de meta",
    "Interpolación de frames y hasta 400% de resolución interna",
    "Nuevo controlador de audio y builds universales para macOS",
  ],
  notes:
    "Native port of Mario Kart 64 from the decompilation, by the HarbourMasters team. Requires a legally obtained North American or European Mario Kart 64 ROM; the game's data is extracted from the player's own copy.",
  notesEs:
    "Port nativo de Mario Kart 64 a partir de la decompilación, del equipo HarbourMasters. Requiere una ROM norteamericana o europea de Mario Kart 64 obtenida legalmente; los datos del juego se extraen de la copia del propio jugador.",
  screenshots: [
    {
      src: "https://raw.githubusercontent.com/HarbourMasters/SpaghettiKart/main/docs/spaghettigithublight.png",
      alt: "SpaghettiKart",
      credit: "HarbourMasters",
    },
  ],
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Mario%20Kart%2064%20(Europe)%20(Rev%201).png",
    alt: "Mario Kart 64 (box art)",
    credit: "Box art",
  },
};
