import type { Port } from "@/lib/ports/schema";

export const conan2007Recomp: Port = {
  schema: "port",
  id: "conan-2007-recomp",
  title: "Conan (2007) Recompiled",
  game: "Conan",
  developers: ["crazyriddler"],
  publisher: "THQ",
  originalYear: 2007,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/crazyriddler/Conan2007Recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Xbox 360",
  notes:
    "Native DirectX 12 rendering. Controller only. Up to 120 FPS, because physics break above that.",
  notesEs:
    "Render nativo en DirectX 12. Solo mando. Hasta 120 FPS, porque por encima se rompe la física.",
  aiDisclosure: {
    level: "assisted",
    source: "https://github.com/crazyriddler/Conan2007Recomp#readme",
    quote: "I've relied on Claude to carry out this project",
  },
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/d/d7/Conan_%282004_video_game%29.jpg",
    alt: "Conan (box art)",
    credit: "Wikipedia",
  },
};
