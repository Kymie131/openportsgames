import type { Port } from "@/lib/ports/schema";

export const ufo50Android: Port = {
  schema: "port",
  id: "ufo50-android",
  title: "UFO 50 (Android)",
  game: "UFO 50",
  developers: ["Skyline969"],
  publisher: "Mossmouth",
  originalYear: 2024,
  portType: "runtime-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Skyline969/UFO50AndroidUnofficial"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Microsoft Windows",
  notes:
    "Unofficial tool that builds an Android version of UFO 50. It requires the game itself to produce the data.",
  notesEs:
    "Herramienta no oficial que genera una versión para Android de UFO 50. Requiere el propio juego para producir los datos.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/a/a6/UFO_50_cover.png",
    alt: "UFO 50 (box art)",
    credit: "Wikipedia",
  },
};
