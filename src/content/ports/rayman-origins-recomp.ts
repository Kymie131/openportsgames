import type { Port } from "@/lib/ports/schema";

export const raymanOriginsRecomp: Port = {
  schema: "port",
  id: "rayman-origins-recomp",
  title: "Rayman Origins Recompiled",
  game: "Rayman Origins",
  developers: ["XDanfr"],
  publisher: "Ubisoft",
  originalYear: 2011,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["switch"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/XDanfr/RaymanOriginsRecomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Xbox 360",
  notes:
    "Static recompilation of Rayman Origins (Xbox 360) for Nintendo Switch, built with XenonRecomp. It requires the game itself.",
  notesEs:
    "Recompilación estática de Rayman Origins (Xbox 360) para Nintendo Switch, con XenonRecomp. Requiere el propio juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/7/7f/Rayman_Origins_Box_Art.jpg",
    alt: "Rayman Origins (box art)",
    credit: "Wikipedia",
  },
};
