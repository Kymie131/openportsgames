import type { Port } from "@/lib/ports/schema";

export const openEnroth: Port = {
  schema: "port",
  id: "open-enroth",
  title: "OpenEnroth",
  game: "Might and Magic VI-VIII",
  developers: ["OpenEnroth Team"],
  publisher: "New World Computing",
  originalYear: 1998,
  genre: "rpg",
  openSource: true,
  portType: "source-port",
  platforms: ["windows", "linux", "macos", "android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/OpenEnroth/OpenEnroth"],
  discord: "https://discord.gg/jRCyPtq",
  license: { spdx: "LGPL-3.0" },
  verified: false,
  originalSystems: ["Windows"],
  features: [
    "Unified engine across several Might and Magic titles",
    "Android build",
    "Modern rendering and input",
  ],
  featuresEs: [
    "Motor unificado para varios títulos de Might and Magic",
    "Build para Android",
    "Renderizado e entrada modernos",
  ],
  summary: "Might and Magic is a series of role-playing video games in the science fantasy genre developed by New World Computing, which in 1996 became a subsidiary of The 3DO Company. The original Might and Magic series ended with the closure of the 3DO Company. The rights to the Might and Magic name were purchased for US$1.3 million by Ubisoft, which rebooted the franchise with a new series with no apparent connection to the previous continuity, starting with the games Heroes of Might and Magic V and Dark Messiah of Might and Magic.",
  summaryEs: "Might and Magic (MM) es una serie de videojuegos de rol de la empresa New World Computing, que en 1996 pasó a ser una subsidiaria de The 3DO Company. El productor de la serie fue Jon Van Caneghem.",
  cover: {
    src: "https://openportsgames.com/covers/generated/might-and-magic-vi-viii.svg",
    alt: "Might and Magic VI-VIII (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "Cross-platform engine covering several Might and Magic installments. The single GitHub release is a prerelease, so no stable version is recorded.",
  notesEs:
    "Motor multiplataforma que cubre varias entregas de Might and Magic. La única release de GitHub es preliminar, así que no se registra versión estable.",
  screenshots: [
    {
      src: "https://user-images.githubusercontent.com/24377109/79051217-491a7800-7c2f-11ea-85c7-f9120b7d79dd.png",
      alt: "screenshot_main",
      credit: "OpenEnroth",
    },
  ],
};
