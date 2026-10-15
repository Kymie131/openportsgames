import type { Port } from "@/lib/ports/schema";

export const ghostship: Port = {
  schema: "port",
  id: "ghostship",
  title: "Ghostship",
  game: "Super Mario 64",
  developers: ["HarbourMasters"],
  publisher: "Nintendo",
  originalYear: 1996,
  portType: "decompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos", "android", "ios", "switch"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://www.harbourmasters.org/game/ghostship"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Nintendo 64",
  notes:
    "Native port of Super Mario 64 from the decompilation, by the HarbourMasters team. Uses the game's data from your own legally obtained ROM. Multiplatform, including Android, iOS and Switch.",
  notesEs:
    "Port nativo de Super Mario 64 a partir de la decompilación, del equipo HarbourMasters. Usa los datos del juego de tu propia ROM obtenida legalmente. Multiplataforma, incluidos Android, iOS y Switch.",
  cover: {
    src: "https://raw.githubusercontent.com/HarbourMasters/Ghostship/refs/heads/develop/nx-logo.jpg",
    alt: "Super Mario 64 (cover)",
    credit: "SteamGridDB",
  },
};
