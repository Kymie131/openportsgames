import type { Port } from "@/lib/ports/schema";

export const meleeNative: Port = {
  schema: "port",
  id: "melee-native",
  title: "Melee Native",
  game: "Super Smash Bros. Melee",
  developers: ["HAL Laboratory"],
  publisher: "Nintendo",
  originalYear: 2001,
  genre: "fighting",
  openSource: true,
  portType: "decompilation",
  platforms: ["macos", "linux"],
  status: "alpha",
  release: { version: "0.1.0-linux.1", date: "2026-09-08" },
  sources: ["https://github.com/jonrosner/melee-native"],
  license: {
    spdx: "NOASSERTION",
    note: "no SPDX license file in the repository",
  },
  aiDisclosure: true,
  verified: true,
  verifiedAt: "2026-09-22",
  originalSystem: "GameCube",
  features: [
    "Native Apple Silicon (macOS) build",
    "Native Linux x86-64 build",
  ],
  notes:
    "Native port of Super Smash Bros. Melee built from the doldecomp research decompilation. First tagged release covers macOS Apple Silicon and Linux x86-64; Windows and Android builds are not published. Requires game files from a legally owned US NTSC 1.02 copy of the disc. The project, following its doldecomp origins, documents AI-assisted development in CONTRIBUTING.",
};