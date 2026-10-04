import type { Port } from "@/lib/ports/schema";

export const librelancer: Port = {
  schema: "port",
  id: "librelancer",
  title: "Librelancer",
  game: "Freelancer",
  developers: ["Librelancer Contributors"],
  publisher: "Microsoft",
  originalYear: 2003,
  genre: "open-world",
  openSource: true,
  portType: "reimplementation",
  platforms: ["windows"],
  status: "beta",
  release: { version: "2025.11", date: "2025-11-07" },
  sources: ["https://github.com/Librelancer/Librelancer"],
  discord: "https://discord.gg/QW2vzxx",
  website: "https://librelancer.net",
  license: {
    spdx: "MIT",
    note: "MIT per the LICENSE file; the GitHub license field reports NOASSERTION",
  },
  verified: true,
  verifiedAt: "2026-10-01",
  originalSystem: "Microsoft Windows",
  features: ["Reimplementation of the Freelancer engine", "Cross-platform C++ codebase"],
  featuresEs: ["Reimplementación del motor de Freelancer", "Base de código C++ multiplataforma"],
  notes:
    "Engine reimplementation for Freelancer. The repository ships an MIT LICENSE file even though the GitHub license field reports NOASSERTION.",
  notesEs:
    "Reimplementación del motor de Freelancer. El repositorio incluye un archivo LICENSE MIT aunque el campo de licencia de GitHub informa NOASSERTION.",
};
