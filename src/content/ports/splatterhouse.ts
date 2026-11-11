import type { Port } from "@/lib/ports/schema";

export const Splatterhouse: Port = {
  schema: "port",
  id: "splatterhouse",
  title: "Splatterhouse",
  game: "Splatterhouse",
  developers: ["0c0de"],
  publisher: "Namco",
  originalYear: 1988,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "0.3", date: "2026-10-20" },
  sources: ["https://github.com/0c0de/splatterhouse-decomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  downloads: [
    {
      label: "splatterhouse-decomp-release",
      url: "https://github.com/0c0de/splatterhouse-decomp/releases/download/v0.3/splatterhouse-decomp-release.zip",
      size: "34.0 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/7/70/Splatterhouse_arcadeflyer.png",
    alt: "Splatterhouse (box art)",
    credit: "Wikipedia",
  },
  summary: "Splatterhouse is a 1988 beat 'em up video game developed and published by Namco for arcades. It was the first in a series of games released in home console and personal computer formats. This game would later spawn the parody Splatterhouse: Wanpaku Graffiti, the sequels Splatterhouse 2, Splatterhouse 3, and the 2010 remake Splatterhouse, with the classic games being added to Namco Museum since 2017.",
  summaryEs: "Splatterhouse es un videojuego de terror de Namco del género Beat 'em up.",
  notes: "Decompilation of Splatterhouse (Other).",
  notesEs: "Decompilación de Splatterhouse (Other).",
};
