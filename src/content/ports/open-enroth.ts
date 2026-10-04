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
  originalSystem: "Microsoft Windows",
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
