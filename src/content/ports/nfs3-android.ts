import type { Port } from "@/lib/ports/schema";

export const nfs3Android: Port = {
  schema: "port",
  id: "nfs3-android",
  title: "Need for Speed III: Hot Pursuit (Android)",
  game: "Need for Speed III: Hot Pursuit",
  developers: ["ZloiKILLER"],
  publisher: "Electronic Arts",
  originalYear: 1998,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/ZloiKILLER/nfs3recompiled-android"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Microsoft Windows",
  notes:
    "Recompilation of Need for Speed III: Hot Pursuit that runs on Android. It needs your own copy of the game.",
  notesEs:
    "Recompilación de Need for Speed III: Hot Pursuit que funciona en Android. Necesita tu propia copia del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/a/a6/NFS_III_Hot_Pursuit_%28PC%2C_US%29_cover_art.jpg",
    alt: "Need for Speed III: Hot Pursuit (box art)",
    credit: "Wikipedia",
  },
};
