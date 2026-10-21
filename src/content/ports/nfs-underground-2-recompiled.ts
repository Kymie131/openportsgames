import type { Port } from "@/lib/ports/schema";

export const nfsUnderground2Recompiled: Port = {
  schema: "port",
  id: "nfs-underground-2-recompiled",
  title: "Need for Speed Underground 2 Recompiled",
  game: "Need for Speed: Underground 2",
  developers: ["codepdbh"],
  publisher: "Electronic Arts",
  originalYear: 2004,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/codepdbh/nfsu2-recompiled"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Windows"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/1/10/Nfsu2-win-cover.jpg",
    alt: "Need for Speed: Underground 2 (box art)",
    credit: "Wikipedia",
  },
  notes:
    "Static recompilation of Need for Speed Underground 2's PC build (SPEED2.EXE x86-32 to C) with pcrecomp, with Android APKs (arm64-v8a and armeabi-v7a, Android 10+ / Vulkan 1.1+). It ships no game code or data: you supply your own copy. Latest release: v0.14.6.",
  notesEs:
    "Recompilación estática de la versión de PC de Need for Speed Underground 2 (SPEED2.EXE x86-32 a C) con pcrecomp, con APKs para Android (arm64-v8a y armeabi-v7a, Android 10+ / Vulkan 1.1+). No incluye código ni datos del juego: aportas tu propia copia. Última release: v0.14.6.",
};
