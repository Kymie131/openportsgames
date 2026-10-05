import type { Port } from "@/lib/ports/schema";

export const banjoKazooieRecomp: Port = {
  schema: "port",
  id: "banjo-kazooie-recomp",
  title: "Banjo-Kazooie Recompiled",
  game: "Banjo-Kazooie",
  developers: ["Rare"],
  publisher: "Nintendo",
  originalYear: 1998,
  genre: "platformer",
  openSource: true,
  portType: "recompilation",
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "1.0.2", date: "2026-07-31" },
  sources: ["https://github.com/BanjoRecomp/BanjoRecomp"],
  discord: "https://discord.gg/AWZThJ4dPf",
  license: { spdx: "GPL-3.0" },
  verified: false,
  originalSystem: "Nintendo 64",
  features: [
    "Widescreen and ultrawide support",
    "Mod support",
    "Native Linux binary and Flatpak with documented Steam Deck support",
  ],
  featuresEs: [
    "Soporte panorámico y ultrapanorámico",
    "Soporte de mods",
    "Binario nativo para Linux y Flatpak con soporte documentado para Steam Deck",
  ],
  requirements: {
    minimum: "Windows, Linux or macOS 13.0+ on Apple Silicon or a 7th generation Intel CPU",
  },
  notes:
    "Native recompilation of Banjo-Kazooie produced with N64Recomp. The player loads their own legally obtained N64 ROM; the port recompiles the game code instead of emulating it.",
  notesEs:
    "Recompilación nativa de Banjo-Kazooie realizada con N64Recomp. El jugador carga su propia ROM de N64 obtenida legalmente; el port recompila el código del juego en lugar de emularlo.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Banjo-Kazooie%20(USA).png",
    alt: "Banjo-Kazooie (box art)",
    credit: "Box art",
  },
};
