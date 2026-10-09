import type { Port } from "@/lib/ports/schema";

export const infiniteUndiscoveryRecomp: Port = {
  schema: "port",
  id: "infinite-undiscovery-recomp",
  title: "Infinite Undiscovery Recompiled",
  game: "Infinite Undiscovery",
  developers: ["doc-haz"],
  publisher: "Square Enix",
  originalYear: 2008,
  portType: "recompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/doc-haz/infinite-undiscovery-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Xbox 360",
  notes:
    "Recompilation of Infinite Undiscovery (Xbox 360) to a native Windows executable. It does not include the game.",
  notesEs:
    "Recompilación de Infinite Undiscovery (Xbox 360) a un ejecutable nativo para Windows. No incluye el juego.",
};
