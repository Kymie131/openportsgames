import type { Port } from "@/lib/ports/schema";

export const drMario64RecompPlus: Port = {
  schema: "port",
  id: "drmario64-recomp-plus",
  title: "Dr. Mario 64 Recomp",
  game: "Dr. Mario 64",
  developers: ["theboy181"],
  publisher: "Nintendo",
  originalYear: 2001,
  portType: "recompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/theboy181/drmario64_recomp_plus"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Nintendo 64",
  notes:
    "Native recompilation of Dr. Mario 64 with extra quality-of-life additions. The player supplies their own legally obtained ROM; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Dr. Mario 64 con mejoras de calidad de vida. El jugador aporta su propia ROM obtenida legalmente; el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Dr.%20Mario%2064%20(USA).png",
    alt: "Dr. Mario 64 (box art)",
    credit: "Box art",
  },
};
