import type { Port } from "@/lib/ports/schema";

export const wargusPort: Port = {
  schema: "port",
  id: "wargus",
  title: "Wargus",
  game: "Warcraft II",
  developers: ["Wargus contributors"],
  publisher: "Blizzard Entertainment",
  originalYear: 1995,
  genre: "strategy",
  openSource: true,
  portType: "source-port",
  platforms: ["windows"],
  status: "beta",
  release: { version: "3.3.2", date: "2022-08-10" },
  sources: ["https://github.com/wargus/wargus"],
  discord: "https://discord.gg/dQGxaw3QfB",
  license: { spdx: "GPL-2.0" },
  verified: true,
  verifiedAt: "2026-10-01",
  originalSystem: "MS-DOS",
  notes:
    "Engine reimplementation for Warcraft II, intended to be compatible with the retail data files.",
  notesEs:
    "Reimplementación del motor de Warcraft II, pensada para ser compatible con los archivos de datos comerciales.",
  cover: {
    src: "https://thumbnails.libretro.com/DOS/Named_Boxarts/Warcraft%20II%20-%20Tides%20of%20Darkness.png",
    alt: "Warcraft II (box art)",
    credit: "Box art",
  },
};
