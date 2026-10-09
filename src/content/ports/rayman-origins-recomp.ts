import type { Port } from "@/lib/ports/schema";

export const raymanOriginsRecomp: Port = {
  schema: "port",
  id: "rayman-origins-recomp",
  title: "Rayman Origins Recompiled",
  game: "Rayman Origins",
  developers: ["BelmanteGu"],
  publisher: "Ubisoft",
  originalYear: 2011,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "macos", "android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/BelmanteGu/RaymanOriginsRecomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Xbox 360",
  notes:
    "Recompilation of Rayman Origins (Xbox 360) that builds for Windows, macOS and Android. It requires your own copy of the game.",
  notesEs:
    "Recompilación de Rayman Origins (Xbox 360) que compila para Windows, macOS y Android. Requiere tu propia copia del juego.",
};
