import type { Port } from "@/lib/ports/schema";

export const pvzFusionAndroid: Port = {
  schema: "port",
  id: "pvz-fusion-android",
  title: "Plants vs. Zombies Fusion (Android)",
  game: "Plants vs. Zombies",
  developers: ["Teyliu"],
  publisher: "PopCap Games",
  originalYear: 2009,
  portType: "runtime-port",
  genre: "puzzle",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Teyliu/PVZF-Translation"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Microsoft Windows",
  notes:
    "Android version of Plants vs. Zombies Fusion, a fan mod of the original Plants vs. Zombies. It needs the original game files.",
  notesEs:
    "Versión para Android de Plants vs. Zombies Fusion, un mod hecho por fans del Plants vs. Zombies original. Necesita los archivos del juego original.",
};
