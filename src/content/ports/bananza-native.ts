import type { Port } from "@/lib/ports/schema";

export const bananzaNative: Port = {
  schema: "port",
  id: "bananza-native",
  title: "BananzaNative (Hookshot fork)",
  kind: "tool",
  game: "Donkey Kong Bananza",
  developers: ["CrownParkComputing"],
  publisher: "Nintendo",
  originalYear: 2025,
  portType: "runtime-port",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["linux"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/CrownParkComputing/BananzaNative"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  wip: true,
  addedAt: "2026-11-17",
  originalSystems: ["Nintendo Switch 2"],
  summary:
    "BananzaNative is a Hookshot fork that runs Donkey Kong Bananza and Mario Kart World (Nintendo Switch 2) natively on x86-64 Linux. It tracks upstream Hookshot and ships no game files.",
  summaryEs:
    "BananzaNative es un fork de Hookshot que ejecuta Donkey Kong Bananza y Mario Kart World (Nintendo Switch 2) de forma nativa en Linux x86-64. Sigue al Hookshot original y no incluye archivos del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/0/01/Donkey_Kong_Bananza_updated_box_art.png",
    alt: "Donkey Kong Bananza (box art)",
    credit: "Wikipedia",
  },
  notes:
    "Hookshot fork for Donkey Kong Bananza and Mario Kart World on Linux, with upstream tracking. No game files are included.",
  notesEs:
    "Fork de Hookshot para Donkey Kong Bananza y Mario Kart World en Linux, con seguimiento del proyecto original. No incluye archivos del juego.",
};
