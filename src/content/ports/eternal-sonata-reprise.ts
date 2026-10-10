import type { Port } from "@/lib/ports/schema";

export const eternalSonataReprise: Port = {
  schema: "port",
  id: "eternal-sonata-reprise",
  title: "Eternal Sonata: Reprise",
  game: "Eternal Sonata",
  developers: ["birabittoh"],
  publisher: "Bandai Namco",
  originalYear: 2007,
  portType: "recompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos", "android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/birabittoh/EternalSonataReprise"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Xbox 360",
  notes:
    "Static recompilation of Eternal Sonata (Xbox 360) with ReXGlue. It converts the PPC executable to native x86_64 and wraps it in a small host runtime with overlays and hooks for mods; builds for Windows, Linux, macOS and Android.",
  notesEs:
    "Recompilación estática de Eternal Sonata (Xbox 360) con ReXGlue. Convierte el ejecutable PPC en código x86_64 nativo y lo envuelve en un runtime propio con overlays y hooks para mods; builds para Windows, Linux, macOS y Android.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/a/aa/Eternal_Sonata.jpg",
    alt: "Eternal Sonata (box art)",
    credit: "Wikipedia",
  },
};
