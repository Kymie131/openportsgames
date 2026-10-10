import type { Port } from "@/lib/ports/schema";

export const daytonaUsaRecomp: Port = {
  schema: "port",
  id: "daytona-usa-recomp",
  title: "Daytona USA Recompiled",
  game: "Daytona USA",
  developers: ["Subarasheese"],
  publisher: "Sega",
  originalYear: 1993,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Subarasheese/daytona-xbla-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Xbox 360",
  notes:
    "Daytona USA (Xbox 360 / XBLA, 2011) recompiled with ReXGlue. The README lists Windows and Linux builds.",
  notesEs:
    "Recompilación de Daytona USA (Xbox 360 / XBLA, 2011) con ReXGlue. El README indica builds para Windows y Linux.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/c/c2/Daytona_USA_arcade_flyer.jpg",
    alt: "Daytona USA (box art)",
    credit: "Wikipedia",
  },
};
