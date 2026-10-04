import type { Port } from "@/lib/ports/schema";

export const islePortable: Port = {
  schema: "port",
  id: "isle-portable",
  title: "Isle Portable",
  game: "LEGO Island",
  developers: ["isle decomp community"],
  publisher: "Mindscape",
  originalYear: 1997,
  genre: "action-adventure",
  openSource: true,
  portType: "source-port",
  platforms: ["windows", "linux", "macos", "android"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/isledecomp/isle-portable"],
  license: { spdx: "LGPL-3.0" },
  verified: false,
  originalSystem: "Microsoft Windows",
  features: ["Cross-platform desktop builds", "Android build", "SDL2 backends"],
  featuresEs: ["Builds de escritorio multiplataforma", "Build para Android", "Backends SDL2"],
  notes:
    "Source-based reimplementation of LEGO Island. The only GitHub release is a rolling continuous build rather than a numbered version.",
  notesEs:
    "Reimplementación basada en código fuente de LEGO Island. La única release de GitHub es una build continua y no una versión numerada.",
};
