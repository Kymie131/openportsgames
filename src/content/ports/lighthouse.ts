import type { Port } from "@/lib/ports/schema";

export const lighthouse: Port = {
  schema: "port",
  id: "lighthouse",
  title: "Lighthouse",
  game: "Banjo-Kazooie",
  developers: ["Rare"],
  publisher: "Nintendo",
  originalYear: 1998,
  genre: "platformer",
  openSource: true,
  portType: "decompilation",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "1.1.0", date: "2026-08-17" },
  sources: ["https://github.com/HarbourMasters/Lighthouse"],
  discord: "https://discord.gg/Cm2JuQvewN",
  website: "https://www.harbourmasters.org",
  license: { spdx: "CC0-1.0" },
  verified: true,
  verifiedAt: "2026-09-22",
  originalSystem: "Nintendo 64",
  features: [
    "ROM and hack extraction sped up by up to 95%",
    "Presets menu and romhack support",
    "Save editor and improved widescreen support",
  ],
  featuresEs: [
    "Extracción de ROM y hacks acelerada hasta un 95%",
    "Menú de ajustes predefinidos y soporte de romhacks",
    "Editor de partidas guardadas y mejor soporte panorámico",
  ],
  notes:
    "Native PC port of Banjo-Kazooie for the libultraship engine, by the HarbourMasters team. Requires the player's own legally obtained Banjo-Kazooie ROM; the launcher extracts the game data from it.",
  notesEs:
    "Port nativo para PC de Banjo-Kazooie para el motor libultraship, del equipo HarbourMasters. Requiere la ROM de Banjo-Kazooie obtenida legalmente por el jugador; el lanzador extrae los datos del juego a partir de ella.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Banjo-Kazooie%20(USA).png",
    alt: "Banjo-Kazooie (box art)",
    credit: "Box art",
  },
};
