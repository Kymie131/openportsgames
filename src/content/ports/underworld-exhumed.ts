import type { Port } from "@/lib/ports/schema";

export const UnderworldExhumed: Port = {
  schema: "port",
  kind: "tool",
  id: "underworld-exhumed",
  title: "Underworld Exhumed",
  game: "Ultima Underworld",
  developers: ["abedegno"],
  publisher: "Origin Systems",
  originalYear: 1992,
  portType: "source-port",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/abedegno/underworld-exhumed"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["MS-DOS"],
  summary: "Underworld Exhumed is a byte-matching source reconstruction and native port of Ultima Underworld I and II, the 1992 and 1993 RPGs by Origin Systems.",
  summaryEs: "Underworld Exhumed es una reconstrucción del código fuente y un port nativo de Ultima Underworld I y II, los RPG de 1992 y 1993 de Origin Systems.",  downloads: [
    {
      label: "macOS",
      url: "https://github.com/abedegno/underworld-exhumed/releases/download/uw1-v1.0.2/UW1-v1.0.2-macos.zip",
      size: "4.9 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/abedegno/underworld-exhumed/releases/download/uw1-v1.0.2/UW1-v1.0.2-windows-x86_64.zip",
      size: "3.6 MB",
    },
    {
      label: "Linux x64",
      url: "https://github.com/abedegno/underworld-exhumed/releases/download/uw1-v1.0.2/UW1-v1.0.2-linux-x86_64.AppImage",
      size: "3.2 MB",
    },
    {
      label: "Linux x64",
      url: "https://github.com/abedegno/underworld-exhumed/releases/download/uw1-v1.0.2/UW1-v1.0.2-linux-x86_64.tar.gz",
      size: "2.5 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/underworld-exhumed.svg",
    alt: "Underworld Exhumed (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "Underworld Exhumed: Ultima Underworld I and II as byte-matching source code and native ports for macOS, Windows and Linux.",
  notesEs:
    "Underworld Exhumed: Ultima Underworld I y II como código fuente byte a byte y ports nativos para macOS, Windows y Linux.",
};
