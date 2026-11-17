import type { Port } from "@/lib/ports/schema";

export const horizonNx2: Port = {
  schema: "port",
  id: "horizon-nx2",
  title: "horizon-nx2",
  kind: "tool",
  game: "Donkey Kong Bananza",
  developers: ["joaoalvess"],
  publisher: "Nintendo",
  originalYear: 2025,
  portType: "runtime-port",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/joaoalvess/horizon-nx2"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  wip: true,
  addedAt: "2026-11-17",
  originalSystems: ["Nintendo Switch 2"],
  summary:
    "horizon-nx2 is an Apple silicon runtime, forked from nxnative, for running Mario Kart World, Donkey Kong Bananza and Pokémon Pokopia natively on macOS. It ships no game files.",
  summaryEs:
    "horizon-nx2 es un runtime para Apple silicon, derivado de nxnative, que ejecuta Mario Kart World, Donkey Kong Bananza y Pokémon Pokopia de forma nativa en macOS. No incluye archivos del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/0/01/Donkey_Kong_Bananza_updated_box_art.png",
    alt: "Donkey Kong Bananza (box art)",
    credit: "Wikipedia",
  },
  notes:
    "Apple silicon runtime for Mario Kart World, Donkey Kong Bananza and Pokémon Pokopia, forked from nxnative. No game files are included.",
  notesEs:
    "Runtime para Apple silicon de Mario Kart World, Donkey Kong Bananza y Pokémon Pokopia, derivado de nxnative. No incluye archivos del juego.",
};
