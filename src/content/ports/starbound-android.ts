import type { Port } from "@/lib/ports/schema";

export const starboundAndroid: Port = {
  schema: "port",
  id: "starbound-android",
  title: "OpenStarbound Mobile",
  game: "Starbound",
  developers: ["RohanBhattacharyya"],
  publisher: "Chucklefish",
  originalYear: 2016,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/RohanBhattacharyya/oSBM"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Microsoft Windows",
  notes:
    "OpenStarbound port to mobile devices, bringing the Starbound sandbox to Android. It needs your own copy of the game.",
  notesEs:
    "Port de OpenStarbound a dispositivos móviles, que lleva el sandbox Starbound a Android. Necesita tu propia copia del juego.",
};
