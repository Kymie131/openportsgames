import type { Port } from "@/lib/ports/schema";

export const postVoidMobile: Port = {
  schema: "port",
  id: "post-void-mobile",
  title: "Post Void (Android)",
  game: "Post Void",
  developers: ["SanGraphic"],
  publisher: "YCJY Games",
  originalYear: 2020,
  portType: "runtime-port",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/SanGraphic/PostVoidMobile"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Microsoft Windows",
  notes:
    "Native ARM64 port of Post Void for Android, aiming to match the latest PC build. It needs your own copy of the game.",
  notesEs:
    "Port nativo ARM64 de Post Void para Android, que busca igualar la última build de PC. Necesita tu propia copia del juego.",
};
