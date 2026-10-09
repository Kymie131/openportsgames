import type { Port } from "@/lib/ports/schema";

export const rumbleRosesXxRecomp: Port = {
  schema: "port",
  id: "rumble-roses-xx-recomp",
  title: "Rumble Roses XX Recompiled",
  game: "Rumble Roses XX",
  developers: ["Revan67"],
  publisher: "Konami",
  originalYear: 2006,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Revan67/RumbleRosesXX-Recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Xbox 360",
  notes:
    "Recompilation of Rumble Roses XX (Xbox 360) for Windows. It needs the original game and does not bundle any content.",
  notesEs:
    "Recompilación de Rumble Roses XX (Xbox 360) para Windows. Necesita el juego original y no incluye ningún contenido.",
};
